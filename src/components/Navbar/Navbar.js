import React from 'react';
import { 
    Nav, 
    NavbarContainer, 
    NavIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavItemBtn,
    NavBtnLink,
    Button
} from './Navbar.element';



const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavIcon to='/'>
                        Peddle
                    </NavIcon>
                </NavbarContainer>
                <NavMenu>
                    <NavItem>
                        <NavLinks to= '/'>
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= '/'>
                            FAQS
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= '/'>
                            Pricing
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= '/'>
                            Testimonials
                        </NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        <NavBtnLink to="/">
                            <Button>SIGN UP</Button>
                        </NavBtnLink>
                        <NavBtnLink to="/">
                            <Button>SIGN IN</Button>
                        </NavBtnLink>
                    </NavItemBtn>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
