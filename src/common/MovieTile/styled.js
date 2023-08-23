import styled from "styled-components";
import { ReactComponent as YellowStar } from "./images/shape-star.svg";

export const Wrapper = styled.div`
    max-width: 324px;
    height: 650px;
    padding: 16px;
    gap: 16px;
    justify-content: left;
    background: ${({ theme }) => theme.colors.white};   
    box-shadow: ${({ theme }) => theme.common.boxShadow};  

    @media (max-width : ${({ theme }) => theme.common.breakpoint}) {
        max-width: 100%;
        height: 201px;
        align-items: center;
        display: flex;
        flex-flow: nowrap; 
    }
`;

export const Poster = styled.div`
    width: 292px;
    height: 434px;
    border-radius: 5px;
    background-color: green; // it's temporary - here will be poster from API //

    @media (max-width : ${({ theme }) => theme.common.breakpoint}) {
        width: 114px;
        height: 169px;
    }
`;

export const DescriptionBox = styled.div`
    width: 292px;
    height: 200px;
    position: relative; 
    padding-top: inherit;
    padding-bottom: inherit;

    @media (max-width : ${({ theme }) => theme.common.breakpoint}) {
        width: auto;
        position: inherit;
    }
`;

export const Title = styled.span`
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    ${({ theme }) => theme.colors.black};

    @media (max-width : ${({ theme }) => theme.common.breakpoint}) {
        font-size: 16px;
    }
`;

export const Year = styled.span`
    display: block;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.waterloo};    
    margin-top: 8px;
    margin-bottom: 8px;
    
    @media (max-width : ${({ theme }) => theme.common.breakpoint}) {
        font-size: 13px;
        line-height: 130%;
    }
`;

export const GenreBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
        
    @media (max-width : ${({ theme }) => theme.common.breakpoint}) {
        gap: 8px;
        font-size: 10px;
        line-height: 110%
    }
`;

export const GenreTile = styled.div`
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.mystic}; 
    align-items: center;
    color: ${({ theme }) => theme.colors.woodSmoke};
    padding: 8px 16px;
        
    @media (max-width : ${({ theme }) => theme.common.breakpoint}) {
        padding: 4px 8px;
    }
`;

export const RatingBox = styled.div`
    position: absolute; 
    bottom: 0px;
    display: flex;
    gap: 12px; 
    align-items: center;
        
    @media (max-width : ${({ theme }) => theme.common.breakpoint}) {
        gap: 8px; 
        position: inherit; 
    }
`;

export const StarImage = styled(YellowStar)`
    width: 24px;
    height: 24px;
            
    @media (max-width : ${({ theme }) => theme.common.breakpoint}) {
        width: 16px;
        height: 16px;
    }
`;

export const Rating = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.woodSmoke}; 
                
    @media (max-width : ${({ theme }) => theme.common.breakpoint}px) {
        font-size: 13px;
        line-height: 130%;
    }         
`;

export const Votes = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.waterloo};    
                    
    @media (max-width : ${({ theme }) => theme.common.breakpoint}px) {
        font-size: 13px;
        line-height: 130%;
    }     
`;