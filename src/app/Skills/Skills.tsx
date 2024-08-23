import React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const Skills = () => {
    return (
        <>
            <NavigationMenu>
                <div
                    className="flex justify-between items-center py-3 px-5 shadow-md bg-[#F64A8A] z-1000 shadow-lg fixed top-0 left-0 right-0"
                    style={{ boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.1)' }} // Shadow for bottom line
                >
                    <div className="text-[#FFEBCD] font-bold">
                        Sandrina Eka Putri
                    </div>

                    <NavigationMenuList className="flex gap-8 list-none p-0 m-0">
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/" className="text-[#FFEBCD] no-underline">
                                Home
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/Skills" className="text-[#FFEBCD] no-underline">
                                Skills
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/Experience" className="text-[#FFEBCD] no-underline">
                                Experience
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/Project" className="text-[#FFEBCD] no-underline">
                                Project
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/Contact" className="text-[#FFEBCD] no-underline">
                                Contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </div>
            </NavigationMenu>

            <div className="flex justify-start items-center p-20">
                <h1 className="text-2xl font-bold text-[#FFEBCD]">Skills</h1>
            </div>

            <div className="flex justify-center items-center min-h-screen bg-[#98623C] -mt-40">
    <div className="grid grid-cols-4 gap-6">
        <Badge variant="outline" className="mx-auto block text-center w-44 h-20 flex items-center justify-center text-sm bg-[#FFEBCD] text-[#F64A8A] border-none">
            <Image src="/word.png" alt="MS Word Icon" width={32} height={32} className="mr-3" />
            Ms. Word
        </Badge>
        <Badge variant="outline" className="mx-auto block text-center w-44 h-20 flex items-center justify-center text-sm bg-[#FFEBCD] text-[#F64A8A] border-none">
            <Image src="/excel.jpeg" alt="MS Excel Icon" width={32} height={32} className="mr-3" />
            Ms. Excel
        </Badge>
        <Badge variant="outline" className="mx-auto block text-center w-44 h-20 flex items-center justify-center text-sm bg-[#FFEBCD] text-[#F64A8A] border-none">
            <Image src="/powerpoint.png" alt="MS PowerPoint Icon" width={32} height={32} className="mr-3" />
            Ms. Powerpoint
        </Badge>
        <Badge variant="outline" className="mx-auto block text-center w-44 h-20 flex items-center justify-center text-sm bg-[#FFEBCD] text-[#F64A8A] border-none">
            <Image src="/capcut.png" alt="Capcut Icon" width={32} height={32} className="mr-3" />
            Capcut
        </Badge>
        <Badge variant="outline" className="mx-auto block text-center w-44 h-20 flex items-center justify-center text-sm bg-[#FFEBCD] text-[#F64A8A] border-none">
            <Image src="/canva.jpeg" alt="Canva Icon" width={32} height={32} className="mr-3" />
            Canva
        </Badge>
        <Badge variant="outline" className="mx-auto block text-center w-44 h-20 flex items-center justify-center text-sm bg-[#FFEBCD] text-[#F64A8A] border-none">
            <Image src="/cisco.png" alt="Cisco Icon" width={32} height={32} className="mr-3" />
            Cisco
        </Badge>
        <Badge variant="outline" className="mx-auto block text-center w-44 h-20 flex items-center justify-center text-sm bg-[#FFEBCD] text-[#F64A8A] border-none">
            <Image src="/vscode.jpeg" alt="VSCode Icon" width={32} height={32} className="mr-3" />
            VSCode
        </Badge>
        <Badge variant="outline" className="mx-auto block text-center w-44 h-20 flex items-center justify-center text-sm bg-[#FFEBCD] text-[#F64A8A] border-none">
            <Image src="/python.jpeg" alt="Python Icon" width={32} height={32} className="mr-3" />
            Python
        </Badge>
        <Badge variant="outline" className="mx-auto block text-center w-44 h-20 flex items-center justify-center text-sm bg-[#FFEBCD] text-[#F64A8A] border-none">
            <Image src="/clanguage.png" alt="C Language Icon" width={32} height={32} className="mr-3" />
            C Language
        </Badge>
        <Badge variant="outline" className="mx-auto block text-center w-44 h-20 flex items-center justify-center text-sm bg-[#FFEBCD] text-[#F64A8A] border-none">
            <Image src="/docker.png" alt="Docker Icon" width={32} height={32} className="mr-3" />
            Docker
        </Badge>
        <Badge variant="outline" className="mx-auto block text-center w-44 h-20 flex items-center justify-center text-sm bg-[#FFEBCD] text-[#F64A8A] border-none">
            <Image src="/django.png" alt="Django Icon" width={32} height={32} className="mr-3" />
            Django
        </Badge>
        <Badge variant="outline" className="mx-auto block text-center w-44 h-20 flex items-center justify-center text-sm bg-[#FFEBCD] text-[#F64A8A] border-none">
            <Image src="/vbox.png" alt="Oracle VM Virtualbox Icon" width={32} height={32} className="mr-3" />
            Oracle VM Virtualbox
        </Badge>
    </div>
</div>

        </>
    );
};

export default Skills;