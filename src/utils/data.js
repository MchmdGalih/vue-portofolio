import beReview from "@/assets/be-review-film.jpg";
import noteList from "@/assets/personal-notes.jpg";
import bookShelf from "@/assets/book-shelf.jpg";

const dataExperience = [
  {
    id: 1,
    title: "Bootcamp Fullstack Developer",
    date: "Dec 2024 - Jan 2025",
    company: "Rumah Amal Salman X Sanbercode",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapientecum. Odit in numquam porro harum omnis nostrum, quas eius ab, quasiprovident impedit, quibusdam accusamus eos exercitationem saepe. Nemo sit unde, eos autem at ipsum rem, a optio exercitationem inventore nesciunt natus totam accusantium. Perspiciatis minima asperiores tempora sapiente?",
    tech: ["PHP", "Laravel", "SQL", "Tailwind", "Vue Js", "Javascript"],
  },

  {
    id: 2,
    title: "Bootcamp Fullstack Developer",
    date: "Jun 2023 - Jul 2023",
    company: "Alkademi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapientecum. Odit in numquam porro harum omnis nostrum, quas eius ab, quasiprovident impedit, quibusdam accusamus eos exercitationem saepe.",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapientecum. Odit in numquam porro harum omnis nostrum, quas eius ab, quasiprovident impedit, quibusdam accusamus eos exercitationem saepe.",
    tech: ["Ink Mixing System"],
  },

  {
    id: 3,
    title: "Metal Production Operator",
    date: "Jan 2017 - Mar 2017",
    company: "CV. Kharisma Teknik ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapientecum. Odit in numquam porro harum omnis nostrum, quas eius ab, quasiprovident impedit, quibusdam accusamus eos exercitationem saepe.",
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
    urlGithub: "https://github.com/MchmdGalih/notes-v2",
    urlLink: "https://notes-v2-seven.vercel.app/",
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
    icon: "fa-facebook",
    url: "#",
  },
];

export { dataExperience, dataPhoto, dataSkills, dataIcons };
