/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "theinit01",
  title: "Hi all, I'm Tushar",
  subTitle: emoji(
    "I'm currently a third-year student at JSS Science and Technology University, Mysore. With a strong background in Python and C programming languages, I'm passionate about pursuing a career in cybersecurity. I'm always looking to learn new skills and technologies to better understand the constantly evolving cybersecurity landscape."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11geF-2_WVHazjYh5n9TbzaU1hoi1_FVs/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/theinit01",
  linkedin: "https://www.linkedin.com/in/theinit01/",
  gmail: "tushar3145@gmail.com",
  gitlab: "##",
  facebook: "##",
  medium: "##",
  stackoverflow: "##",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY ETHICAL HACKER WHO WANTS TO EXPLORE NEW CHALLENGES CONSTANTLY",
  skills: [
    emoji(
      "⚡  Identify and address system vulnerabilities to enhance digital security."
    ),
    emoji(
      "⚡ Educate on cybersecurity best practices for safer online experiences"
    ),
    emoji("⚡ Stay updated on the latest cybersecurity threats and solutions")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Cybersecurity",
      fontAwesomeClassname: "fab fa-shield"
    },
    {
      skillName: "Computer Networks",
      fontAwesomeClassname: "fab fa-network-wired"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "JSS Science and Technology Univerity",
      logo: require("./assets/images/jss.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "January 2021 - April 2025",
      desc: "Became Cybersecurity Lead at GDSC."
      //    descBullets: [
      //      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //      "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //    ]
    },
    {
      schoolName: "Sainik School Sujanpur Tira",
      logo: require("./assets/images/ssst.png"),
      subHeader: "XII",
      duration: "March 2013 - April 2020",
      desc: "Ranked first in the school."
      //    descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cyber Security",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "67%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cybersecurity Lead",
      company: "Google Developer Student Club",
      companylogo: require("./assets/images/gdsc.png"),
      date: "August 2023 – Present",
      desc: "Leading cybersecurity initiatives at the Google Developer Student Club, I guide and empower the next generation of tech enthusiasts to navigate the digital world securely.",
      descBullets: [
        "Execute cybersecurity workshops and events, providing practical knowledge and hands-on experience to the wider student community."
      ]
    },
    {
      role: "Technical Coordinator",
      company: "Linux Campus Club",
      companylogo: require("./assets/images/lcc.png"),
      date: "July 2023 – Present"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Cybersecurity Professional",
      subtitle:
        "Skills: Security Information and Event Management (SIEM) · SQL · Linux · Network Security · Threat Analysis · Vulnerability Assessment · Cryptography · Intrusion Detection Systems · Python (Programming Language)",
      image: require("./assets/images/cert1.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/b513d2ee5e869864a52bb06cfdfc0417"
        }
      ]
    },
    {
      title: "Pentesting",
      subtitle:
        "Skills: Cyber-security · Information Security · Nmap · Penetration Testing",
      image: require("./assets/images/cert2.webp"),
      imageAlt: "Charles Strut Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.itmasters.edu.au/mod/certificate/view.php?id=3582&action=get"
        }
      ]
    },

    {
      title: "Problem Solving",
      subtitle: "Skills: Data Structures · Algorithms",
      image: require("./assets/images/cert3.webp"),
      imageAlt: "HackererankLogo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/f278d9c49d51"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-0000000000",
  email_address: "tushar3145@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
