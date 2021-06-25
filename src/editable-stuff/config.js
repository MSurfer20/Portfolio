// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Suyash",
  middleName: "Vardhan",
  lastName: "Mathur",
  message: " Passionate about creating an impact with technology.",
  icons: [
     {
      image: "fa fa-envelope",
      url: "mailto:suyash.mathur@research.iiit.ac.in",
    },
    {
      image: "fab fa-github",
      url: "https://github.com/MSurfer20",
    },
    {
      image: "fab fa-facebook",
      url: "https://www.facebook.com/suyashvardhan.mathur.3/",
    },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/suyashvardhanmathur/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/suyash.jpeg"),
  imageSize: 375,
  message:
    "I am an Undergraduate Research student pursuing Computer Science from IIIT Hyderabad. I have a strong foundation in Data Structures and Algorithms and I also enjoy Web development. I am an Open Source enthusiast, and am delving deep into Machine Learning, particularly Natural Language Processing. I am inquisitive and passionate about technology, and always love taking up challenges and building new stuff.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "MSurfer20", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["MSurfer20/MERN-Job-Portal", "MSurfer20/DX-Ball-Python", "orientor/dna4", "OSDG-IIITH/recommender-portal", "tejasvicsr1/Hindi-Arithmetic-Word-Problem-Solver"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 98 },
    { name: "SQL", value: 95 },
    { name: "Data Structures", value: 94 },
    { name: "C/C++", value: 96 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 85 },
    { name: "HTML/CSS", value: 95 },
    { name: "Flutter", value: 95 },
    // { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am always up for pursuing intersting work and collaborating. Feel free to drop me a message, or just say Hi! at",
  email: "suyash.mathur@research.iiit.ac.in",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Google Summer of Code Student Developer',// Here Add Company Name
      companyname: "Zulip",
      companylogo: require('../editable-stuff/zulip.jpg'),
      date: 'May 2021 – Present',
    },
    {
      role: 'Undergraduate Student Researcher',// Here Add Company Name
      companyname: "MT-NLP Lab, IIIT-H",
      companylogo: require('../editable-stuff/iiit-new.jpg'),
      date: 'May 2021 – Present',
    },
    {
      role: 'Flutter App Developer',
      companyname: "MiddleMan",
      companylogo: require('../editable-stuff/bestie.jpg'),
      date: 'Jan 2021 – April 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
