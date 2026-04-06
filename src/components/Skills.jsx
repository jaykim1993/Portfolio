import './Skills.css';
import {
  FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaPython, FaLeaf
} from 'react-icons/fa';
import {
  SiJavascript, SiPandas, SiRstudioide, SiMysql, SiMariadb,
  SiSpringboot, SiApachetomcat, SiJupyter, SiEclipseide, SiVite
} from 'react-icons/si';
import { DiDatabase, DiVisualstudio } from "react-icons/di";
import { BiShapeTriangle } from 'react-icons/bi';
export default function Skills() {
  const stackFlow = [
    {
      layer: "01. Frontend",
      category: "UI / UX",
      skills: [
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" />, type: "MARKUP" },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" />, type: "STYLE" },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, type: "LANG" },
        { name: "React", icon: <FaReact color="#61DAFB" />, type: "LIB" },
        { name: "Vite", icon: <SiVite color="#FFD62E" />, type: "TOOL" },
        { name: "VS Code", icon: <DiVisualstudio color="#007ACC" />, type: "IDE" },
      ]
    },
    {
      layer: "02. Backend",
      category: "SERVER / LOGIC",
      skills: [
        { name: "Java", icon: <FaJava color="#007396" />, type: "LANG" },
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" />, type: "FW" },
        { name: "Node.js", icon: <FaNodeJs color="#339933" />, type: "ENV" },
        { name: "Tomcat", icon: <SiApachetomcat color="#F8981D" />, type: "WASM" },
        { name: "MyBatis", icon: <FaLeaf color="#C82E2E" />, type: "LIB" },
        { name: "Lombok", icon: <DiDatabase color="#BC204B" />, type: "LIB" },
        { name: "Eclipse IDE", icon: <SiEclipseide color="#A270BA" />, type: "IDE" },
      ]
    },
    {
      layer: "03. Database",
      category: "DATA STORAGE",
      skills: [
        { name: "MySQL", icon: <SiMysql color="#4479A1" />, type: "DB" },
        { name: "MariaDB", icon: <SiMariadb color="#00758F" />, type: "DB" },
        { name: "Redis", icon: <DiDatabase color="#D82C20" />, type: "CACHE" },
        { name: "Oracle", icon: <FaJava color="#F80000" />, type: "DB" },
      ]
    },
    {
      layer: "04. Analysis",
      category: "DATA SCIENCE",
      skills: [
        { name: "Python", icon: <FaPython color="#3776AB" />, type: "LANG" },
        { name: "RStudio", icon: <SiRstudioide color="#75AADB" />, type: "IDE" },
        { name: "Pandas", icon: <SiPandas color="#150458" />, type: "LIB" },
        { name: "Matplotlib", icon: <BiShapeTriangle color="#11557C" />, type: "VIS" },
        { name: "Jupyter", icon: <SiJupyter color="#F37626" />, type: "TOOL" },
      ]
    }
  ];

  return (
    <div className="section_inner">
      <div className="section_header">
        <h1 className="section_title">Tech Stack</h1>
        <span className="section_subtitle">/ Root / Tech Stack</span>
      </div>
      <div className="pipeline_wrapper">
        <div className="flow_progress_bar"><div className="light_stream"></div></div>

        <div className="horizontal_flow_container">
          {stackFlow.map((step, idx) => (
            <div key={idx} className="flow_column_haptic">
              <div className="column_header_haptic">
                {/* <div className="step_number_haptic">{idx + 1}</div> */}
                <h2 className="column_title_haptic">{step.layer.split('.')[1]}</h2>
              </div>

              {/* 💡 슬라이드 창 (높이 제한) */}
              <div className="vertical_slide_viewport">
                <div className="slide_track">
                  {/* 첫 번째 세트 */}
                  {step.skills.map((skill, sIdx) => (
                    <div key={`original-${sIdx}`} className="skill_item_haptic">
                      <span className="skill_type_badge">{skill.type}</span>
                      <span className="haptic_icon_box">{skill.icon}</span>
                      <span className="haptic_name_text">{skill.name}</span>
                    </div>
                  ))}
                  {/* 무한 루프를 위한 복제 세트 (아이템이 4개 이상일 때만 작동) */}
                  {step.skills.length >= 4 && step.skills.map((skill, sIdx) => (
                    <div key={`clone-${sIdx}`} className="skill_item_haptic">
                      <span className="haptic_icon_box">{skill.icon}</span>
                      <span className="haptic_name_text">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}