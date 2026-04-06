import Header from './components/Header';
import Intro from './components/Intro';
import MatrixBackground from './components/MatrixBackground';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroContainer from './components/IntroContainer';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './Layout.css';

export default function Layout() {
    const [isSkipped, setIsSkipped] = useState(false);
    const [isMatrixVisible, setIsMatrixVisible] = useState(false); // 매트릭스 실행 여부

    useEffect(() => {
        // 매트릭스 실행 지연 로직
        // 스킵 시: 즉시 혹은 아주 짧은 대기(0.5초) 후 실행
        // 미스킵 시: 인트로 타이핑 + 대기 시간을 고려하여 4.2초 후 실행
        const delayTime = isSkipped ? 160 : 7500;

        const timer = setTimeout(() => {
            setIsMatrixVisible(true);
        }, delayTime);

        return () => clearTimeout(timer);
    }, [isSkipped]); // isSkipped가 변하면 타이머 재설정

    // 1. 전체 컨테이너 설정
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                // 💡 기준점: 둘의 차이는 정확히 2.2초
                delayChildren: isSkipped ? 2.7 : 3.8,
                staggerChildren: 0.12,
            }
        }
    };

    // 2. 각 섹션 설정
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            overflow: "hidden"
        },
        visible: {
            opacity: 1,
            y: 0,
            height: "auto",
            transition: {
                duration: 4,
                ease: [0.3, 1, 0.3, 1],
                height: {
                    // 💡 등장 후 대기 시간도 2.2초의 시차를 그대로 적용
                    // 스킵 시 1.1초 뒤 확장 시작 -> 일반 시 3.3초 뒤 확장 시작
                    delay: isSkipped ? 2.7 : 3.8,
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
                key={isSkipped ? "skipped" : "normal"}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="main_container"
            >
                <div className="content_wrapper">
                    {/* 💡 조건부 렌더링으로 실행 자체를 지연 */}
                    {isMatrixVisible && (
                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(0px)' }}
                            animate={{ opacity: 0.8, filter: 'blur(3px)' }}
                            transition={{
                                // 1. 공통 설정 (duration 등)
                                duration: 3,
                                ease: "easeInOut",
                                // 2. filter 속성에만 별도의 delay 부여
                                filter: {
                                    delay: 1.5,      // 0.5초 대기 후 블러 시작
                                    duration: 3    // 총 3초 중 남은 2.5초 동안 블러 진행 (취향에 따라 3으로 유지 가능)
                                },
                                // 3. opacity는 즉시 시작 (delay 생략)
                                opacity: {
                                    duration: 3
                                }
                            }}
                            style={{
                                position: 'fixed',
                                top: 0, left: 0, zIndex: -1,
                                pointerEvents: 'none'
                            }}
                        >
                            <MatrixBackground />
                        </motion.div>
                    )}
                    {/* 각 섹션 반복 */}
                    <motion.section id="intro" variants={itemVariants} className="section_container">
                        <Intro />
                    </motion.section>
                    <motion.section id="tech Stack" variants={itemVariants} className="section_container">
                        <Skills />
                    </motion.section>
                    <motion.section id="projects" variants={itemVariants} className="section_container">
                        <Projects />
                    </motion.section>
                    <motion.section id="contacts" variants={itemVariants} className="section_container">
                        <Contact />
                    </motion.section>
                </div>

                {/* 푸터 역시 2.2초의 차이를 유지하며 등장 */}
                <motion.div
                    variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 30 } }}
                    transition={{
                        delay: isSkipped ? 3.2 : 4.2, // 6.5 - 4.3 = 2.2초 차이!
                        duration: 1
                    }}
                    className="footer_wrapper"
                >
                    <Footer />
                </motion.div>
            </motion.main>
        </IntroContainer >
    );
}