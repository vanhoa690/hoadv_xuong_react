import { useRoutes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AdminProductList from "./pages/admin/product/List";
import AdminProductAdd from "./pages/admin/product/Add";
import AdminProductEdit from "./pages/admin/product/Edit";
import ClientLayout from "./layouts/ClientLayout";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/ProductDetail";

const routeConfig = [
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "product/list",
        element: <AdminProductList />,
      },
      {
        path: "product/add",
        element: <AdminProductAdd />,
      },
      {
        path: "product/edit/:id",
        element: <AdminProductEdit />,
      },
    ],
  },
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
    ],
  },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
