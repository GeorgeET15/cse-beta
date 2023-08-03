import React, { useEffect } from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
// import { FcOpenedFolder } from "react-icons/fc";
import { FiArrowLeftCircle } from "react-icons/fi";
// import { FiFilePlus } from "react-icons/fi";
import { Modal, Input } from "antd";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Drive = () => {
  let navigate = useNavigate();
  const collectionRef = collection(projectFirestore, "driveData");
  const [folder, setFolder] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  const folderUpload = () => {
    addDoc(collectionRef, {
      folderName: folderName,
      fileLink: [
        {
          downloadURL: "",
          fileName: "",
        },
      ],
    })
      .then((res) => {
        setIsModalOpen(false);
        // alert("folder added");
        setFolderName("");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const readData = () => {
    onSnapshot(collectionRef, (data) => {
      setFolder(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };

  const openFolder = (id) => {
    navigate(`/folder/${id}`);
  };

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    readData();
  });
  return (
    <div>
      <Typography
        sx={{
          fontSize: { lg: "100px", sm: "70px", xs: "60px" },
        }}
        display="flex"
        justifyContent="center"
        fontFamily="fantasy"
        color="#00000"
      >
        Study Materials
      </Typography>
      <div className="back-icon">
        <FiArrowLeftCircle size="50" onClick={goBack} />
      </div>
      {/* <div className="icon-container">
        <div className="upload-btn-wrapper">
          <FiFilePlus size={50} color="#ffc107" />
          <input type="file" name="myfile" />
        </div>
        <FcOpenedFolder size={50} onClick={showModal} />
      </div> */}
      <div className="grid-parent">
        {folder.map((folder) => {
          return (
            <div className="grid-child" onClick={() => openFolder(folder.id)}>
              <h4>{folder.folderName}</h4>
            </div>
          );
        })}
      </div>
      <Modal
        title="Folder Upload"
        open={isModalOpen}
        onOk={folderUpload}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Enter folder name"
          onChange={(e) => setFolderName(e.target.value)}
          value={folderName}
        />
      </Modal>
    </div>
  );
};

export default Drive;
