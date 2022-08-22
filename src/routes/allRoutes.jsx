import { Navigate } from 'react-router-dom';

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Education from "../pages/Education/Education";
import { Contact } from "../pages/Contact/Contact";
import { Projects } from "../pages/Projects/Projects";
import { Experience } from "../pages/Experience/Experience";

const allRoutes = [
    {
        path: '/Home',
        component: Home,
        exact: true,
    },
    {
        path: '/About',
        component: About,
        exact: true,
    },
    {
        path: '/Skills',
        component: Skills,
        exact: true,
    },
    {
        path: '/Education',
        component: Education,
        exact: true,
    },
    {
        path: '/Contact',
        component: Contact,
        exact: true,
    },
    {
        path: '/Projects',
        component: Projects,
        exact: true,
    },
    {
        path: '/Experience',
        component: Experience,
        exact: true,
    },
    { path: "/", exact: true, component: () => <Navigate to="/Home" />},
];

export { allRoutes };