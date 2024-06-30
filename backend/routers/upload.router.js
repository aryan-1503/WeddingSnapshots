import express from 'express';
import { ImageModel } from '../models/image.model.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const uploadRouter = express.Router();

// Obtain the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDirectory = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

uploadRouter.post('/', upload.array('images', 10), async (req, res) => {
    try {
        const imageDocs = req.files.map(file => ({
            name: file.originalname,
            img: {
                data: fs.readFileSync(file.path),
                contentType: file.mimetype
            }
        }));

        await ImageModel.insertMany(imageDocs);

        req.files.forEach(file => fs.unlinkSync(file.path));

        res.status(201).send({ message: 'Images uploaded successfully' });
    } catch (error) {
        console.error('Error uploading images:', error);
        res.status(500).send({ message: 'Error uploading images' });
    }
});

uploadRouter.get('/images', async (req, res) => {
    try {
        const images = await ImageModel.find({});
        res.contentType('json');
        res.send(images.map(image => ({
            name: image.name,
            img: `data:${image.img.contentType};base64,${image.img.data.toString('base64')}`
        })));
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving images' });
    }
});

export { uploadRouter };
