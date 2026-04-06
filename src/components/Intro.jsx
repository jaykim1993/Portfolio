import './Intro.css';

export default function Intro() {
  return (
    <div className="section_inner">
      <div className="section_header">
        <h1 className="section_title">IDENTITY</h1>
        <span className="section_subtitle">/ Root / Intro</span>
      </div>

      <div className="intro_main">
        <div className="intro_profile">
          <div className="profile_image_box">
            <img className="profile_img" src='profile2.png'/>
            {/* <div className="image_placeholder">PHOTO</div> */}
          </div>
        </div>

        <div className="intro_info">
          {/* 💡 핵심 가치를 상단으로 배치하여 첫인상 강화 */}
          <section className="info_group identity_highlight">
            <h3 className="section_h3">WHO I AM</h3>
            <div className="greeting_box">
              <p className="main_slogan">" Strategic Builder Connecting Logic and Experience "</p>
              <p className="sub_slogan">Integrating Industrial Efficiency into Full-Stack Development</p>
            </div>
          </section>

          <div className="info_flex_container">
            {/* 💡 학력 정보 */}
            <section className="info_group">
              <h3 className="section_h3">EDUCATION</h3>
              <div className="info_item">
                <p className="info_label">BE in Industrial Engineering</p>
                <p className="info_desc">Ajou University</p>
              </div>
              <div className="info_item">
                <p className="info_label">Full-Stack Developer Course</p>
                <p className="info_desc">Green Computer Acamedy</p>
              </div>
            </section>

            {/* 💡 경력 정보 (직무 중심) */}
            <section className="info_group">
              <h3 className="section_h3">EXPERIENCE</h3>
              <div className="info_item">
                <p className="info_label">Education Manager</p>
                <p className="info_desc">Technogym Korea</p>
              </div>
              <div className="info_item">
                <p className="info_label">Piling & Formwork Technician</p>
                <p className="info_desc">ADS Construction</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


// UIUX프론트, 백엔드(Java, Spring), Data분석(Python) SW개발자 (참여기업프로젝트 참여) 양성과정
// 2025-08-29 ~ 2026-04-07
// 1 )MegaBox 메인, 예매 사이트 2025-10-15 ~ 2025-10-17
// 2) OTT 미니프로젝트 2025-11-10 ~ 2025-11-13
// 3) MS UI 개발 프로젝트 2025-12-01 ~ 2025-12-29
// 4) IMS Backend 프로젝트 2026-02-05 ~ 2026-03-05
