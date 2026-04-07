import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // 백엔드 플러그인 추가
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // JSON 파일을 불러오는 기능 추가
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('language') || 'ko',
    fallbackLng: 'ko',
    debug: true,
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // JSON 파일이 위치한 경로 설정
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    }
  });

export default i18n;