import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo1.png'
import cart_icon from '../Assets/cart_icon2.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
    const [menu,setMenu]= useState('shop');
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }

    const mainPageRedirection = () => {
        window.location.replace('/');
    }

  return (
    <div className='navbar'>
        <div className="nav-logo" onClick={mainPageRedirection}>
            <img src={logo} alt="" className='small-logo' />
            
        </div>
        <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu('shop')}}><Link className='category1' to='/'>Home</Link>{menu==='shop'?<hr style={{margin: "0rem 0"}}/>:<></>}</li>
            <li onClick={()=>{setMenu('eco-friendly')}}><Link className='category1' to='/eco-friendly'>Eco-friendly</Link>{menu==='eco-friendly'?<hr style={{margin: "0rem 0"}}/>:<></>}</li>
            <li onClick={()=>{setMenu('sustainable')}}><Link className='category1' to='/sustainable'>Sustainable</Link>{menu==='sustainable'?<hr style={{margin: "0rem 0"}}/>:<></>}</li>
            <li onClick={()=>{setMenu('greentour')}}><Link className='category1' to='/greentour'>Green Tour</Link>{menu==='greentour'?<hr style={{margin: "0rem 0"}}/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=> {
                localStorage.removeItem('auth-token');
                window.location.replace('/');
            }}>Log out</button>
            :<Link to='/login'><button>Login</button></Link> }
            <Link to='/cart'><img src={cart_icon} alt="" className='cart_icon'/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
