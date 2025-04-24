import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header.js';
import { MainPage } from './components/mainpage.js';
import { Prefooter } from './components/prefooter.js';
import { Footer } from './components/footer.js';


function App() {
  return (
    <BrowserRouter>
      <Header >
      </Header>
      <MainPage>
      </MainPage>
      <Prefooter>
      </Prefooter>
      <Footer>
      </Footer>
      <Routes>
      </Routes>
    </BrowserRouter>

  );
}

export default App;