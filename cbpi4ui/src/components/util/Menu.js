import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BallotIcon from '@material-ui/icons/Ballot';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import InfoIcon from '@material-ui/icons/Info';
import PowerIcon from '@material-ui/icons/Power';
import SettingsIcon from '@material-ui/icons/Settings';
import TimelineIcon from '@material-ui/icons/Timeline';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ComputerIcon from '@material-ui/icons/Computer';
import React from 'react';
import {

    useHistory
} from "react-router-dom";


const MenuItem = ({ onClose, label, path = "/", children }) => {
    const history = useHistory();

    const goTo = (key) => {
        history.push(key);
        onClose()
    }

    return <><ListItem button onClick={()=>goTo(path)}>
        <ListItemIcon>
            {children}
        </ListItemIcon>
        <ListItemText primary={label} />
     
    </ListItem>
    
    </>
}


const Menu = ({onClose}) => {
    return <List>
        <MenuItem onClose={onClose} label="Dashboard" ><DashboardIcon /></MenuItem>
        <MenuItem onClose={onClose} label="Dashboard 1" path="/fixdash/1"><Filter1Icon /></MenuItem>
        <MenuItem onClose={onClose} label="Dashboard 2" path="/fixdash/2"><Filter2Icon /></MenuItem>
        <MenuItem onClose={onClose} label="Dashboard 3" path="/fixdash/3"><Filter3Icon /></MenuItem>
        <MenuItem onClose={onClose} label="Dashboard 4" path="/fixdash/4"><Filter4Icon /></MenuItem>
        <MenuItem onClose={onClose} label="Mash Profile" path="/mashprofile"><BallotIcon /></MenuItem>
        <MenuItem onClose={onClose} label="Fermenter Profile" path="/fermenterprofile"><BallotIcon /></MenuItem>
        <MenuItem onClose={onClose} label="Hardware" path="/hardware"><DeveloperBoardIcon /></MenuItem>
        <MenuItem onClose={onClose} label="Settings" path="/settings"><SettingsIcon /></MenuItem>
        <MenuItem onClose={onClose} label="Analytics" path="/charting"><TimelineIcon /></MenuItem>
        <MenuItem onClose={onClose} label="Plugins" path="/plugins"><PowerIcon /></MenuItem>
        <MenuItem onClose={onClose} label="Recipe Upload" path="/upload"><CloudUploadIcon /></MenuItem>
        <MenuItem onClose={onClose} label="System" path="/system"><ComputerIcon /></MenuItem>
        <MenuItem onClose={onClose} label="About" path="/about"><InfoIcon /></MenuItem>
    </List>
}

export default Menu

