import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './component/Login';
import Home from './component/Home';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
