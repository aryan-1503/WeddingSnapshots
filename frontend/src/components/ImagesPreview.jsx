import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import "../styles/ImagesPreview.css"

const ImagesPreview = ({ images,setImages, setShowPreview }) => {
    const handleClose = () => {
        setShowPreview(false);
    }

    const handleRemove = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    }

    return (
        <div className="preview-wrapper">
            <div className="preview-container">
                <div className="close">
                    Preview
                    <button onClick={handleClose} style={{border: "none"}}><IoCloseOutline /></button>
                </div>
                <div className="images">
                    {images.map((image, index) => (
                        <div className="single-image" key={index}>
                            <img src={URL.createObjectURL(image)} alt={image.name} />
                            <button onClick={() => handleRemove(index)}>remove</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImagesPreview;
