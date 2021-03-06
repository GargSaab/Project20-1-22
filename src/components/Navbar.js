import React, { useState, useContext, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { UserContext } from "./StateMan";
import TsptPNG from "../assests/TsptPNG.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { HomeS, CounsellingS, PlanningS, BusinessS, AboutS, modalS, HworkS } =
    useContext(UserContext);
  const [Home, setHome] = HomeS;
  const [Counselling, setCounselling] = CounsellingS;
  const [Planning, setPlanning] = PlanningS;
  const [Hwork, setHwork] = HworkS;
  const [Business, setBusiness] = BusinessS;
  const [About, setAbout] = AboutS;
  const [modal, setModal] = modalS;

  window.addEventListener("resize", () => Resize());
  const Resize = () => {
    if (window.innerWidth < 600) setDropdown(true);
    else setDropdown(false);
  };

  useEffect(() => {
    if (window.innerWidth < 600) setDropdown(true);
    else setDropdown(false);
  }, []);
  return (
    <div
      style={{
        marginTop: 10,
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "white",
      }}
    >
      <header className="header">
        <div
          style={{
            marginLeft: "2%",
            display: "flex",
            // border: "2px solid red",
          }}
        >
          <img src={TsptPNG} height="60px" width="100%" alt="" />
        </div>
        <div
          style={{
            display: dropdown ? "flex" : "none",
            marginRight: "5%",
            marginTop: 10,
          }}
          onClick={() => setClick(!click)}
        >
          <DensityMediumIcon />
        </div>
        <div
          style={{
            display: dropdown ? "none" : "flex",
            flexDirection: "row",
            marginRight: "0%",
            flexWrap: "wrap",
            // border: "2px solid red",
          }}
        >
          <div
            className="h1"
            onClick={() => {
              setBusiness(false);
              setHome(true);
              setAbout(false);
              setCounselling(false);
              setPlanning(false);
              setHwork(false);
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                className="h2"
                style={{ color: Home ? "#fccc14" : "#5b5c5c" }}
              >
                Home
              </Typography>
            </Link>
          </div>
          <div
            className="h1"
            onClick={() => {
              // setBusiness(false);
              // setHome(false);
              // setAbout(false);
              // setPlanning(false);
              // setCounselling(true);
              // setHwork(false);
              window.open("http://career.visitgranth.com/app/login");
            }}
          >
            <Typography
              className="h2"
              style={{ color: Counselling ? "#fccc14" : "#5b5c5c" }}
            >
              Career Assessment
            </Typography>
          </div>
          <div
            className="h1"
            onClick={() => {
              setBusiness(false);
              setHome(false);
              setAbout(false);
              setCounselling(false);
              setPlanning(true);
              setHwork(false);
            }}
          >
            <Link to="/CareerPlanning" style={{ textDecoration: "none" }}>
              <Typography
                className="h2"
                style={{ color: Planning ? "#fccc14" : "#5b5c5c" }}
              >
                Career Planning
              </Typography>
            </Link>
          </div>
          <div
            className="h1"
            onClick={() => {
              setBusiness(false);
              setHome(false);
              setAbout(false);
              setCounselling(false);
              setPlanning(false);
              setHwork(true);
            }}
          >
            <Link to="/HowItWorks" style={{ textDecoration: "none" }}>
              <Typography
                className="h2"
                style={{ color: Hwork ? "#fccc14" : "#5b5c5c" }}
              >
                How It Works
              </Typography>
            </Link>
          </div>
          <div
            className="h1"
            onClick={() => {
              setBusiness(true);
              setHome(false);
              setAbout(false);
              setCounselling(false);
              setPlanning(false);
              setHwork(false);
            }}
          >
            <Link to="/Buisness" style={{ textDecoration: "none" }}>
              <Typography
                className="h2"
                style={{ color: Business ? "#fccc14" : "#5b5c5c" }}
              >
                Business
              </Typography>
            </Link>
          </div>
          <div
            className="h1"
            onClick={() => {
              setAbout(true);
              setBusiness(false);
              setHome(false);
              setPlanning(false);
              setCounselling(false);
              setHwork(false);
            }}
          >
            <Link to="/About" style={{ textDecoration: "none" }}>
              <Typography
                className="h2"
                style={{
                  color: About ? "#fccc14" : "#5b5c5c",
                }}
              >
                About
              </Typography>
            </Link>
          </div>

          <div style={{ margin: 15 }}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#fccc14", color: "#5b5c5c" }}
              onClick={() => setModal(true)}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </header>
      <div
        style={{
          display: click ? "flex" : "none",
          flexDirection: "column",
          marginLeft: 10,
        }}
      >
        <div
          className="h1"
          onClick={() => {
            setBusiness(false);
            setHome(true);
            setAbout(false);
            setClick(false);
            setPlanning(false);
            setCounselling(false);
            setHwork(false);
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              className="h2"
              style={{ color: Home ? "#fccc14" : "#5b5c5c" }}
            >
              Home
            </Typography>
          </Link>
        </div>
        <div
          className="h1"
          onClick={() => {
            // setBusiness(false);
            // setHome(false);
            // setAbout(false);
            // setPlanning(false);
            // setCounselling(true);
            setClick(false);
            // setHwork(false);
            window.open("http://career.visitgranth.com/app/login");
          }}
        >
          <Typography
            className="h2"
            style={{ color: Counselling ? "#fccc14" : "#5b5c5c" }}
          >
            Career Assessment
          </Typography>
        </div>
        <div
          className="h1"
          onClick={() => {
            setBusiness(false);
            setHome(false);
            setAbout(false);
            setCounselling(false);
            setPlanning(true);
            setClick(false);
            setHwork(false);
          }}
        >
          <Link to="/CareerPlanning" style={{ textDecoration: "none" }}>
            <Typography
              className="h2"
              style={{ color: Planning ? "#fccc14" : "#5b5c5c" }}
            >
              Career Planning
            </Typography>
          </Link>
        </div>
        <div
          className="h1"
          onClick={() => {
            setBusiness(false);
            setHome(false);
            setAbout(false);
            setCounselling(false);
            setPlanning(false);
            setClick(false);
            setHwork(true);
          }}
        >
          <Link to="/HowItWorks" style={{ textDecoration: "none" }}>
            <Typography
              className="h2"
              style={{ color: Hwork ? "#fccc14" : "#5b5c5c" }}
            >
              How It Works
            </Typography>
          </Link>
        </div>
        <div
          className="h1"
          onClick={() => {
            setBusiness(true);
            setHome(false);
            setAbout(false);
            setClick(false);
            setPlanning(false);
            setCounselling(false);
            setHwork(false);
          }}
        >
          <Link to="/Buisness" style={{ textDecoration: "none" }}>
            <Typography
              className="h2"
              style={{ color: Business ? "#fccc14" : "#5b5c5c" }}
            >
              Business
            </Typography>
          </Link>
        </div>
        <div
          className="h1"
          onClick={() => {
            setAbout(true);
            setBusiness(false);
            setHome(false);
            setClick(false);
            setPlanning(false);
            setCounselling(false);
            setHwork(false);
          }}
        >
          <Link to="/About" style={{ textDecoration: "none" }}>
            <Typography
              className="h2"
              style={{
                color: About ? "#fccc14" : "#5b5c5c",
              }}
            >
              About
            </Typography>
          </Link>
        </div>
        <div style={{ margin: 15 }}>
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: "#fccc14", color: "#5b5c5c" }}
            onClick={() => {
              setModal(true);
              setClick(false);
            }}
          >
            Let's Talk
          </Button>
        </div>
      </div>
      <div style={{ display: "none" }}>{modal}</div>
    </div>
  );
}

export default Navbar;
