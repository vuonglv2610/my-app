import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AdminLayout from './layouts/Admin.tsx';
import ClientLayout from './layouts/Client.tsx';
import Dashboard from './pages/Dashboard.tsx';
import ProductsList from './pages/Products.tsx';
import NotFoundPage from './pages/404.tsx';
import HomePage from './components/HomePage.tsx';
import Gallery from './components/Gallery.tsx';
import AOS from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css";
import LoginPage from './pages/Login.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<ClientLayout />} >
        <Route index element={<HomePage />} />
        <Route path='/product' element={<ProductsList />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/404' element={<NotFoundPage />} />
      </Route>
      <Route path="admin" element={<AdminLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="product" element={<ProductsList />} />
      </Route>
    </Route>
  )
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
