import React, { useContext, useState } from 'react'
import './navbar.scss'
import {Search, Notifications, ArrowDropDown, ExitToApp} from '@material-ui/icons'
import { Link } from 'react-router-dom';
import { logout } from '../../authContext/apiCalls';
import { AuthContext } from '../../authContext/AuthContext';




const NavBar = () => {  

    const [isScrolled, setIsScrolled] = useState(false);
  const { user,dispatch } = useContext(AuthContext);
 
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll= null);
    };
    
    const handleLogout = (e) => {
        e.preventDefault();
        logout(dispatch);
        console.log(user)

    }
    return (
        <div className={isScrolled ? 'navBar scrolled' :'navBar'}>
            <div className='container'>
                <div className='left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'  alt=''></img>
               <Link className="Link" to="/">
                <span>Home Page</span>
               </Link>
               <Link className="Link"  to="/movies">
                <span className="navbarmain">Movies</span>
                </Link>
                <Link className="Link"  to="/series">
                <span className="navbarmain"> Series</span>
                </Link>
                <span>New and Popular</span>
                <span>My List</span>

                

                </div>
                <div className='right'>

                    <Search className='icon'/>
                    <span> Kids</span>
                    <Notifications  className='icon'/>
                    <img src={JSON.parse(localStorage.getItem('user')).profilepic} alt=''/>
                    {/* <ExitToApp className='icon' /> */}
                    <div className='profile'>
                    <ArrowDropDown className='icon'/>
                        <div className='options'>
                            <span> Settings</span>
                            <span onClick={handleLogout}> logout</span>
                        </div>
                    
                    </div>                    
                </div>
                
                
                </div>


        </div>
    )
}

export default NavBar
