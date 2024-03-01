import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AdminLayout from './layouts/Admin.tsx';
import ClientLayout from './layouts/Client.tsx';
import Dashboard from './pages/Dashboard.tsx';
import ProductsList from './pages/Products.tsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<ClientLayout />} />
      <Route path="admin" >
        <Route index element={<AdminLayout />} />
        <Route path='dashboard' element={<Dashboard />} />
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
