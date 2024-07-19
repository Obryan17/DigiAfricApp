
import {Routes,BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import HomeLayout from './Components/layouts/HomeLayout';
import Home from './Components/pages/Home';
<<<<<<< HEAD
import Details from './Components/pages/Details';
import Inscription from './Components/pages/Inscription';
import Connexion from './Components/pages/Connexion';
 
=======

>>>>>>> 482e67647c249fae221c25a6b7f2771ab5d13600
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout/>}>
          <Route index element={<Home/>} />
<<<<<<< HEAD
          <Route path='/details' element={<Details/>}/>
          <Route path='/inscription' element={<Inscription/>}/>
          <Route path='/connexion' element={<Connexion/>}/>
         </Route>
=======

        </Route>
>>>>>>> 482e67647c249fae221c25a6b7f2771ab5d13600
      </Routes>
    </BrowserRouter>
  );
}

export default App;
