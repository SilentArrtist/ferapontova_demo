import React from 'react';
import '../styles/Info.scss'
const Info = () => {


    return (
        <div className="info_layout">
            <div className="info_block info_text">
                <h2>Привет, я Алёна</h2>
                <span>
                    Снимаю персональные, коммерческие съёмки.
                    <br />
                    Fashion | lookbook | контент | модельные тесты
                    <br />
                    Организую съёмку для вас
                    или вашего бренда 💕
                </span>
                <hr />
                <div className="email_btn_wrapper">
                    <a
                        href="mailto:snimayukrasivo@gmail.com"
                        className="email_btn">
                        email@email.com
                    </a>
                </div>
                <hr />

            </div>
            <div className="info_block info_photo">
                <img src="/info_photo.jpg" alt="" />
            </div>
        </div >
    );
};

export { Info };