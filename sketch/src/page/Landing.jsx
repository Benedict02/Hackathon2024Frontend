import { Container, Typography, Box } from "@mui/material";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const colorPalette = {
  VeryWhite: "#F6F6F6",
  White: "#E8E8E8",
  Black: "#333333",
  DarkRed: "#990100",
  Red: "#B90504",
};

const Landing = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ position: "absolute", top: "35%" }}>
          <HowToVoteIcon />
          <Typography variant="subtitle1">Selamat Datang di:</Typography>
          <h2></h2>
          <h1>MYVOTE</h1>
          <Typography variant="subtitle2">
            Website Pemilu <em>Decentralized</em> pertama di Indonesia
          </Typography>
          {/* Buttons and stuff */}
          <Box>
            <Link to="/login">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: colorPalette.Red,
                  "&:hover": {
                    backgroundColor: colorPalette.Black,
                  },
                }}
              >
                Log In
              </Button>
            </Link>
            <br />
            <Link to="/signup">
              <Typography variant="caption">...Belum punya akun?</Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Landing;
