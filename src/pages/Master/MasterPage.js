
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { TextField } from "@mui/material";
import Header from "../../components/Header";
import zIndex from "@mui/material/styles/zIndex";
const Master = () => {
    const navigation = useNavigate();
    const [error, setError] = useState("#D5D4D2");
  
    const [open, setOpen] = useState(false);
  
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const [showGstinInput, setShowGstinInput] = useState(true);

    const [formData, setFormData] = useState({
      gstin: " ",
      companyName: "",
      address1: "",
      address2: "",
      country: "",
      state: "",
      pincode: "",
      mobileNumber: "",
      email: "",
      registrationType: "",
    });
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSave = async () => {
      await axios
        .post("http://localhost:3500/buyers-suppliers", formData)
        .then((result) =>
          result.data === "success" ? navigation("/dashboard") : setError("red")
        )
        .catch((err) => console.log(err));
    };
  
    const cancelButton = () => {
      handleClose();
      setFormData({
        gstin: " ",
        companyName: "",
        address1: "",
        address2: "",
        country: "",
        state: "",
        pincode: "",
        mobileNumber: "",
        email: "",
        resgitrationType: "",
      });
    };
  
    const handleSubmit = (e) => {
      console.log("Form submitted:", formData);
    };
  
    return (
        <div>
         <div className='header'>
        <div className='' style={{fontSize:"1.5rem"}}>LOGO</div>
        
    </div>
      <div
          className="master-container"
         style={{ position: "relative",padding:"0 50px" ,zIndex:"-1"}}
        >
          <div className="master-head mb-4">
            <div className="master-title">Create Company</div>
            <div className="master-buttons-2 " style={{ marginTop: "28px"}}>
              <Button
                id="master-btn-gst"
                className={`submit ${showGstinInput ? 'blue' : 'white'}`}
                type="submit"
                variant="outlined"
                onClick={()=>setShowGstinInput(true)}              >
                <Form.Check type="radio" aria-label="radio 1"
                 />
               <div className={`${showGstinInput ? 'clBlue' : 'clWhite'}`}
               > With gst</div>
              </Button>
  
              <Button
                id="master-btn-gst2"
                className={`submit ${showGstinInput ? 'white' : 'blue'}`}
                type="submit"
                variant="outlined"
                onClick={()=>setShowGstinInput(false)}              >
              
                <Form.Check type="radio" aria-label="radio 1" />    
               <div className={`${showGstinInput ? 'clWhite' : 'clBlue'}`}
               > Non- gst</div>
              </Button>
            </div>
          </div>
  
          <hr />
          <form onSubmit={handleSubmit}>
          {(showGstinInput && (
            <div className="master-input-label">
              <label style={{fontSize:"18px",fontWeight:"500"}}>GSTIN</label>
              <TextField
                className="master-input"
                margin="dense"
                type="number"
                fullWidth
                name="gstin"
                id="gstin"
                placeholder="24XXXXXXXXXXXXXX"
                value={formData.gstin}
                onChange={(e) => handleInputChange(e)}
                required
              />
              <span>Enter your 15 digit GSTIN number</span>
            </div>
            ))}
            <div className="mt-4 mb-4">
              <h5>GSTIN Legal Information</h5>
            </div>
  
            <div className="master-input-fields mt-2">
              <div className="master-input-label">
                <label style={{fontSize:"18px",fontWeight:"500"}}>Company Name</label>
                <TextField
                  className="master-input"
                  margin="dense"
                  type="text"
                  fullWidth
                  name="companyName"
                  id="companyName"
                  placeholder="Enter Name"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
  
              <div className="master-input-label">
                <label style={{fontSize:"18px",fontWeight:"500"}}>Mobile Number</label>
                <TextField
                  className="master-input"
                  margin="dense"
                  type="number"
                  fullWidth
                  placeholder="Enter Mobile Number"
                  name="payAmount"
                  id="payAmount"
                  value={formData.payAmount}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
            </div>
  
            <div className="master-input-fields mt-2">
              <div className="master-input-label">
                <label style={{fontSize:"18px",fontWeight:"500"}}>Address Line1</label>
                <TextField
                  className="master-input"
                  margin="dense"
                  type="text"
                  fullWidth
                  placeholder="Enter adress"
                  name="address1"
                  id="address1"
                  value={formData.address1}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
  
              <div className="master-input-label">
                <label style={{fontSize:"18px",fontWeight:"500"}}>Address Line2</label>
                <TextField
                  className="master-input"
                  margin="dense"
                  type="text"
                  fullWidth
                  placeholder="Enter adress"
                  name="address2"
                  id="address2"
                  value={formData.address2}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
            </div>
  
            <div className="master-input-fields mt-2">
              <div className="master-input-label">
                <label style={{fontSize:"18px",fontWeight:"500"}}>Country</label>
                <TextField
                  className="master-input"
                  margin="dense"
                  type="text"
                  fullWidth
                  name="country"
                  id="country"
                  placeholder="Enter country name"
                  value={formData.country}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
              <div className="master-input-label">
                <label style={{fontSize:"18px",fontWeight:"500"}}>Pincode</label>
                <TextField
                  className="master-input"
                  margin="dense"
                  type="number"
                  fullWidth
                  placeholder="751024"
                  name="pincode"
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
            </div>
  
            <div className="master-input-fields mt-2">
              <div className="master-input-label">
                <label style={{fontSize:"18px",fontWeight:"500"}}>State</label>
                <TextField
                  className="master-input"
                  margin="dense"
                  type="text"
                  fullWidth
                  name="state"
                  id="state"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
  
              <div className="master-input-label">
                <label style={{fontSize:"18px",fontWeight:"500"}}>Email</label>
                <TextField
                  className="master-input"
                  margin="dense"
                  type="email"
                  fullWidth
                  placeholder="Enter Your Email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
            </div>
            <div className="master-input-fields mt-2">
              <div className="master-input-label">
                <label style={{fontSize:"18px",fontWeight:"500"}}>Mobile Number</label>
                <TextField
                  className="master-input"
                  margin="dense"
                  type="number"
                  fullWidth
                  placeholder="1234789"
                  name="mobileNumber"
                  id="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
  
              <div className="master-input-label">
                <label style={{fontSize:"18px",fontWeight:"500"}}>Registration Type</label>
                <TextField
                  className="master-input"
                  margin="dense"
                  type="text"
                  fullWidth
                  placeholder="Regular (With GST)"
                  name="registrationtype"
                  id="registrationtype"
                  value={formData.registrationtype}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
            </div>
            <div className="master-buttons mt-5 gap-5">
              <Button
                id="master-btn-submit"
                className="submit"
                type="submit"
                variant="outlined"
                onClick={handleSave}
  
                //   disabled={buttonCheck?false:true}
              >
                CREATE
              </Button>
              <Button
                id="master-btn-cancel"
                className="cancel"
                onClick={cancelButton}
                variant="outlined"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
        </div>
    );
}

export default Master;

