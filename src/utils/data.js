import beReview from "@/assets/be-review-film.jpg";
import noteList from "@/assets/personal-notes.jpg";
import bookShelf from "@/assets/book-shelf.jpg";
import ecommerce from "@/assets/e-commerce.jpg";

const dataExperience = [
  {
    id: 1,
    title: "Bootcamp Fullstack Developer",
    date: "Dec 2024 - Jan 2025",
    company: "Rumah Amal Salman X Sanbercode",
    description:
      "Developing a simple e-commerce web app where users can seamlessly browse and purchase products. Focusing on an intuitive UI, smooth transactions, and a great shopping experience.",
    tech: ["PHP", "Laravel", "SQL", "Tailwind", "Vue Js", "Javascript"],
  },

  {
    id: 2,
    title: "Bootcamp Fullstack Developer",
    date: "Jun 2023 - Jul 2023",
    company: "Alkademi",
    description:
      "Building a news portal website to deliver the latest updates and information to users in an intuitive and engaging way. Stay informed anytime, anywhere.",
    tech: [
      "Boostrap",
      "NuxtJs",
      "Tailwind",
      "SQL",
      "ExpressJs",
      "NodeJs",
      "Javascript",
    ],
  },
  {
    id: 3,
    title: "Color Technician Operator",
    date: "Jun 2019 - May 2022",
    company: "PT. Gajah Angkasa Perkasa",
    description:
      "As a color technician, I am responsible for selecting the appropriate materials, preparing precise color formulas, and testing the colors to ensure they meet specifications. ",
    tech: ["Ink Mixing System"],
  },

  {
    id: 3,
    title: "Metal Production Operator",
    date: "Jan 2017 - Mar 2017 (Practical Training)",
    company: "CV. Kharisma Teknik ",
    description:
      "In my role, I operate production machines and equipment according to standard operating procedures, ensuring smooth and efficient workflows. ",
    tech: ["Cutting Machine", "Forming Machine", "Welding Machine"],
  },
];

const dataPhoto = [
  {
    id: 1,
    title: "Laravel API Review-Film",
    image: beReview,
    urlGithub: "https://github.com/MchmdGalih/Be-ReviewFilm",
    urlLink: "https://documenter.getpostman.com/view/25463593/2sAYHzHivT",
    tech: ["Laravel", "PHP"],
  },
  {
    id: 2,
    title: "React App NoteList",
    image: noteList,
    urlGithub: "https://github.com/MchmdGalih/react-notes-dicoding",
    urlLink: "https://personal-notes-tan.vercel.app/",
    tech: ["React", "JavaScript"],
  },
  {
    id: 3,
    title: "Remix BookShelf",
    image: bookShelf,
    urlGithub: "https://github.com/MchmdGalih/Books-Remix",
    urlLink: "#",
    tech: ["Remix", "NestJs", "Typescript"],
  },
  {
    id: 4,
    title: "E-Commerce Basic",
    image: ecommerce,
    urlGithub: "https://github.com/MchmdGalih/FE-Kelompok5",
    urlLink: "https://fe-kelompok5.vercel.app/",
    tech: ["Vue Js", "Laravel"],
  },
];

const dataSkills = [
  "JavaScript",
  "PHP",
  "React",
  "Vue",
  "Node.js",
  "Tailwind CSS",
  "Bootstrap",
  "Laravel",
  "Express.js",
];

const dataIcons = [
  {
    id: 1,
    icon: "fa-github",
    url: "https://github.com/MchmdGalih",
  },
  {
    id: 2,
    icon: "fa-linkedin",
    url: "https://www.linkedin.com/in/mochamad-galih-sulistio-pratama",
  },
  {
    id: 3,
    icon: "fa-instagram",
    url: "https://www.instagram.com/__mochgalih/",
  },
  {
    id: 4,
    icon: "fa-discord",
    url: "https://discordapp.com/users/528492014363213844",
  },
];

export { dataExperience, dataPhoto, dataSkills, dataIcons };
