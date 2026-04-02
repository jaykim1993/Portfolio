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
      skills: [
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Vite", icon: <SiVite color="#FFD62E" /> },
        { name: "VS Code", icon: <DiVisualstudio color="#007ACC" /> },
        // 슬라이드 확인을 위해 추가된 예시 (실제 데이터에 따라 자동 조절)
        // { name: "TypeScript", icon: <SiJavascript color="#3178C6" /> },
      ]
    },
    {
      layer: "02. Backend",
      skills: [
        { name: "Java", icon: <FaJava color="#007396" /> },
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "Tomcat", icon: <SiApachetomcat color="#F8981D" /> },
        { name: "MyBatis", icon: <FaLeaf color="#C82E2E" /> },
        { name: "Lombok", icon: <DiDatabase color="#BC204B" /> },
        { name: "Eclipse IDE", icon: <SiEclipseide color="#A270BA" /> },
      ]
    },
    {
      layer: "03. Database",
      skills: [
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "MariaDB", icon: <SiMariadb color="#00758F" /> },
        { name: "Redis", icon: <DiDatabase color="#D82C20" /> },
        { name: "Oracle", icon: <FaJava color="#F80000" /> },
      ]
    },
    {
      layer: "04. Analysis",
      skills: [
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "RStudio", icon: <SiRstudioide color="#75AADB" /> },
        { name: "Pandas", icon: <SiPandas color="#150458" /> },
        { name: "Matplotlib", icon: <BiShapeTriangle color="#11557C" /> },
        { name: "Jupyter", icon: <SiJupyter color="#F37626" /> },
      ]
    }
  ];

  return (
    <div className="section_inner">
      <div className="section_header">
        <h1 className="section_title">SKILLS</h1>
        <span className="section_subtitle">/ Root / Skills</span>
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