'use client'
import React from 'react';
import Home from "@/app/page";
import Link from "next/link";
import {  Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,} from "@/components/ui/menubar";
import {Button} from "@/components/ui/button";

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
        <div className={"flex justify-between items-center p-4"}>
            <Link href={"/"}>MyHome</Link>
            <Menubar>
                <MenubarMenu>
                    {links.map((link)=>(
                        <MenubarTrigger key={link.id}>
                            <Link className={"flex flex-row gap-5"}  href={link.url}>{link.title}</Link>
                        </MenubarTrigger>
                    ))}

<Button onClick={()=>console.log("Logout")} variant={"warning"} className={"bg-red-500 text-white"}>Login</Button>

                </MenubarMenu>
            </Menubar>
        </div>
        </>
    );
}

export default Navebar;