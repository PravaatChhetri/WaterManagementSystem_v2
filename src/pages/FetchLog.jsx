
import { POST } from "../components/post";

const server = process.env.REACT_APP_SERVE

export const getDailyData = async (data) => {
  console.log(data.date)
 
  let url = server+"/data/log/flow/anyday"
  let response = await POST({ url, props: { date:data.date,flow_name:data.secondSensor } });
  return response;
}

export const getDailyDataLevel = async (data) => {
  let url = server + "/data/log/level/anyday"
  let response = await POST({ url, props: { date:data.date, level_name:data.secondSensor } });
  return response;

}
export const getDailyDataQuality = async (data) => {
  let url =  server + "/data/log/quality/anyday"
  let response = await POST({ url, props: { date:data.date, Quality_name:data.secondSensor } });
  return response;

}


export const getMonthlyData = async (data) => {
  let url = server+"/data/log/flow/month";
  let response = await POST({ url, props: { date:data.date,flow_name:data.secondSensor } });
  return response;
}

export const getMonthlyDataLevel = async (data) => {
  let url =  server +"/data/log/level/month";
  let response = await POST({ url, props: {  date:data.date, level_name:data.secondSensor } });
  return response;
}
export const getMonthlyDataQuality = async (data) => {
  let url = server +"/data/log/quality/month";
  let response = await POST({ url, props: { date:data.date, Quality_name:data.secondSensor } });
  return response;
}

export const getWeeklyData = async (data) => {
  let url = server +"/data/log/flow/weekly";
  let response = await POST({ url, props: { date:data.date,flow_name:data.secondSensor } });
  return response;
}

export const getWeeklyDataLevel = async (data) => {
  let url = server+"/data/log/level/weekly";
  let response = await POST({ url, props: {  date:data.date, level_name:data.secondSensor } });
  return response;
}

export const getWeeklyDataQuality = async (data) => {
  let url = server +"/data/log/quality/weekly";
  let response = await POST({ url, props: {  date:data.date, level_name:data.secondSensor } });
  return response;
}