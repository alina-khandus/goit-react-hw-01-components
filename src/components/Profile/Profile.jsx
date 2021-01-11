import PropTypes from 'prop-types';

import Stats from './Stats';
import s from './Profile.module.css';

const imageAvatar =
  'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg';

function Profile({ name, tag, avatar, location, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.container}>
        <div className={s.description}>
          <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
          <p className={s.name}>{name}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <Stats
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
 
};

Profile.defaultProps = {
  avatar: imageAvatar,
};

export default Profile;