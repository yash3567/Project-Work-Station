import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/layouts/Header";
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/header' element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
