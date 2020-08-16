import React from "react";
import { connect } from "react-redux";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJavascript1,
  DiJqueryLogo,
  DiReact,
  DiPhp,
  DiNodejsSmall,
  DiMysql,
  DiPhotoshop,
  DiJava,
  DiGithubBadge,
} from "react-icons/di";

import { AiOutlineCodeSandbox } from "react-icons/ai";

import { SvgThreejs, SvgBlender, SvgSubstance, SvgArduino } from "./svgIcons";

import SkillLeft from "./skillsCompnents/SkillLeft";
import SkillRight from "./skillsCompnents/SkillRight";
import SkillCenter from "./skillsCompnents/SkillCenter";

const skillsListFrontend = [
  { name: "HTML 5", ratio: 4, icon: <DiHtml5 /> },
  { name: "CSS 3", ratio: 4, icon: <DiCss3 /> },
  { name: "SASS", ratio: 3, icon: <DiSass /> },
  { name: "JAVASCRIPT", ratio: 3, icon: <DiJavascript1 /> },
  { name: "JQUERY", ratio: 3, icon: <DiJqueryLogo /> },
  { name: "REACT", ratio: 2, icon: <DiReact /> },
  { name: "THREE.JS", ratio: 3, icon: <SvgThreejs /> },
];

const skillsListBackend = [
  { name: "PHP", ratio: 2, icon: <DiPhp /> },
  { name: "NODEJS", ratio: 1, icon: <DiNodejsSmall /> },
  { name: "MYSQL", ratio: 2, icon: <DiMysql /> },
];

const skillsListGraphic = [
  { name: "PHOTOSHOP", ratio: 2, icon: <DiPhotoshop /> },
  { name: "BLENDER", ratio: 3, icon: <SvgBlender /> },
  { name: "SUBSTANCE", ratio: 2, icon: <SvgSubstance /> },
];

const skillsListOther = [
  { name: "JAVA", ratio: 1, icon: <DiJava /> },
  { name: "ARDUINO", ratio: 2, icon: <SvgArduino /> },
  { name: "Github", ratio: 2, icon: <DiGithubBadge /> },
  { name: "3D PRINTING", ratio: 4, icon: <AiOutlineCodeSandbox /> },
];

const Skills = (props) => {
  const FrontendCount = skillsListFrontend.length;
  const BackendCount = skillsListBackend.length;
  const GraphicCount = skillsListGraphic.length;

  const parityFrontend = 0;
  const parityBacked = FrontendCount;
  const parityGraphic = FrontendCount + BackendCount;
  const parityOther = FrontendCount + BackendCount + GraphicCount;

  return (
    <>
      <div className="skillType">Frontend</div>
      <div className="skillLeftRatio">
        <SkillLeft array={skillsListFrontend} parity={parityFrontend} />
      </div>
      <div className="skillCenterHexagon">
        <SkillCenter array={skillsListFrontend} parity={parityFrontend} />
      </div>
      <div className="skillRightRatio">
        <SkillRight array={skillsListFrontend} parity={parityFrontend} />
      </div>
      <div className="skillType">Backend</div>
      <div className="skillLeftRatio">
        <SkillLeft array={skillsListBackend} parity={parityBacked} />
      </div>
      <div className="skillCenterHexagon">
        <SkillCenter array={skillsListBackend} parity={parityBacked} />
      </div>
      <div className="skillRightRatio">
        <SkillRight array={skillsListBackend} parity={parityBacked} />
      </div>
      <div className="skillType">
        {props.languageSet === "en" ? "Graphic & design" : null}
        {props.languageSet === "pl" ? "Grafika i design" : null}
      </div>
      <div className="skillLeftRatio">
        <SkillLeft array={skillsListGraphic} parity={parityGraphic} />
      </div>
      <div className="skillCenterHexagon">
        <SkillCenter array={skillsListGraphic} parity={parityGraphic} />
      </div>
      <div className="skillRightRatio">
        <SkillRight array={skillsListGraphic} parity={parityGraphic} />
      </div>

      <div className="skillType">
        {props.languageSet === "en" ? "Other" : null}
        {props.languageSet === "pl" ? "Inne" : null}
      </div>
      <div className="skillLeftRatio">
        <SkillLeft array={skillsListOther} parity={parityOther} />
      </div>
      <div className="skillCenterHexagon">
        <SkillCenter array={skillsListOther} parity={parityOther} />
      </div>
      <div className="skillRightRatio">
        <SkillRight array={skillsListOther} parity={parityOther} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    languageSet: state.lang.languageSet,
  };
};

export default connect(mapStateToProps)(React.memo(Skills));
