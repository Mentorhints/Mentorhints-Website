import React from "react";
import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import imageContainer2 from "../../assets/Star.svg";
import imageContainer from "../../assets/Thumb up.svg";
import image from "../../assets/Mail.svg";
import "../../StylesOfComponents/TechCommunity/TechCommunity.css";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

export const TechCommunity = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleReferral = () => {
    // navigate("/referralform");
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);
  return (
    <div className="tech-community">
      <div className="content">
        <div className="title-card">
          <div className="title">
            <div className="frame">
              <div className="ellipse" />
              <div className="text-wrapper">Referral Program</div>
            </div>
            <div className="frame-2">
              <p className="text-wrapper-2">Tech Community</p>
              <p className="p">
                Get into your dream career by joining our community
              </p>
            </div>
          </div>

          <div className="card">
            {[
              {
                id: "01",
                title: "Get Free Referral",
                desc: "Join our community and meet top experts and like-minded people",
                img: imageContainer,
              },
              {
                id: "02",
                title: "Attend Interview",
                desc: "Get Offers From Top 100+ Companies By Our Referral Program",
                img: image,
              },
              {
                id: "03",
                title: "Achieve Dreams",
                desc: "Successfully Land in your Dream Job With Higher Pay",
                img: imageContainer2,
              },
            ].map(({ id, title, desc, img }) => (
              <div
                key={id}
                className={`card-${id === "01" ? "2" : " frame-wrapper"}`}
              >
                <div className="number-details">
                  <div className="text-wrapper-3">{id}</div>
                  <h4 className="text-wrapper-4">{title}</h4>
                  <p className="text-wrapper-5">{desc}</p>
                </div>
                <img className="image-container" alt={title} src={img} />
              </div>
            ))}
          </div>
        </div>

        <PrimaryButton
          className="primary-button-instance"
          text="Get Referral"
          onClick={handleReferral}
        />
      </div>
      {showModal && (
        <Modal onClose={closeModal}/>
      )}
    </div>
  );
};
