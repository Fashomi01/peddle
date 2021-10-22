import React from 'react';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialItem,
    Button
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Subscribe Now for Get Special Features!
                </FooterSubHeading>
                <FooterSubText>
                    Praesent mollis lobortis
                </FooterSubText>
                <Button>Subscribe Now</Button>
            </FooterSubscription>
            <FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            PEDDLE
                        </SocialLogo>
                            <SocialItem>
                                Praesent mollis Praesent
                                <br /> mollis lobortis 
                                <WebsiteRights>@2021 PADDLE</WebsiteRights>
                            </SocialItem>
                    </SocialMediaWrap>
                </SocialMedia>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Product</FooterLinkTitle>
                        <FooterLink to='/'>Praesent</FooterLink>
                        <FooterLink to='/'>Laoreat</FooterLink>
                        <FooterLink to='/'>Laoreat</FooterLink>
                        <FooterLink to='/'>Praesent</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Engage</FooterLinkTitle>
                        <FooterLink to='/'>Mauris</FooterLink>
                        <FooterLink to='/'>Aenean</FooterLink>
                        <FooterLink to='/'>Limsein</FooterLink>
                        <FooterLink to='/'>Lingula</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Earn Money</FooterLinkTitle>
                        <FooterLink to='/'>Ultrices</FooterLink>
                        <FooterLink to='/'>Aenean</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterContainer>
    )
}

export default Footer;
