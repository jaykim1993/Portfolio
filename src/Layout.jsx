import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroContainer from './components/IntroContainer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Layout.css'; 

export default function Layout() {
    const [isSkipped, setIsSkipped] = useState(false);

    // 1. 전체 컨테이너 설정
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                // 💡 기준점: 둘의 차이는 정확히 2.2초
                delayChildren: isSkipped ? 0.8 : 3.0, 
                staggerChildren: 0.12, 
            }
        }
    };

    // 2. 각 섹션 설정
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20, 
            height: 40, 
            overflow: "hidden" 
        },
        visible: {
            opacity: 1,
            y: 0,
            height: "90vh", 
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],

                height: {
                    // 💡 등장 후 대기 시간도 2.2초의 시차를 그대로 적용
                    // 스킵 시 1.1초 뒤 확장 시작 -> 일반 시 3.3초 뒤 확장 시작
                    delay: isSkipped ? 1.1 : 3.3, 
                    duration: 2.5, // 묵직한 확장 속도는 동일하게 고정
                    ease: [0.76, 0, 0.24, 1] 
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
                className="main_container"
            >
                <div className="content_wrapper">
                    {/* 각 섹션 반복 */}
                    <motion.section id="intro" variants={itemVariants} className="section_container">
                        <Intro />
                    </motion.section>
                    <motion.section id="skills" variants={itemVariants} className="section_container">
                        <Skills />
                    </motion.section>
                    <motion.section id="projects" variants={itemVariants} className="section_container">
                        <Projects />
                    </motion.section>
                    <motion.section id="contact" variants={itemVariants} className="section_container">
                        <Contact />
                    </motion.section>
                </div>

                {/* 푸터 역시 2.2초의 차이를 유지하며 등장 */}
                <motion.div
                    variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 30 } }}
                    transition={{ 
                        delay: isSkipped ? 2.3 : 4.5, // 6.5 - 4.3 = 2.2초 차이!
                        duration: 1 
                    }}
                    className="footer_wrapper"
                >
                    <Footer />
                </motion.div>
            </motion.main>
        </IntroContainer>
    );
}