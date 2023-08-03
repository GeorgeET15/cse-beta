import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import "../App.css";
export default function MainBanner() {
  return (
    <Box
      sx={{
        backgroundColor: "#f1bd0a",
        width: "100%",
        height: "100vh",
        marginTop: "-8px",
        marginLeft: "-10px",
        padding: "10px",
      }}
      justifyContent={"center"}
    >
      <Typography
        sx={{
          marginTop: "120px",
          fontSize: { lg: "18rem", md: "13rem", sm: "10rem", xs: "8rem" },
        }}
        display="flex"
        justifyContent="center"
        color="#3d2e88"
        fontFamily="fantasy"
        letterSpacing="5px"
      >
        CSEBETA
      </Typography>
      <Stack direction="row" spacing={2} justifyContent={"center"}>
        <Button
          style={{
            borderRadius: 35,
            backgroundColor: "#e55009",
            padding: "10px 23px",
          }}
          sx={{
            color: "#fff",
          }}
          component={Link}
          to="/drive"
          color="warning"
          variant="contained"
        >
          Learn
        </Button>
        <Button
          style={{
            borderRadius: 35,
            backgroundColor: "#3d2e88",
            padding: "10px 23px",
          }}
          sx={{
            color: "#fff",
          }}
          component={Link}
          to="/gallery"
          color="warning"
          variant="contained"
        >
          Gallery
        </Button>
      </Stack>
    </Box>
  );
}
