import './App.css';
import { Router, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AdminLayout from './layouts/Admin.tsx';
import ClientLayout from './layouts/Client.tsx';
import Dashboard from './pages/Dashboard.tsx';
import ProductsList from './pages/Products.tsx';
import NotFoundPage from './pages/404.tsx';
import HomePage from './components/HomePage.tsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Routes path='/' element={<ClientLayout />} >
        <Route index element={<HomePage />} />
        <Route path='product' element={<ProductsList />} />
        <Route path='404' element={<NotFoundPage />} />
      </Routes>
      {/* <Routes path="admin" >
        <Route index element={<AdminLayout />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path="product" element={<ProductsList />} />
      </Routes> */}
    </Routes>
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
