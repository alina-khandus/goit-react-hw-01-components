import PropTypes from 'prop-types';
import s from './FriendItem.module.css';

function FriendItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={s.online} width="20"></span>
      ) : (
        <span className={s.offline} width="20"></span>
      )}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};


export default FriendItem;