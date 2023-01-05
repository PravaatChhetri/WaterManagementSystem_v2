import React from "react";
import desu from "../assets/desu-2.png";
import rGlogo from "../assets/rgob.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import {Tank1, Tank2}  from "./TankLevel";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  elevation:4,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomeContainer="h-[300px] p-3";

export const Header = (props) => {
    const imageSize='8%';
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex:'5',
      }}
    >
      {}
      <img src={desu} height={imageSize}  width={imageSize} alt="desu" />
      <h1 className="sm:text-base lg:text-2xl font-bold" >Gyelpozhing Water Management System</h1>
      <img src={rGlogo} height={imageSize} width={imageSize} alt="rGlogo" />
    </div>
  );
};


// Dash Home page components
export const TankLevelComp=(props)=>{

return(
  <Grid item xs={12} lg={4}>
  <Item>
    <div className={HomeContainer}>
      <b>Tank Water Level (Meters)</b>
      <div className="mx-auto justify-around my-5 w-auto lg:flex sm:grid rounded-md sm:h-auto">

      <Tank1 height={200} width={200} />
      <Tank2 height={200} width={200}/>
      </div>
    </div>
  </Item>
</Grid>
);
}

export const FlowRateDisplay=(props)=>{
  return(
    <Grid item xs={12} lg={8}>
      <Item>
        <div className={HomeContainer}>
        <b>Flow Rate Display(m<sup>3</sup>/hour)</b>

        </div>
      </Item>
    </Grid>
  );
}

export const ValveController=(props)=>{
    return(
      <Grid item xs={12} lg={6}>
      <Item>
        <div className={HomeContainer}>
          <b>Valve Position</b>
        </div>
      </Item>
    </Grid>
    );
}

export const WaterQuality=(props)=>{
  return(
    <Grid item xs={12} lg={6}>
      <Item>
        <div className={HomeContainer}>
          <b>Water Quality</b>
        </div>
      </Item>
    </Grid>
  );
}
export const AlarmsAndEvents=(props)=>{
  return(
    <Grid item xs={12} lg={3}>
      <Item>
        <div className={HomeContainer}>
          <b>Alarms and Events</b>
        </div>
      </Item>
    </Grid>
  );
}