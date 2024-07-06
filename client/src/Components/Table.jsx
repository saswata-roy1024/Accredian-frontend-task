import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const programs = [
    { name: "Professional Certificate Program in Product Management", referrerBonus: "₹ 7,000", refereeBonus: "₹ 9,000" },
    { name: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹ 9,000", refereeBonus: "₹ 11,000" },
    { name: "Executive Program in Data Driven Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Executive Program in Product Management and Digital Transformation", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Executive Program in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Advanced Certification in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Executive Program in Product Management and Project Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
];

const CustomTable = () => {
    return (
        <div style={{ width: '100%', maxWidth: '40rem'}}>
            <TableContainer component={Paper} style={{ borderRadius: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ backgroundColor: '#AFCEF7', color: '#1350A0', paddingLeft: '35px', fontSize: '15px', fontWeight: '700' }}>Programs</TableCell>
                            <TableCell style={{ backgroundColor: '#AFCEF7', color: '#1350A0', padding: '2px', fontSize: '15px', fontWeight: '700' }}>Referrer Bonus</TableCell>
                            <TableCell style={{ backgroundColor: '#AFCEF7', color: '#1350A0', padding: '2px', fontSize: '15px', fontWeight: '700' }}>Referee Bonus</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {programs.map((program, index) => (
                            <TableRow key={index} style={{ backgroundColor: '#EEF5FF' }}>
                                <TableCell style={{ paddingLeft: '15px', borderBottom: 'none', backgroundColor: '#EEF5FF' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'inherit' }}>
                                        <SchoolIcon style={{ marginRight: '1rem', backgroundColor: 'inherit' }} />
                                        {program.name}
                                    </div>
                                </TableCell>
                                <TableCell style={{ borderBottom: 'none', backgroundColor: '#EEF5FF' }}>{program.referrerBonus}</TableCell>
                                <TableCell style={{ borderBottom: 'none', backgroundColor: '#EEF5FF' }}>{program.refereeBonus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default CustomTable;
