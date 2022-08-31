let getNumberOfAdults = document.getElementById('adults');
let getNumberOfChildren = document.getElementById('children');

let displayTotalAdultsTickets = document.getElementById('totalAdultsTickets');
let displayTotalChildrenTickets = document.getElementById(
    'totalChildrenTickets'
);
let displayTotalPrice = document.getElementById('displayTotalPrice');

let btn = document.getElementById('button');

function displayWarningMessage() {
    // Récupère la valeur entrée par l'utilisateur
    let adults = getNumberOfAdults.value;
    let children = getNumberOfChildren.value;
    let help = document.getElementById('help'); // Récupére le noeud du DOM où le message doit apparaître
    let warningMessage; // Déclaration d'une variable pour le message d'alerte

    if (adults < 0) {
        adults = 0;
        warningMessage = 'Please enter a positive number for adult ticket';
    } else if (children < 0) {
        children = 0;
        warningMessage = 'Please enter a positive number for children ticket';
    } else if (adults == 0 && children > 0) {
        warningMessage =
            'For safety reasons children must be accompanied by at least one adult.';
    }

    // Ajout de style au msg
    help.style.color = '#fdff75';
    help.style.textAlign = 'center';

    help.textContent = warningMessage; // Ajoute le message dans l'espace réservé
}

function displayAdultPrice() {
    displayWarningMessage();
    // let price = calc(adults, children);

    // Eviter l'affichage de valeur négative
    if (this.value < 0) {
        this.value = 0;
        return this.value;
    }
    displayTotalAdultsTickets.textContent = ` ${this.value * 12} €`;
    // displayTotalPrice.textContent = price + ' €';
}

function displayChildrenPrice() {
    displayWarningMessage();
    // let price = calc(adults, children);

    // Eviter l'affichage de valeur négative
    if (this.value < 0) {
        this.value = 0;
        return this.value;
    }
    displayTotalChildrenTickets.textContent = ` ${this.value * 5} €`;
    // displayTotalPrice.textContent = price + ' €';
}

function calc(adults, children) {
    // Retourne le calcul du prix total des billets
    const price = adults * 12 + children * 5;
    displayTotalPrice.textContent = price + ' €';
    return price;
}

function textToBold() {
    let boldertTextAfterClick = document.getElementById(
        'boldertTextAfterClick'
    );
    boldertTextAfterClick.style.fontWeight = 'bold';
}

window.onload = () => {
    getNumberOfAdults.addEventListener('change', displayAdultPrice);
    getNumberOfChildren.addEventListener('change', displayChildrenPrice);

    btn.addEventListener('click', () => {
        let adults = getNumberOfAdults.value;
        let children = getNumberOfChildren.value;
        calc(adults, children);
        textToBold();
        getNumberOfAdults.removeEventListener('change', displayAdultPrice);
        getNumberOfChildren.removeEventListener('change', displayChildrenPrice);
    });
};
