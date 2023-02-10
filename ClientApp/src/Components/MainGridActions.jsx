import React,{useState} from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit, Preview } from "@mui/icons-material";
import Popup from 'reactjs-popup';
import AddLogic from "./AddLogic";
import PopulateLogic from "./PopulateLogic";


function MainGridActions(props,{finalClickInfo}) {
    // const [data, setData] = useState(jsonData.sessionId)
    return (
        <Box>
            <Popup trigger = {
            <Tooltip title='view grid details'><IconButton ><Preview/></IconButton></Tooltip>} modal nested>{
                close => (
                    <PopulateLogic finalClickInfo = {finalClickInfo} handleTogglePopup = {close}/>
                )    
            }
            </Popup>
            <Popup trigger = {
            <Tooltip title='Edit grid'><IconButton ><Edit/></IconButton></Tooltip>} modal nested>{
                close => (
                    <PopulateLogic finalClickInfo = {finalClickInfo} handleTogglePopup = {close}/>
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