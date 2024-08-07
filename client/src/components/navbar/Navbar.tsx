import "./navbar.scss";
import { AiOutlineLogin,AiOutlineUserAdd, AiOutlineLogout  } from "react-icons/ai";
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
const Navbar = () => {
  const user = useSelector((state: RootState) => state.User.user);
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src="/vite.svg" alt="" />
          <span>Chatting</span>
        </div>
      </Link>
      {user?(
          <div>
            <button  
               onClick={() => window.location.reload()} 
               className="text-xl mr-2"> 
                  <AiOutlineLogout />
            </button>
          </div>
      ):(<div className="icons">
        {/* <img src="/app.svg" alt="" className="icon" /> */}
          <Link  to="/login-account" className="text-xl"> <AiOutlineLogin /></Link>
          <Link to="/register-account" className="text-xl mr-2"> <AiOutlineUserAdd/></Link>
      </div>)}
      
    </div>
  );
};

export default Navbar;
