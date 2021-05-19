export type projectType = {
    title: string;
    deskription: string;
    img: string;
}[]

export type skillsType = {
    title: string;
    img: string;
}[]

export type stateType = {
    skills:skillsType
    project:projectType
}


const state: stateType = {
    skills: [
        {
            title: "JavaScript",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQnh5QCAzka8bT1e1t-avBteIJIdPz12W6wtZuY5uuetZ80puIEyLuFOCIVxuovywBdclm5j-jJCKiGqf1DI_E9dwSK4KN3b064kWs&usqp=CAU&ec=45704948"
        },
        {
            title: "TypeScript",
            img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
        },
        {
            title: "HTML",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJ_nc7MmbS-z8RqlZ6yQUfkJ46YW_8cs6Mm9iLrvx3nLyPfnHcCSR2NHHhmcG6FgHVNxG-BZNOmAKs3NFlMKXtrOfhzb8LDpoqzLTn&usqp=CAU&ec=45704948"
        },
        {
            title: "CSS",
            img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
        },
        {
            title: "React",
            img: "https://cdn.auth0.com/blog/react-js/react.png"
        },
        {
            title: "Redux",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSera_0nBrSxz_Lunp_CEK1xY-HMjJy14gQ0W-G3AU99CH_g4lzKrqeXkVcjmfGv2ZlstlToavvHekj8BfE_t0lhZZ9_IZHLsRNz5c5&usqp=CAU&ec=45704948"
        },
        {
            title: "Git",
            img: "https://avatars3.githubusercontent.com/u/18133?s=200&v=4"
        },
        {
            title: "Material-UI",
            img: "https://webmonstr.com/static/course/pressa/9-material/images/1.png"
        },
    ],
    project: [
        {
            title: "Social network",
            deskription: "https://torysova.github.io/wey_samurai_ts/#/login",
            img: "https://i.pinimg.com/564x/68/6b/07/686b07e7a8a09447677e69f67ec8e784.jpg"
        },
        {
            title: "Todolist",
            deskription: "https://torysova.github.io/ToDoList/#/login",
            img: "https://i.pinimg.com/564x/6b/60/14/6b6014a6ea8d146062de5714bb1b2666.jpg"
        },
        {
            title: "React quiz",
            deskription: "https://torysova.github.io/test-react/",
            img: "https://i.pinimg.com/564x/c3/ca/35/c3ca35fea2eed3054df3f309030b3a49.jpg"
        },
        {
            title: "Weather",
            deskription: "https://torysova.github.io/Weather-openweathermap/",
            img: "https://i.pinimg.com/564x/ab/96/a8/ab96a8d990b339f53202e32777481a63.jpg"
        }
    ]
}

export default state;
