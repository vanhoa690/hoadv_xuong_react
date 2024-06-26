import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "src/layouts/AdminLayout";
import ProductList from "src/pages/admin/ProductList";

const routeConfig = [
  {
    element: <ClientLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "admin/",
    element: <AdminLayout />,
    children: [{ path: "product/list", element: <ProductList /> }],
  },
];

function App() {
  const routes = useRoutes(routeConfig);
  return <main>{routes}</main>;
}

export default App;
