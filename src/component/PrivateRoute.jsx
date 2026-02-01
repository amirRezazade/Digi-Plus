import { Navigate } from "react-router-dom";
import { getLocal } from "../utils/funcs";

export default function PrivateRoute({ children }) {
  let isLogin = getLocal("user") ? true : false;

  return <>{isLogin ? children : <Navigate to={"/auth"} />}</>;
}
