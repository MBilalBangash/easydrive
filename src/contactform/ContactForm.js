import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";

const ContactForm = ({text="Book Your Driver", width="50%"}) => {
  return (
    <Box
      sx={{
        borderRadius: "5px",
        boxShadow: "4px 4px 40px 0px rgba(0, 0, 0, 0.08)",
        padding: "25px",
        width: width,
        
        background:"white"
      }}
    >
      <Box
        sx={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#000",
          marginY: "2rem",
        }}
      >
        {text}
      </Box>
      <Box>
        <Grid container spacing={4} justifyContent={"center"}>
          <Grid item xs={12}>
            <Box>
              <TextField
                placeholder="FullName"
                fullWidth
                sx={{ background: "#F4F4F4", borderRadius: "5px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <TextField
                placeholder="Email"
                fullWidth
                sx={{ background: "#F4F4F4", borderRadius: "5px" }}
              />
            </Box>
          </Grid>{" "}
          <Grid item xs={12} md={6}>
            <Box>
              <TextField
                placeholder="Contact"
                fullWidth
                sx={{ background: "#F4F4F4", borderRadius: "5px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <TextField
                placeholder="Pickup Location"
                fullWidth
                sx={{ background: "#F4F4F4", borderRadius: "5px" }}
              />
            </Box>
          </Grid>{" "}
          <Grid item xs={12} md={6}>
            <Box>
              <TextField
                placeholder="Drop-off Location"
                fullWidth
                sx={{ background: "#F4F4F4", borderRadius: "5px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <TextField
                placeholder="Date"
                fullWidth
                sx={{ background: "#F4F4F4", borderRadius: "5px" }}
              />
            </Box>
          </Grid>{" "}
          <Grid item xs={12} md={6}>
            <Box>
              <TextField
                placeholder="Time"
                fullWidth
                sx={{ background: "#F4F4F4", borderRadius: "5px" }}
              />
            </Box>
          </Grid>
          <Box sx={{ textAlign: "center", marginY: "1rem" }}>
            <Button
              sx={{
                background: "#E30000",
                color: "white",
                padding: "18px 64px",
                textTransform: "capitalize",
                borderRadius: "48px",
                "&:hover": {
                  background: "#E30000",
                  color: "white",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactForm;
