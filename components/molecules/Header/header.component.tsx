import { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import MenuItem from "@mui/material/MenuItem"
import Gengar from "public/images/gengar.webp"
import Pokemon from "public/images/pokemon.webp"

import Image from "next/image"
import { PAGES } from "constants/pages.constants"
import Link from "next/link"

export const HeaderComponent = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget)
  const handleCloseNavMenu = () => setAnchorElNav(null)

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image
              alt="Pokemon brand"
              width={150}
              height={50}
              src={Pokemon}
              placeholder="blur"
            />
          </Box>
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
              {PAGES.map(({ id, name, url }) => (
                <MenuItem key={id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", gap: "1rem" },
            }}
          >
            {PAGES.map(({ id, name, url }) => (
              <Link key={id} href={url}>
                <Typography variant="button" color="white">
                  {" "}
                  {name}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Image
                alt="Pokedex Icon"
                width={50}
                height={50}
                src={Gengar}
                placeholder="blur"
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
