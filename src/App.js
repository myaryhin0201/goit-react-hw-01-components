import ProfileList from './components/Profile/ProfileList';
import socialProfiles from './json/social-profile.json';
import StaticticsList from './components/Statictics/StaticticsList';
import statdata from './json/stat-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './json/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './json/transaction.json';
import Layout from './components/Layouts/Layouts';

function App() {
  return (
    <Layout>
      <h1>Social Profile</h1>
      <ProfileList socialProfile={socialProfiles} />
      <h1>Statistics</h1>
      <StaticticsList title="Upload Files" statics={statdata} />
      <h1>Friend List</h1>
      <FriendList friends={friends} />
      <h1>Statistics 2</h1>
      <StaticticsList statics={statdata} />
      <h1>Transaction History</h1>
      <TransactionHistory transHistory={transactions} />
    </Layout>
  );
}

export default App;
