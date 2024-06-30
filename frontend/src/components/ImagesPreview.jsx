import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import "../styles/ImagesPreview.css"
const ImagesPreview = ({ images,setShowPreview }) => {
    const handleClose = () => {
        setShowPreview(false)
    }
    return (
        <div className="preview-wrapper">
            <div className="preview-container">
                <div className="close">
                    Preview
                    <button onClick={handleClose} style={{border:"none"}}><IoCloseOutline /></button>
                </div>
                <div className="images">
                    {images.map((image,index) => (
                        <div className="single-image" key={index}>
                            <img src={image.source} alt={image.name} />
                            <p>by - {image.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ImagesPreview;