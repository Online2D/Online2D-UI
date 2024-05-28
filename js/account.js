document.on('ready', function() {

    function auroraDraw(value) {
		Window.this.document.globalThis.DISABLE_AURORA = value === 0 ? true : false; // HACK
    }
	    
	auroraDraw(1);

    document.$('.character-list .box').on('focus-in', function() {
        document.$('#login_character').classList.add('marked');
    });

    document.$('.character-list .box').on('focus-out', function() {
        document.$('#login_character').classList.remove('marked');
    });

    document.$('.del-char input[name="token"]').on('focus-in', function() {
        document.$('#delete_character_confirm').classList.add('marked');
    });

    document.$('.del-char input[name="token"]').on('focus-out', function() {
        document.$('#delete_character_confirm').classList.remove('marked');
    });

    document.$('.change-pw input[name="confirm_password"]').on('focus-in', function() {
        document.$('#change_password_confirm').classList.add('marked');
    });

    document.$('.change-pw input[name="confirm_password"]').on('focus-out', function() {
        document.$('#change_password_confirm').classList.remove('marked');
    });

    document.on('focus click', '.character-list .box', function(e, m) {
		charId = m.firstElementChild.firstElementChild.getAttribute('id');
        charId = charId.slice(12, 13);
        Window.this.xcall('vb_CharacterSelect', charId);
    });
	
    document.on('dblclick', '.character-list .box', function() {
        Window.this.xcall('vb_CharacterEnter');
    });

    document.$('#create_character').on('click', function() {        
        Window.this.xcall('vb_GoToCharacterCreate');
    });
    
    document.$('#exit').on('click', function() {
        Window.this.xcall('vb_AccountLogout'); 
    });

    document.$('#login_character').on('click', function() {
        Window.this.xcall('vb_CharacterEnter');
    });

    document.$('#delete_character').on('click', function() {      
        // Shows the delete character modal
        document.$('body .modal').classList.add('active');
        document.$('body .modal .del-char').classList.add('active');

        // This hides the render so Aurora doesn't draw
        auroraDraw(0);
    });

    document.$('#change_password').on('click', function() {
        // Shows the change password modal
        document.$('body .modal').classList.add('active');
        document.$('body .modal .change-pw').classList.add('active');

        // This hides the render so Aurora doesn't draw
        auroraDraw(0);
    });

    document.$('#change_password_x').on('click', function() {
        // Button "x" on change password modal
        document.$('body .modal .change-pw').classList.remove('active');
        document.$('body .modal').classList.remove('active');

        // This shows the render so Aurora can draw
        auroraDraw(1);
    });

    document.$('#change_password_cancel').on('click', function() {
        // Button "cancel" on change password modal
        document.$('body .modal .change-pw').classList.remove('active');
        document.$('body .modal').classList.remove('active');

        // This shows the render so Aurora can draw
        auroraDraw(1);
    });

    document.$('#change_password_confirm').on('click', function() {
        // Button "confirm" on change password modal
        const oldPassword = document.$('.change-pw .field input[name="old_password"]').value;
        const newPassword = document.$('.change-pw .field input[name="new_password"]').value;
        const confirmPassword = document.$('.change-pw .field input[name="confirm_password"]').value;

        if (oldPassword.length === 0 || newPassword.length === 0 || confirmPassword.length === 0) {
            showMsgbox('Error', 'Debes completar todos los campos para cambiar tu contraseña.');
            return;
        }

        if (newPassword !== confirmPassword) {
            showMsgbox('Error', 'Las contraseñas no coinciden.');
            return;
        }

		Window.this.xcall('vb_AccountChangePassword', oldPassword, newPassword);
    });

    document.$('#delete_char_x').on('click', function() {
        // Button "x" on delete character modal
        document.$('body .modal .del-char').classList.remove('active');
        document.$('body .modal').classList.remove('active');

        // This shows the render so Aurora can draw
        auroraDraw(1);
    });

    document.$('#delete_char_cancel').on('click', function() {
        // Button "cancel" on delete character modal
        document.$('body .modal .del-char').classList.remove('active');
        document.$('body .modal').classList.remove('active');

        // This shows the render so Aurora can draw
        auroraDraw(1);
    });

    document.$('#delete_character_confirm').on('click', function() {
        // Button "confirm" on delete character modal
        // This is the "confirm button"
        const token = document.$('.del-char input[name="token"]').value;

        if (token.length === 0) {
            showMsgbox('Error', 'Debes ingresar tu token para borrar tu personaje.');
            return;
        }

		Window.this.xcall('vb_CharacterDelete', token);
    });
});