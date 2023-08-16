import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';

import { Navbar, Sidebar } from '../ui';

interface Props {
    title?: string;
}

export const Layout: FC<PropsWithChildren & Props> = ({title = 'Open Jira', children}) => {
  return (
    <Box sx={{flexGrow: 1}}>
        <Head>
            <title>{title}</title>

        </Head>

        <Navbar />
        <Sidebar />
        
        <Box sx={{padding: '20px 10px'}}>
            {children}
        </Box>
    </Box>
  )
}
