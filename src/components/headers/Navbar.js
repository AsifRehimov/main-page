import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
// import logo from '../../Folio_files/logo';


const Navbar = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
    };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">
                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img src="../../Folio_files/logo.png" alt="logo" /> 
                    </NavLink>
                </div>
                <div className="header__middle__menus">
                    <nav className="main-nav " >
                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}
                    <ul className={boxClass.join(' ')}>
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#">creative demos<FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> designer01</NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> designer02 </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> developer01 </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> developer02 </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> agency01 </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> agency02 </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> photography01 </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> photography02 </NavLink> </li>

                            </ul>
                        </li>   
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> pages<FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}>portfolio </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> portfolio details </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> about </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> contact </NavLink> </li>


                            </ul>
                        </li>   
                        <li  className="menu-item" >
                            <NavLink onClick={toggleClass}  activeClassName='is-active' to={`/Online`}>about me.</NavLink> 
                        </li>
                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> contact. </NavLink> </li>
                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> support </NavLink> </li>

                    </ul>
                    </nav>     
                </div>   
            </div>
        </div>
    </header>
    )

    

}
export default Navbar;
