import PropTypes from 'prop-types';
import { BiAt } from 'react-icons/bi';
import {Wrapper, UserInfo, UserCard, UserName, UserTag, UserLocation, ListRatingUser, 
  ItemRatingUser, ItemRatingPart, ItemRatingValue} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Wrapper>
        <UserInfo>
          <UserCard
            src={avatar}
            alt={username}
          />
            <UserName>{username}</UserName>
            <UserTag><BiAt />{tag}</UserTag>
            <UserLocation>{location}</UserLocation>
          </UserInfo>
          
          <ListRatingUser>
          <ItemRatingUser>
            <ItemRatingPart>Followers</ItemRatingPart>
            <ItemRatingValue>{stats.followers}</ItemRatingValue>
          </ItemRatingUser>
          <ItemRatingUser>
            <ItemRatingPart>Views</ItemRatingPart>
            <ItemRatingValue>{stats.views}</ItemRatingValue>
          </ItemRatingUser>
          <ItemRatingUser>
            <ItemRatingPart>Likes</ItemRatingPart>
            <ItemRatingValue>{stats.likes}</ItemRatingValue>
          </ItemRatingUser>
        </ListRatingUser>

      </Wrapper>
    );
};

Profile.propTypes = {
    avatar:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    stats:PropTypes.shape({
      followers:PropTypes.number.isRequired,
      views:PropTypes.number.isRequired,
      likes:PropTypes.number.isRequired,
  }) 
};
