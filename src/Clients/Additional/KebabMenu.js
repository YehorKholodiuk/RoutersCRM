import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from "react";
import Delete from "./Delete";


const ITEM_HEIGHT = 48;

export default function KebabMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openModal, setOpenModal] = useState(false)
    const openDeleteModal = () => {
        setOpenModal(!openModal);
    }
    const handleDeleteButton = () => {
    openDeleteModal()
        setAnchorEl(null);
    }
    const handleUpdateButton = () => {
        setAnchorEl(null);
    }
    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon/>
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >

                <MenuItem onClick={handleDeleteButton}>
                    Delete
                </MenuItem>
                <MenuItem onClick={handleUpdateButton}>
                    Update
                </MenuItem>

            </Menu>
            <Delete toggle={openDeleteModal}
                    openModal={openModal}
                    deletedItem={props.deletedItem}
                    deleteObject={props.deleteClient}
                    deletedItemId={props.deletedItemId}
            />
        </div>
    );
}
