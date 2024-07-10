
import {Routes,BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import HomeLayout from './Components/layouts/HomeLayout';
import Home from './Components/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout/>}>
          <Route index element={<Home/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
