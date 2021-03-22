import Stats from './Stats';

const StaticticsList = ({statics}) => 
( 
<section className="statistics">
<h2 className="title">Upload stats</h2>
<ul className="stat-list">
    {statics.map((stat)=> (
    <li className="item" key={stat.id}>
        <Stats 
        label = {stat.label}
        percentage = {stat.percentage}
        />
    </li>
    ))
    }
</ul>
</section>
); 
export default StaticticsList;