import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DrawerComp } from '../DrawerComp/DrawerComp';
import { paginas } from '../../constants/paginas';
import './Header.css';
import './HeaderMobile.scss';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

export const Header = () => {
    const { dispatch } = useContext(DarkModeContext);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <React.Fragment>
            <AppBar sx={{ background: '#061161' }}>
                <Toolbar>
                    <img className="profile" src={'https://firebasestorage.googleapis.com/v0/b/app-cv-dbbfa.appspot.com/o/pefil.jpg?alt=media&token=6d662ad7-91dd-401e-8832-5ab640f088f7'} width="100%" />
                    <div className="bottom">
                        <div
                            className="colorOption"
                            onClick={() => dispatch({ type: "LIGHT" })}
                        ></div>
                        <div
                            className="colorOption"
                            onClick={() => dispatch({ type: "DARK" })}
                        ></div>
                    </div>
                    {
                        matches ?
                            (
                                <>
                                    <Typography sx={{ fontSize: '2rem', paddingLeft: '10%' }}>APP</Typography>
                                    <DrawerComp />
                                </>
                            ) :
                            (
                                <>
                                    <Tabs sx={{ marginLeft: 'auto' }} textColor='inherit' value={value} onChange={handleChange} indicatorColor='primary'>
                                        {
                                            paginas.map((page, index) => (
                                                <Tab key={index} value={index} label={page} href={'/'+page} />
                                            ))
                                        }
                                    </Tabs>
                                </>
                            )
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}