import styled from 'styled-components';

export const InfoSec = styled.div`
    color: #000000;
    padding: 160px 0;
    background: #F5F5E1;
`;
export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px --15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')}; 
`;

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
`;
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: #C4082E;
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #93394D;
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;
