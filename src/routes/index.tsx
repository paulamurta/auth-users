import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
const RoutesMain = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#343B41",
              color: "#F8F9FA",
              border: "3px solid #3FE864",
            },
          },
          error: {
            style: {
              background: "#343B41",
              color: "#F8F9FA",
              border: "3px solid #E83F5B",
            },
          },
        }}
        position="top-right"
        reverseOrder={false}
      />

      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/contacts" element={<Contacts />} /> */}
      </Routes>
    </>
  );
};

export default RoutesMain;
