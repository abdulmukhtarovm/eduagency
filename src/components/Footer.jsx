import { faFacebookF, faInstagram, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer-top">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-2 col-sm-3 col-4">
                    <div className="logo">
                        <img className='w-100' src="img/logo-black.png" alt="" />
                    </div>
                </div>

                <div className="col-md-2 col-5">
                    <ul className="socials d-flex">
                    <li><a href="/"><FontAwesomeIcon icon={faTelegram}/></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faInstagram}/></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faFacebookF}/></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
                <ul className='footer-links'>
                    <li><a href="/">Anasayfa</a></li>
                    <li><a href="/">Bizim hizmetler</a></li>
                    <li><a href="/">Hakkimizda</a></li>
                    <li><a href="/">Iletisim</a></li>
                    <li><a href="/">Haber gonder</a></li>
                </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
