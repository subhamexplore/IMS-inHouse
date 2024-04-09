import React, { useState } from "react";
import character from "../assets/images/login-char.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgetPassword = () => {
    const nav = useNavigate();
  const [formData, setFormData] = useState({
    email:"",
   
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = async () => {
    await axios
      .post("http://localhost:3000/forgetpassword", formData)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="login-section">
      <div className="login-form">
        <div className="login-form-left">
          <div className="login-left-text">
            <p className="fs-2" style={{ color: "white", fontWeight: "600" }}>
              LOGO
            </p>
            <p className="fs-6" style={{ color: "white" }}>
              Welcome to our Inventory Management System! Please log in or
              register to access your inventory data and streamline your
              business operations.
            </p>
          </div>
          <div className="char-img-div">
            <img className="char-img" src={character} alt="" />
          </div>
        </div>
        <div className="login-form-right">
          <form action="">
            <p >RESET PASSWORD</p>
            <p className="fs-4" style={{ fontWeight: "600" }}>
             Enter your email to get instruction
            </p>
            <div className="data-input-fields-login mt-4">
              <TextField
                margin="dense"
                label="Email"
                placeholder="johnson_doe"
                type="email"
                fullWidth
                name="email"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.email}
                onChange={(e) => handleInputChange(e)}
                required
                id="form-textfield"
              />
            </div>

          <div className="data-buttons">
              <Button
                id="input-btn-submit"
                className="submit"
                type="submit"
                variant="outlined"
                onClick={() => nav("/new-password")}
                //   onClick={handleSave}
                // disabled={buttonCheck ? false : true}
              >
               SEND
              </Button>
            </div>

            <div
             className="flex-grp"
            >
              <p>New User ?</p>{" "}
              <div
                style={{ fontWeight: "600", cursor: "pointer" }}
                onClick={() => nav("/login")}
              >
                SIGN UP HERE{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword