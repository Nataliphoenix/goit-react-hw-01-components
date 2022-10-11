import styled from 'styled-components';

export const StatisticsContainer=styled.section`
margin-left: auto;
margin-right: auto;
width: 600px;
margin-bottom: 60px;
`;

export const TitleWrapper=styled.h2`
margin-bottom: 16px;
font-weight:500;
font-size: 18px;
`;

const randomBgColor = () => `#${Math.random().toString(16).slice(2, 8)}`

export const StatisticsInfo=styled.ul `
display:flex;

box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
            0px 1px 1px rgba(0, 0, 0, 0.14),
            0px 2px 1px rgba(0, 0, 0, 0.2);
`;


export const StatisticsItem = styled.li`
display:flex;
flex-direction:column;
width: calc(100% / 5);
text-align: center;

padding:32px;
cursor: pointer;

transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
background-color: ${randomBgColor};

&:hover, &:focus{
    transform: scale(1.1);
    transition: box-shadow .3s ease-in; 
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
    0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
}
`;

export const StatisticsLabel=styled.span`
margin-bottom: 16px;
font-weight:500;
font-size: 18px;
color:${props => props.theme.colors.backgroundColorCard};

`;

export const StatisticsPercentage=styled.span`
font-weight:500;
font-size: 18px;
color:${props => props.theme.colors.backgroundColorCard};
`;