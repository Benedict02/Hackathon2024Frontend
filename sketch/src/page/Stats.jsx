// import * as React from 'react';
import { Container, Box } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

// FETCH DATA
const data = [
  { id: 0, value: 10, label: "Nubis", percent: "X%" },
  { id: 1, value: 15, label: "Harun", percent: "Y%" },
  { id: 2, value: 20, label: "Jubaidah", percent: "Z%" },
];

const Stats = () => {
  // const size = {
  //   width: 800,
  //   height: 400,
  // };

  return (
    <>
      <Container
        sx={{
          backgroundColor: "crimson",
          display: "flex",
          padding: "10vh 5vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: 400,
            justifyContent: "center",
            backgroundColor: "gray",
          }}
        >
          <PieChart
            series={[
              {
                arcLabel: (item) => `${item.label} (${item.percent})`,
                data,
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
              },
            ]}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            // {...size}
          />
        </Box>
      </Container>
    </>
  );
};

export default Stats;
