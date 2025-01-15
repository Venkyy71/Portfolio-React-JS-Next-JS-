import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import eclipse from './eclipse.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import web_icon_dark from './web-icon-dark.png';
import mobile_icon from './mobile-icon.png';
import mobile_icon_dark from './mobile-icon-dark.png';
import graphics_icon from './graphics-icon.png';
import graphics_icon_dark from './graphics-icon-dark.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    eclipse,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    web_icon_dark,
    mobile_icon,
    mobile_icon_dark,
    // ui_icon,
    graphics_icon,
    graphics_icon_dark,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

// You can leave this as is, but just make sure that the assets are correctly referenced in your workData
export const workData = [
    {
        title: 'Front-end project',
        description: 'E-commerce',
        bgImage: '/work-1.png',
    },
    {
        title: 'Back-end Project',
        description: 'Book-store',
        bgImage: '/work-2.png',
    },
    {
        title: 'Database',
        description: 'Student-Management-System',
        bgImage: '/work-3.png',
    },
];

// Here too, just make sure that you either populate or remove the 'link' property
export const serviceData = [
    { icon: assets.web_icon,iconDark: assets.web_icon_dark, title: 'Front-end', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon,iconDark: assets.mobile_icon_dark , title: 'Back-end', description: 'development focuses on server-side logic and APIs to power the functionality of applications...', link: '' },
    { icon: assets.graphics_icon, iconDark: assets.graphics_icon_dark, title: 'Database', description: 'MySQL stores and manages data in structured tables using SQL...', link: '' },
];

// If you have icons and titles for this, make sure they are correctly set
export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js, Java, Spring boot, MySQL' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Business Administration' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

// This looks great, just check if all the tools are available in your assets folder
export const toolsData = [
    assets.vscode, assets.firebase, assets.eclipse, assets.figma, assets.git
];