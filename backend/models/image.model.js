import {Schema} from "mongoose";
import mongoose from "mongoose";
const ImageSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    img: {
        data: Buffer,
        contentType: String
    }
})

const ImageModel = mongoose.model("Image", ImageSchema);

export { ImageModel };


