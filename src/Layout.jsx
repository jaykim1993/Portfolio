import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroContainer from './components/IntroContainer';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Layout() {
    const [isSkipped, setIsSkipped] = useState(false);

    // 1. 전체 컨테이너 설정 (차례대로 등장)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                // 스킵했으면 0초, 아니면 원래대로 5.5초
                delayChildren: isSkipped ? 0.3 : 4.5, 
                staggerChildren: isSkipped ? 0.1 : 0.3, // 스킵 시 등장 속도도 빠르게
            }
        }
    };

    // 2. 🛠️ 각 섹션 설정 (압축 후 해제)
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50, // 이동 거리는 살짝 줄임
            height: 150, // 💡 압축된 높이
            overflow: "hidden" // 💡 내용이 넘치지 않게 숨김
        },
        visible: {
            opacity: 1,
            y: 0,
            height: "auto", // 💡 압축 해제 (원본 높이)
            transition: {
                duration: isSkipped ? 0.6 : 1, // 스킵 시 등장 애니메이션 단축
                ease: [0.16, 1, 0.3, 1],
                height: {
                    delay: isSkipped ? 0.8 : 5.2, // 스킵 시 높이 확장 딜레이 제거
                    duration: isSkipped ? 0.5 : 1,
                    ease: "easeInOut"
                }
            }
        }
    };

    return (
        <IntroContainer onSkip={() => setIsSkipped(true)}>
            <Header isSkipped={isSkipped} />

            <motion.main
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={isSkipped ? "skipped" : "normal"}
                style={{
                    paddingTop: '5rem',
                    minHeight: '100vh',
                    minWidth: '30vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflowX: 'hidden',
                    width: '100%'
                }}
            >
                {/* 본문 너비 제한 컨테이너 */}
                <div style={{
                    width: '90%',           
                    maxWidth: '120rem',      
                    margin: '0 auto',       
                }}>

                    {/* 각 섹션들: motion.section에 variants 적용 */}
                    <motion.section id="intro" variants={itemVariants} style={sectionStyle}>
                        <Intro />
                    </motion.section>

                    <motion.section  id="skills" variants={itemVariants} style={sectionStyle}>
                        <Skills />
                    </motion.section>

                    <motion.section id="projects" variants={itemVariants} style={sectionStyle}>
                        <Projects />
                    </motion.section>
                    
                    <motion.section id="contact" variants={itemVariants} style={sectionStyle}>
                        <Contact />
                    </motion.section>
                </div>

                {/* 푸터는 압축 애니메이션 제외하고 마지막에 배치 */}
                <motion.div
                    variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 30 } }}
                    transition={{ delay: isSkipped ? 0.9 : 6.0, duration: 1 }} // 본문 다 펼쳐진 후 등장
                    style={{ marginTop: 'auto', width: '100%' }}
                >
                    <Footer />
                </motion.div>
            </motion.main>
        </IntroContainer>
    );
}

// 가독성을 위한 간단한 스타일 객체
const sectionStyle = {
    marginBottom: '1rem', // 섹션 간 간격
    borderBottom: '2px solid white', // 미세한 경계선 (생략 가능)
    paddingTop: '5rem',
    marginTop: '-5rem'
};