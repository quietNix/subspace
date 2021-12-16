import './App.scss';
import { HashRouter, Route, Routes } from "react-router-dom";
import Signup from './pages/signup/Signup';
import OTP from './pages/otp/OTP';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Signup />}></Route>
        <Route path='/otp' element={<OTP />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
