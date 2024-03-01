import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from "./components/dashboard.tsx";
import ProductsList from "./components/products.tsx";
import AdminLayout from './layouts/Admin.tsx';
import ClientLayout from './layouts/Client.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<ClientLayout />} />
      <Route path="admin" element={<AdminLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="product" element={<ProductsList />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
