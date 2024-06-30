import { IoCloseOutline } from "react-icons/io5";
import "../styles/ImagesPreview.css";

const UploadedImages = ({ images, setShowImages ,fetching}) => {
    const handleClose = () => {
        setShowImages(false);
    }

    return (
        <div className="preview-wrapper">
            <div className="preview-container">
                <div className="close">
                    Uploaded Images
                    <button onClick={handleClose} style={{ border: "none" }}><IoCloseOutline /></button>
                </div>
                <div className="images">
                    {fetching && <div className="loading">Loading...</div>}
                    {images && images.map((image, index) => (
                        <div className="single-image" key={index}>
                            <img src={image.img} alt={image.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UploadedImages;
