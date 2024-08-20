import Inventory from './Inventory';
import Customers from './LoCustomers';

const Content = ({ view }) => {
    return (
        <div>
            {view === 'inventory' && <Inventory />}
            {view === 'customer' && <Customers />}
        </div>
    );
};


export default Content;