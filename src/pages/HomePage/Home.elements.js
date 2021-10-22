import styled from 'styled-components';

export const InfoList = styled.div`
    background: #fff;
    display: flex;
    justify-content: space-around;
    height: 100px;
    width: 100%;
`

export const InfoSubList = styled.li`
    display: flex;
    align-items: center;
    border-right: 2px solid wheat;
    padding-right: 10px;
`
export const Features = styled.div`
    margin-top: 60px;
    margin-bottom: 15px;
    padding-right: 15px;
    justify-content: center;
    align-self: center;
    text-align: center;
    padding-left: 15px;
    max-width: 100%;
    flex-basis: 100%;
`
export const TextWrapper = styled.div`
    max-width: 100%;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    color: #004E89;
`

export const Subtitle = styled.p`
    max-width: 100%;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #AA510E;
`

export const ImageContainer = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
`

export const ImageItem = styled.img`
    opacity: 7;
    padding-right: 0;
    border: 0;
    max-width: 10%;
    vertical-align: middle;
    display: inline-block;
    padding-right: 30px;
    max-height: 500px;
    alt: Image;
`