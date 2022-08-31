function calc(adults, children) {
    if (adults < 0 || adults == 0) {
        adults = 0;

        // Récupére le noeud du DOM où le message doit apparaître
        let help = document.getElementById('help');
        // Crée le message d'alerte
        let warningMessage =
            'For safety reasons children must be accompanied by at least one adult.';
        // Ajout de style au msg
        help.style.color = '#fdff75';
        help.style.textAlign = 'center';
        // Ajoute le message dans l'espace réservé
        help.textContent = warningMessage;
    } else {
        help.textContent = ' ';
    }

    return adults * 12 + children * 5;
}

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
    displayTotalAdultsTickets.textContent = ' ' + this.value + ' ' + 'x 12 €';
    displayTotalPrice.textContent = price + ' €';
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

window.onload = () => {
    let getNumberOfAdults = document.getElementById('adults');
    let getNumberOfChildren = document.getElementById('children');
    let btn = document.getElementById('button');

    getNumberOfAdults.addEventListener('change', displayAdultPrice);
    getNumberOfChildren.addEventListener('change', displayChildrenPrice);

    btn.addEventListener('click', function () {
        let boldertTextAfterClick = document.getElementById(
            'boldertTextAfterClick'
        );
        boldertTextAfterClick.style.fontWeight = 'bold';
        getNumberOfAdults.removeEventListener('change', displayAdultPrice);
        getNumberOfChildren.removeEventListener('change', displayChildrenPrice);
    });
};
