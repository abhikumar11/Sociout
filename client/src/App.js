import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Profile from "./components/Profile";
function App() {
  return (
    <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
          </Routes>
          <Routes>
            <Route path="/home" element={<HomePage/>}/>
          </Routes>
          <Routes>
            <Route path="/profile/:userId" element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
