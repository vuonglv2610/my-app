import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, redirect } from "react-router-dom";
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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import DetailPage from './pages/Detail.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import AuthProvider from './contexts/AuthContext.tsx';
import { getCookie } from './libs/getCookie.ts';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<ClientLayout />} loader={() => {
          const token = getCookie('accessToken')
          if (!token) return redirect('/login')
          return null
        }}>
          <Route index element={<HomePage />} />
          <Route path='/product' element={<ProductsList />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/404' element={<NotFoundPage />} />
        </Route>
        <Route path="admin" element={<AdminLayout />} loader={async () => {
          //check auth role
          // const token = getCookie('accessToken')
          // const userId = getCookie('userId')
          // const res = await get(`/users/${getCookie("userId")}`);
          // const userId = getCookie('userId')
          // if (!token && userId && res?.data?.role === 'admin') return redirect('/')
          // return null
        }} >
          <Route index element={<Dashboard />} />
          <Route path="product" element={<ProductsList />} />
          <Route path="product/:id" element={<DetailPage />} />
        </Route>
      </Route>
    )
  );

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
