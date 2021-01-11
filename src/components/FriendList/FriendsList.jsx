import PropTypes from 'prop-types';

import s from './FriendItem.module.css';
import FriendItem from './FriendItem';


function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(item => (
        <FriendItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.array,
};

export default FriendsList;