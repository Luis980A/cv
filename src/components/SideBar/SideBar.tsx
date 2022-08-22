import { SideBarMenuCard, SideBarMenuItem } from '../../types/types.d';
import { GiSkills } from 'react-icons/gi';
import { FcBusinessman } from 'react-icons/fc';
import { FcHome } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { BsGithub } from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa';
import { FcContacts } from 'react-icons/fc';
import { SideBarMenu } from '../SideBarMenu/SiderBarMenu';

const SideBar = () => {
    const items: SideBarMenuItem[] = [
        {
            id: '1',
            label: 'Home',
            icon: FcHome,
            url: '/Home',
        },
        {
            id: '2',
            label: 'About',
            icon: FcBusinessman,
            url: '/about',
        },
        {
            id: '3',
            label: 'Skills',
            icon: GiSkills,
            url: '/skills',
        },
        {
            id: '4',
            label: 'Education',
            icon: MdCastForEducation,
            url: '/education',
        },
        {
            id: '5',
            label: 'Experience',
            icon: GrUserExpert,
            url: '/experience',
        },
        {
            id: '6',
            label: 'Projects',
            icon: BsGithub,
            url: '/projects',
        },
        {
            id: '8',
            label: 'Contact',
            icon: FcContacts,
            url: '/contact',
        }
    ];
    const mensaje = ["Bienvenido a mi cv", "Mi nombre es ", "Luis Ramirez y soy Programador Web"];

    const card: SideBarMenuCard = {
        id: '1',
        displayName: 'Luis Ramírez',
        title: 'Desarrollador FullStack',
        photoUrl: 'https://wexpertos.com/media/images/trabajo-desarrollador-web.jpg',
        url: '/',
    };
    return (
        <SideBarMenu items={items} card={card} />
    )
}

export default SideBar;