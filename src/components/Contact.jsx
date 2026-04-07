import './Contact.css'
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Footer.css'
import { useTranslation } from 'react-i18next'; // 1. 임포트 추가

export default function Contact() {
  const { t } = useTranslation(); // 2. 훅 선언
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ulbc9zl',
      'template_0j6bnn8',
      form.current,
      'jNX9WemJdiGCJieCc'
    )
      .then(() => {
        // 3. 알림 메시지 번역 적용
        alert(t('contact.alert.success'));
        form.current.reset();
      }, (error) => {
        console.error('FAILED...', error);
        alert(t('contact.alert.fail'));
      });
  };

  return (
    <div className="section_inner">
      <div className="section_header">
        <h1 className="section_title">{t('contact.header.title')}</h1>
        <span className="section_subtitle">{t('contact.header.subtitle')}</span>
      </div>

      <div className="contact_main">
        <div className="contact_info">
          <div className="info_item">
            <h3 className="section_h3">{t('contact.channel.title')}</h3>
            <div className="contct_group">
              <div className="image_box">
                <img src="icons8-letter.png" className="img_static" alt="email" />
                <img src="icons8-letter.apng.png" className="img_gif" alt="email" />
              </div>
              <span className="contact_word">jaykim6674@gmail.com</span>
            </div>
            <p className="contact_word">{t('contact.channel.phone')}</p>
          </div>

          <div className="info_item">
            <h3 className="section_h3">{t('contact.social.title')}</h3>
            <div className="link_group">
              <a href="https://github.com/jaykim1993" target="_blank" rel="noreferrer" className="contact_link">
                <FaGithub className="contact_icon" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/kim-jay-755115401" target="_blank" rel="noreferrer" className="contact_link">
                <FaLinkedin className="contact_icon" /> LinkedIn
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="contact_link">
                <FaInstagram className="contact_icon" /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="contact_action">
          <div className="action_box">
            <h3 className="section_h3">{t('contact.direct.title')}</h3>
            <p className="contact_word">{t('contact.direct.slogan')}</p>

            <form ref={form} onSubmit={sendEmail} className="contact_form">
              <div className="input_row">
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder={t('contact.direct.form.name')} 
                  required 
                  className="input_name" 
                />
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder={t('contact.direct.form.email')} 
                  required 
                  className="input_email" 
                />
              </div>
              <textarea 
                name="user_message" 
                placeholder={t('contact.direct.form.message')} 
                rows="12" 
                required 
              />
              <button type="submit" className="submit_btn">
                {t('contact.direct.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}