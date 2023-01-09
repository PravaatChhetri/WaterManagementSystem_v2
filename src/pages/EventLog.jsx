import React from "react";
import ResponsiveDrawer from "../components/DashboardDrawer";
import EventLogFetch from "./EventLogFetch";

const EventLog = () => {
  const eventLogContent = <EventLogFetch/>
  return <ResponsiveDrawer box={eventLogContent} />;
};

export default EventLog;
