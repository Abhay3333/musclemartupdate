import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './component/Login';
import Home from './component/Home';
import Signup from './component/Signup';
import NewPassword from './component/NewPassword';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/newpassword' element={<NewPassword/>}/>


        
      </Routes>
    </Router>
    </>
  );
}

export default App;
