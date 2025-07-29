import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { ToastContainer } from 'react-toastify'
import ListComponent from './components/ListComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
import AddComponent from './components/AddComponent';
import DetailComponent from './components/DetailComponent';
import UpdateComponent from './components/UpdateComponent';
import LoginComponent from './components/LoginComponent';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <HeaderComponent />
        <Routes>
          <Route path='/list' element={<ListComponent />} />
          <Route path='/' element={<HomeComponent />} />
          <Route path='/add' element={<AddComponent />} />
          <Route path='/detail/:id' element={<DetailComponent />} />
          <Route path='/update/:id' element={<UpdateComponent />} />
          <Route path='/login' element={<LoginComponent />} />
        </Routes>
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
