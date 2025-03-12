import PropTypes from 'prop-types';

const Item = ({ item, onDelete }) => {
    return (
        <div>
            <span>{item.name}: {item.status}</span>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        status: PropTypes.string,
    }).isRequired,
    onDelete: PropTypes.func
};

export default Item;