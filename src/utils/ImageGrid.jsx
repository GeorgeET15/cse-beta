import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import CloseIcon from "@mui/icons-material/Close";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (url) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Modal */}
      {selectedImage && (
        <div className="model open">
          <CloseIcon onClick={closeModal} />
          <img src={selectedImage} style={{ width: "100%" }} alt="img" />
        </div>
      )}
      <div className="gallery">
        {docs.map((doc) => {
          return (
            <div key={doc.id} className="pics">
              <img
                src={doc.url}
                alt={doc.id}
                style={{ width: "100%" }}
                onClick={() => openModal(doc.url)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGrid;
