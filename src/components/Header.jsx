import React from 'react'
import { getText } from '../locales';

const Header = () => {
  return (
    <div className='header'>
             <div className="container">
            <div className="row align-items-center justify-content-md-center">

              <div className="col-lg-7 col-md-10" style={{ zIndex: 12 }}>
                <div className="info">
                  <h1><span>MoneyBek</span> <br /> {getText("headertitle1")} {getText("cashBack")}  </h1>
                  <p>{getText("underMainTitle")}</p>
                  <div className="buttons">
                    <div className="download">
                      <a href='#about'>{getText("more")}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-8">
                <div className="imgMobile">
                  <img className='w-100' src="img/header.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Header
