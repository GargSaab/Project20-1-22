import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  InputLabel,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { UserContext } from "./StateMan";
import firebase from "../Firebase";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";

function ModalPage(props) {
  const { modalS, screenSizeS, eighttenS, eleventwelveS } =
    useContext(UserContext);
  const [modal, setModal] = modalS;
  const [screenSize] = screenSizeS;
  const [openAlert, setopenAlert] = useState(false);
  const [eightten, setEightten] = eighttenS;
  const [eleventwelve, setEleventwelve] = eleventwelveS;
  const [name, setName] = useState("");
  const [Vname, setVName] = useState("");
  const [age, setAge] = useState("");
  const [Vage, setVAge] = useState("");
  const [email, setEmail] = useState("");
  const [Vemail, setVEmail] = useState("");
  const [number, setNumber] = useState("");
  const [Vnumber, setVNumber] = useState("");
  const [classx, setClassx] = useState("none");
  const [Vclassx, setVClassx] = useState("none");
  const [cmnt, setCmnt] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setopenAlert(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const db = firebase.firestore();

  const handleSubmit = async () => {
    if (name === "") {
      setVName("Enter Full name");
    }
    if (age === "") {
      setVAge("Enter your age");
    }
    if (email === "") {
      setVEmail("Enter your email id");
    }
    if (number === "") {
      setVNumber("Enter your mobile number");
    }
    if (classx === "none") {
      setVClassx("Enter your class");
    }
    if (
      name !== "" &&
      age !== "" &&
      email !== "" &&
      number !== "" &&
      classx !== "none" &&
      Vage === "" &&
      Vnumber === ""
    ) {
      await db.collection("data").add({
        name,
        age,
        email,
        number,
        classx,
        cmnt,
      });
      await setModal(false);
      setopenAlert(true);
      setName("");
      setAge("");
      setEmail("");
      setNumber("");
      setClassx("none");
      setCmnt("");
      setVAge("");
      setVNumber("");
    }
  };
  return (
    <div>
      <Modal
        open={modal}
        onClose={() => {
          setModal(false);
          setName("");
          setEightten(false);
          setEleventwelve(false);
          setAge("");
          setEmail("");
          setNumber("");
          setClassx("none");
          setCmnt("");
          setVAge("");
          setVNumber("");
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            padding: 10,
            paddingInline: screenSize ? 40 : 10,
            // border: "2px solid red",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // flexWrap: "wrap",
            width: "55%",
            // height: 600,
            borderRadius: 30,
            // overflow: "scroll",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              // border: "2px solid red",
              padding: 10,
            }}
          >
            <Typography
              variant="h5"
              style={{
                fontWeight: "bolder",
                color: "#5b5c5c",
              }}
            >
              Book a Pre Counselling Session
            </Typography>
            <Button
              onClick={() => {
                setModal(false);
                setName("");
                setEightten(false);
                setEleventwelve(false);
                setAge("");
                setEmail("");
                setNumber("");
                setClassx("none");
                setCmnt("");
                setVAge("");
                setVNumber("");
              }}
              style={{
                color: "black",
                position: "absolute",
                left: "70%",
                // border: "2px solid red",
              }}
            >
              <CloseIcon />
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // border: "2px solid red",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                // border: "2px solid red",
                width: screenSize ? "100%" : "40%",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel style={{ marginBottom: 0, color: "red" }}>
                  *
                </InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 4 }}
                >
                  Full Name
                </InputLabel>
              </div>
              <TextField
                placeholder="Full Name"
                variant="outlined"
                value={name}
                error={Vname}
                helperText={Vname}
                style={{ margin: 10, width: "90%" }}
                onChange={(t) => {
                  if (t.target.value === "") {
                    setVName("Enter your correct name");
                  } else {
                    setVName("");
                  }
                  setName(t.target.value);
                }}
              />
            </div>
            <div
              style={{
                // border: "2px solid red",
                width: screenSize ? "100%" : "40%",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel style={{ marginBottom: 0, color: "red" }}>
                  *
                </InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 12 }}
                >
                  Age
                </InputLabel>
              </div>
              <TextField
                placeholder="Age"
                variant="outlined"
                helperText={Vage}
                error={Vage}
                value={age}
                style={{ margin: 10, width: "90%" }}
                onChange={(t) => {
                  if (t.target.value === "" || isNaN(t.target.value)) {
                    setVAge("Enter your correct age");
                  } else {
                    setVAge("");
                  }
                  setAge(t.target.value);
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // border: "2px solid red",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: screenSize ? "100%" : "40%",
                // border: "2px solid red",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel style={{ marginBottom: 0, color: "red" }}>
                  *
                </InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 4 }}
                >
                  Email id
                </InputLabel>
              </div>
              <TextField
                placeholder="Enter Email Id"
                variant="outlined"
                value={email}
                helperText={Vemail}
                error={Vemail}
                style={{ margin: 10, width: "90%" }}
                onChange={(t) => {
                  if (t.target.value === "") {
                    setVEmail("Enter your correct email id");
                  } else {
                    setVEmail("");
                  }
                  setEmail(t.target.value);
                }}
              />
            </div>
            <div
              style={{
                width: screenSize ? "100%" : "40%",
                // border: "2px solid red",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel style={{ marginBottom: 0, color: "red" }}>
                  *
                </InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 4 }}
                >
                  Phone number
                </InputLabel>
              </div>
              <TextField
                placeholder="Phone Number"
                variant="outlined"
                value={number}
                helperText={Vnumber}
                error={Vnumber}
                inputProps={{ inputMode: "numeric" }}
                style={{ margin: 10, width: "90%" }}
                onChange={(t) => {
                  if (t.target.value === "" || isNaN(t.target.value)) {
                    setVNumber("Enter your correct mobile number");
                  } else {
                    setVNumber("");
                  }
                  setNumber(t.target.value);
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // border: "2px solid red",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                // border: "2px solid red",
                width: screenSize ? "100%" : "81%",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel style={{ marginBottom: 0, color: "red" }}>
                  *
                </InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 4 }}
                >
                  Class
                </InputLabel>
              </div>
              {eightten ? (
                <TextField
                  select
                  error={Vclassx === "none" ? "" : Vclassx}
                  helperText={Vclassx === "none" ? "" : Vclassx}
                  value={classx}
                  onChange={(v) => {
                    if (v.target.value === "none") {
                      setVClassx("Enter your class");
                    } else {
                      setVClassx("none");
                    }
                    setClassx(v.target.value);
                  }}
                  InputProps={{
                    style: {
                      color: classx === "none" ? "#aaaaaa" : "black",
                    },
                  }}
                  style={{
                    margin: 10,
                    width: screenSize ? "90%" : "95%",
                  }}
                >
                  <MenuItem value="none" disabled style={{ color: "red" }}>
                    Enter your class
                  </MenuItem>

                  <MenuItem value={8}>8th</MenuItem>
                  <MenuItem value={9}>9th</MenuItem>
                  <MenuItem value={10}>10th</MenuItem>
                </TextField>
              ) : null}
              {eleventwelve ? (
                <TextField
                  select
                  error={Vclassx === "none" ? "" : Vclassx}
                  helperText={Vclassx === "none" ? "" : Vclassx}
                  value={classx}
                  onChange={(v) => {
                    if (v.target.value === "none") {
                      setVClassx("Enter your class");
                    } else {
                      setVClassx("none");
                    }
                    setClassx(v.target.value);
                  }}
                  InputProps={{
                    style: {
                      color: classx === "none" ? "#aaaaaa" : "black",
                    },
                  }}
                  style={{
                    margin: 10,
                    width: screenSize ? "90%" : "95%",
                  }}
                >
                  <MenuItem value="none" disabled style={{ color: "red" }}>
                    Enter your class
                  </MenuItem>

                  <MenuItem value={11}>11th</MenuItem>
                  <MenuItem value={12}>12th</MenuItem>
                </TextField>
              ) : null}
              {eightten === false && eleventwelve === false ? (
                <TextField
                  select
                  error={Vclassx === "none" ? "" : Vclassx}
                  helperText={Vclassx === "none" ? "" : Vclassx}
                  value={classx}
                  onChange={(v) => {
                    if (v.target.value === "none") {
                      setVClassx("Enter your class");
                    } else {
                      setVClassx("none");
                    }
                    setClassx(v.target.value);
                  }}
                  InputProps={{
                    style: {
                      color: classx === "none" ? "#aaaaaa" : "black",
                    },
                  }}
                  style={{
                    margin: 10,
                    width: screenSize ? "90%" : "95%",
                  }}
                >
                  <MenuItem value="none" disabled style={{ color: "red" }}>
                    Enter your class
                  </MenuItem>
                  <MenuItem value={6}>6th</MenuItem>
                  <MenuItem value={7}>7th</MenuItem>
                  <MenuItem value={8}>8th</MenuItem>
                  <MenuItem value={9}>9th</MenuItem>
                  <MenuItem value={10}>10th</MenuItem>
                  <MenuItem value={11}>11th</MenuItem>
                  <MenuItem value={12}>12th</MenuItem>
                </TextField>
              ) : null}
            </div>
          </div>
          <div
            style={{
              // border: "2px solid red",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: screenSize ? "100%" : "81%" }}>
              <InputLabel style={{ margin: 10, marginBottom: 0 }}>
                Problem that you are facing
              </InputLabel>
              <TextField
                placeholder="Comment"
                variant="outlined"
                value={cmnt}
                multiline
                rows={4}
                style={{ margin: 10, width: screenSize ? "90%" : "95%" }}
                onChange={(t) => setCmnt(t.target.value)}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Button
              variant="contained"
              style={{
                width: "40%",
                backgroundColor: "#fccc14",
                padding: 10,
                color: "black",
              }}
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Submitted Successfully"
        action={action}
      />
    </div>
  );
}

export default ModalPage;
