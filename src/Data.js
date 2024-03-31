
import {faHome, faEnvelope, faUserGraduate, faFolder, faSquareRss } from '@fortawesome/free-solid-svg-icons'
export const navLinks = [
    {
        id: 1,
        name: 'Home',
        icon: faHome,      
        path: '/'
    },
    {
        id: 2,
        name: `About`,
        icon : faUserGraduate,
        path: '/About'
    }, 
    {
        id: 3,
        name: 'Project',
        icon : faFolder,
        path: '/project'
    },
    {
        id: 4,
        name: 'Blog',
        icon : faSquareRss,
        path: '/Blog'
    },
    {
        id: 5,
        name: 'Contact',
        icon : faEnvelope,
        path: '/Contact'
    },
    
];

import image1 from '../src/assets/html.png'
import image2 from '../src/assets/react.png'
import image3 from '../src/assets/download.png'
import image4 from '../src/assets/git.png'
import image5 from '../src/assets/firebase.png'


export const tools = [
    {
        id: 1,
        img: image1,
    },
    {
        id: 2,
        img: image2,
    },
    {
        id: 3,
        img: image3,
    },
    {
        id: 4,
        img: image4,
    },
    {
        id: 5,
        img: image5,
    },
];

import blogImg1 from '../src/assets/Master CRUD Operations with AXIOS (1).jpg';
import blogImg2 from '../src/assets/Comprehensive guide to javascript hoisting (1).png';
import blogImg3 from '../src/assets/javascript functions.webp';
export const blogs = [
    {
        id: 1,
        img: blogImg1, 
        articleTitle: 'Mastering CRUD Operation with AXIOS',
        desc: 'In this article, I am going to show you how we can create data, retrieve data from the database as well as delete data from the database, which is the essence of CRUD operation using AXIOS.',
        articleSite: "hashnode",
        site:'https://oluwafunmike.hashnode.dev/mastering-crud-operation-with-axios',
    },
    {
        id: 2,
        img: blogImg2,
        articleTitle: 'A Comprehensive Guide on JavaScript Hoisting',
        desc: "In this article, we'll understand what hoisting is, its importance and how it works in JavaScript.",
        articleSite: "hashnode",
        site:'https://oluwafunmike.hashnode.dev/a-comprehensive-guide-on-javascript-hoisting',
    },
    {
        id: 3,
        img: blogImg3,
        articleTitle: 'Mastering JavaScript Functions: A Comprehensive Guide for Web Developers',
        desc: "In this article, we'll understand what JavaScript functions are, its importance and the different kinds of functions we have available in JavaScript.",
        articleSite: "hashnode",
        site:'https://oluwafunmike.hashnode.dev/mastering-javascript-functions-a-comprehensive-guide-for-web-developers',
    }
];

import portfoliImg1 from '../src/assets/icodeonline.png';
import portfoliImg2 from '../src/assets/chatatapp.png';

export const portfolio = [
    {
        id: 1,
        img: portfoliImg1,
        name: 'Online Code Editor',
        desc: 'An online code editor that can compile and execute code in 40+ different languages, as well as several themes of your choice',
        tag: "React, Sass, JudgeO, monaco ",
        site:'https://icodeonline.netlify.com/',
    },
    {
        id: 2,
        img: portfoliImg2,
        name: 'Chat App',
        desc: 'A one-room chat application where you get real-time messages. This is a web application that allows multiple users to have a private chat and it is fast and easy to use.',
        tag:"React, Tailwind CSS, Firebase",
        site:'https://chatatapp.netlify.app/',
    }
];