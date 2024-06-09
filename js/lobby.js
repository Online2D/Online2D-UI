document.on('ready', function() {

    // Mark character as selected
    document.on('click', '.char', function(e, t) {
        let allChars = document.querySelectorAll('.char');

        allChars.forEach(function(char) {
            char.classList.remove('selected');
        });

        t.classList.add('selected');
    });

    // Open delete character modal
    document.on('click', '#delete_character', function() {
        let currentChar = document.querySelector('.selected');
        
        if(currentChar !== null) {
            let currentCharName = currentChar.firstElementChild.innerHTML;

            document.$('.modal .del-char p b').textContent = currentCharName;
            document.$('.modal .del-char').classList.add('active');
            document.$('.modal').classList.add('active');
        } else {
            return;
        }
    });

    // Close delete character modal
    document.$('.modal .del-char .wrapper .header .mini-button').on('click', function() {
        document.$('.modal .del-char input[name="password"]').value = '';

        document.$('.modal .del-char .system').classList.remove('error');
        document.$('.modal .del-char .system p').textContent = '';
    
        document.$('.del-char').classList.remove('active');
        document.$('.modal').classList.remove('active');
    });

    // Delete character button action
    // Create account button action
    document.$('#delete_character_confirm').on('click', function() {
        const password = document.$('.modal .del-char input[name="password"]').value;
        
        if (password.length === 0) {
            globalShowError(document, '.modal .del-char .wrapper .system', 'frame', 'account', 'error_empty_password');
            return;
        }

        // Missing: check if the password is the real account password or not
    
        // Window.this.xcall('', username, email, password, token);
    });

    // Logout button action
    document.$('#logout').on('click', function() {
        Window.this.xcall('doLobbyLogout');
    });

});