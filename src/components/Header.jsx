import './Header.css'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Header({ isSkipped }) {

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleScroll = (e, id) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            // 모바일(window.innerWidth < 430)일 때는 헤더가 더 낮으므로 조건부 설정
            const isMobile = window.innerWidth <= 430;
            const headerHeight = isMobile ? 56 : 64; // 3.5rem vs 4rem
            const extraMargin = isMobile ? 10 : 20;

            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: targetPosition - headerHeight - extraMargin,
                behavior: 'smooth'
            });
        }
    };

    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'ko', name: 'KOR', flag: '🇰🇷' },
        { code: 'en', name: 'ENG', flag: '🇺🇸' },
    ];

    // 현재 언어가 한국어 계열이면 KOR, 아니면 ENG를 기본값으로 설정
    const currentLanguage = languages.find(l => i18n.language?.startsWith(l.code)) || languages[0];

    const handleChangeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth'
        // });
    };

    return (
        <motion.header
            className="header"
            // 초기 상태: 위로 완전히 숨김
            initial={{ y: '-100%' }}
            // 애니메이션 상태: 제자리로 내려옴
            animate={{ y: 0 }}
            // 🛠️ 이 부분이 핵심입니다!
            transition={{
                delay: isSkipped ? 0.2 : 1.3, // 스킵 시 즉시, 아니면 인트로 끝난 후
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1] // CSS에서 쓰시던 큐빅 베지어값 적용
            }}
        >
            <div className="h_left">
                <motion.div
                    className='h_left_img_wrap'
                    onClick={handleRefresh}
                    whileHover={{ scale: 1.1 }} // 호버 시 1.1배 확대
                    transition={{ duration: 0.3, ease: "easeInOut" }} // 부드러운 속도 조절
                >
                    <img className="h_left_img" src='icons8.apng.png' alt="logo" />
                </motion.div>
                <span className="h_left_span" onClick={handleRefresh}>
                    Portfolio <span className="mobile_hide">| Jay Kim</span>
                </span>
            </div>
            <div className="h_right">
                <a href="#intro" className="h_right_a" onClick={(e) => handleScroll(e, 'intro')}>Intro<span className="mobile_hide">duction</span></a>
                <a href="#skills" className="h_right_a" onClick={(e) => handleScroll(e, 'tech Stack')}>Tech<span className="mobile_hide"> Stack</span></a>
                <a href="#projects" className="h_right_a" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
                <a href="#contact" className="h_right_a" onClick={(e) => handleScroll(e, 'contacts')}>Contacts</a>
                {/* 🌐 다크 테마 언어 선택기 */}
                <div className="lang_selector_container">
                    <button className="lang_btn" onClick={() => setIsOpen(!isOpen)}>
                        <span className="lang_label">Language</span>
                        <span className="lang_divider">|</span>
                        <span className="current_name">{currentLanguage.name}</span>
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                className="lang_dropdown"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {languages.map((lang) => (
                                    <li
                                        key={lang.code}
                                        className={`lang_item ${i18n.language?.startsWith(lang.code) ? 'active' : ''}`}
                                        onClick={() => handleChangeLanguage(lang.code)}
                                    >
                                        <span className="flag">{lang.flag}</span>
                                        <span className="item_name">{lang.name}</span>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.header>
    )
}