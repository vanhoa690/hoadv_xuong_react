import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

const routeConfig = [
  { path: "/", element: <Homepage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

function App() {
  const routes = useRoutes(routeConfig);
  return <main>{routes}</main>;
}

export default App;
