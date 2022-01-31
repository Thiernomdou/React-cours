import  './Item.css';
import img_los from '../../assets/img_los.jpg';
import chat from './happy.svg';

function Item() {
    return (
        <div>
            <h1 class="titre-item">Hello depuis Item</h1>
            <img src={img_los} alt="" />
            <img src={chat} alt="" />
        </div>
    ) 
}

export default Item;