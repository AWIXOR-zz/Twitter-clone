import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Profile = () => {
  return <h2>This is Profile</h2>;
};
const SignIn = () => {
  return <h2>This is Sign In</h2>;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route element={<ProtectedRoute />}>
      <Route path="profile" element={<Profile />} />
    </Route>
  </Routes>
);

export default AppRoutes;
