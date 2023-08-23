import styled from "styled-components";
import { ReactComponent as YellowStar } from "../../images/shape-star.svg";

export const Wrapper = styled.div`
    max-width: 324px;
    max-height: 650px;
    padding: 16px;
    justify-content: left;
    background: ${({ theme }) => theme.colors.white};     
`;

export const Poster = styled.div`
    width: 292px;
    height: 434px;
    border-radius: 5px;
    background-color: green; // it's temporary - here will be poster from API //
    margin-bottom: 16px;
`;

export const Title = styled.span`
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    ${({ theme }) => theme.colors.black};
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
`;

export const GenreBox = styled.div`
    display: flex;
    gap: 10px;
`;

export const GenreTile = styled.div`
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.mystic}; 
    align-items: center;
    color: ${({ theme }) => theme.colors.woodSmoke};
    padding: 8px 16px;
`;

export const RatingBox = styled.div`
    display : flex;
    gap: 12px; 
    padding-top: 39px;
    align-items: center;
`;

export const StarImage = styled(YellowStar)`
    width: 24px;
    height: 24px;
`;

export const Rating = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.woodSmoke};        
`;

export const Votes = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.waterloo};    
`;