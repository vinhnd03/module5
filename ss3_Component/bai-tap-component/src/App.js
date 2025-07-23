import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import Counter from './component/Counter';
import UpdateCounter from './component/UpdateCounter';
import ListComponent from './class-component/ListComponent';
import ToDoListComponent from './class-component/ToDoListComponent';
import LoginComponent from './class-component/LoginComponent';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeComponent from './class-component/HomeComponent';
import StudentTable from './class-component/StudentTable';

function App() {
  return (
    // <Welcome name="Vĩnh" />
    // <Counter />
    // <UpdateCounter />
    // <ListComponent />
    // <ToDoListComponent />
    // <LoginComponent/>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LoginComponent />} />
    //     <Route path="/home" element={<HomeComponent />} />
    //   </Routes>
    // </BrowserRouter>

    <StudentTable />

  );
}

export default App;
