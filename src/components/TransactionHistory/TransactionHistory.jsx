import css from './TransactionHistory.module.css';
import React from 'react';

export const TransactionHistory = ({ items }) => (
  <div className={css.container}>
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.trow}>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>
      <tbody className={css.tbody}>
        {items.map(item => (
          <tr className={css.trow} key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
