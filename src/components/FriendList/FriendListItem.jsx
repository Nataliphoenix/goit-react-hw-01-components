import PropTypes from 'prop-types';

import { FriendItem, FriendStatus, FriendCard, FriendName } from './FriendList.styled';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <FriendItem>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendCard src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};