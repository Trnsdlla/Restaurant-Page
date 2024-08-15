function loadHome() {

    const content = document.getElementById('content');
    content.innerHTML = '';

    const welcomeHeader = document.createElement('h1');
    welcomeHeader.textContent = 'Welcome!';

    const welcomeInfo = document.createElement('p');
    welcomeInfo.textContent = `Loecfeo of  ok oef owe .e nUB iecn . cewn cInec iwe. <br> 
    evevewcv wf wef 3erf 3ef 3ef we ew wewe wew ecw  <br> 
    ewcc wec .`;

    const contentBtns = document.createElement('div');
    contentBtns.id = 'content-btns';

    const reservationBtn = document.createElement('button');
    reservationBtn.classList = 'reservation-btn';
    reservationBtn.textContent = 'Reservation';

    const menuBtn = document.createElement('button');
    menuBtn.classList = 'menu-btn';
    menuBtn.textContent = 'Menu'

    content.appendChild(welcomeHeader);
    content.appendChild(welcomeInfo);
    content.appendChild(contentBtns);

    contentBtns.appendChild(reservationBtn);
    contentBtns.appendChild(menuBtn);
}

export {loadHome};

/* <h1>Welcome!</h1>
<p>Loecfeo of  ok oef owe .e nUB iecn . cewn cInec iwe. <br> 
evevewcv wf wef 3erf 3ef 3ef we ew wewe wew ecw  <br> 
ewcc wec .</p>
<div id="content-btns">
    <button class="reservation-btn">Reservation</button>
    <button class="menu-btn">Menu</button>
</div> */