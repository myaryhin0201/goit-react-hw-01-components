import Stats from './Stats';
import './Stats.scss';
import { Fragment } from 'react';

const StaticticsList = ({ statics, title }) => (
  <section className="statistics">
    {title ? <h2 className="title">{title}</h2> : ''}
    <ul className="stat-list">
      {statics.map(stat => (
        <Fragment key={stat.id}>
          <Stats label={stat.label} percentage={stat.percentage} />
        </Fragment>
      ))}
    </ul>
  </section>
);
export default StaticticsList;
