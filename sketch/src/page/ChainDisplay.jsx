import { Container, Typography, Box, Divider } from "@mui/material";

import HowToVoteIcon from "@mui/icons-material/HowToVote";

const colorPalette = {
  VeryWhite: "#F6F6F6",
  White: "#E8E8E8",
  Black: "#333333",
  DarkRed: "#990100",
  Red: "#B90504",
};

const ChainDisplay = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ backgroundColor: "#F0F0F0" }}>
        {/*Big box(basically ul) */}
        <Box sx={{ padding: "3vh 5vw" }}>
          {/* Basically li */}
          <Box sx={{ backgroundColor: "cyan" }}>
            <Typography
              sx={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                fontSize: "1em",
              }}
            >
              <HowToVoteIcon sx={{ fontSize: "1.5em" }} />
              Blockchain (Title)
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: colorPalette.Red,
              borderRadius: "8px",
              padding: "2vh 2vw",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Genesis Block (Title)</Typography>
              <Typography>21:02:58 WIB</Typography>
            </Box>
            <Divider />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ChainDisplay;
