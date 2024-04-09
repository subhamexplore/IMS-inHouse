import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
// import Header from './components/Header';
import Login from "./pages/Login/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Master from "./pages/Master/MasterPage";
import ForgetPassword from './components/ForgetPassword'
import NewPassword from './components/NewPassword'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgba(80, 56, 237, 1)",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes>
          <Route path="/" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/master" element={< Master/>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
