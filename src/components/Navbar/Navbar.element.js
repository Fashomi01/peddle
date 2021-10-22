import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex-end;
    justify-content: space-between;
    height: 80px;

    ${Container}
`

export const NavIcon = styled(Link)`
    color: purple;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`
export const NavItem = styled.li`
    height: 80px;
    color: black;
`

export const NavLinks = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
`
export const NavItemBtn = styled.li`
    display: flex;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
`
export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`
export const Button = styled.button`
    border-radius: 4px;
    background: #4B59F7;
    white-space: nowrap;
    padding: '20px 30px';
    color: #fff;
    height: 40px;
    width: 100px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
`