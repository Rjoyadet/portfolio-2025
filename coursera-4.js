function myFunction() {
    alert("You made a wise choice!");
}

const cardContainer = document.getElementByID('card-container');

function createCard(title, content) {
    const card = document.createElement('div');
    card.classList.add('card');

const cardTitle = document.createElement ('h2');
    cardTitle.textContent = title;

const cardContent = document.createElement ('p');
    cardContent.textContent = content;

card.appendChild(cardTitle);
    card.appendChild(cardContent);

return card;

}

caonst card1 = createcard('frameworks', 'Bootstrap, Angular, Typescript')
const card2 = createcard('other programs', 'linux and git')

cardContainer.appendChild(card1);
cardContainer.appendChild(card2);
