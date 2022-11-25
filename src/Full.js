import './App.css';
import Resume from './Resume';
import React from "react";
import saveAs from 'file-saver';
class FullFun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: false,
      fullName: "Your Full Name",
      link: {
        github: "",
        lgithub: "",
        gmail: "your@gmail.com",
        lgmail: "https://mailto:your@gmail.com",
        whatsapp: "919999999999",
        lwhatsapp: "https://wa.me/919999999999",
        linkedin: "userid",
        llinkedin: "http://www.linkedin.com/in/userid"
      },
      education: [{
        startYear: "2020",
        endYear: "2021",
        degree: "Your Degree",
        institution: "Your Institution",
        CGPA: "9.00"
      }, {
        startYear: "2019",
        endYear: "2020",
        degree: "Your Degree",
        institution: "Your Institution",
        CGPA: "",
        percentage: "90"
      }],
      experience: [{
        company: "Company Name",
        link: "",
        timeline: "September 2022 - October 2022",
        role: "Role",
        achievements: ["Achievement-1", "Achievement-2"]
      }, {
        company: "Company Name",
        link: "https://www.google.com",
        timeline: "September 2021 - October 2021",
        role: "Role",
        achievements: ["Achievement-1", "Achievement-2"]
      }],
      portfolioLink: "https://www.google.com",
      projects: [{
        category: "Category",
        name: "Project Name",
        link: "https://www.google.com",
        role: "Developer",
        teamSize: "1",
        duration: "4 days",
        achievements: ["Achievements-1", "Achievements-2"],
        date: "October 22, 2022"
      }, {
        category: "Category",
        name: "Project Name",
        link: "https://www.google.com",
        role: "Team Lead & Developer",
        teamSize: "2",
        duration: "1 month",
        achievements: ["Achievements-1", "Achievements-2"],
        date: "September 22, 2022"
      }],
      skills: [
        ["Skill Sub-Category", "Skill-1, Skill-2, Skill-3"],
        ["Skill Sub-Category", "Skill-1, Skill-2, Skill-3"],
        ["Skill Sub-Category", "Skill-1, Skill-2, Skill-3"]
      ],
      achievements: [
        "Achievement-1",
        "Achievement-2"
      ],
      positions: [{
        title: "Position Title",
        timeline: "July 2022 - Present",
        achievements: ["", ""]
      },
      {
        title: "Position Title",
        timeline: "May 2022 – June 2022",
        achievements: ["Achievements-1", ""]
      }
      ],
      demo: {
        fullName: "Sample Name",
        link: {
          github: "",
          lgithub: "",
          gmail: "example@gmail.com",
          lgmail: "https://mailto:example@gmail.com",
          whatsapp: "919988776655",
          lwhatsapp: "https://wa.me/919988776655",
          linkedin: "example",
          llinkedin: "http://www.linkedin.com/in/example"
        },
        education: [{
          startYear: "2020",
          endYear: "2021",
          degree: "Degree-1",
          institution: "Institution-1",
          CGPA: "9.00"
        }, {
          startYear: "2018",
          endYear: "2020",
          degree: "Degree-2",
          institution: "Institution-2",
          percentage: "90"
        }],
        experience: [{
          company: "Company Name",
          link: "https://chrome.google.com/webstore/detail/alpnapppdjbdbbaagjpchaaipphcnejo",
          timeline: "September 2022 - October 2022",
          role: "Role",
          achievements: ["Achievement-1", "Achievement-2"]
        }, {
          company: "Company Name",
          link: "https://chrome.google.com/webstore/detail/alpnapppdjbdbbaagjpchaaipphcnejo",
          timeline: "September 2022 - October 2022",
          role: "Role",
          achievements: ["Achievement-1", "Achievement-2"]
        }],
        portfolioLink: "www.google.com",
        projects: [{
          category: "Project Category-1",
          name: "Project-1",
          link: "https://chrome.google.com",
          role: "Role-1",
          teamSize: "1",
          duration: "4 days",
          achievements: ["Achievement-1", "Achievement-2"],
          date: "October 22, 2022"
        }, {
          category: "Project Category-2",
          name: "Project-2",
          link: "https://www.google.com",
          role: "Role-2",
          teamSize: "2",
          duration: "2 days",
          achievements: ["Achievement-1", ""],
          date: "October 22, 2022"
        }],
        skills: [
          ["Skills category-1", "Skills List lore10 lore11 lore12 lore13 "],
          ["Skills category-2", "Skills List lore20 lore21 lore22 lore23 "]
        ],
        achievements: [
          "My Achievement-1",
          "My Achievement-2",
          "My Achievement-3"
        ],
        positions: [{
          title: "Position Title-1",
          timeline: "July 2022 - Present",
          achievements: ["", ""]
        },
        {
          title: "Position Title-2",
          timeline: "December 2020 – June 2022",
          achievements: ["Achievement-1", ""]
        }
        ]
      }
    };
  }
  componentDidMount() {
    var a = localStorage.getItem("ResumeData");
    if (a != null) {
      if (a.length > 40) {
        a = JSON.parse(a);
        a.preview = false;
        this.setState(a);
        //console.log("got Data", this.state, Date());
      }
    }
  }
  setData = (data) => {
    this.setState(data);
    var a = JSON.stringify(this.state);
    localStorage.setItem("ResumeData", a);
    //console.log("set", a, Date());
  }
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setData(({ [name]: value }));
  }
  setGmail = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    value = value.trim();
    var prevState = this.state;
    prevState.link = { ...prevState.link, [name]: value };
    this.setData(prevState);
    if (value.trim() === "") { value = "" }
    else {
      value = "mailto:" + value;
    }
    this.setLink(name, value);
  }
  setWhatsapp = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    value = value.trim();
    var prevState = this.state;
    prevState.link = { ...prevState.link, [name]: value };
    this.setData(prevState);
    if (value.trim() === "") { value = "" }
    else { value = "https://wa.me/" + value; }
    this.setLink(name, value);
  }
  setGithub = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    value = value.trim();
    var prevState = this.state;
    prevState.link = { ...prevState.link, [name]: value };
    this.setData(prevState);
    if (value.trim() === "") { value = "" }
    else {
      value = "https://www.github.com/" + value;
    }
    this.setLink(name, value);
  }
  setLinkedin = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    value = value.trim();
    var prevState = this.state;
    prevState.link = { ...prevState.link, [name]: value };
    this.setData(prevState); if (value.trim() === "") { value = "" }
    else {
      value = "https://www.linkedin.com/in/" + value;
    }
    this.setLink(name, value);
  }
  setLink = (n, v) => {
    v = v.trim();
    n = "l" + n;
    var prevState = this.state;
    if (!(v.includes("http://") || v.includes("https://"))) {
      if (v.trim() === "") { v = "" }
      else {
        v = "https://" + v;
      }
    }
    prevState.link = { ...prevState.link, [n]: v };
    this.setData(prevState);
  }
  setEducation = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target, "f");
    var classList = ["fStartYear", "fEndYear", "fDegree", "fInstitution", "fCGPA", "fPercentage"]
    classList.forEach(className => {
      var temp = document.getElementsByClassName(className);
      var val = temp[classIndex].value;
      var nam = temp[classIndex].name;

      prevState.education[classIndex] = { ...prevState.education[classIndex], [nam]: val };
    });
    this.setData(prevState);
  }
  setExperience = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target, "f");
    var classList = ["fCompany", "fLink", "fDate", "fRole"];
    classList.forEach(className => {
      var temp = document.getElementsByClassName(className);
      var val = temp[classIndex].value;
      var nam = temp[classIndex].name;
      prevState.experience[classIndex] = { ...prevState.experience[classIndex], [nam]: val };
    });
    this.setData(prevState);
  }
  setExpAchi = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target.parentNode.parentNode.parentNode, "d");
    var achIn = 0;
    var ele = document.getElementsByClassName("fExpAchievements");
    for (var i = 0; i < ele.length; i++) {
      if ((showIndex(ele[i].parentNode.parentNode.parentNode, "d")) === classIndex) {
        var val = ele[i].value;
        //console.log(classIndex, achIn, prevState.experience[classIndex]);
        prevState.experience[classIndex].achievements[achIn++] = val;
      }
    }
    this.setData(prevState);
  }
  setProjects = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target, "f");
    var classList = ["fCategory", "fName", "fLink", "fRole", "fTeamSize", "fDuration", "fDate"];
    classList.forEach(className => {
      var temp = document.getElementsByClassName(className);
      var val = temp[classIndex].value;
      var nam = temp[classIndex].name;

      prevState.projects[classIndex] = { ...prevState.projects[classIndex], [nam]: val };
    });
    this.setData(prevState);
  }
  setProAchi = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target.parentNode.parentNode.parentNode, "d");
    var achIn = 0;
    var ele = document.getElementsByClassName("fProAchievements");
    for (var i = 0; i < ele.length; i++) {
      if ((showIndex(ele[i].parentNode.parentNode.parentNode, "d")) === classIndex) {
        var val = ele[i].value;
        prevState.projects[classIndex].achievements[achIn++] = val;
      }
    }
    this.setData(prevState);
  }
  setSkills = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target, "f");
    var temp = document.getElementsByClassName("fSkill");
    var val = temp[classIndex].value;
    prevState.skills[classIndex][0] = val;
    temp = document.getElementsByClassName("fSkillDes");
    val = temp[classIndex].value;
    prevState.skills[classIndex][1] = val;
    this.setData(prevState);
  }
  setAchievement = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target, "f");
    var temp = document.getElementsByClassName("fAchi");
    var val = temp[classIndex].value;
    prevState.achievements[classIndex] = val;
    this.setData(prevState);
  }
  setPositions = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target, "f");
    var classList = ["fTitle", "fTimeline"];
    classList.forEach(className => {
      var temp = document.getElementsByClassName(className);
      var val = temp[classIndex].value;
      var nam = temp[classIndex].name;

      prevState.positions[classIndex] = { ...prevState.positions[classIndex], [nam]: val };
    });
    this.setData(prevState);
  }
  setPosAchi = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target.parentNode.parentNode.parentNode, "d");
    var achIn = 0;
    var ele = document.getElementsByClassName("fPosAchievements");
    for (var i = 0; i < ele.length; i++) {
      if ((showIndex(ele[i].parentNode.parentNode.parentNode, "d")) === classIndex) {
        var val = ele[i].value;
        prevState.positions[classIndex].achievements[achIn++] = val;
      }
    }
    this.setData(prevState);
  }
  newForEdu = (e) => {
    e.preventDefault();
    var prevState = this.state;
    prevState.education.push({ startYear: "", endYear: "", degree: "", institution: "", CGPA: "", percentage: "" });
    this.setData(prevState);
  }

  newForExperience = (e) => {
    e.preventDefault();
    var prevState = this.state;
    prevState.experience.push({
      company: "", link: "", date: "", role: "", achievements: ["", ""]
    });
    this.setData(prevState);
  }
  newForExpAchi = (e) => {
    e.preventDefault();
    var classIndex = showIndex(e.target.parentNode.parentNode, "d");
    console.log(classIndex);
    var prevState = this.state;
    prevState.experience[classIndex].achievements.push("");
    this.setData(prevState);
  }
  newForProject = (e) => {
    e.preventDefault();
    var prevState = this.state;
    prevState.projects.push({
      category: "", name: "", link: "", role: "", teamSize: "", duration: "", date: "", achievements: ["", ""]
    });
    this.setData(prevState);
  }
  newForSkill = (e) => {
    e.preventDefault();
    var prevState = this.state;
    prevState.skills.push(["", ""]);
    this.setData(prevState);
  }
  newForAchi = (e) => {
    e.preventDefault();
    var prevState = this.state;
    prevState.achievements.push("");
    this.setData(prevState);
  }
  newForPosition = (e) => {
    e.preventDefault();
    var prevState = this.state;
    prevState.positions.push({
      title: "", timeline: "", achievements: ["", ""]
    });
    this.setData(prevState);
  }
  generatePDF() {
    window.print();
  }
  handleSubmit = e => {
    e.preventDefault();
  }
  togData = (e) => {
    var prevState = this.state;
    prevState.preview = !prevState.preview;
    this.setData(prevState);
  }
  remove = (base, ind) => {
    var prevState = base;
    prevState.splice(ind, 1);
    this.setData(prevState);
  }
  newForDivAchi = (base, index) => {
    var prevState = base;
    console.log(prevState);
    prevState[index].achievements.push("");
    console.log(prevState);
    this.setData(prevState);
  }
  removeInAchi = (base, need, ind) => {
    var prevState = base;
    prevState[need].achievements.splice(ind, 1);
    this.setData(prevState);
  }
  exportFile = () => {
    let textout = JSON.stringify(this.state);
    var blob = new Blob([textout], { type: "text/plain;charset=utf-8" });
    saveAs(blob, (this.state.fullName + "-Resume saved file.txt"));
  }
  showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => {
      let textin = (e.target.result)
      console.log(textin)
      let obj = JSON.parse(textin);
      this.setState(obj);
    };
    reader.readAsText(e.target.files[0])
  }
  render() {
    return (
      <>
        <div className='FormInter'>

          <div className='fulDivBut'>
            <div className='FDBChd'>
              <button onClick={this.exportFile} className="addBut equal">Save as Text File</button></div>
            <div className='FDBChd'>
              <label htmlFor="file-upload" className="custom-file-upload equal">
                Custom Upload
              </label>
              <input type="file" id="file-upload" onChange={this.showFile} /></div>
          </div>
          <button onClick={this.generatePDF} className="addBut">Print as PDF</button>
          <form onSubmit={this.handleSubmit} onKeyDown={this.handleSubmit}>
            <fieldset className='ZeroFieSet'>
              <div className='spliFor'>
                <div className='spliChd'>
                  <span>Preview</span>
                </div>
                <div className='spliChd'>
                  <div className='divCheBo'>
                    <input type="checkbox" onChange={this.togData} />
                  </div>
                </div>
              </div></fieldset>
            <fieldset className='firFieSet'>
              <legend>Your Personal Data</legend>
              <input id="fullName" name="fullName" onChange={this.handleChange} value={this.state.fullName} type="text" placeholder=" " />
              <label htmlFor="fullName">Full Name</label>
              <input id="portfolioLink" name="portfolioLink" onChange={this.handleChange} value={this.state.portfolioLink} type="text" placeholder=" " />
              <label htmlFor="portfolioLink">Portfolio Link</label>
              <input id="github" name="github" onChange={this.setGithub} value={this.state.link.github} type="text" placeholder=" " />
              <label htmlFor="github">Github User Id</label>
              <input id="gmail" name="gmail" onChange={this.setGmail} value={this.state.link.gmail} type="text" placeholder=" " />
              <label htmlFor="gmail">Gmail</label>
              <input id="whatsapp" name="whatsapp" onChange={this.setWhatsapp} value={this.state.link.whatsapp} type="number" placeholder=" " />
              <label htmlFor="whatsapp">Whatsapp <span style={{ fontSize: "0.8rem" }}>(needed 12 digits)</span></label>
              <input id="linkedin" name="linkedin" onChange={this.setLinkedin} value={this.state.link.linkedin} type="text" placeholder=" " />
              <label htmlFor="linkedin">Linkedin</label>
            </fieldset>
            <div id="divForEdu">
              {this.state.education.map((con, index) => {
                return (<NewForEduRow rem={this.remove} cha={this.setEducation} base={this.state.education} ind={index} key={index}></NewForEduRow>);
              })}
              <button onClick={this.newForEdu} className="fAddEdu addBut">+ Add Education</button>
            </div>

            <div id="divForExp">
              {this.state.experience.map((con, index) => {
                return (<NewForExp rem={this.remove} achiRem={this.removeInAchi} achiAdd={this.newForDivAchi} cha={this.setExperience} achCha={this.setExpAchi} base={this.state.experience} ind={index} key={index}></NewForExp>);
              })}

              <button onClick={this.newForExperience} className="fAddProject addBut">+ Add Experience</button>
            </div>

            <div id="divForPro">
              {this.state.projects.map((con, index) => {
                return (<NewForPro rem={this.remove} achiRem={this.removeInAchi} achiAdd={this.newForDivAchi} cha={this.setProjects} achCha={this.setProAchi} base={this.state.projects} ind={index} key={index}></NewForPro>);
              })}

              <button onClick={this.newForProject} className="fAddProject addBut">+ Add Projects</button>
            </div>

            <div id="divForSkills">
              {this.state.skills.map((con, index) => {
                return (<NewForSkills rem={this.remove} cha={this.setSkills} base={this.state.skills} ind={index} key={index}></NewForSkills>);
              })}

              <button onClick={this.newForSkill} className="fAddSkills addBut">+ Add Skills</button>
            </div>

            <div id="divForAchiv">
              <fieldset>
                <legend>Your Achievements</legend>
                {this.state.achievements.map((con, index) => {
                  return (<NewForAchievement rem={this.remove} cha={this.setAchievement} base={this.state.achievements} ind={index} key={index}></NewForAchievement>);
                })}

                <button onClick={this.newForAchi} className="fAddAchi addBut">+ Add Achievement</button>
              </fieldset>
            </div>

            <div id="divForpositions">
              {this.state.positions.map((con, index) => {
                return (<NewForPosition rem={this.remove} cha={this.setPositions} achiRem={this.removeInAchi} achiAdd={this.newForDivAchi} achCha={this.setPosAchi} base={this.state.positions} ind={index} key={index}></NewForPosition>);
              })}

              <button onClick={this.newForPosition} className="fAddPosition addBut">+ Add Positions</button>
            </div>

          </form>
        </div>
        {
          (this.state.preview) ?
            (<Resume data={this.state.demo} />) :
            (<Resume data={this.state} />)
        }
      </>
    );
  }
}


