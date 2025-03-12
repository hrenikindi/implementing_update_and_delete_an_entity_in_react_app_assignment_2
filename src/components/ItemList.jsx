import Item from "./Item";
import PropTypes from 'prop-types';

const ItemList = ({ items, onDelete }) => {
    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} onDelete={onDelete} />
            ))}
        </>
    );
};

ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string,
            status: PropTypes.string,
        })
    ).isRequired,
    onDelete: PropTypes.func
};

export default ItemList;