function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactDiv = document.createElement('div');
    contactDiv.classList = 'contact';

    const contactItem = document.createElement('p');
    contactItem.classList = 'contact-info';
    contactItem.textContent = 'Name Name'

    contactDiv.appendChild(contactItem);

    content.appendChild(contactDiv);
};

export {loadContact};