import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css';

export const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Библиотека <i class="fas fa-book"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Главная</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/exhibitions" className="nav-links" onClick={closeMobileMenu}>Выставки</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/archive" className="nav-links" onClick={closeMobileMenu}>Архив</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/works" className="nav-links" onClick={closeMobileMenu}>Работы</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>О библиотеке</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links-mobile" onClick={closeMobileMenu}>Заказать книгу</Link> 
                        </li>
                    </ul>
                    { button && <Button buttonStyle='btn--outline'>Заказать книгу</Button> }
                </div>
            </nav>
        </>
    )
}
