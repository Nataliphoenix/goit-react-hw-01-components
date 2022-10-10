import PropTypes from 'prop-types';
import {TransactionTable, TransactionTheadTable, TransactionTr, 
    TransactionTheadTh, TransactionBody, TransactionBodyTr, TransactionTbodyTd, TransactionTheadType} from './TransactionHistory.styled';

export const TransactionHistory =({items}) =>{
    return (
        <TransactionTable>
        <TransactionTheadTable>
            <TransactionTr>
                <TransactionTheadTh>Type</TransactionTheadTh>
                <TransactionTheadTh>Amount</TransactionTheadTh>
                <TransactionTheadTh>Currency</TransactionTheadTh>
            </TransactionTr>
        </TransactionTheadTable>

        <TransactionBody>
            {items.map( transactions =>(
                <TransactionBodyTr key={transactions.id}>
                    <TransactionTheadType>{transactions.type}</TransactionTheadType>
                    <TransactionTbodyTd>{transactions.amount}</TransactionTbodyTd>
                    <TransactionTbodyTd>{transactions.currency}</TransactionTbodyTd>
                </TransactionBodyTr>
                )
            )}
            </TransactionBody>
</TransactionTable>

    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ),
    };