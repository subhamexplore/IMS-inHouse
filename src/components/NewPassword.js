import React, { useState } from "react";
import character from "../assets/images/login-char.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlashLight } from "react-icons/pi";

const NewPassword = () => {
    const nav = useNavigate();
    const [look, setLook] = useState(false);
  const [formData, setFormData] = useState({
    password:"",
    confirmPassword:"",
   
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = async () => {
    await axios
      .post("http://localhost:3000/newpassword", formData)
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
            <p>NEW PASSWORD</p>
            <p className="fs-5" style={{ fontWeight: "600" }}>
             Enter your email to get instruction
            </p>
            <div className="data-input-fields-login mt-2" id="eye-id">
              <TextField
                margin="dense"
                label="New Password"
                placeholder="*******"
                type={`${look?"text":"password"}`}
                fullWidth
                name="passWord"
                // id="passWord"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.password}
                onChange={(e) => handleInputChange(e)}
                required
                id="form-textfield"
              />
              {
                look?<PiEyeLight className="eye" onClick={()=>setLook(false)}/>:<PiEyeSlashLight className="eye" onClick={()=>setLook(true)}/>
              }
            </div>
            <div className="data-input-fields-login mt-4" id="eye-id">
              <TextField
                margin="dense"
                label="Confirm Password"
                placeholder="*******"
                type={`${look?"text":"confirmPassword"}`}
                fullWidth
                name="confirmPassword"
                // id="passWord"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange(e)}
                required
                id="form-textfield"
              />
              {
                look?<PiEyeLight className="eye" onClick={()=>setLook(false)}/>:<PiEyeSlashLight className="eye" onClick={()=>setLook(true)}/>
              }
            </div>

          <div className="data-buttons">
              <Button
                id="input-btn-submit"
                className="submit"
                type="submit"
                variant="outlined"
                onClick={() => nav("/login")}
                //   onClick={handleSave}
                // disabled={buttonCheck ? false : true}
              >
               SAVE
              </Button>
            </div>

          
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewPassword