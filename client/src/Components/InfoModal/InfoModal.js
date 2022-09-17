import React from 'react';
import './InfoModal.css';

const InfoModal = props => {
    const closeModal = () => {
        document.querySelector("#info-modal").style.visibility = "hidden";
    }

    return (
        <div id="info-modal">
            <p>You must click a location on the map to make a guess.</p>
            <button className="button" onClick={closeModal}>Ok</button>
        </div>
    );
}

export default InfoModal;