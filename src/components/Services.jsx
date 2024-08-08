import { faChalkboardUser, faFileInvoice, faGraduationCap, faGroupArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { faSitemap } from '@fortawesome/free-solid-svg-icons/faSitemap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Services = () => {
    return (
        <div className='services' id='services'>
            <div className="container">
            <h3>Hizmetler</h3>
                <div className="row justify-content-between">
                    <div className="col-md-4 col-6">
                        <div className="card">
                            <span><FontAwesomeIcon icon={faFileInvoice} /></span>
                            <h6>Muracaat İşlemleri</h6>
                            <p>
                                Ajans, Türkiye ve Özbekistan'daki eğitim kurumlarına başvuru sürecini kolaylaştırmak için kapsamlı destek sağlar. Öğrencilerin ve akademisyenlerin gerekli belgeleri toplama, başvuru formlarını doldurma ve süreçle ilgili danışmanlık alma konularında rehberlik eder.
                            </p>
                            <p>
                                Çeviri Hizmetleri, Sınav Hazırlık ve Destek, Burs Başvuru Yardımı,
                                Vize Başvuru Desteği
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div className="card">
                            <span><FontAwesomeIcon icon={faGraduationCap} /></span>

                            <h6>Öğrenci Transferi</h6>
                            <p>
                                Eğitim ajansı, Türkiye ve Özbekistan arasındaki öğrenci transferlerini kolaylaştırmak için çalışır. Öğrencilerin uygun eğitim kurumlarına yerleştirilmesi, kredi transferleri ve adaptasyon süreçleri konusunda yardımcı olur.

                            </p>
                            {/* <p>
                                UZBEKISTAN-TURKIYE: turkıyedekı unıversıtelere uzbekıstandan ograncı transfer hızmetı

                            </p> */}
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div className="card">
                            <span><FontAwesomeIcon icon={faChalkboardUser} /></span>

                            <h6>Uzman Transferi</h6>
                            <p>
                                Ajans, iki ülke arasındaki akademik ve uzman personel değişimini destekler. Uzman transferi programları sayesinde, akademisyenler ve uzmanlar bilgi ve deneyimlerini paylaşarak eğitim kalitesini artırırlar
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around mt-4">
                    <div className="col-md-4 col-6">
                        <div className="card">
                            <span><FontAwesomeIcon icon={faSitemap} /></span>

                            <h6>Akademik Tur ve Fuar Organizasyonları</h6>
                            <p>
                            Türkiye-Özbekistan Eğitim İş Birliği Ajansı, akademik tur ve fuar organizasyonları düzenleyerek, eğitim kurumlarının tanıtımını yapar ve iki ülke arasındaki akademik iş birliğini teşvik eder. Bu etkinlikler, öğrenciler ve akademisyenler için yeni fırsatlar yaratır.

                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div className="card">
                            <span><FontAwesomeIcon icon={faGroupArrowsRotate} /></span>

                            <h6>Üniversiteler Arası İş Birliği Danışmanlığı</h6>
                            <p>
                            Ajans, Türkiye ve Özbekistan'daki üniversiteler arasında iş birliği fırsatlarını artırmak için danışmanlık hizmetleri sunar. Ortak projeler, müfredat geliştirme ve akademik değişim programları gibi konularda rehberlik eder.
                            </p>
                        </div>
                    </div>
          
                </div>
            </div>
        </div>
    )
}

export default Services
