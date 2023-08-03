import React from "react";
import { Box, Typography } from "@mui/material";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ImageGrid from "../utils/ImageGrid";
// eslint-disable-next-line
import UploadForm from "../utils/Uploadform";

const ImageGallery = () => {
  let navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#3d2e88",
        width: "100%",
        height: "100%",
        marginTop: "-1px",
        marginLeft: "-10px",
        padding: "10px",
      }}
    >
      <div className="back-icon">
        <FiArrowLeftCircle size="50" onClick={goBack} />
      </div>
      <Typography
        sx={{
          fontSize: { lg: "100px", sm: "70px", xs: "60px" },
        }}
        display="flex"
        justifyContent="center"
        fontFamily="fantasy"
        color="#fff"
      >
        Picture Gallery
      </Typography>
      <ImageGrid />
    </Box>
  );
};

export default ImageGallery;
