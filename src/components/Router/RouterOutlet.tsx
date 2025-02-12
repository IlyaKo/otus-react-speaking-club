import { Navigate, Route, Routes } from "react-router";
import Home from "../../pages/Home/Home";
import SessionList from "../../pages/SessionList/SessionList";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import NotFound from "../../pages/NotFound/NotFound";
import SessionDetails from "../../pages/SessionDetails/SessionDetails";

export default function RouterOutlet() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sessions" element={<SessionList />} />
      <Route path="/sessions/:sessionId" element={<SessionDetails />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
