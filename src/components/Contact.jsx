import './Contact.css'
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Footer.css'

export default function Contact() {
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
        // alert('메일이 성공적으로 전송되었습니다! 곧 연락드릴게요.');
        alert('Message sent successfully! I will get back to you soon.');
        form.current.reset(); // 양식 초기화
      }, (error) => {
        console.error('FAILED...', error); // 에러 로그를 콘솔에서 확인하세요
        // alert('전송에 실패했습니다. 다시 시도해주세요.');
        alert('Failed to send the message. Please try again later.');
      });
  };

  return (
    <div className="section_inner">
      {/* 1. 섹션 타이틀 (인트로와 동일한 위치) */}
      <div className="section_header">
        <h1 className="section_title">CONTACTS</h1>
        <span className="section_subtitle">/ Root / Contacts</span>
      </div>

      {/* 2. 메인 콘텐츠 (2단 구성) */}
      <div className="contact_main">

        {/* 왼쪽: 연락처 및 SNS 나열 */}
        <div className="contact_info">
          <div className="info_item">
            <h3 className="section_h3">CHANNEL</h3>
            <div className="contct_group">
              <div className="image_box">
                <img src="icons8-letter.png" className="img_static" alt="email" />
                <img src="icons8-letter.apng.png" className="img_gif" alt="email" />
              </div>
              <span className="contact_word">jaykim6674@gmail.com</span>
            </div>
            <p className="contact_word">Phone +82 10-6674-6038</p>
          </div>

          <div className="info_item">
            <h3 className="section_h3">SOCIAL</h3>
            <div className="link_group">
              <a href="https://github.com/jaykim1993" target="_blank" rel="noreferrer" className="contact_link">
                <FaGithub className="contact_icon" /> GitHub
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact_link">
                <FaLinkedin className="contact_icon" /> LinkedIn
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="contact_link">
                <FaInstagram className="contact_icon" /> Instagram
              </a>

            </div>
          </div>
        </div>

        {/* 오른쪽: Get In Touch 문구 강조 영역 */}
        <div className="contact_action">
          <div className="action_box">
            <h3 className="section_h3">DIRECT CONTACT</h3>
            {/* <p className="contact_word">
              새로운 프로젝트 제안이나 궁금한 점이 있다면 언제든 환영입니다!
              </p> */}
            <p className="contact_word">
              I’m always open to new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <form ref={form} onSubmit={sendEmail} className="contact_form">
              <div className="input_row">
                <div className="input_row">
                  <input type="text" name="user_name" placeholder="Name" required className="input_name" />
                  <input type="email" name="user_email" placeholder="Email Address" required className="input_email" />
                </div>
              </div>
              <textarea name="user_message" placeholder="How can I help you?" rows="12" required />
              <button type="submit" className="submit_btn">Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}



