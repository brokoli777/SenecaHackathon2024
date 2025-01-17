import React, { useState } from "react";
import SocialMediaIcons from "../SocialMedia/socialMedia";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import HackathonLogo from "../../svgs/hack-logo.svg";
import Line from "../../svgs/line.svg";
import SenecaLogo from "../../svgs/seneca-logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navBar.css";
import Login from "../User/Login";
const drawerWidth = 240;

interface DrawerAppBarProps {
  navItems: string[];
}

const DrawerAppBar: React.FC<DrawerAppBarProps> = ({ navItems }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const convertToUrlFormat = (text: string): string => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  const drawer = (
    <Box
      sx={{ textAlign: "center", marginTop: "1.5em" }}
      className="flex flex-col flex-1"
    >
      <div className="flex flex-col flex-1 justify-between">
        <List>
          {navItems.map((item) => (
            <Link
              onClick={handleDrawerToggle}
              key={item}
              className="nav-link"
              to={convertToUrlFormat(item)}
            >
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
      <Link to="/" className="nav-link" onClick={handleDrawerToggle}>
        <img
          src={HackathonLogo}
          alt="Seneca Hackathon 2024's logo"
          width={190}
          height={45}
          style={{ marginBottom: "3em" }}
        />
      </Link>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          color: "black",
          top: 0,
          borderBottom: "2px solid red",
          boxShadow: "none",
          paddingBottom: "0.3em",
        }}
      >
        <div className="navBarTop">
          <SocialMediaIcons />
        </div>
        <Toolbar>
          <Box sx={{ display: { sm: "none" } }}>
            <Link to="/" className="nav-link">
              <img
                src={HackathonLogo}
                alt="Seneca Hackathon 2024's logo"
                width={225}
                height={50}
              />
            </Link>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginLeft: "auto", display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="w-full" sx={{ display: { xs: "none", sm: "block" } }}>
            <Container>
              <Row>
                <Col sm="auto" style={{ margin: "0.5em" }}>
                  <Link to="/" className="nav-link">
                    <img
                      src={HackathonLogo}
                      alt="Seneca Hackathon 2024's logo"
                      // width={375}
                      height={70}
                    />
                    <img
                      src={Line}
                      alt="Line"
                      // width={375}
                      height={70}
                    />
                    {/* <div className="inline">hello</div> */}
                    {/* <span className=" ml-4 text-sm font-gotham font-normal  ">hosted by</span> */}
                    <img
                    className=" ml-4"
                      src={SenecaLogo}
                      alt="Seneca Hackathon 2024's logo"
                      // width={375}
                      height={57}
                    />
                  </Link>
                </Col>
                <Col
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "right",
                    whiteSpace: "unset",
                  }}
                >
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      className="nav-link"
                      style={{ display: "flex" }}
                      to={convertToUrlFormat(item)}
                    >
                      <Button key={item} sx={{ color: "black" }}>
                        {item}
                      </Button>
                    </Link>
                  ))}
                </Col>
              </Row>
            </Container>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          className="flex flex-col"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default DrawerAppBar;
