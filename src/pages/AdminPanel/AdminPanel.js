import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Header from "../../components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlashLight } from "react-icons/pi";
import Login from "../Login/Login";

const AdminPanel = () => {
  const nav = useNavigate();
  const [look1, setLook1] = useState(false);
  const [look2, setLook2] = useState(false);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    companyName: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
  });

  const handleClose = () => {
    setOpen(false);
    setFormData({
      username: "",
      companyName: "",
      email: "",
      mobileNo: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = (e) => {
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const tableData = [
    {
      userName: "Subham Parida",
      companyName: "Orive Solutions",
      mobileNumber: "9443875824",
      email: "subhamparidamain@gmail.com",
      status: "Active",
    },
    {
      userName: "Jessica Smith",
      companyName: "Tech Innovations LLC",
      mobileNumber: "9876543210",
      email: "j.smith@example.com",
      status: "Active",
    },
    {
      userName: "John Doe",
      companyName: "GlobalTech Solutions",
      mobileNumber: "1234567890",
      email: "john.doe@globaltech.com",
      status: "Inactive",
    },
    {
      userName: "Emily Johnson",
      companyName: "BlueSky Enterprises",
      mobileNumber: "5558889999",
      email: "emily.j@example.org",
      status: "Active",
    },
    {
      userName: "Michael Anderson",
      companyName: "DataGenius Inc.",
      mobileNumber: "7778889999",
      email: "m.anderson@datagenius.net",
      status: "Inactive",
    },
    {
      userName: "Sophia Patel",
      companyName: "Alpha Solutions",
      mobileNumber: "9993334445",
      email: "sophia.p@example.net",
      status: "Active",
    },
    {
      userName: "Sophia Patel",
      companyName: "Alpha Solutions",
      mobileNumber: "9993334445",
      email: "sophia.p@example.net",
      status: "Active",
    },
    {
      userName: "Sophia Patel",
      companyName: "Alpha Solutions",
      mobileNumber: "9993334445",
      email: "sophia.p@example.net",
      status: "Active",
    },
    {
      userName: "Sophia Patel",
      companyName: "Alpha Solutions",
      mobileNumber: "9993334445",
      email: "sophia.p@example.net",
      status: "Active",
    },
    {
      userName: "Sophia Patel",
      companyName: "Alpha Solutions",
      mobileNumber: "9993334445",
      email: "sophia.p@example.net",
      status: "Active",
    },
    {
      userName: "Sophia Patel",
      companyName: "Alpha Solutions",
      mobileNumber: "9993334445",
      email: "sophia.p@example.net",
      status: "Active",
    },
  ];

  const removeItem = (index) => {
    const updatedData = tableData.map((elem, i) => {
      return index !== i;
    });
  };

  const buttonCheck =
    formData.username.length > 0 &&
    formData.companyName.length > 0 &&
    formData.email.length > 0 &&
    formData.mobileNo.length > 0 &&
    formData.password.length > 0 &&
    formData.confirmPassword.length > 0;

  const handleSave = async () => {
    await axios
      .post("http://localhost:3000/register", formData)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };

  console.log(formData);

  return (
    <>
      {localStorage.getItem("AuthToken") ? (
        <div>
          <Header setOpen={setOpen}/>
          <div className="above-table px-5 py-4">
            <div className="fs-5" style={{ fontWeight: "600" }}>
              Registered Client List
            </div>
            <div className="search-bar-header">
              <input
                className="search-input"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="search-button">Search</button>
            </div>
          </div>
          <div className="table-section">
            <div className="table">
              <table id="table">
                <thead>
                  <tr>
                    <th className=""></th>
                    <th>User Name</th>
                    <th>Company Name</th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData
                    .filter((elem) => {
                      if (search.length === 0) {
                        return elem;
                      }
                      return (
                        elem.userName
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        elem.companyName
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        elem.mobileNumber.toString().includes(search) ||
                        elem.email
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        elem.status.toLowerCase().includes(search.toLowerCase())
                      );
                    })
                    .map((item, index) => (
                      <tr>
                        <td style={{ paddingLeft: "15px" }}>{index + 1}</td>
                        <td>{item.userName}</td>
                        <td>{item.companyName}</td>
                        <td>{item.mobileNumber}</td>
                        <td>{item.email}</td>
                        <td className="">
                          <div
                            className={`${
                              item.status === "Active"
                                ? "table-status-green"
                                : "table-status-red"
                            }`}
                          >
                            {item.status}
                          </div>
                        </td>
                        <td
                          className="text-center fs-5"
                          style={{ color: "red" }}
                          onClick={(e) => removeItem(index)}
                        >
                          <AiOutlineDelete />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <Modal
            className="buyer-form-modal"
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div
              className="buyer-form-container"
              style={{ position: "relative" }}
            >
              <span> LETS GET STARTED</span>
              <h3>Create An Account</h3>
              <br />
              <RxCrossCircled
                className="buyer-form-cross"
                onClick={handleClose}
              />
              <form onSubmit={handleSubmit}>
                <div className="data-input-fields">
                  <TextField
                    margin="dense"
                    label="User Name"
                    placeholder="johnson_doe"
                    type="text"
                    fullWidth
                    name="username"
                    id="username"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formData.username}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>

                <div className="data-input-fields">
                  <TextField
                    margin="dense"
                    label="Company Name"
                    placeholder="Johnson doe"
                    type="text"
                    fullWidth
                    name="companyName"
                    id="companyName"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formData.companyName}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <div className="data-input-fields">
                  <TextField
                    margin="dense"
                    label="Email"
                    placeholder="Johnson doe"
                    type="email"
                    fullWidth
                    name="email"
                    // id="email"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formData.email}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <div className="data-input-fields">
                  <TextField
                    margin="dense"
                    label="Mobile Number"
                    placeholder="9876245363"
                    type="number"
                    fullWidth
                    name="mobileNo"
                    id="mobileNo"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formData.mobileNo}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <div className="data-input-fields" id="eye-id">
                  <TextField
                    margin="dense"
                    label="Password"
                    placeholder="*******"
                    type={`${look1 ? "text" : "password"}`}
                    fullWidth
                    name="password"
                    id="password"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formData.password}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                  {look1 ? (
                    <PiEyeLight
                      className="eye"
                      onClick={() => setLook1(false)}
                    />
                  ) : (
                    <PiEyeSlashLight
                      className="eye"
                      onClick={() => setLook1(true)}
                    />
                  )}
                </div>
                <div className="data-input-fields" id="eye-id">
                  <TextField
                    margin="dense"
                    label="Confirm Password"
                    placeholder="*******"
                    type={`${look2 ? "text" : "password"}`}
                    fullWidth
                    name="confirmPassword"
                    id="confirmPassword"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                  {look2 ? (
                    <PiEyeLight
                      className="eye"
                      onClick={() => setLook2(false)}
                    />
                  ) : (
                    <PiEyeSlashLight
                      className="eye"
                      onClick={() => setLook2(true)}
                    />
                  )}
                </div>

                <div className="data-buttons mt-3">
                  <Button
                    id="input-btn-submit"
                    className="submit"
                    type="submit"
                    variant="outlined"
                    // onClick={handleSave}
                    disabled={buttonCheck ? false : true}
                  >
                    Register
                  </Button>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    fontSize: "12px",
                    gap: "10px",
                    marginTop: "20px",
                  }}
                >
                  <p>Already Have an Account ?</p>{" "}
                  <div
                    style={{ fontWeight: "600", cursor: "pointer" }}
                    onClick={() => nav("/login")}
                  >
                    LOGIN HERE{" "}
                  </div>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default AdminPanel;
