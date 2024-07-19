
import {Routes,BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import HomeLayout from './Components/layouts/HomeLayout';
import Home from './Components/pages/Home';
import Details from './Components/pages/Details';
import Inscription from './Components/pages/Inscription';
import Connexion from './Components/pages/Connexion';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/details' element={<Details/>}/>
          <Route path='/inscription' element={<Inscription/>}/>
          <Route path='/connexion' element={<Connexion/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
