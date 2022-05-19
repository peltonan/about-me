//Map Function for Project Section//
import projectOne from './images/feelingsFirstAid.png';
import projectTwo from './images/imageMe.png'
import projectThree from './images/feelBetterQuotes.png'
import projectFour from './images/tetris.png'

export const projects = [
    {
        projectPicture: projectOne,
        projectTools: "HTML - CSS - REACT",
        projectTitle: "Survey with yes/no Questions",
        projectDescription: "A tool giving tips how to improve your mood!",
        projectLink: "https://feelings-first-aid.vercel.app/",
        githubLink: "https://github.com/peltonan/feelings-first-aid",
    },
    {
        projectPicture: projectTwo,
        projectTools: "HTML - CSS - REACT",
        projectTitle: "Personal Website",
        projectDescription: "This site you're looking at now. Check it out on Github!",
        githubLink: "https://github.com/peltonan/about-me",
    },
    {
        projectPicture: projectThree,
        projectTools: "HTML - CSS - REACT",
        projectTitle: "Quote Generator",
        projectDescription: "Gives a random quote with a button press!",
        projectLink: "https://quote-generator-peltonan.vercel.app/",
        githubLink: "https://github.com/peltonan/random-generator",
    },
    {
        projectPicture: projectFour,
        projectTools: "HTML - CSS - REACT",
        projectTitle: "Code-along Project",
        projectDescription: "Tetris done following a Code-along, and then adding my own styles to it. (Only Keyboard Controls).",
        projectLink: "https://tetris-peltonan.vercel.app",
        githubLink: "https://github.com/peltonan/tetris",
    },
]
