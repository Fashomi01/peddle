import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
} from './InfoSection.elements';

const InfoSection = ({
    imgStart, 
    buttonLabel, 
    description, 
    headline,
    img,
    alt,
    start
    }) => {
    return (
        <>
           <InfoSec>
               <Container>
                   <InfoRow imgStart={imgStart}>
                       <InfoColumn>
                           <TextWrapper>
                                <Heading>{headline}</Heading>
                                <Subtitle>{description}</Subtitle>
                                <Link to='/'>
                                    <Button>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                           </TextWrapper>
                       </InfoColumn>
                       <InfoColumn>
                           <ImgWrapper start={start}>
                               <Img src={img} alt={alt} />
                           </ImgWrapper>
                       </InfoColumn>
                   </InfoRow>
               </Container>
           </InfoSec> 
        </>
    )
}

export default InfoSection;
