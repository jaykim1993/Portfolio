import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixBackground from './MatrixBackground';

if (typeof window !== 'undefined') {
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=VT323&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);
}

const Cursor = ({ phase }) => (
  <motion.div
    animate={{
      opacity: [1, 0],
      backgroundColor: phase === 1 ? '#00FF41' : '#fff',
      boxShadow: phase === 1 ? '0 0 8px #00FF41' : '0 0 8px #fff'
    }}
    transition={{ opacity: { repeat: Infinity, duration: 0.7 } }}
    style={cursorStyle}
  />
);

export default function IntroContainer({ children, onSkip }) {
  const [phase, setPhase] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isSkipped, setIsSkipped] = useState(false);

  const fullText = `Portfolio JAY KIM ver1.0.0
  Initialize Service: SUCCESS..
  Ready to Connect via Port 8080..`;
  const typingSpeed = 30;

  useEffect(() => {
    if (isSkipped) return; // 스킵 시 타이머 중단
    let currentIdx = 0;
    const typingInterval = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setTypedText(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setPhase(1), 500);
      }
    }, typingSpeed);
    return () => clearInterval(typingInterval);
  }, [isSkipped]);

  useEffect(() => {
    if (phase === 1 && !isSkipped) {
      const timer = setTimeout(() => {
        setPhase(2);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [phase, isSkipped]);

  const handleSkip = () => {
    setIsSkipped(true);
    if (onSkip) onSkip();
    // phase를 2로 만들지 않아도 isSkipped 조건으로 본문을 띄웁니다.
  };

  return (
    <>
      {/* 🛠️ [핵심] isSkipped가 true가 되면 AnimatePresence 자체를 즉시 제거하여 exit 애니메이션 방지 */}
      {!isSkipped && (
        <AnimatePresence mode="wait">
          {phase < 2 && (
            <motion.div
              key="intro-screen"
              initial={{ opacity: 1 }}
              exit={{
                backgroundColor: "#00FF41",
                filter: "brightness(500%) blur(30px)",
                opacity: [1, 1, 0]
              }}
              transition={{ duration: 2, ease: "easeIn" }}
              style={introContainerStyle}
            >
              {phase === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <MatrixBackground />
                </motion.div>
              )}

              <motion.div
                animate={phase === 1 ? { scale: 1.05, color: "#00FF41", border: '2px solid #00FF41' } : {}}
                style={typingBoxStyle}
              >
                <div style={{ width: '100%', position: 'relative' }}>
                  {typedText}
                  <Cursor phase={phase} />
                </div>

                <button onClick={handleSkip} style={skipButtonStyle}>
                  SKIP {`>>`}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* 본문 영역: 스킵했거나 자연스럽게 페이즈가 끝났을 때 */}
      {(isSkipped || phase === 2) && (
        <motion.div
          initial={isSkipped ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}

// --- 스타일 객체 ---
const introContainerStyle = {
  position: 'fixed',
  inset: 0,
  zIndex: 10000,
  background: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  willChange: 'filter, opacity',
};

const typingBoxStyle = {
  position: 'relative',
  zIndex: 1,
  color: '#fff',
  fontFamily: "'VT323', monospace",
  fontSize: '2.2rem',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  width: '40rem',
  height: '12.5rem',
  padding: '1.2rem 1.2rem',
  border: '2px solid #fff',
  borderRadius: '4px',
  whiteSpace: 'pre-wrap',
  textAlign: 'left',
  lineHeight: '1.4'
};

const skipButtonStyle = {
  position: 'absolute',
  bottom: '-2.5rem',
  right: '0',
  background: 'none',
  border: 'none',
  color: '#fff',
  fontFamily: "'VT323', monospace",
  fontSize: '1.3rem',
  cursor: 'pointer',
  textDecoration: 'underline',
  padding: '5px'
};

const cursorStyle = {
  display: 'inline-block',
  width: '14px',
  height: '2rem',
  marginLeft: '8px',
  verticalAlign: 'text-bottom'
};