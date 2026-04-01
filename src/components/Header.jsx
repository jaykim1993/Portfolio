import './Header.css'
import { motion } from 'framer-motion'; // 1. motion 임포트

export default function Header({ isSkipped }) {
    return (
        <motion.header 
            className="header"
            // 초기 상태: 위로 완전히 숨김
            initial={{ y: '-100%' }} 
            // 애니메이션 상태: 제자리로 내려옴
            animate={{ y: 0 }}
            // 🛠️ 이 부분이 핵심입니다!
            transition={{ 
                delay: isSkipped ? 0.2 : 4.2, // 스킵 시 즉시, 아니면 인트로 끝난 후
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1] // CSS에서 쓰시던 큐빅 베지어값 적용
            }}
        >
            <div className="h_left">
                <div className='h_left_img_wrap'>
                    <img className="h_left_img" src='icons8.apng.png' alt="logo" />
                </div>
                <span className="h_left_span">Portfolio | Jay Kim</span>
            </div>
            <div className="h_right">
                <a href="#intro" className="h_right_a">Intro</a>
                <a href="#skills" className="h_right_a">Skills</a>
                <a href="#projects" className="h_right_a">Projects</a>
                <a href="#contact" className="h_right_a">Contact</a>
            </div>
        </motion.header>
    )
}