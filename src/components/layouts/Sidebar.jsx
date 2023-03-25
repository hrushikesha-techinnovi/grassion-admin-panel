import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineTipsAndUpdates, MdEventAvailable } from "react-icons/md";
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "../../assets/styles/sidebar.css";

const SideNav = () => {
  const { collapseSidebar } = useProSidebar();
  //   const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="sidebar position-fixed h-100 d-inline-flex">
      <Sidebar
        className="shadow-sm h-100"
        collapsedWidth="60px"
        collapseSidebar={collapseSidebar}
      >
        <div className="d-flex justify-content-between align-items-center p-2">
          <img src={Logo} alt="logo" width={160} />
          <AiOutlineMenu onClick={collapseSidebar} />
        </div>
        <Menu iconShape="square" className="fst-normal">
          <SubMenu label="Tips" icon={<MdOutlineTipsAndUpdates />}>
            <Link to="/">
              <MenuItem className="item">Add tip</MenuItem>
            </Link>
            <Link to="/tiplist">
              <MenuItem className="item">Tip List</MenuItem>
            </Link>
          </SubMenu>
          <SubMenu label="Events" icon={<MdEventAvailable />}>
            <Link to="/addevent">
              <MenuItem className="item">Add Event</MenuItem>
            </Link>
            <Link to="/eventlist">
              <MenuItem className="item">Event List</MenuItem>
            </Link>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default SideNav;
