import React from 'react'
import { getText } from '../locales'

const About = () => {
    return (
        <div className="about" id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img">
                            <img className='w-100' src="img/about.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info">
                            <h2>Eğitimde yeni ufuklar</h2>
                            <p>Türkiye-Özbekistan Eğitim İş Birliği Ajansı, kurulduğu günden bu yana iki ülke arasındaki eğitim iş birliğini artırmak için birçok başarılı projeye imza atmıştır. Ajansın amacı, her iki ülkenin eğitim sistemlerini daha da güçlendirerek, öğrenci ve akademisyenlere uluslararası deneyim ve fırsatlar sunmaktır.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
