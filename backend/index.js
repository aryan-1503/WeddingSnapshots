import express from "express";
import { connectToDB } from "./utils/mongodb_connect.js";
import cors from "cors";
import { uploadRouter } from "./routers/upload.router.js";

console.log("Wedding Snapshots Backend started!");

const app = express();
connectToDB();

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://wedding-snapshots.vercel.app'
    ]
}));
app.use(express.json());

// Routers Middleware Setup
app.use("/api/upload", uploadRouter);

const PORT = process.env.PORT || 8000;

app.get("/",(req, res) => {
    res.send("HELLO WORLD");
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
