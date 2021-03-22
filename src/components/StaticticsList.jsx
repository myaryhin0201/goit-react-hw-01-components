import Stats from './Stats';
import '../sass/statics.scss';
const colorStats = [
    { color: '#51c4f5' },
    { color: '#a43cf5' },
    { color: '#e54d63' },
    { color: '#21b8c5' },
    //  { color: '#25c8c5' },
];
const StaticticsList = ({statics}) => 
( 
<section className="statistics">
<h2 className="title">Upload stats</h2>
<ul className="stat-list">
            {
                statics.map((stat, i) => (
                    <li className="item" key={stat.id} style=
                        {
                        {                              backgroundColor: `${colorStats[i].color}`,
                        }
                        }       
                    >
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