// import restaurantBG from ('../images/restaurant_img_bg.png');
import './styles.css';
import {loadHome} from './home.js';
import {loadMenu} from './menu.js';
import {loadContact} from './contact.js';

// document.getElementById('content').style.backgroundImage = `url(${restaurantBG})`;

document.querySelector('button#home').addEventListener('click', () => {
    loadHome();
});

document.querySelector('button#menu').addEventListener('click', () => {
    loadMenu();
})

document.querySelector('button#contact').addEventListener('click', () => {
    loadContact();    
})

loadHome();