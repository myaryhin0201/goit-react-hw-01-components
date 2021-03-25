const Friend = ({ isOnline, avatar, name }) => (
  <li className="item">
    <span className={`status ${isOnline}`}></span>
    <img className="avatar" src={avatar} alt={name} width="64" />
    <p className="name">{name}</p>
  </li>
);

export default Friend;
