// Компоненты
import Profile from './components/Profile/Profile';
import StaticticsList from './components/Statictics/StaticticsList';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Layout from './components/Layouts/Layouts';
// данные
import transactions from './json/transaction.json';
import socialProfiles from './json/social-profile.json';
import statdata from './json/stat-data.json';
import friends from './json/friends.json';

function App() {
  return (
    <Layout>
      <h1>Social Profile</h1>
      <Profile
        name={socialProfiles.name}
        tag={socialProfiles.tag}
        location={socialProfiles.location}
        avatar={socialProfiles.avatar}
        stats={socialProfiles.stats}
      />
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
