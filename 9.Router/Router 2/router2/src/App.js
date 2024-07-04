import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Employee from './component/Employee';
import EmployeeDetail from './component/EmployeeDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/employee' element={<Employee />}/>
        <Route path='/employee/:id' element={<EmployeeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
