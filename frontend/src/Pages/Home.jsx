import {useNavigate} from "react-router-dom";
import React from "react";

import WeddingImage from "../images/jay-shreya.jpg"
import "../styles/Home.css"
function Home() {
    const navigate = useNavigate();
    const handleBtn = () => {
        navigate("/upload")
    }
    return (
        <>
            <div className="body-wrapper">
                <div className="body-content">
                <div className="welcome">Welcome to the wedding</div>
                <div className="photo">
                    <img src={WeddingImage} alt="" width="250px" />
                </div>
                <div className="text">
                    Share your wedding memories effortlessly. Upload and view wedding
                    photos from all guests in one place. Make every moment
                    unforgettable.
                </div>
                <div className="capture-btn">
                    <button onClick={handleBtn}>Share memories</button>
                </div>
                </div>
            </div>
        </>
    );
}

export default Home;
