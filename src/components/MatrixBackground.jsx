import React, { useEffect, useRef } from 'react';

// 폰트 설정
if (typeof window !== 'undefined') {
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=VT323&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);
}

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 1. 전체 화면 크기로 설정
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 사용할 글자들 (한자, 숫자, 알파벳 등)
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    const fontSize = 20;
    const columns = canvas.width / fontSize; // 화면 너비에 따른 열 개수

    // 각 열의 현재 y 좌표를 저장하는 배열
    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // 2. 배경을 아주 투명한 검정색으로 덮어 잔상 효과를 줌 (핵심!)
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 3. 글자 색상 및 폰트 설정
      ctx.fillStyle = "rgba(0, 255, 0, 1)"; // 매트릭스 그린
      ctx.font = fontSize + "px VT323";

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // 4. 바닥에 닿으면 랜덤하게 다시 위로 보냄 (흐르는 느낌 조절)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50); // 초당 약 30프레임

    // 창 크기 조절 대응
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // 너비가 바뀌면 열 개수를 다시 계산하고 배열을 채워줌
      const newColumns = Math.floor(canvas.width / fontSize);
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = Math.random() * -100; // 자연스럽게 위에서 내려오도록 음수값 권장
        }
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -2, // 헤더나 본문 아래에 깔리도록 설정
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default MatrixBackground;