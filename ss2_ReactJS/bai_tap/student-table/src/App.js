import logo from './logo.svg';
import './App.css';
import {students} from './service/student.js';
import StudentTable from './component/StudentTable.js';

function App() {
  return (
    <>
      <StudentTable />
    </>
  )
}

export default App;
