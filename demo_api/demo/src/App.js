import logo from './logo.svg';
import './App.css';
import ListComponent from './component/ListComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from './component/HomeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import DetailComponent from './component/DetailComponent';
import AddComponent from './component/AddComponent';
import { ToastContainer } from 'react-toastify'
import HeaderComponent from './component/HeaderComponent';
import UpdateComponent from './component/UpdateComponent';

function App() {
  return (
    <>

      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path="/list" element={<ListComponent />} />
          <Route path='/detail/:id' element={<DetailComponent />} />
          <Route path='/add' element={<AddComponent />} />
          <Route path='/update/:id' element={<UpdateComponent />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
