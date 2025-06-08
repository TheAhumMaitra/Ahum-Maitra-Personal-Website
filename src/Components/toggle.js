"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleTheme = (theme) => {
    setTheme(theme);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={() => handleTheme("light")}>Light</MenuItem>
        <MenuItem onClick={() => handleTheme("dark")}>Dark</MenuItem>
        <MenuItem onClick={() => handleTheme("system")}>System</MenuItem>
      </Menu>
    </>
  );
}
