import { Container, Typography, Box } from "@mui/material";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Container maxWidth="sm">
        <HowToVoteIcon />
        <Typography variant="subtitle1">Selamat Datang di:</Typography>
        <h2></h2>
        <h1>MYVOTE</h1>
        <Typography variant="subtitle2">
          Website Pemilu <em>Decentralized</em> pertama di Indonesia
        </Typography>

        <Box>
          <Link to="/login">
            <Button variant="contained">Log In</Button>
          </Link>
          {/* g ngerti lg ud mls ngecss omg mlm bgt */}
          <br />
          <Link to="/signup">
            <Typography variant="caption">...Belum punya akun?</Typography>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Landing;
