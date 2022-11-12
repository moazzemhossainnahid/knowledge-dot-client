import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

const MenuData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Courses",
    href: "courses",
  },
  {
    name: "Instructors",
    href: "instructors",
  },
  {
    name: "About US",
    href: "about",
  },
  {
    name: "Contact US",
    href: "contact",
  },
  {
    name: "Login",
    href: "signin",
  },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    //Token Remove
    localStorage.removeItem("accessToken");
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container className="bg-neutral text-black" maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Knowledge Dot
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              className="mx-auto w-full flex justify-center"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {MenuData.map((page) => (
                <MenuItem key={page?.name} onClick={handleCloseNavMenu}>
                  <NavLink
                    className="focus:bg-gray-700 focus:text-white px-3 py-2"
                    to={page?.href}
                  >
                    {page?.name}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Knowledge Dot
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {MenuData.map((page) => (
              <Button
                className="focus:bg-gray-700"
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ color: "black", display: "block" }}
              >
                <NavLink
                  className="focus:bg-gray-700 focus:text-white px-3 py-2"
                  to={page?.href}
                >
                  {page?.name}
                </NavLink>
              </Button>
            ))}
          </Box>

          {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full">
                <img
                  src={`${
                    user?.photoURL
                      ? user?.photoURL
                      : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                  }`}
                alt="" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 shadow menu menu-compact dropdown-content rounded-md w-56 bg-base-100 text-warning"
            >
              <div className="mx-auto mt-3">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <img
                      src={`${
                        user?.photoURL
                          ? user?.photoURL
                          : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                      }`}
                   alt="" />
                  </div>
                </div>
              </div>
              <div className="border-b border-neutral">
                <h1 className="text-lg text-center">
                  {user?.displayName ? user?.displayName.slice(0, 14) : "User"}
                </h1>
                <p className="text-xs mb-2 text-center">Student</p>
              </div>
              <li>
                <NavLink to={"profile"} className=" hover:rounded-none">
                  <i className="ml-4 fa-solid fa-user" />
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to={"mycourse"} className="hover:rounded-none">
                  <i className="ml-4 fa-solid fa-bolt"></i>My Courses
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:rounded-none" to={"mybooks"}>
                  <i className="ml-4 fa-solid fa-book"></i>My Books
                </NavLink>
              </li>
              {/* <li>
                <NavLink to={"dashboard"} className="hover:rounded-none">
                  <i className="ml-4 fa-solid fa-chart-line"></i>Dashboard
                </NavLink>
              </li> */}
              <li>
                <NavLink to={"/orders"} className="hover:rounded-none">
                  <i className="ml-4 fa-solid fa-clock"></i>Payment History
                </NavLink>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="hover:rounded-b-md hover:rounded-none text-red-600"
                >
                  <i className="ml-4 fa-solid fa-right-from-bracket"></i>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex">
            <button className="btn-accent btn-sm btn rounded-md text-white font-thin">
              <Link to="Login">SignIn</Link>
            </button>
            <div className="divider lg:divider-horizontal"></div>
            <button className="bg-red-500 hover:bg-red-700 btn-sm btn rounded-md text-white font-thin">
              <Link to="SignUp">SignOut</Link>
            </button>
          </div>
        )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
