import PropTypes from 'prop-types';
import {FriendListContainer, List} from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <FriendListContainer>
            <List>
                {friends.map(({ id, avatar, name, isOnline }) =>(
                    <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                  />
                ))}
            </List>
            </FriendListContainer>
    )
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
  };