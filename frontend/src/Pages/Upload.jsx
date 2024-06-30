import React, {useState} from 'react';
import "../styles/Upload.css"
import { MdOutlineCameraAlt,MdOutlineFileUpload } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";
import ImagesPreview from "../components/ImagesPreview.jsx";
import DemoImage from "../groom-bride-images/jay-shreya.jpg"
const Upload = () => {
    const [showPreview,setShowPreview] = useState(false);
    const [images,setImages] = useState([
        {
            name: "aryan",
            source: DemoImage
        },
        {
            name: "aryan",
            source: DemoImage
        },
        {
            name: "aryan",
            source: DemoImage
        },
        {
            name: "aryan",
            source: DemoImage
        },
        {
            name: "aryan",
            source: DemoImage
        },
        {
            name: "aryan",
            source: DemoImage
        },
    ]);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("clicked submit")

    }

    const handleToggle = () => {
        console.log("clicked")
        setShowPreview(true)
    }
    return (
        <div className="upload-wrapper">
            <div className="upload-container">
                <div className="upload-title">
                    Upload Images
                    <hr />
                </div>
                <div className="upload-inputs">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="capture-image" className="file-label">
                            <div className="take-a-photo">
                                <div>
                                    Take a Photo
                                </div>
                                <div style={{ fontSize:"22px"}}>
                                    <MdOutlineCameraAlt />
                                </div>
                            </div>
                            <input
                                type="file"
                                capture
                                id="capture-image"
                                accept="image/*"
                                style={{ display: "none"}}
                            />
                            <hr/>
                        </label>
                        <label htmlFor="upload-images" className="file-label">
                            <div className="take-a-photo">
                                <div>
                                    Choose from library
                                </div>
                                <div>
                                    <MdOutlineFileUpload />
                                </div>
                            </div>

                            <input
                                type="file"
                                id="upload-images"
                                accept="image/*"
                                style={{ display: "none"}}
                            />
                            <hr/>
                        </label>
                        <button type="button" onClick={handleToggle} className="preview-btn">
                            <div style={{paddingTop:"0.2rem",paddingLeft:"0.6rem",paddingRight:"0.4rem"}}><IoImagesOutline /></div>
                            <div>Preview</div>
                        </button>
                        <button type="submit" className="upload-btn">Upload Images</button>
                    </form>
                    <div className="guidelines">
                        <div className="guideline-title">
                            Photo Guidelines
                            <hr />
                        </div>
                        <div className="guideline">
                            Photos should be high resolution, upload family photos in landscape orientation, and other photos in portrait orientation ,should be well-lit. Avoid taking photos of people eating or looking at their phones.
                        </div>
                    </div>

                    <div className="preview">
                        {showPreview &&
                            <ImagesPreview images={images} setShowPreview={setShowPreview} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upload;
