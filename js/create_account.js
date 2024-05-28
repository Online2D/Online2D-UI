document.on('ready', function() {

    document.$('.create-account-wrapper .field input[name="token"]').on('focus-in', function() {
        document.$('#create_account').classList.add('marked');
    });

    document.$('.create-account-wrapper .field input[name="token"]').on('focus-out', function() {
        document.$('#create_account').classList.remove('marked');
    });

    document.$('#create_account').on('click', function() {
        const username = document.$('.create-account-wrapper .group .field input[name="account"]').value;
        const email = document.$('.create-account-wrapper .group .field input[name="email"]').value;
        const password = document.$('.create-account-wrapper .group .field input[name="password"]').value;
        const confirmPassword = document.$('.create-account-wrapper .group .field input[name="confirm_password"]').value;
        const token = document.$('.create-account-wrapper .field input[name="token"]').value;

        if (username.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0 || token.length === 0) {
            showMsgbox('Error', 'Debes completar todos los campos para poder crear una cuenta.');
            return;
        }
				
        if (username === token) {
            showMsgbox('Error', 'El token no puede ser igual al nombre de la cuenta.');
            return;
        }
		
        if (password !== confirmPassword) {
            showMsgbox('Error', 'Las contraseñas deben coincidir.');
            return;
        }
		
		if (!parentWindow.isEmail(email)) {
            showMsgbox('Error', 'Ingrese una dirección de correo electrónico válida.');
            return;
		}

        Window.this.xcall('vb_AccountCreate', username, email, password, token);
    });

    document.$('#exit').on('click', function() {
		changeView('main', 'templates/connect.html');
    });

});