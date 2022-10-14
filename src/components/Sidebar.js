import React from 'react'
import classes from './Sidebar.module.css';
import SidebarRow from './SidebarRow';
import LocalHostpitalIcon  from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon  from '@material-ui/icons/EmojiFlags';
import ChatIcon  from '@material-ui/icons/Chat';
import StorefrontIcon  from '@material-ui/icons/Storefront';
import VideoLibraryIcon  from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined }  from '@material-ui/icons';
import { useStateValue } from '../StateProvider';


function Sidebar() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className={classes.sidebar}>
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={LocalHostpitalIcon} title='COVID-19 Information Center' />
        <SidebarRow Icon={EmojiFlagsIcon} title='Friends' />
        <SidebarRow Icon={ChatIcon} title='Messenger' />
        <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
        <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
        <SidebarRow Icon={ExpandMoreOutlined} title='See more' />
    </div>
  )
}

export default Sidebar;
