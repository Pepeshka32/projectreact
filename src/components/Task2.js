import { Link, Outlet  } from 'react-router-dom';

export const MainPage = () => (
    <>
  <nav>
    <ul>
      <li>
        <Link to="/UserForm">UserForm</Link>
      </li>
      <li>
        <Link to="/Reg">Registration</Link>
      </li>
    </ul>  
  </nav>
   <hr/>  

  <Outlet/>
  
  <hr/>  
  </>

);