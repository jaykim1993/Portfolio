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
            <div className="image_placeholder">PHOTO</div>
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
                <span className="info_label">Ajou University</span>
                <span className="location_tag">KOR</span>
                <p className="info_desc">BE in Industrial Engineering</p>
              </div>
              <div className="info_item">
                <span className="info_label">Green Computer Acamedy</span>
                <span className="location_tag">KOR</span>
                <p className="info_desc">Full-Stack Developer Training Course</p>
              </div>
            </section>

            {/* 💡 경력 정보 (직무 중심) */}
            <section className="info_group">
              <h3 className="section_h3">EXPERIENCE</h3>
              <div className="info_item">
                <span className="info_label">Technogym Korea</span>
                <span className="location_tag">KOR</span>
                <p className="info_desc">Education Manager</p>
              </div>
              <div className="info_item">
                <span className="info_label">ADS Construction</span>
                <span className="location_tag">AUS</span>
                <p className="info_desc">Piling & Formwork Technician</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}