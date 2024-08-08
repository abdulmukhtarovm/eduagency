// import React from 'react'
import { getText } from '../locales';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>


      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="container">
            <div className="row align-items-center justify-content-md-center">

              <div className="col-lg-7 col-md-10" style={{ zIndex: 12 }}>
                <div className="info">
                  <h1>Muracaat İşlemleri</h1>
                  <p>
                    Ajans, Türkiye ve Özbekistan'daki eğitim kurumlarına başvuru sürecini kolaylaştırmak için kapsamlı destek sağlar. Öğrencilerin ve akademisyenlerin gerekli belgeleri toplama, başvuru formlarını doldurma ve süreçle ilgili danışmanlık alma konularında rehberlik eder.
                  </p>
                  <div className="myBtn">
                    <Link to="/application">Detaylı bilgi</Link>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row align-items-center justify-content-md-center">

              <div className="col-lg-7 col-md-10" style={{ zIndex: 12 }}>
                <div className="info">
                  <h1>Öğrenci Transferi</h1>
                  <p>
                    Eğitim ajansı, Türkiye ve Özbekistan arasındaki öğrenci transferlerini kolaylaştırmak için çalışır. Öğrencilerin uygun eğitim kurumlarına yerleştirilmesi, kredi transferleri ve adaptasyon süreçleri konusunda yardımcı olur.

                  </p>
                  <div className="myBtn">
                    <Link to="/student-transfer">Detaylı bilgi</Link>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row align-items-center justify-content-md-center">

              <div className="col-lg-7 col-md-10" style={{ zIndex: 12 }}>
                <div className="info">
                  <h1>Uzman Transferi</h1>
                  <p>
                    Ajans, iki ülke arasındaki akademik ve uzman personel değişimini destekler. Uzman transferi programları sayesinde, akademisyenler ve uzmanlar bilgi ve deneyimlerini paylaşarak eğitim kalitesini artırırlar
                  </p>
                  <div className="myBtn">
                    <Link to="/expert-transfer">Detaylı bilgi</Link>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row align-items-center justify-content-md-center">

              <div className="col-lg-7 col-md-10" style={{ zIndex: 12 }}>
                <div className="info">
                  <h1>Akademik Tur ve Fuar Organizasyonları</h1>

                  <p>
                    Türkiye-Özbekistan Eğitim İş Birliği Ajansı, akademik tur ve fuar organizasyonları düzenleyerek, eğitim kurumlarının tanıtımını yapar ve iki ülke arasındaki akademik iş birliğini teşvik eder. Bu etkinlikler, öğrenciler ve akademisyenler için yeni fırsatlar yaratır.

                  </p>
                  <div className="myBtn">
                    <Link to="/">Detaylı bilgi</Link>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row align-items-center justify-content-md-center">

              <div className="col-lg-7 col-md-10" style={{ zIndex: 12 }}>
                <div className="info">
                  <h1>Üniversiteler Arası İş Birliği Danışmanlığı</h1>
                  <p>
                    Ajans, Türkiye ve Özbekistan'daki üniversiteler arasında iş birliği fırsatlarını artırmak için danışmanlık hizmetleri sunar. Ortak projeler, müfredat geliştirme ve akademik değişim programları gibi konularda rehberlik eder.
                  </p>
                  <div className="myBtn">
                    <Link to="/">Detaylı bilgi</Link>
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
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Header
