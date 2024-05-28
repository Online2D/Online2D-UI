document.$('.main-modal .box .wrapper .world-info .header .mini-button').on('click', function() {
    // Close world map modal
    closeSubmainBox();
});

document.on('click', '.main-modal .box .wrapper .world-info .buttons-wrapper button', function(e, m) {
    // Toggles active button between world map and dungeon map
    const buttons = document.$$('.main-modal .box .wrapper .world-info .buttons-wrapper button')
    buttons.forEach(button => button.classList.remove('active'));

    m.classList.add('active');
});