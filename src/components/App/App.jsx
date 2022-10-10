import { Profile } from '../Profile/Profile';
import user from '../data/user.json';
import {Container} from './App.styled';

import {StatisticsList} from '../StatisticsList/StatisticsList';
import {Statistics} from '../Statistics/Statistics';
import data from '../data/data.json';

import {FriendList} from '../FriendList/FriendList';
import friends from '../data/friends.json';

import {TransactionHistory} from '../TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <Container>

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics>
        <StatisticsList stats={data} />
      </Statistics>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
     
    </Container>
  )
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
