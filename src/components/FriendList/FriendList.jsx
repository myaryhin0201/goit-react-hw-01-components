import Friend from './Friend';
const FriendList = ({friends}) => (
    <ul className="friend-list">
    {friends.map((friend) =>
    <li className="item" key={friend.id}>
        <Friend 
        isOnline = {friend.isOnline}
        avatar ={friend.avatar}
        name = {friend.name}
        />
    </li>)
    }    
    </ul>
);
export default FriendList;