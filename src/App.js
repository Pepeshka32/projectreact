import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About,NotFound } from './components/Task1'
import { MainPage } from './components/Task2';
import { MainPage2 } from './components/Task3';
import {UserForm} from './components/TaskValid1' ;
import { Reg } from './components/TaskValid2';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<MainPage2/> } >  
        <Route path="userform" element={<UserForm />} />
        <Route path="Reg" element={<Reg/>}/>
        <Route path="*" element= {<NotFound />} />   {/*подстановочный путь 404 страница*/}
       </Route>
      </Routes>
     
    </BrowserRouter>

  );
}

export default App;