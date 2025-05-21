import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Container from '@mui/material/Container'

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Navbar />
            <Container style={{marginTop: "65px 0"}}>
                {children}
            </Container>
        </>
    )
}

export default MainLayout;