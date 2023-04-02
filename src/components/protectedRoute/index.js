import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const token = Cookies.get("jwt_token");
  if (token === undefined) {
    return (window.location.href = "/login");
  }
  return { ...props };
};

export default ProtectedRoute;
