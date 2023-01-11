import React from "react";
import desu from "../assets/desu-2.png";
import rGlogo from "../assets/rgob.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Col, Row, Card } from "antd";

import { Column, Liquid } from "@ant-design/plots";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  elevation: 4,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomeContainer = "h-[300px] p-3";

export const Header = (props) => {
  const imageSize = "8%";
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: "5",
      }}
    >
      {}
      <img src={desu} height={imageSize} width={imageSize} alt="desu" />
      <h1 className="sm:text-base lg:text-2xl font-bold">
        Gyelpozhing Water Management System
      </h1>
      <img src={rGlogo} height={imageSize} width={imageSize} alt="rGlogo" />
    </div>
  );
};

// Dash Home page components
export const TankLevel = ({ data }) => {
  return (
    <Grid lg={6} className="flex justify-around">
      <Row>

        <Col>
          <Row>
            {data.map((val, i) => {
              return (
                <Col key={i} span={12}>
                  <Liquid
                    {...{
                      percent: val.level / 10,
                      outline: {
                        border: 3,
                        distance: 3,
                      },
                      width: 200,
                      height: 200,
                      wave: {
                        length: 225,
                      },
                    }}
                  />
                  <p className="sub_title text-center">{val.level_name}</p>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

export const FlowRateDisplay = ({ data }) => {
  return (
    <Grid lg={6}>
      <Row>
        {data.map((val, i) => {
          return (
            <Col key={i} className="grid grid-row-2 ">
              <Row>
                <Card
                  hoverable
                  style={{
                    backgroundColor: val.flow_rate < 5 ? "#d1330a" : "#0b9406",

                    width: 130,

                    borderRadius: 15,
                    margin: 3,
                  }}
                >
                  <Col span={1}>
                    <p
                      className="sub_title"
                      style={{ fontWeight: "bold", color: "white" }}
                    >
                      {val.flow_name}
                    </p>
                  </Col>
                  <Col span={1}>
                    <Row>
                      <Col span={1}>
                        <p style={{ fontWeight: "bold", color: "white" }}>
                          {val.flow_rate}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Card>
              </Row>
            </Col>
          );
        })}
      </Row>
    </Grid>
  );
};

export const ValveController = ({ data }) => {
  return (
    <Grid lg={6}>
      <Row>
        {data.map((val, i) => {
          return (
            <Col key={i} className="grid grid-row-2 ">
              <Card
                hoverable
                style={{
                  backgroundColor: "#10b4eb",

                  width: 130,

                  borderRadius: 15,
                  margin: 3,
                }}
              >
                <Col justify="center">
                  <p
                    className="sub_title"
                    style={{ fontWeight: "bold", color: "white" }}
                  >
                    {val.flow_name}
                  </p>
                </Col>
                <Col>
                  <Row justify="center">
                    <Col>
                      <p style={{ fontWeight: "bold", color: "white" }}>
                        {val.valve_position}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Grid>
  );
};

export const WaterQuality = ({ data }) => {
  return (
    <Grid lg={6} className="flex">
      <Row className=" pt-10">
        {data.map((val, i) => {
          return (
            // <Col span={24} key={i}>
            <Row gutter={1} key={i}>
              <Card
                hoverable
                className=""
                style={{
                  backgroundColor: "#00437A",

                  width: 130,
                  height: 85,
                  borderRadius: 15,
                  margin: 3,
                }}
              >
                <Col justify="center">
                  <p className="sub_title" style={{ color: "white" }}>
                    {val.Quality_name}
                  </p>
                </Col>
                <Col>
                  <Row justify="center">
                    <Col>
                      <p style={{ color: "white" }}>{val.value}</p>
                    </Col>
                  </Row>
                </Col>
              </Card>
            </Row>
            // </Col>
          );
        })}
      </Row>
    </Grid>
  );
};
export const AlarmsAndEvents = (props) => {
  return (
    <Grid item xs={12} lg={3}>
      <Item>
        <div className={HomeContainer}>
          <b>Alarms and Events</b>
        </div>
      </Item>
    </Grid>
  );
};
