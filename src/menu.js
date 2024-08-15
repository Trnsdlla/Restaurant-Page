function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuDiv = document.createElement('div');
    menuDiv.classList = 'menu';

    const menuItem = document.createElement('p');
    menuItem.textContent = 'Delicious Pizza';
    menuDiv.appendChild(menuItem);

    content.appendChild(menuDiv);
};

export {loadMenu};