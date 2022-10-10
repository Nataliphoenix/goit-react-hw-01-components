import styled from 'styled-components';

export const Container =styled.div`
padding: 30px;
margin: 0 auto;

font-size: 16px;
font-weight:400;

color: ${props => props.theme.colors.primaryText};
background-color: ${props => props.theme.colors.backgroundColor};
`;
