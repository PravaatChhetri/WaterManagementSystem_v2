import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../index.css";
import ResponsiveDrawer from "../components/DashboardDrawer";
import { FlowRateDisplay, TankLevelComp, ValveController, WaterQuality} from "../components/HomePageComp";


const homePageContent=(
  <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
   
  <TankLevelComp/>
  <FlowRateDisplay/>  
  <ValveController/>  
  <WaterQuality/>  
    
  </Grid>
</Box>

);


export default function DashHome() {
  return (
   <ResponsiveDrawer box={homePageContent} />
  );
}
