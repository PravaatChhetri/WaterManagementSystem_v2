import React from "react";
import ResponsiveDrawer from "../components/DashboardDrawer";

const AlarmEvents = () => {
  const alarmEventContent = (
    
      <div>Alarm Events</div>
  );

  return <ResponsiveDrawer box={alarmEventContent} />;
};

export default AlarmEvents;
