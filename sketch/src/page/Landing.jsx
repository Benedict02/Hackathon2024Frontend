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
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            top: "25%",
            height: "50%",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Box>
            <HowToVoteIcon
              sx={{ fontSize: "5vw", color: colorPalette.DarkRed }}
            />
            <Typography variant="subtitle1" sx={{ fontSize: "1em" }}>
              Selamat Datang di:
            </Typography>
            <Typography
              variant="h1"
              sx={{ color: colorPalette.DarkRed, fontSize: "6.5vw" }}
            >
              <strong>M Y V O T E</strong>
            </Typography>
            <Typography variant="subtitle2">
              Website Pemilu <em>Decentralized</em> pertama di Indonesia!
            </Typography>
          </Box>
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
