import express from "express";
import { ImageModel } from "../models/image.model.js";
import multer from "multer";
import * as path from "path";
import * as fs from "fs"; // Ensure this path is correct

const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
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

        res.status(201).send({message: 'Images uploaded successfully'});
    } catch (error) {
        res.status(500).send({message: 'Error uploading images'});
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
        res.status(500).send({message:'Error retrieving images'});
    }
});

export { uploadRouter };