function NewForEduRow(props) {
  var { rem, cha, base, ind } = props;
  var numbering;
  switch (ind) {
    case 0:
      numbering = "1st";
      break;
    case 1:
      numbering = "2nd";
      break;
    case 2:
      numbering = "3rd";
      break;
    default:
      numbering = ind + 1 + "th";
      break;
  }
  return (
    <div className='divEduSer'>
      <fieldset>
        <legend>Your {numbering} Education</legend>
        <span onClick={() => { rem(base, ind) }} className="remBut">&#10060;</span>
        <div className='spliFor'>
          <div className='spliChd'>
            <input id={"EdustaYea-" + ind} name="startYear" className="fStartYear" onChange={cha} value={base[ind].startYear} type="number" min="1500" step="1" placeholder=" " />
            <label htmlFor={"EdustaYea-" + ind}>Starting year</label>
          </div>
          <div className='spliChd'>
            <input id={"EduendYea-" + ind} name="endYear" className="fEndYear" onChange={cha} value={base[ind].endYear} type="number" min="1501" step="1" placeholder=" " />
            <label htmlFor={"EduendYea-" + ind}>Ending year</label>
          </div>
        </div>
        <input id={"EduDegree-" + ind} name="degree" className="fDegree" onChange={cha} value={base[ind].degree} type="text" placeholder=" " />
        <label htmlFor={"EduDegree-" + ind}>Degree</label>
        <input id={"EduInstitution-" + ind} name="institution" className="fInstitution" onChange={cha} value={base[ind].institution} type="text" placeholder=" " />
        <label htmlFor={"EduInstitution-" + ind}>Institution</label>
        <p><span style={{ color: "red" }}>*</span> CGPA is preferred over Percentage</p>
        <div className='spliFor'>
          <div className='spliChd'>
            <input id={"EduCGPA-" + ind} name="CGPA" className="fCGPA" onChange={cha} value={base[ind].CGPA} type="number" min="0" max="10" step="0.01" placeholder=" " />
            <label htmlFor={"EduCGPA-" + ind}>CGPA</label>
          </div>
          <div className='spliChd'>
            <input id={"EduPercentage-" + ind} name="percentage" className="fPercentage" onChange={cha} value={base[ind].percentage} type="number" min="0" max="100" step="0.01" placeholder=" " />
            <label htmlFor={"EduPercentage-" + ind}>Percentage</label>
          </div>
        </div>
      </fieldset>
    </div>
  );

}
function NewForExp(props) {
  var { rem, achiRem, achiAdd, cha, achCha, base, ind } = props;
  var numbering;
  switch (ind) {
    case 0:
      numbering = "1st";
      break;
    case 1:
      numbering = "2nd";
      break;
    case 2:
      numbering = "3rd";
      break;
    default:
      numbering = ind + 1 + "th";
      break;
  }

  var achi = base[ind].achievements.map((con, index) => {
    return (
      <React.Fragment key={index}>
        <div className='DivAchiFor'>
          <input id={"ExpAchi-" + ind + index} name="achievements" className="fExpAchievements" onChange={achCha} value={base[ind].achievements[index]} type="text" placeholder=" " />
          <label htmlFor={"ExpAchi-" + ind + index}>Role Achievement-{index + 1}:</label>
          <span onClick={() => { achiRem(base, ind, index) }} className="remBut">&#10060;</span>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className='divExpSer'>
      <fieldset>
        <legend>Your {numbering} Experience</legend>
        <span onClick={() => { rem(base, ind) }} className="remBut">&#10060;</span>
        <input id={"ExpCat-" + ind} name="company" className="fCompany" onChange={cha} value={base[ind].company} type="text" placeholder=" " />
        <label htmlFor={"ExpCat-" + ind}>Company Name</label>
        <input id={"ExpLink-" + ind} name="link" className="fLink" onChange={cha} value={base[ind].link} type="text" placeholder=" " />
        <label htmlFor={"ExpLink-" + ind}>Work Link</label>
        <div className='spliFor'>
          <div className='spliChd'>
            <input id={"ExpRole-" + ind} name="role" className="fRole" onChange={cha} value={base[ind].role} type="text" placeholder=" " />
            <label htmlFor={"ExpRole-" + ind}>Your Role</label></div>
          <div className='spliChd'>
            <input id={"ExpDate-" + ind} name="timeline" className="fDate" onChange={cha} value={base[ind].timeline} type="text" placeholder=" " />
            <label htmlFor={"ExpDate-" + ind}>Date or Time Frame</label>
          </div>
        </div>
        {achi}

        <button onClick={() => { achiAdd(base, ind) }} className="fAddExpAchi addBut">+ Add Achievement</button>
      </fieldset>
    </div>
  );

}
function NewForPro(props) {
  var { rem, achiRem, achiAdd, cha, achCha, base, ind } = props;
  var numbering;
  switch (ind) {
    case 0:
      numbering = "1st";
      break;
    case 1:
      numbering = "2nd";
      break;
    case 2:
      numbering = "3rd";
      break;
    default:
      numbering = ind + 1 + "th";
      break;
  }
  var achi = base[ind].achievements.map((con, index) => {
    return (
      <React.Fragment key={index}>
        <div className='DivAchiFor'>
          <input id={"ProAchi-" + ind + index} name="achievements" className="fProAchievements" onChange={achCha} value={base[ind].achievements[index]} type="text" placeholder=" " />
          <label htmlFor={"ProAchi-" + ind + index}>Project Achievement-{index + 1}:</label>
          <span onClick={() => { achiRem(base, ind, index) }} className="remBut">&#10060;</span>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className='divProSer'>
      <fieldset>
        <legend>Your {numbering} Project</legend>
        <span onClick={() => { rem(base, ind) }} className="remBut">&#10060;</span>
        <input id={"ProCat-" + ind} name="category" className="fCategory" onChange={cha} value={base[ind].category} type="text" placeholder=" " />
        <label htmlFor={"ProCat-" + ind}>Project Category</label>
        <input id={"ProName-" + ind} name="name" className="fName" onChange={cha} value={base[ind].name} type="text" placeholder=" " />
        <label htmlFor={"ProName-" + ind}>Project Name</label>
        <input id={"ProLink-" + ind} name="link" className="fLink" onChange={cha} value={base[ind].link} type="text" placeholder=" " />
        <label htmlFor={"ProLink-" + ind}>Project Link</label>
        <div className='spliFor'>
          <div className='spliChd'>
            <input id={"ProRole-" + ind} name="role" className="fRole" onChange={cha} value={base[ind].role} type="text" placeholder=" " />
            <label htmlFor={"ProRole-" + ind}>Your Role</label></div>
          <div className='spliChd'>
            <input id={"ProDate-" + ind} name="date" className="fDate" onChange={cha} value={base[ind].date} type="text" placeholder=" " />
            <label htmlFor={"ProDate-" + ind}>Date or Time Frame</label>
          </div>
        </div>
        <div className='spliFor'>
          <div className='spliChd'>
            <input id={"ProTeamSize-" + ind} name="teamSize" className="fTeamSize" onChange={cha} value={base[ind].teamSize} type="number" step="1" placeholder=" " />
            <label htmlFor={"ProTeamSize-" + ind}>Team Size</label>
          </div>
          <div className='spliChd'>
            <input id={"ProDuration-" + ind} name="duration" className="fDuration" onChange={cha} value={base[ind].duration} type="text" placeholder=" " />
            <label htmlFor={"ProDuration-" + ind}>Duration</label>
          </div>
        </div>
        {achi}

        <button onClick={() => { achiAdd(base, ind) }} className="fAddExpAchi addBut">+ Add Achievement</button>
      </fieldset>
    </div>
  );

}
function NewForSkills(props) {
  var { rem, cha, base, ind } = props;
  var numbering;
  switch (ind) {
    case 0:
      numbering = "1st";
      break;
    case 1:
      numbering = "2nd";
      break;
    case 2:
      numbering = "3rd";
      break;
    default:
      numbering = ind + 1 + "th";
      break;
  }
  return (
    <div className='divSkillsSer'>
      <fieldset>
        <legend>Your {numbering} Skill</legend>
        <span onClick={() => { rem(base, ind) }} className="remBut">&#10060;</span>
        <input id={"SkiTit-" + ind} name="skill" className="fSkill" onChange={cha} value={base[ind][0]} type="text" placeholder=" " />
        <label htmlFor={"SkiTit-" + ind}>Skills sub-category</label>
        <input id={"SkiDes-" + ind} name="skillDes" className="fSkillDes" onChange={cha} value={base[ind][1]} type="text" placeholder=" " />
        <label htmlFor={"SkiDes-" + ind}>Skills list</label>

      </fieldset>
    </div>
  );

}
function NewForAchievement(props) {
  var { rem, cha, base, ind } = props;
  var numbering;
  switch (ind) {
    case 0:
      numbering = "1st";
      break;
    case 1:
      numbering = "2nd";
      break;
    case 2:
      numbering = "3rd";
      break;
    default:
      numbering = ind + 1 + "th";
      break;
  }
  return (
    <div className='divAchieveSer'>
      <div className='DivAchiFor'>
        <input id={"AchiSer-" + ind} name="achievements" className="fAchi" onChange={cha} value={base[ind]} type="text" placeholder=" " />
        <label htmlFor={"AchiSer-" + ind}>Your {numbering} Achievement</label>
        <span onClick={() => { rem(base, ind) }} className="remBut">&#10060;</span>
      </div>

    </div>
  );

}
function NewForPosition(props) {
  var { rem, achiRem, achiAdd, cha, achCha, base, ind } = props;
  var numbering;
  switch (ind) {
    case 0:
      numbering = "1st";
      break;
    case 1:
      numbering = "2nd";
      break;
    case 2:
      numbering = "3rd";
      break;
    default:
      numbering = ind + 1 + "th";
      break;
  }
  var achi = base[ind].achievements.map((con, index) => {
    return (
      <React.Fragment key={index}>
        <div className='DivAchiFor'>
          <input id={"PosAchi-" + ind + index} name="achievements" className="fPosAchievements" onChange={achCha} value={base[ind].achievements[index]} type="text" placeholder=" " />
          <label htmlFor={"PosAchi-" + ind + index}>Position Achievement-{index + 1}:</label>
          <span onClick={() => { achiRem(base, ind, index) }} className="remBut">&#10060;</span>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className='divPosSer'>
      <fieldset>
        <legend>Your {numbering} Positions</legend>
        <span onClick={() => { rem(base, ind) }} className="remBut">&#10060;</span>
        <input id={"PosTit-" + ind} name="title" className="fTitle" onChange={cha} value={base[ind].title} type="text" placeholder=" " />
        <label htmlFor={"PosTit-" + ind}>Position Title</label>
        <input id={"PosTimLin-" + ind} name="timeline" className="fTimeline" onChange={cha} value={base[ind].timeline} type="text" placeholder=" " />
        <label htmlFor={"PosTimLin-" + ind}>Position Timeline</label>
        {achi}
        <button onClick={() => { achiAdd(base, ind) }} className="fAddExpAchi addBut">+ Add Achievement</button>

      </fieldset>
    </div>
  );

}
function showIndex(evt, str) {
  var classList = evt.classList;
  var className;
  for (let i = 0; i < classList.length; i++) {
    if (classList[i].charAt(0) === str) {
      className = classList[i];
    }
  }
  var claArr = document.getElementsByClassName(className);
  for (let i = 0; i < claArr.length; i++)
    if (claArr[i] === evt) {
      //console.log("classIndex: " + i);
      return i;
    }
}

export default FullFun;