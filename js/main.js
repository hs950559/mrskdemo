(function() {
    const shuffleButton = document.getElementById('shuffle');
    const sortButton = document.getElementById('sort');

    function getRandomNum() {
        return Math.floor(Math.random() * 9) + 1;
    }

    function reOrderCards(reset = false) {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            if (reset) {
                card.style.order = 0;
            } else {
                card.style.order = getRandomNum();
            }
        });
    }

    function initEvents() {
        shuffleButton.addEventListener('click', () => {
            reOrderCards();
        });
    
        sortButton.addEventListener('click', () => {
            reOrderCards(true);
        });
    }

    initEvents();
})();