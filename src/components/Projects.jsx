import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showGif, setShowGif] = useState(false);

  const projectList = [
    {
      id: 1,
      title: "Restaurant Review System",
      tech: "Spring Boot / MySQL / Thymeleaf",
      period: "2023.09 - 2023.10",
      role: "Backend Lead",
      stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      goal: "CRUD 기반의 맛집 리뷰 플랫폼 구축 및 데이터 시뮬레이션.",
      features: [
        "Thymeleaf 레이아웃 분리로 코드 재사용성 향상",
        "Spring Security 권한별 접근 제어",
        "1,800건의 Stored Procedure 기반 데이터 테스트"
      ],
      gifUrl: "/gifs/p1.gif",
      links: { github: "#", live: "#" }
    },
    {
      id: 2,
      title: "Restaurant Review System",
      tech: "Spring Boot / MySQL / Thymeleaf",
      period: "2023.09 - 2023.10",
      role: "Backend Lead",
      stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      goal: "CRUD 기반의 맛집 리뷰 플랫폼 구축 및 데이터 시뮬레이션.",
      features: [
        "Thymeleaf 레이아웃 분리로 코드 재사용성 향상",
        "Spring Security 권한별 접근 제어",
        "1,800건의 Stored Procedure 기반 데이터 테스트"
      ],
      gifUrl: "/gifs/p1.gif",
      links: { github: "#", live: "#" }
    },
    {
      id: 3,
      title: "Restaurant Review System",
      tech: "Spring Boot / MySQL / Thymeleaf",
      period: "2023.09 - 2023.10",
      role: "Backend Lead",
      stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      goal: "CRUD 기반의 맛집 리뷰 플랫폼 구축 및 데이터 시뮬레이션.",
      features: [
        "Thymeleaf 레이아웃 분리로 코드 재사용성 향상",
        "Spring Security 권한별 접근 제어",
        "1,800건의 Stored Procedure 기반 데이터 테스트"
      ],
      gifUrl: "/gifs/p1.gif",
      links: { github: "#", live: "#" }
    },
    {
      id: 4,
      title: "Restaurant Review System",
      tech: "Spring Boot / MySQL / Thymeleaf",
      period: "2023.09 - 2023.10",
      role: "Backend Lead",
      stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      goal: "CRUD 기반의 맛집 리뷰 플랫폼 구축 및 데이터 시뮬레이션.",
      features: [
        "Thymeleaf 레이아웃 분리로 코드 재사용성 향상",
        "Spring Security 권한별 접근 제어",
        "1,800건의 Stored Procedure 기반 데이터 테스트"
      ],
      gifUrl: "/gifs/p1.gif",
      links: { github: "#", live: "#" }
    },
    {
      id: 5,
      title: "Restaurant Review System",
      tech: "Spring Boot / MySQL / Thymeleaf",
      period: "2023.09 - 2023.10",
      role: "Backend Lead",
      stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      goal: "CRUD 기반의 맛집 리뷰 플랫폼 구축 및 데이터 시뮬레이션.",
      features: [
        "Thymeleaf 레이아웃 분리로 코드 재사용성 향상",
        "Spring Security 권한별 접근 제어",
        "1,800건의 Stored Procedure 기반 데이터 테스트"
      ],
      gifUrl: "/gifs/p1.gif",
      links: { github: "#", live: "#" }
    },
    {
      id: 6,
      title: "Restaurant Review System",
      tech: "Spring Boot / MySQL / Thymeleaf",
      period: "2023.09 - 2023.10",
      role: "Backend Lead",
      stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      goal: "CRUD 기반의 맛집 리뷰 플랫폼 구축 및 데이터 시뮬레이션.",
      features: [
        "Thymeleaf 레이아웃 분리로 코드 재사용성 향상",
        "Spring Security 권한별 접근 제어",
        "1,800건의 Stored Procedure 기반 데이터 테스트"
      ],
      gifUrl: "/gifs/p1.gif",
      links: { github: "#", live: "#" }
    },
    {
      id: 7,
      title: "Restaurant Review System",
      tech: "Spring Boot / MySQL / Thymeleaf",
      period: "2023.09 - 2023.10",
      role: "Backend Lead",
      stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      goal: "CRUD 기반의 맛집 리뷰 플랫폼 구축 및 데이터 시뮬레이션.",
      features: [
        "Thymeleaf 레이아웃 분리로 코드 재사용성 향상",
        "Spring Security 권한별 접근 제어",
        "1,800건의 Stored Procedure 기반 데이터 테스트"
      ],
      gifUrl: "/gifs/p1.gif",
      links: { github: "#", live: "#" }
    },
    {
      id: 8,
      title: "Restaurant Review System",
      tech: "Spring Boot / MySQL / Thymeleaf",
      period: "2023.09 - 2023.10",
      role: "Backend Lead",
      stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      goal: "CRUD 기반의 맛집 리뷰 플랫폼 구축 및 데이터 시뮬레이션.",
      features: [
        "Thymeleaf 레이아웃 분리로 코드 재사용성 향상",
        "Spring Security 권한별 접근 제어",
        "1,800건의 Stored Procedure 기반 데이터 테스트"
      ],
      gifUrl: "/gifs/p1.gif",
      links: { github: "#", live: "#" }
    },
    // {
    //   "id": 9,
    //   "title": "Car Renting & Management System",
    //   "tech": "React / Spring Boot / MySQL",
    //   "period": "2025.12 - 2026.03",
    //   "role": "Full-stack Developer",
    //   "stack": ["React", "Axios", "Spring Boot", "MyBatis", "MySQL", "Cloudtype"],
    //   "goal": "사용자 예약 시스템과 관리자 전용 대시보드를 포함한 통합 렌터카 서비스 개발",
    //   "features": [
    //     "사용자: 실시간 차량 검색, 필터링 및 예약 기능 구현",
    //     "관리자: 대시보드를 통한 차량 재고 관리, 예약 현황 조회 및 데이터 시각화",
    //     "Axios Interceptor를 활용한 전역 에러 핸들링 및 효율적인 API 통신 구조 설계",
    //     "MyBatis 동적 쿼리를 적용하여 복잡한 조건의 차량 검색 성능 최적화",
    //     "Cloudtype PaaS 환경을 통해 백엔드 및 데이터베이스 클라우드 배포 완료"
    //   ],
    //   "gifUrl": "/gifs/p2.gif",
    //   "links": {
    //     "github": "https://github.com/jaykim1993/charang2026",
    //     "live": "https://port-0-charang2026-mma8g0s58d0aa22f.sel3.cloudtype.app/"
    //   }
    // }
    {
      id: 9,
      title: "Car Renting & Management System",
      tech: "React / Spring Boot / MySQL",
      period: "2025.12 - 2026.03",
      role: "Full-stack Developer",
      stack: ["React", "Axios", "Spring Boot", "MyBatis", "MySQL", "Cloudtype"],
      goal: "An integrated rental service featuring a real-time user reservation system and an admin dashboard for data-driven management.",
      features: [
        "Implemented real-time vehicle search, multi-criteria filtering, and streamlined booking flows for end-users.",
        "Developed an Admin Dashboard for inventory control, reservation tracking, and data visualization.",
        "Optimized complex search performance by implementing MyBatis Dynamic SQL for multi-parameter database queries.",
        "Designed a robust API architecture using Axios Interceptors for global error handling and request management.",
        "Deployed the full-stack ecosystem (Backend & MySQL) using Cloudtype PaaS for stable live service operation."
      ],
      gifUrl: "/gifs/p2.gif",
      links: {
        github: "https://github.com/jaykim1993/charang2026",
        live: "https://port-0-charang2026-mma8g0s58d0aa22f.sel3.cloudtype.app/"
      }
    }
  ];

  if (selectedProject) {
    return (
      <div className="section_inner view_detail">
        <div className="section_header">
          <div>
            <h1 className="section_title">{selectedProject.title}</h1>
          </div>
          <span className="section_subtitle">
            / Root / Projects / {selectedProject.title}
          </span>
        </div>

        <div className="detail_content">
          <div className="detail_meta_grid">
            <div className="meta_item">
              <span className="meta_label">PERIOD_</span>
              <span className="meta_value">{selectedProject.period}</span>
            </div>
            <div className="meta_item">
              <span className="meta_label">ROLE_</span>
              <span className="meta_value">{selectedProject.role}</span>
            </div>
            <div className="meta_item">
              <span className="meta_label">STACK_</span>
              <div className="tag_cloud">
                {selectedProject.stack.map(s => <span key={s} className="tag_mini">{s}</span>)}
              </div>
            </div>
            <div className="meta_item">
              <span className="meta_label">LINKS_</span>
              <div className="meta_value links">
                {selectedProject.links.live && <a href={selectedProject.links.live} className="link_icon_btn"><FaExternalLinkAlt className="contact_icon" /> LIVE</a>}
                <a href={selectedProject.links.github} className="link_icon_btn"><FaGithub className="contact_icon" /> GITHUB</a>
              </div>
            </div>
          </div>

          <div className="detail_features_block">
            <div className="terminal_top_bar">terminal --project-logs</div>
            <div className="terminal_body">
              <ul>
                <li><p># {selectedProject.goal}</p> </li>
                {selectedProject.features.map((f, i) => (
                  <li key={i}><span className="prompt">$</span> {f}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="detail_actions_row">
            <button className="play_gif_btn" onClick={() => setSelectedProject(null)}>← BACK_TO_LIST</button>
            <button className="play_gif_btn" onClick={() => setShowGif(true)}>▶ PLAY_DEMO</button>
          </div>
        </div>

        {showGif && (
          <div className="gif_modal_overlay" onClick={() => setShowGif(false)}>
            <div className="gif_modal_content" onClick={e => e.stopPropagation()}>
              <div className="modal_header">
                <span className="modal_title">demo_playback.exe</span>
                <button className="close_modal" onClick={() => setShowGif(false)}>×</button>
              </div>
              <div className="gif_container"><img src={selectedProject.gifUrl} alt="demo" /></div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="section_inner">
      <div className="section_header">
        <h1 className="section_title">Projects</h1>
        <span className="section_subtitle">/ Root / Projects</span>
      </div>
      <div className="projects_grid">
        {projectList.map(p => (
          <div key={p.id} className="project_card" onClick={() => setSelectedProject(p)}>
            <span className="project_id"># {p.id}</span>
            <h2 className="project_name">{p.title}</h2>
            <p className="project_tech">{p.tech}</p>
            <div className="tap_to_view">VIEW_DETAILS_</div>
          </div>
        ))}
      </div>
    </div>
  );
}