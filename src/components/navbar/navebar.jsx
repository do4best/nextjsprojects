import React from 'react';
import Home from "@/app/page";
import Link from "next/link";
const links=[
    {
        id:1,
        title:'Home',
        url:'/'
    },
    {
        id:2,
        title:'Portfolio',
        url:'/portfolio'
    },
    {
        id:3,
        title:'Blog',
        url:'/blog'
    },
    {
        id:4,
        title:'about',
        url:'/about'
    },
    {
        id:5,
        title:'Contact',
        url:'/contact'
    },
    {
        id:6,
        title:'Dashboard',
        url:'/dashboard'
    },
]
function Navebar(props) {
    return (
        <>
        <div>
            <Link href={"/"}>MyHome</Link>
            <div>
                {links.map((link)=>(
                    <Link href={link.url}>{link.title}</Link>
                ))}
            </div>
        </div>
        </>
    );
}

export default Navebar;