import logo from './logo.svg';
import {Routes,BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/layouts/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
