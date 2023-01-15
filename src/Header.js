import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [hamberg, sethamberg] = useState(false);
  const sethambergdata = () => {
    sethamberg(!hamberg);
  };
  return (
    <>
      <Box
        sx={{
          margin: "15px",
          display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h5">LOGO</Typography>
        </Box>
        {}
        <Box sx={{ display: "flex", margin: "15px 15px" }}>
          <Typography variant="h5" sx={{ margin: "15px" }}>
            Home
          </Typography>
          <Typography sx={{ margin: "15px" }} variant="h5">
            Aboutus
          </Typography>
          <Typography sx={{ margin: "15px" }} variant="h5">
            Service
          </Typography>
          <Typography sx={{ margin: "15px" }} variant="h5">
            Product
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          margin: "15px",
          display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h5">LOGO</Typography>
        </Box>
        <Box>
          <Typography>
            <MenuIcon onClick={sethambergdata} />
          </Typography>
        </Box>
      </Box>

      {hamberg ? (
        <Box
          sx={{
            display: {
              lg: "none",
              md: "none",
              sm: "inline-block",
              xs: "inline-block",
            },
          }}
        >
          <Typography variant="h5" sx={{ margin: "15px" }}>
            Home
          </Typography>
          <Typography sx={{ margin: "15px" }} variant="h5">
            Aboutus
          </Typography>
          <Typography sx={{ margin: "15px" }} variant="h5">
            Service
          </Typography>
          <Typography sx={{ margin: "15px" }} variant="h5">
            Product
          </Typography>
        </Box>
      ) : null}
    </>
  );
};

export default Header;
