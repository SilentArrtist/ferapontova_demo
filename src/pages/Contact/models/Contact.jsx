import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router'


import '../styles/Contact.scss'
const Contact = () => {
    const form = useRef();
    const navigate = useNavigate()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0d08yoo', 'template_s7cviqg', form.current, "hmV7JGNGNunDGctqP")
            .then((result) => {
                navigate(0)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact_layout">
            <h2>Связаться со мной</h2>

            <form ref={form} onSubmit={sendEmail}>

                <label htmlFor="from_name">Ваше имя</label>
                <input type="text" id="from_name" name="from_name" placeholder="Имя.." />

                <label htmlFor="from_email">Почта</label>
                <input type="text" id="from_email" name="from_email" placeholder="Почта.." />

                <label htmlFor="message">Сообщение</label>
                <input type="text" id="message" name="message" placeholder="О чем вы хотели поговорить?.." />

                <input type="submit" value="Отправить" />
            </form>

        </div >
    );
};

export { Contact };