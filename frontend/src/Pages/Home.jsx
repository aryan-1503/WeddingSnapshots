import {useNavigate} from "react-router-dom";
import React from "react";

import WeddingImage from "../groom-bride-images/jay-shreya.jpg"
import "../styles/Home.css"
function Home() {
    const navigate = useNavigate();
    const handleBtn = () => {
        navigate("/upload")
    }

    let welcomeText = "Welcome";
    const currentDate = new Date();
    const todaysDate = currentDate.toLocaleDateString();
    console.log(typeof todaysDate)
    if (todaysDate === "07/07/2024")
    {
        welcomeText = "Welcome to the ceremony";
    }
    else if (todaysDate === "01/24/2025"){
        welcomeText = "Welcome to the Wedding"
    }



    return (
        <>
            <div className="body-wrapper">
                <div className="body-content">
                <div className="welcome">{welcomeText}</div>
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
