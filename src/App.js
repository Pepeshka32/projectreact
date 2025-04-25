import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header.js';
import { AboutUs } from './components/abous us.js';
import { Conection } from './components/connection.js';
import { Main } from './components/main.js';
import { Prefooter } from './components/prefooter.js';
import { Footer } from './components/footer.js';


function App() {
  return (
    <BrowserRouter>
<Main/>
    </BrowserRouter>


  );
}

export default App;