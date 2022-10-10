import styled from 'styled-components';

export const Wrapper = styled.div`
margin-left:auto;
margin-right:auto;
margin-bottom: 60px;
border-radius: 5px;
text-align: center;
width: 280px;

background-color: ${props => props.theme.colors.backgroundColorCard};
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
      0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);

      
`;

export const UserInfo=styled.div`
padding:30px;

`;

export const UserCard = styled.img`
    margin-bottom: 16px;
    align-item:center;
    font-size: 0;

    width:100px;
    height:100px;
    border-radius:50%;
    border: 0.5px solid ${props => props.theme.colors.secondaryText};

`;

export const UserName = styled.p`
margin-bottom: 16px;
font-weight:500;
font-size: 18px;

`;

export const UserTag=styled.p`
margin-bottom: 16px;
color:${props => props.theme.colors.secondaryText};
text-align: center;
`;

export const UserLocation=styled.p`
color:${props => props.theme.colors.secondaryText};
text-align: center;
`;

export const ListRatingUser = styled.ul`
display:flex;
background-color:${props => props.theme.colors.backgroundColorSocCard};
`;

export const ItemRatingUser=styled.li`
display:flex;
flex-direction:column;
width: calc(100% / 3);
padding:10px;
text-align: center;

:not(:last-child) {
      border-right: 2px solid ${props => props.theme.colors.backgroundColorCard};

`;

export const ItemRatingPart=styled.span`
margin-bottom: 16px;
font-weight:500;
color:${props => props.theme.colors.secondaryText};
`;

export const ItemRatingValue=styled.span`
margin-bottom: 16px;
font-weight:500;
font-size: 18px;
`;