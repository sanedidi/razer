import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='footer'>
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__links">
                    <div className="footer__box">
                        <Link className='footer__link bold' to={'/'}>Shop</Link>
                        <Link className='footer__link' to={'/'}>RazerStores</Link>
                        <Link className='footer__link' to={'/'}>RazerCafe</Link>
                        <Link className='footer__link' to={'/'}>Store Location</Link>
                        <Link className='footer__link' to={'/'}>Purchase Programs</Link>
                        <Link className='footer__link' to={'/'}>Exclusives</Link>
                    </div>
                    <div className="footer__box">
                        <Link className='footer__link bold' to={'/'}>Shop</Link>
                        <Link className='footer__link' to={'/'}>RazerStores</Link>
                        <Link className='footer__link' to={'/'}>RazerCafe</Link>
                        <Link className='footer__link' to={'/'}>Store Location</Link>
                        <Link className='footer__link' to={'/'}>Purchase Programs</Link>
                        <Link className='footer__link' to={'/'}>Exclusives</Link>
                    </div>
                    <div className="footer__box">
                        <Link className='footer__link bold' to={'/'}>Shop</Link>
                        <Link className='footer__link' to={'/'}>RazerStores</Link>
                        <Link className='footer__link' to={'/'}>RazerCafe</Link>
                        <Link className='footer__link' to={'/'}>Store Location</Link>
                        <Link className='footer__link' to={'/'}>Purchase Programs</Link>
                        <Link className='footer__link' to={'/'}>Exclusives</Link>
                    </div>
                    <div className="footer__box">
                        <Link className='footer__link bold' to={'/'}>Shop</Link>
                        <Link className='footer__link' to={'/'}>RazerStores</Link>
                        <Link className='footer__link' to={'/'}>RazerCafe</Link>
                        <Link className='footer__link' to={'/'}>Store Location</Link>
                        <Link className='footer__link' to={'/'}>Purchase Programs</Link>
                        <Link className='footer__link' to={'/'}>Exclusives</Link>
                    </div>
                </div>
                <div className="footer__soc">
                    <h2 className="footer__soc-title">
                    FOR GAMERS. BY GAMERS.™
                    </h2>
                    <div className="footer__logo">
                        <img src="https://razer-shop.netlify.app/static/media/facebook.6d206ecad05f831d58c69260d311e89a.svg" alt="" />
                        <img src="https://razer-shop.netlify.app/static/media/inst.fbfd248812615df77ea3ccdfdca75b54.svg" alt="" />
                        <img src="https://razer-shop.netlify.app/static/media/twitter.991caa5f81fb29441a7956367c45896a.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer