import React from 'react';
import { Link } from 'react-router-dom';
import amazon from '../../images/amazon.svg';
import discord from '../../images/discord.png';
import NetfliX from '../../images/Netflix.png';
import reddit from '../../images/reddit.png';
import Spotify from '../../images/Spotify.png';
import { InfoSection, Pricing } from '../../components';
import { Container, Button } from '../../globalStyles';
import { 
    InfoList, 
    InfoSubList,
    Features,
    TextWrapper, 
    Heading,
    Subtitle,
    ImageContainer,
    ImageItem,
} from './Home.elements';
import { homeObjOne, homeObjTwo } from './Data';


const Home = (
    img,
    alt
) => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <Container>
                   <InfoList>
                       <InfoSubList>
                            90+<br />
                            Users
                       </InfoSubList>
                       <InfoSubList>
                            30+<br />
                            Locations
                       </InfoSubList>
                       <InfoSubList>
                            50+<br />
                            Servers
                       </InfoSubList>
                   </InfoList>
               </Container>
            <InfoSection {...homeObjTwo} />
            <Pricing />
               <Container>
                   <Features>
                           <TextWrapper>
                                <Heading>Get Started with <br/> Paddle Today</Heading>
                                <Subtitle> Fugiat excepteur tempor 
                                    proident ullamco et veniam veniam sunt <br />adipisicing 
                                    cillum excepteur aliquip deserunt elit.</Subtitle>
                                <Link to='/'>
                                    <Button>
                                        Start Today
                                    </Button>
                                </Link>
                           </TextWrapper>
                           <ImageContainer>
                               <ImageItem src={amazon} alt={alt} />
                               <ImageItem src={discord} alt={alt} />
                               <ImageItem src={NetfliX} alt={alt} />
                               <ImageItem src={reddit} alt={alt} />
                               <ImageItem src={Spotify} alt={alt} />
                           </ImageContainer>
                           <TextWrapper>
                                <Heading>Trusted by Thousand of <br/> Happy Customer</Heading>
                                <Subtitle> Fugiat excepteur tempor 
                                    proident ullamco et veniam veniam sunt <br /> adipisicing 
                                    cillum excepteur aliquip deserunt elit.</Subtitle>
                           </TextWrapper>
                   </Features>
               </Container>
            
        </>
    )
}

export default Home
