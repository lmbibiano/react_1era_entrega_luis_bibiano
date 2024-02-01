
import './navBarStyled.css';
import CartWidget from '../CartWidget/CartWidget';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import WineBarIcon from '@mui/icons-material/WineBar';
import LiquorIcon from '@mui/icons-material/Liquor';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {


    return (
    <div className='navBar'>
        <Link to="/">
        <h1>Prolicores</h1>
        </Link>
        <div className='nav-barlist'>
            
                <NavLink to="/category/cerveza"><SportsBarIcon className='beer' /></NavLink>
                <NavLink to="/category/vodka"><WineBarIcon className='wine'/></NavLink>
                <NavLink to="/category/ron"><LiquorIcon className='liquor'/></NavLink> 
        </div>

        <CartWidget        number={6}
        />
    </div>
    );
}



export default Navbar;