import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Tax Knowledge Portal",
    description:
      "Me and my team built a tax knowledge portal website. I handles the frontend part of the website. I used Vue.js and tailwind CSS for design part. I handled state management using Vuex.",
    tools: ["Vue.js", "TailwindCSS", "Vuex", "PrelineUI", "Flowbite"],
    role: "Frontend Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Job Portal",
    description:
      "I have designed and developed a full-stack web app for a job portal, named HelpingHands. I created the UI using React.js, JavaScript, and TailwindCSS. For backend part, I used Express.js on top of Node.js. For authentication i used JWT, used nodemailer to handle emails, axios to handle API, etc.",
    tools: [
      "ReactJS",
      "Tailwind CSS",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node JS",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
];
