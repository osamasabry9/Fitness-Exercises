import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { name, target, equipment, bodyPart, gifUrl } = exerciseDetail;

  const extraDetail = [
    {
      id: "0",
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      id: "1",
      icon: TargetImage,
      name: target,
    },
    {
      id: "2",
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack
            key={item.id}
            direction="row"
            alignItems="center"
            gap="24px"
            sx={{
              flexDirection: { lg: "row" },
              gap: { lg: "35px", xs: "20px" },
            }}
          >
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
        <Button variant="contained" color="error" href="#exercises">
          Explore Exercises
        </Button>
      </Stack>
    </Stack>
  );
};

export default Detail;
