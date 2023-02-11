import React,{useState} from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit, Preview } from "@mui/icons-material";
import Popup from 'reactjs-popup';
import AddLogic from "./AddLogic";
import PopulateLogic from "./PopulateLogic";


function MainGridActions(props) {

    return (
        <Box>
            <Popup trigger = {
            <Tooltip title='view grid details'><IconButton ><Preview/></IconButton></Tooltip>} modal nested>{
                close => (
                    <AddLogic jsonData = {props.data.filter(row => row.sessionId === props.params.row.sessionId)[0]} handleTogglePopup = {close}/>
                )    
            }
            </Popup>
            <Popup trigger = {
            <Tooltip title='Edit grid'><IconButton ><Edit/></IconButton></Tooltip>} modal nested>{
                close => (
                    <AddLogic finalClickInfo = {props.finalClickInfo} handleTogglePopup = {close}/>
                )    
            }
            </Popup>
            <Tooltip title='Delete row'>
                <IconButton >
                    <Delete />
                </IconButton>
            </Tooltip>
        </Box>
    )
}
export default MainGridActions