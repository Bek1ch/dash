import { useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FloodIcon from "@mui/icons-material/Flood";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { TokenService } from "../../utils/token.service";

// import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";

const Item = ({ subitem = false, title, to, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      component={
        <Link
          style={{
            textDecoration: "none",
            // paddingLeft: subitem ? 16 : 20,
            // paddingRight: subitem ? 0 : 20,
          }}
          to={to}
        />
      }
      className="menu-item"
      style={{
        color: colors.grey[400],
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const userRoles = TokenService.getUserRoles() || [];
  const admin =
    userRoles.includes("flood") && userRoles.includes("contact-center");
  const hasFloodRole = userRoles.includes("flood");
  const hasContactCenterRole = userRoles.includes("contact-center");

  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: "transparent",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .ps-submenu-content": {
          backgroundColor: isCollapsed ? "white" : "transparent",
          margin: isCollapsed ? "-22px 35px 0px 15px !important" : "0px",
          // paddingTop: isCollapsed ? "0px" : "0px",
          // paddingRight: isCollapsed ? "20px" : "0px",
        },
      }}
    >
      <ProSidebar
        style={{
          height: "100%",
          // backgroundColor: "white",
        }}
        collapsed={isCollapsed}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={<MenuOutlinedIcon />}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" ml={3} color={colors.grey[100]}>
                  Меню
                </Typography>
              </Box>
            )}
          </MenuItem>

          <Box>
            {/* Menu Items */}
            {hasFloodRole && (
              <Item title="Ситуация по паводкам" to="/" icon={<FloodIcon />} />
            )}

            {(hasContactCenterRole || admin) && (
              <SubMenu
                label="Единый контакт-центр"
                icon={<SupportAgentIcon />}
                // disabled={isCollapsed}
                // style={isCollapsed ? { pointerEvents: "none", opacity: 1 } : {}}
                // style={{}}
                // style={{ mt: 50 }}
              >
                <Item subitem title="Общая информация" to="/ekc/dashboard" />
                <Item subitem title="3-я линия поддержки" to="/ekc/table" />
              </SubMenu>
            )}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
