import './friend.scss';
import PropTypes from 'prop-types';
import {Fragment} from 'react';
const imageDefault = `https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg`;
const Friend = ({isOnline,avatar,name}) => (
        <Fragment>
        <span className={`status ${isOnline}`}></span>
        <img className ="avatar" src={avatar} 
        alt={name} width="64" />
        <p className="name">{name}</p>
        </Fragment>
    )
Friend.defaultProps = {
    avatar:imageDefault,
}
Friend.propTypes = {
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}
export default Friend;