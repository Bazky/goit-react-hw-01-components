import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <ul className={css.friendlist}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            {friend.isOnline ? (
              <span className={css.online}></span>
            ) : (
              <span className={css.offline}></span>
            )}

            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
