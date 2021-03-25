import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Stats from './Stats/Stats';

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
StaticticsList.defaultProps = {
  title: '',
};
StaticticsList.propTypes = {
  title: PropTypes.string,
  statics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default StaticticsList;
