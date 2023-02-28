import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

const ThreeSixty = () => {
  const [sliderValue, setSliderValue] = React.useState(1);
  const [imageName, setImageName] = useState(1);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);

    const newImage = Math.round((36 / 100) * newValue);
    if (newImage == 0) {
      setImageName(1);
    } else {
      setImageName(newImage);
    }
  };

  return (
    <div>
      <h1>360 view comes here</h1>
      <p>New Value : {sliderValue}</p>
      <p>New Image : {imageName}</p>

      <img
        src={require(`../../images/Car-Images/car-${imageName}.png`)}
        height={1000}
        width={800}
      />
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider
            aria-label="Volume"
            value={sliderValue}
            onChange={handleChange}
          />
        </Stack>
      </Box>
    </div>
  );
};

export default ThreeSixty;
