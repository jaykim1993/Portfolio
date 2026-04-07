import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showGif, setShowGif] = useState(false);

  // 💡 JSON에서 프로젝트 배열 데이터를 통째로 가져옴
  const projectData = t('projects.data', { returnObjects: true });

  // 헤더 핸들스크롤
  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      // 모바일(window.innerWidth < 430)일 때는 헤더가 더 낮으므로 조건부 설정
      const isMobile = window.innerWidth <= 430;
      const headerHeight = isMobile ? 56 : 64; // 3.5rem vs 4rem
      const extraMargin = isMobile ? 10 : 20;

      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: targetPosition - headerHeight - extraMargin,
        behavior: 'smooth'
      });
    }
  };
  // 상세 페이지 뷰
  if (selectedProject) {
    return (
      <div className="section_inner view_detail">
        <div className="section_header">
          <h1 className="section_title">{selectedProject.title}</h1>
          <span className="section_subtitle">
            / Root / Projects / {selectedProject.title}
          </span>
        </div>

        <div className="detail_content">
          <div className="detail_meta_grid">
            <div className="meta_item">
              <span className="meta_label">{t('projects.ui.labels.period')}</span>
              <span className="meta_value">{selectedProject.period}</span>
            </div>
            <div className="meta_item">
              <span className="meta_label">{t('projects.ui.labels.role')}</span>
              <span className="meta_value">{selectedProject.role}</span>
            </div>
            <div className="meta_item">
              <span className="meta_label">{t('projects.ui.labels.stack')}</span>
              <div className="tag_cloud">
                {selectedProject.stack.map(s => <span key={s} className="tag_mini">{s}</span>)}
              </div>
            </div>
            <div className="meta_item">
              <span className="meta_label">{t('projects.ui.labels.links')}</span>
              <div className="meta_value links">
                {selectedProject.links.live && (
                  <a href={selectedProject.links.live} target="_blank" rel="noreferrer" className="link_icon_btn">
                    <FaExternalLinkAlt className="contact_icon" /> LIVE
                  </a>
                )}
                <a href={selectedProject.links.github} target="_blank" rel="noreferrer" className="link_icon_btn">
                  <FaGithub className="contact_icon" /> GITHUB
                </a>
              </div>
            </div>
          </div>

          <div className="detail_features_block">
            <div className="terminal_top_bar">{t('projects.ui.terminal_log')}</div>
            <div className="terminal_body">
              <ul>
                <li><p># {selectedProject.goal}</p><br /></li>
                {selectedProject.features.map((f, i) => (
                  <li key={i}><span className="prompt">$</span> {f}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="detail_actions_row">
            <button className="back_action_btn" onClick={(e) => {setSelectedProject(null); handleScroll(e, 'projects') }}>
              {t('projects.ui.back')}
            </button>
            <button className="play_gif_btn" onClick={() => setShowGif(true)}>
              {t('projects.ui.demo')}
            </button>
          </div>
        </div>

        {showGif && (
          <div className="gif_modal_overlay" onClick={() => setShowGif(false)}>
            <div className="gif_modal_content" onClick={e => e.stopPropagation()}>
              <div className="modal_header">
                <span className="modal_title">demo_playback.exe</span>
                <button className="close_modal" onClick={() => setShowGif(false)}>×</button>
              </div>
              <div className="gif_container">
                <img src={selectedProject.gifUrl} alt="demo" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }



  // 리스트 뷰
  return (
    <div className="section_inner">
      <div className="section_header">
        <h1 className="section_title">{t('projects.header.title')}</h1>
        <span className="section_subtitle">{t('projects.header.subtitle')}</span>
      </div>
      <div className="projects_grid">
        {/* JSON에서 가져온 배열을 직접 map으로 순회 */}
        {Array.isArray(projectData) && projectData.map(p => (
          <div key={p.id} className="project_card" onClick={(e) => {setSelectedProject(p); handleScroll(e, 'projects') }}>
            <span className="project_id"># {p.id}</span>
            <h2 className="project_name">{p.title}</h2>
            <p className="project_tech">{p.tech}</p>
            <div className="tap_to_view">{t('projects.ui.view_details')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}