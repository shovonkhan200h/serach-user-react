import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import User from './Component/User/User';
import UserDetails from './Component/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
        {/* <User></User> */}
        <BrowserRouter>
          <Routes>
            <Route  path='/' element={<User></User>}></Route>
            <Route ></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
