import * as React from 'react';
import AppBar, { AppBarProps, AppBarTypeMap } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Link, styled } from '@mui/material';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation'

const pages = ['Baixar Aplicativo'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ColorButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.grey[100],
  marginLeft: -6
}));

const ColorText = styled(Link)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[100]
}));

const IconeMain = styled('img')(({ theme }) => ({
  height: 40
  //backgroundImage: `url(require("/assets/img/logomarca_ama.png"))`
}));

function ResponsiveAppBar({ position, color, elevation }: AppBarProps) {

  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const clickMenu = (page: string) => {
    switch(page) {
      case 'Baixar Aplicativo':
        router.push('https://play.google.com/store/apps/details?id=com.amashopping')
        break;
    }
  };

  return (
    <AppBar elevation={elevation || 0} color={color || 'transparent'} position={position || 'absolute'}>
      <Box>
        <Toolbar>

          {/* icone logo inicial */}
          <ColorText
            variant="h4"
            noWrap
            component="a"
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            <IconeMain src='/assets/img/logomarca_ama.png' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          </ColorText>

          {/* icone menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <ColorButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon fontSize='medium' />
            </ColorButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => clickMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* icone logo central */}
          <ColorText
            variant="h5"
            noWrap
            component="a"
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            <IconeMain src='/assets/img/logomarca_ama.png' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          </ColorText>

          {/* menu fixo */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => clickMenu(page)}
                sx={{ color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* icone carrinho */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Carrinho de Compras">
              <ColorButton onClick={() => router.push('/carrinho')} sx={{ p: 0 }}>
                <ShoppingCartRoundedIcon fontSize='medium' />
              </ColorButton>
            </Tooltip>

          </Box>

        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
