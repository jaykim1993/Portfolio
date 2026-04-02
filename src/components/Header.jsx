import './Header.css'
import { motion } from 'framer-motion'; // 1. motion 임포트

export default function Header({ isSkipped }) {

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleScroll = (e, id) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            const headerHeight = 64; // 4rem = 64px
            const extraMargin = 20;  // 약간의 여유 공간
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: targetPosition - headerHeight - extraMargin,
                behavior: 'smooth'
            });
        }
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
                <span className="h_left_span" onClick={handleRefresh}>Portfolio | Jay Kim</span>
            </div>
            <div className="h_right">
                <a href="#intro" className="h_right_a" onClick={(e) => handleScroll(e, 'intro')}>Intro</a>
                <a href="#skills" className="h_right_a" onClick={(e) => handleScroll(e, 'skills')}>Skills</a>
                <a href="#projects" className="h_right_a" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
                <a href="#contact" className="h_right_a" onClick={(e) => handleScroll(e, 'contacts')}>Contacts</a>
            </div>
        </motion.header>
    )
}