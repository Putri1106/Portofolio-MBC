import React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList} from '@/components/ui/navigation-menu'; // Pastikan Anda juga mengimpor NavigationMenuList jika diperlukan
import { Table, TableBody, TableHead, TableHeader, TableCell, TableRow } from '@/components/ui/table';

const Experience = () => {
    return (
        <div style={{ backgroundColor: '#FFEBCD', minHeight: '100vh' }}>
            <NavigationMenu>
                <div 
                    className="flex justify-between items-center py-3 px-5 shadow-md fixed top-0 left-0 right-0 bg-[#F64A8A] z-1000 shadow-lg"
                    style={{ boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.1)' }}
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

            <div style={{ marginTop: '60px', padding: '20px' }}>
                <h1 style={{ 
                    color: '#F64A8A', 
                    fontWeight: 'bold', 
                    fontSize: '2.2rem', 
                    marginBottom: '20px'
                }}>
                    EXPERIENCE PERIOD
                </h1>
                <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[250px]" style={{ color: '#F64A8A', fontSize: '1.2rem' }}>YEARS</TableHead>
                            <TableHead className="w-[250px]" style={{ color: '#F64A8A', fontSize: '1.2rem' }}>ACTIVITY</TableHead>
                            <TableHead className="w-[250px]" style={{ color: '#F64A8A', fontSize: '1.2rem' }}>ROLES</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium" style={{ color: '#98623C' }}>2020 - 2021</TableCell>
                                <TableCell style={{ color: '#98623C' }}>OSIS SMK Telkom Jakarta</TableCell>
                                <TableCell style={{ color: '#98623C' }}>Sekbid 1 Kerohanian</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium" style={{ color: '#98623C' }}>2021</TableCell>
                                <TableCell style={{ color: '#98623C' }}>AVAS</TableCell>
                                <TableCell style={{ color: '#98623C' }}>Sekretaris</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium" style={{ color: '#98623C' }}>2021</TableCell>
                                <TableCell style={{ color: '#98623C' }}>MPLS</TableCell>
                                <TableCell style={{ color: '#98623C' }}>Sekretaris</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium" style={{ color: '#98623C' }}>2022</TableCell>
                                <TableCell style={{ color: '#98623C' }}>Praktik Kerja Industri</TableCell>
                                <TableCell style={{ color: '#98623C' }}>Kurikulum SMK Telkom Jakarta</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium" style={{ color: '#98623C' }}>2023</TableCell>
                                <TableCell style={{ color: '#98623C' }}>NETSCHOOL</TableCell>
                                <TableCell style={{ color: '#98623C' }}>Peserta</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium" style={{ color: '#98623C' }}>2024</TableCell>
                                <TableCell style={{ color: '#98623C' }}>NETDEV</TableCell>
                                <TableCell style={{ color: '#98623C' }}>Peserta</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium" style={{ color: '#98623C' }}>2023 - 2024</TableCell>
                                <TableCell style={{ color: '#98623C' }}>HASTJA</TableCell>
                                <TableCell style={{ color: '#98623C' }}>Humas</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium" style={{ color: '#98623C' }}>2024</TableCell>
                                <TableCell style={{ color: '#98623C' }}>TRUSTY</TableCell>
                                <TableCell style={{ color: '#98623C' }}>Moderator</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Experience;
