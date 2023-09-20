import ShareModal from "./ShareModal";
import React from "react";
import "../styles/share.css";
import {useState } from "react";
function Share({ label, text, title }) {
    const canonical = document.querySelector("link[rel=canonical]");
    let url = canonical ? canonical.href : document.location.href;
    const shareDetails = { url, title, text };

    const handleSharing = async () => {
        if (navigator.share) {
            try {
                await navigator
                    .share(shareDetails)
                    .then(() =>
                        console.log("Hooray! Your content was shared to tha world")
                    );
            } catch (error) {
                console.log(`Oops! I couldn't share to the world because: ${error}`);
            }
        } else {
            // fallback code
            // fallback code
            setShowModal(true); //this is the line added in this snippet
            // .... other code statement below
        }
    };
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className="share-button " onClick={handleSharing}>
            <span className="sharer-button-text">{label}</span>
        </button>
        <ShareModal
      handleClose={setShowModal}
      shareData={shareDetails}
      modalVisible={showModal}
            />
        </>
    );
}
export default Share;