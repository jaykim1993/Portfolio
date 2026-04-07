import './Intro.css';
import { useTranslation } from 'react-i18next';

export default function Intro() {
  const { t } = useTranslation();

  return (
    <div className="section_inner">
      <div className="section_header">
        <h1 className="section_title">{t('intro.header.title')}<span className="mobile_hide">DUCTION</span></h1>
        <span className="section_subtitle">{t('intro.header.subtitle')}<span className="mobile_hide">duction</span></span>
      </div>

      <div className="intro_main">
        <div className="intro_profile">
          <div className="profile_image_box">
            <img className="profile_img" src='profile2.png' alt="Jay Kim" />
          </div>
          <div className="profile_info">
            <h1 className="profile_name">{t('intro.profile.name')}</h1>
            <p className="profile_role">{t('intro.profile.role')}</p>
          </div>
        </div>

        <div className="intro_info">
          <section className="info_group identity_highlight">
            <h3 className="section_h3">{t('intro.who_i_am.title')}</h3>
            <div className="greeting_box">
              <p className="main_slogan">{t('intro.who_i_am.main_slogan')}</p>
              <p className="sub_slogan">{t('intro.who_i_am.sub_slogan')}</p>
            </div>
          </section>

          <div className="info_flex_container">
            <section className="info_group">
              <h3 className="section_h3">{t('intro.education.title')}</h3>
              <div className="info_item">
                <p className="info_label">{t('intro.education.industrial')}</p>
                <p className="info_desc">{t('intro.education.university')}</p>
              </div>
              <div className="info_item">
                <p className="info_label">{t('intro.education.course_title')}</p>
                <p className="info_desc">{t('intro.education.academy')}</p>
              </div>
            </section>

            <section className="info_group">
              <h3 className="section_h3">{t('intro.experience.title')}</h3>
              <div className="info_item">
                <p className="info_label">{t('intro.experience.manager_role')}</p>
                <p className="info_desc">{t('intro.experience.manager_company')}</p>
              </div>
              <div className="info_item">
                <p className="info_label">{t('intro.experience.technician_role')}</p>
                <p className="info_desc">{t('intro.experience.technician_company')}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}