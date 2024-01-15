

import './navBarStyled.css';
import CartWidget from '../CartWidget/CartWidget';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import WineBarIcon from '@mui/icons-material/WineBar';
import LiquorIcon from '@mui/icons-material/Liquor';
function Navbar() {

    return (
    <div className='navBar'>
        <h1>Prolicores</h1>
        <div className='nav-barlist'>
               
                <SportsBarIcon className='beer' />
                <WineBarIcon className='wine'/> 
                <LiquorIcon className='liquor'/> 
               
        </div>

        <CartWidget number = {6}/>
    </div>
    );
}



export default Navbar;