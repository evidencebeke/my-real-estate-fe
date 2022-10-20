import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import ActivateAccount from "./pages/ActivateAccount";
import AccountActivated from "./pages/AccountActivated";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/activate/:uid/:token" element={<ActivateAccount />} />
            <Route path="/account_activated" element={<AccountActivated />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </main>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
