import React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-center bg-[#FFEBCD]">
            <NavigationMenu>
                <div
                    className="flex justify-between items-center py-3 px-5 shadow-md bg-[#F64A8A] z-1000 shadow-lg fixed top-0 left-0 right-0"
                    style={{ boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.1)' }}>
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

            <div className="flex-1 flex flex-col md:flex-row justify-center items-center">
                <div className="text-center md:text-left p-4 text-[#F64A8A] md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-sm mb-8 mt-2">Nice to know you, please contact me and lets be friends!</p>

                    <div className="mt-12 text-sm">
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                            <FaMapMarkerAlt />
                            <p>Jakarta Barat, DKI Jakarta</p>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                            <FaPhone />
                            <p>+62 82246184833</p>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                            <FaEnvelope />
                            <p>sandrinaekaputri116@gmail.com</p>
                        </div>

                        <div className="flex justify-center md:justify-start items-center gap-4 mt-8">
                            <a href="https://www.instagram.com/sndrnaa.kptr?igsh=bWM1b3N2eXZyOGh6" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-[#F64A8A]" size={24} />
                            </a>
                            <a href="https://www.tiktok.com/@_ekapuuttt?_t=8p4rZJNBwc0&_r=1" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className="text-[#F64A8A]" size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/sandrina-eka-putri-a2a2982a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-[#F64A8A]" size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-4 w-full max-w-md md:w-1/2">
                    <div className="flex flex-col gap-4">
                        <InputDemo />
                        <TextareaDemo />
                        <div className="w-full mt-4">
                            <Button
                                variant="outline"
                                className="w-full text-[#FFEBCD] bg-[#98623C] border-[#98623C] hover:bg-[#F64A8A] hover:text-[#FFEBCD]"
                            >
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function InputDemo() {
    return (
        <div className="grid gap-4">
            <div className="grid items-center gap-1.5">
                <label htmlFor="username" className="text-[#F64A8A] font-bold">Username</label>
            </div>
            <div className="grid items-center gap-1.5">
                <label htmlFor="email" className="text-[#F64A8A] font-bold">Email</label>
                <Input type="email" id="email" placeholder="Email" className="p-2 border rounded" />
            </div>
        </div>
    );
}

export function TextareaDemo() {
    return (
        <div className="grid items-center gap-1.5">
            <label htmlFor="message" className="text-[#F64A8A] font-bold">Message</label>
            <Textarea id="message" placeholder="Type your message here." className="p-2 border rounded" />
        </div>
    );
}

export default Contact;
