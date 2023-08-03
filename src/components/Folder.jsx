import React, { useEffect, useState } from "react";
// import { FiFilePlus } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, onSnapshot } from "firebase/firestore"; //collection, updateDoc
import { useNavigate, useParams } from "react-router-dom";
// import { projectStorage } from "../firebase/config";

const Folder = ({ database }) => {
  // const storage = projectStorage;
  let params = useParams();
  let navigate = useNavigate();
  const [folders, setFolders] = useState([]);
  const [folderName, setFolderName] = useState("");

  // const collectionRef = collection(database, "driveData");
  const databaseRef = doc(database, "driveData", params?.id);
  // const getFile = (e) => {
  //   const fileRef = ref(storage, e.target.files[0].name);
  //   const uploadTask = uploadBytesResumable(fileRef, e.target.files[0]);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("Upload is " + progress + "% done");
  //       switch (snapshot.state) {
  //         case "paused":
  //           console.log("Upload is paused");
  //           break;
  //         case "running":
  //           console.log("Upload is running");
  //           break;
  //       }
  //     },
  //     (error) => {},
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         updateDoc(databaseRef, {
  //           fileLink: [
  //             ...folders,
  //             {
  //               downloadURL: downloadURL,
  //               fileName: e.target.files[0].name,
  //             },
  //           ],
  //         });
  //         console.log("File available at", downloadURL);
  //       });
  //     }
  //   );
  // };

  const openFile = (downloadURL) => {
    window.open(downloadURL, "_blank");
  };

  const goBack = () => {
    navigate("/drive");
  };

  const readData = () => {
    onSnapshot(databaseRef, (doc) => {
      setFolders(doc.data().fileLink);
      setFolderName(doc.data().folderName);
    });
  };

  useEffect(() => {
    readData();
  });
  return (
    <div>
      <div className="back-icon">
        <FiArrowLeftCircle size="50" onClick={goBack} />
      </div>
      {/* <div className="icon-container">
        <div className="upload-btn-wrapper">
          <FiFilePlus size={50} color="#ffc107" />
          <input type="file" name="myfile" onChange={getFile} />
        </div>
      </div> */}
      <div className="folder-title">
        <h3>{folderName}</h3>
      </div>
      <div className="grid-parent">
        {folders?.map((folder) => {
          return (
            <>
              {folder.downloadURL !== "" ? (
                <div
                  className="grid-child"
                  onClick={() => openFile(folder.downloadURL)}
                >
                  <h5>{folder.fileName}</h5>
                </div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Folder;
