import ProfileList from './components/ProfileList';
import socialProfiles from './json/social-profile.json';
import StaticticsList from './components/StaticticsList';
import statdata from './json/stat-data.json';
import FriendList from './components/FriendList';
import friends from './json/friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './json/transaction.json'
function App() {
  return (
    <div className="App">
      <h1>Social Profile</h1>
      <ProfileList socialProfile = {socialProfiles} />
      <h1>Statistics</h1>
      <StaticticsList statics = {statdata}/>
      <h1>Friend List</h1>
      <FriendList friends = {friends}/>
      <h1>Transaction History</h1>
      <TransactionHistory transHistory={transactions}/>
    </div>
  );
}

export default App;
