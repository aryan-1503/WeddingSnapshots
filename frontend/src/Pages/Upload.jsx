import React, { useState } from 'react';
import "../styles/Upload.css";
import { MdOutlineCameraAlt, MdOutlineFileUpload } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";
import ImagesPreview from "../components/ImagesPreview.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadedImages from "../components/UploadedImages.jsx";

const Upload = () => {
    const [showPreview, setShowPreview] = useState(false);
    const [showImages, setShowImages] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [images, setImages] = useState([]);
    const [loading,setLoading] =useState(false)
    const [fetching,setFetching] = useState(false)
    const handleFileChange = (event) => {
        setSelectedFiles([...event.target.files]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        selectedFiles.forEach(file => {
            formData.append('images', file);
        });

        try {
            setLoading(true)
            const response = await fetch('https://weddingsnapshots.onrender.com/api/upload', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Images uploaded successfully:', data);
                setSelectedFiles([]);
                toast.success("Image Uploaded!", {
                    position: "top-center"
                });
            } else {
                console.error('Error uploading images:', response.data.message);
                alert(response.message);
            }
        } catch (error) {
            console.error('Error uploading images:', error);
            alert(error);
        }finally {
            setLoading(false)
        }
    };

    const handleGetAllImages = async (e) => {
        e.preventDefault();
        try {
            setShowImages(true);
            setFetching(true)
            const response = await fetch('https://weddingsnapshots.onrender.com/api/upload/images');

            if (response.ok) {
                const data = await response.json();
                setImages(data);

            } else {
                console.error('Error fetching images:', response.message);
                alert(response.message);
            }
        } catch (error) {
            console.error('Error fetching images:', error);
            alert(error);
        }finally {
            setFetching(false)
        }
    };

    const handleToggle = () => {
        setShowPreview(true);
    };

    return (
        <div className="upload-wrapper">
            <ToastContainer />
            <div className="upload-container">
                <div className="upload-title">
                    Upload Images
                    <hr />
                </div>
                <div className="upload-inputs">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="capture-image" className="file-label">
                            <div className="take-a-photo">
                                <div>Take a Photo</div>
                                <div style={{ fontSize: "22px" }}>
                                    <MdOutlineCameraAlt />
                                </div>
                            </div>
                            <input
                                type="file"
                                capture
                                id="capture-image"
                                accept="image/*"
                                style={{ display: "none" }}
                                multiple
                                onChange={handleFileChange}
                            />
                            <hr />
                        </label>
                        <label htmlFor="upload-images" className="file-label">
                            <div className="take-a-photo">
                                <div>Choose from library</div>
                                <div><MdOutlineFileUpload /></div>
                            </div>
                            <input
                                type="file"
                                id="upload-images"
                                accept="image/*"
                                style={{ display: "none" }}
                                multiple
                                onChange={handleFileChange}
                            />
                            <hr />
                        </label>
                        <button type="button" onClick={handleToggle} className="preview-btn">
                            <div style={{ paddingTop: "0.2rem", paddingLeft: "0.6rem", paddingRight: "0.4rem" }}>
                                <IoImagesOutline />
                            </div>
                            <div>Preview</div>
                        </button>
                        <button type="submit" className="upload-btn">
                            {loading ? "Uploading..." : "Upload Images"}
                        </button>
                    </form>
                    <div className="guidelines">
                        <div className="guideline-title">
                            Photo Guidelines
                            <hr />
                        </div>
                        <div className="guideline">
                            Photos should be high resolution, upload family photos in landscape orientation, and other photos in portrait orientation, should be well-lit. Avoid taking photos of people eating or looking at their phones.
                        </div>
                    </div>
                    <div className="get-all-btn">
                        <button onClick={handleGetAllImages}>
                            <IoImagesOutline/>
                        </button>
                    </div>
                    <div className="preview">
                        {showPreview && <ImagesPreview images={selectedFiles} setShowPreview={setShowPreview} />}
                    </div>
                    <div className="preview">
                        {showImages && <UploadedImages images={images} setShowImages={setShowImages} fetching={fetching}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upload;
