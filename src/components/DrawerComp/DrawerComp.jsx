import React from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { paginas } from '../../constants/paginas';
import './DrawerComp.css';
import SideBar from '../../components/SideBar/SideBar';

export const DrawerComp = () => {

    const [open, setOpen] = React.useState(false);
    const redireccionar = (pagina) => {
        setOpen(!open);
        window.location.href = '/' + pagina;
    }
    return (
        <React.Fragment>
            <Drawer open={open} onClose={() => setOpen(false)}>
                {
                    <List>
                        {
                            paginas.map((page, index) => (
                                <ListItemButton key={index} onClick={() => redireccionar(page)}>
                                    <ListItemIcon>
                                        <ListItemText>{page}</ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>
                            ))
                        }
                    </List>
                }
            </Drawer>
            <IconButton
                sx={{ color: 'white', marginLeft: 'auto' }}
                onClick={() => setOpen(!open)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    );
}