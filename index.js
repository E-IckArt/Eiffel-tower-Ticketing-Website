function displayAdultPrice() {
    let adults = document.getElementById('adults').value;
    let children = document.getElementById('children').value;
    let displayTotalAdultsTickets =
        document.getElementById('totalAdultsTickets');
    let displayTotalPrice = document.getElementById('displayTotalPrice');
    let price = calc(adults, children);
    if (adults < 0) {
        this.value = 0;
        return this.value;
    }

    if (price > 0) {
        displayTotalAdultsTickets.textContent =
            ' ' + this.value + ' ' + 'x 12 €';
        displayTotalPrice.textContent = price + ' €';
    }
}

function displayChildrenPrice() {
    let adults = document.getElementById('adults').value;
    let children = document.getElementById('children').value;
    let displayTotalChildrenTickets = document.getElementById(
        'totalChildrenTickets'
    );
    let displayTotalPrice = document.getElementById('displayTotalPrice');
    let price = calc(adults, children);
    if (children < 0) {
        this.value = 0;
        return this.value;
    }
    displayTotalChildrenTickets.textContent = ' ' + this.value + ' ' + 'x 5 €';
    displayTotalPrice.textContent = price + ' €';
}

function calc(adults, children) {
    // Récupére le noeud du DOM où le message doit apparaître
    let help = document.getElementById('help');
    // Déclaration d'une variable pour le message d'alerte
    let warningMessage;

    if (adults < 0) {
        adults = 0;
        warningMessage = 'Please enter a positive number';
    }

    if (children < 0) {
        children = 0;
        warningMessage = 'Please enter a positive number';
    }

    if (adults == 0 && children > 0) {
        warningMessage =
            'For safety reasons children must be accompanied by at least one adult.';
    } else {
        help.textContent = ' ';
    }
    // Ajout de style au msg
    help.style.color = '#fdff75';
    help.style.textAlign = 'center';
    // Ajoute le message dans l'espace réservé
    help.textContent = warningMessage;
    // Retourne le calcul du prix total des billets
    return adults * 12 + children * 5;
}

function textToBold() {
    let boldertTextAfterClick = document.getElementById(
        'boldertTextAfterClick'
    );
    boldertTextAfterClick.style.fontWeight = 'bold';
}

window.onload = () => {
    let getNumberOfAdults = document.getElementById('adults');
    let getNumberOfChildren = document.getElementById('children');
    let btn = document.getElementById('button');

    getNumberOfAdults.addEventListener('change', displayAdultPrice);
    getNumberOfChildren.addEventListener('change', displayChildrenPrice);

    btn.addEventListener('click', function () {
        textToBold();
        getNumberOfAdults.removeEventListener('change', displayAdultPrice);
        getNumberOfChildren.removeEventListener('change', displayChildrenPrice);
    });
};
