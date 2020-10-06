import React from 'react';
import './Footer.css';
// import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Что-то можно написать
        </p>
        <p className='footer-subscription-text'>
        Что-то можно написать
        </p>
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Что-то можно написать</Button>
          </form>
        </div> */}
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>О библиотеке</h2>
            <Link to='/sign-up'>Слово</Link>
            <Link to='/'>Слово</Link>
            <Link to='/'>Слово</Link>
            <Link to='/'>Слово</Link>
            <Link to='/'>Слово</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Контакты</h2>
            <Link to='/'>Слово</Link>
            <Link to='/'>Слово</Link>
            <Link to='/'>Слово</Link>
            <Link to='/'>Слово</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Текст</h2>
            <Link to='/'>Слово</Link>
            <Link to='/'>Слово</Link>
            <Link to='/'>Слово</Link>
            <Link to='/'>Слово</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Что-то</h2>
            <Link to='/'>Слово</Link>
            <Link to='/'>Слово</Link>
            <Link to='/'>Слово</Link>
            <Link to='/'>Слово</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Библиотека
              <i class='fas fa-book' />
            </Link>
          </div>
          <small class='website-rights'>© 2020</small>
          {/* <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;