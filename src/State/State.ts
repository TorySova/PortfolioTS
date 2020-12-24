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
            img: "https://cdn.worldvectorlogo.com/logos/react.svg"
        },
        {
            title: "Redux",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSera_0nBrSxz_Lunp_CEK1xY-HMjJy14gQ0W-G3AU99CH_g4lzKrqeXkVcjmfGv2ZlstlToavvHekj8BfE_t0lhZZ9_IZHLsRNz5c5&usqp=CAU&ec=45704948"
        },
        {
            title: "Git",
            img: "https://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png"
        },
    ],
    project: [
        {
            title: "Project 1",
            deskription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus quod ipsa incidunt nostrum ut, nulla a tempora non consectetur?",
            img: "https://data.1freewallpapers.com/download/flowers-white-macro-minimalism-1920x1080.jpg"
        },
        {
            title: "Project 2",
            deskription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus quod ipsa incidunt nostrum ut, nulla a tempora non consectetur?",
            img: "https://minimalwork.ru/wp-content/uploads/2019/04/minimalizm-po-polochkam-1-1024x681.jpg"
        },
        {
            title: "Project 3",
            deskription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus quod ipsa incidunt nostrum ut, nulla a tempora non consectetur?",
            img: "https://prostonail.com/wp-content/uploads/2018/05/bench-accounting-49909-unsplash.jpg"
        }
    ]
}

export default state;
