import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Dialog, DialogContent, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';


import '../App.css';
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
    //   setOpen(true);

    };
  
    const handleClose = () => {
    //   setOpen(false);
    };
  
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const [menuVisible, setMenuVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
        console.log('handleToggleMenu');
    };

    const handleLinkClick = (path) => {
        navigate(path);
        setMenuVisible(false);
    };

    useEffect(() => {

        console.log('open' , open);
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const navbarStyle = {
        position: 'fixed',
        width: '100%',
        zIndex: 10000000,
    };


    const overlayStyle = {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: isOpen ? 'calc(100% - 250px)' : '0%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999999,
    };

    return (
        <div style={navbarStyle}>
            <div
                style={{
                    // backgroundColor: "#1F5756",
                    background:
                        (!isScrolled && (currentPath === '/' || currentPath === '/about-us' || currentPath === '/services' || currentPath === '/career' || currentPath === '/portfolio')) ||
            (!isScrolled && currentPath === '/about-us')
                            ? '#1F5756'
                            : '#1F5756',
                    transition: 'background 0.3s ease',
                    boxShadow:
                        !isScrolled && currentPath !== '/about-us' && currentPath !== '/' && currentPath
                         !== '/services' && currentPath !== '/career' && currentPath !== '/portfolio'
                            ? '0 4px 10px rgba(0, 0, 0, 0.1)'
                            : '',
                }}
                className='navBar'
            >
                <Container maxWidth='lg'>
                    <div style={overlayStyle} onClick={handleToggleMenu}></div>
                    <div className='navbarLinks'>

                        <img style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('/')} src='https://www.novuslab.io/logo.svg' alt='logo not found' />
                        {/* <div>
              <MenuIcon className='menuIcon' onClick={handleToggleMenu} />
            </div> */}

                        <div className={`menuItems ${menuVisible ? 'visible' : ''}`}>
                            <span onClick={() => handleLinkClick('/services')}>Services</span>
                            <span onClick={() => handleLinkClick('/portfolio')}>Portfolio</span>
                            <span onClick={() => handleLinkClick('/career')}>Career</span>
                            <span onClick={() => handleLinkClick('/about-us')}>About Us</span>

                        </div>

                        <div className={`menuItems ${menuVisible ? 'visible' : ''}`}
                            style={{ display: 'flex', alignItems: 'center', border: '1px solid #01FFF7', borderRadius: '40px ' }}>
                            <button  onClick={handleClickOpen} className='getStartBtn' style={{ display: 'flex', alignItems: 'center' }}>
                                Get in touch
                                <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                            </button>
                        </div>


                    </div>

                </Container>

                {/* <div style={sidebarStyle}>
          <div className='sideBar'>
            <Link to='/' className='logo'>
              <img style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('/')} src='https://www.novuslab.io/logo.svg' alt='logo not found' />
            </Link>
            <CloseIcon onClick={handleToggleMenu} style={{ fontSize: '30px' }} />
          </div>

          <div className='menuSidebar'>
            <h3 onClick={() => {
              handleLinkClick('/Plan')
              setIsOpen(false)
            }}>Plan</h3>
            <h3 onClick={() => {
              handleLinkClick('/Report')
              setIsOpen(false)
            }}>Report</h3>
            <h3 onClick={() => {
              handleLinkClick('/Contractor')
              setIsOpen(false)
            }}>Contractor</h3>
            <h3 onClick={()=>{
              handleLinkClick('/About');
              setIsOpen(false)
            }}>About</h3>
            <h3 onClick={() => {
              handleLinkClick('/Contact')
              setIsOpen(false)
            }}>Contact</h3>
            <button className='getStartBtn'>Make Plan</button>
            <button className='SignIn'>Receive Report</button>
          </div>
        </div> */}
            </div>

            <Dialog fullScreen open={open} onClose={handleClose}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          {/* Add your dialog content here */}
          <h2>This is the full-screen dialog</h2>
        </DialogContent>
      </Dialog>
        </div>
    );
};

export default Navbar;

     
                {/* <div style={sidebarStyle}>
          <div className='sideBar'>
            <Link to='/' className='logo'>
              <img style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('/')} src='https://www.novuslab.io/logo.svg' alt='logo not found' />
            </Link>
            <CloseIcon onClick={handleToggleMenu} style={{ fontSize: '30px' }} />
          </div>

          <div className='menuSidebar'>
            <h3 onClick={() => {
              handleLinkClick('/Plan')
              setIsOpen(false)
            }}>Plan</h3>
            <h3 onClick={() => {
              handleLinkClick('/Report')
              setIsOpen(false)
            }}>Report</h3>
            <h3 onClick={() => {
              handleLinkClick('/Contractor')
              setIsOpen(false)
            }}>Contractor</h3>
            <h3 onClick={()=>{
              handleLinkClick('/About');
              setIsOpen(false)
            }}>About</h3>
            <h3 onClick={() => {
              handleLinkClick('/Contact')
              setIsOpen(false)
            }}>Contact</h3>
            <button className='getStartBtn'>Make Plan</button>
            <button className='SignIn'>Receive Report</button>
          </div>
        </div> */}
