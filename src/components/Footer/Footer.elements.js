import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: #101522;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
`

export const FooterSubHeading = styled.p`
    font-family: 'Trebuchet Ms', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`

export const FooterSubText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`

export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
`

export const FooterLinksWrapper = styled.div`
    display: flex;
`

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;
`

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem; 
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    flex-direction: column;
`
export const SocialMediaWrap = styled.div`
    display: flex;
`

export const SocialLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const SocialItem = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 50px;
    box-sizing: border-box;
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem; 
`

export const WebsiteRights = styled.p`
    color: #fff;
    padding-top: 10px;
`
export const Button = styled.button`
    border-radius: 4px;
    background: #4B59F7;
    white-space: nowrap;
    padding: '20px 30px';
    justify-content: flex-end;
    align-items: flex-end;
    color: #fff;
    height: 50px;
    width: 200px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
`
