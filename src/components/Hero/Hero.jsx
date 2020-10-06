import React from 'react'
import { Button } from '../Button/Button';
import '../../App.css';
import './Hero.css';
import video from './video.webm';

function Hero() {
    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted />
            <h1>Библиотека СШ39</h1>
            <p>Приглашает</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="large">Русский текст</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="large">Русский текст</Button>
            </div>
        </div>
    )
}

export default Hero;
