import styled from 'styled-components';

export const TransactionTable=styled.table`
margin-left: auto;
margin-right: auto;
margin-bottom: 60px;
width: 600px;

box-shadow: 1px 1px 3px 1px rgba(33, 33, 33, 0.21);
`;

export const TransactionTheadTable =styled.thead`
`;

export const TransactionTr =styled.tr`
`;

export const TransactionTheadTh =styled.th`
padding:14px;
font-size:18px;
text-align: center;
color:${props => props.theme.colors.backgroundColorCard};
background-color:${props => props.theme.colors.colorTransactionThead}

`;

export const TransactionBody =styled.tbody`
`;

export const TransactionBodyTr =styled.tr`
text-align: center;
background-color:${props => props.theme.colors.colorTransactionThead};
color: ${props => props.theme.colors.secondaryText};

&:nth-child(2n+1){
    background-color:${props => props.theme.colors.colorTransactionBody};
}

&:nth-child(even){
    background-color:${props => props.theme.colors.colorTransactionBodyEven};
}
`;

export const TransactionTbodyTd =styled.td`
padding:10px;
`;

export const TransactionTheadType =styled.td`
padding-left:50px;
text-align: left;
`;

