import Stats from './Stats';
import './statics.scss';
const colorStats = [
    { color: '#51c4f5' },
    { color: '#a43cf5' },
    { color: '#e54d63' },
    { color: '#21b8c5' },
    { color: '#25c8c5' },
];
const setColor = () => {
    const randomColor = '#'+Math.random().toString(16).substr(2,6);
    return randomColor;
}
const StaticticsList = ({statics, title}) => 
( 
    <section className="statistics">
        {title? <h2 className="title">{title}</h2>:''}
        
<ul className="stat-list">
            {
                statics.map((stat, i) => (
                    <li className="item" key={stat.id} style=
                        {
                        {
                            // backgroundColor: `${colorStats[i].color}`,
                            backgroundColor: `${setColor()}`,
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