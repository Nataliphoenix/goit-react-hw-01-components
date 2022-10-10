import styled from 'styled-components';

export const FriendListContainer=styled.section`
margin-left: auto;
margin-right: auto;
width: 350px;
margin-bottom: 60px;
`;

export const List=styled.ul`

`;

export const  FriendItem=styled.li`
display:flex;
align-items:center;
padding: 20px;
margin-bottom: 30px;

border-radius:5px;

background-color: ${props => props.theme.colors.backgroundColorSocCard};
box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12),
            0px 1px 1px rgba(0, 0, 0, 0.14),
            0px 2px 1px rgba(0, 0, 0, 0.2);

transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover, &:focus{
    transform: scale(1.1);
}
`;

export const FriendStatus=styled.span`
width: 14px;
height: 14px;
border-radius: 50%;

  margin-right:20px;

  
  background-color: ${ ({ isOnline }) => {
    return isOnline? 'green'
    : 'red' 
  }
};
`;

export const  FriendCard=styled.img`
margin-right:30px;
border: 1px solid ${props => props.theme.colors.secondaryText};
border-radius: 6px;
`;

export const  FriendName=styled.p`
margin-bottom: auto;
margin-top: auto;
font-weight:500;
font-size: 22px;
`;