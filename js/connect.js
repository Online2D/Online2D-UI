document.on('ready',function() {

    // CREATE ACCOUNT - START
    // Open create account modal
    document.$('#create_account').on('click', function() {
        document.$('.create-account').classList.add('active');
	    document.$('.modal').classList.add('active');
    });

    // Close create account modal
    document.$('.modal .create-account .wrapper .header .mini-button').on('click', function() {
        document.$('.modal .create-account input[name="username"]').value = '';
        document.$('.modal .create-account input[name="email"]').value = '';
        document.$('.modal .create-account input[name="password"]').value = '';
        document.$('.modal .create-account input[name="confirm_password"]').value = '';
        document.$('.modal .create-account input[name="tos"]').checked = false;
    
        document.$('.modal .create-account .system').classList.remove('error');
        document.$('.modal .create-account .system p').textContent = '';
    
        document.$('.create-account').classList.remove('active');
        document.$('.modal').classList.remove('active');
    });

    // Create account button action
    document.$('#account_create').on('click', function() {
        const username = document.$('.modal .create-account .field input[name="username"]').value;
        const email = document.$('.modal .create-account .field input[name="email"]').value;
        const password = document.$('.modal .create-account .field input[name="password"]').value;
        const confirmPassword = document.$('.modal .create-account .field input[name="confirm_password"]').value;
        const tos = document.$('.modal .create-account .special-field input[name="tos"]').checked;

        document.$('.modal .create-account .system').classList.remove('error');
        document.$('.modal .create-account .system p').textContent = '';
    
        if (username.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
            globalShowError(document, '.modal .create-account .wrapper .system', 'frame', 'create_account', 'error_empty_field');
            return;
        }

        if (username.length < 4 && username.length > 20) {
            globalShowError(document, '.modal .create-account .wrapper .system', 'frame', 'create_account', 'error_characters_username');
            return;
        }
        
        if (password !== confirmPassword) {
            globalShowError(document, '.modal .create-account .wrapper .system', 'frame', 'create_account', 'error_password_not_match');
            return;
        }

        if (password.length < 6 && password.length > 18) {
            globalShowError(document, '.modal .create-account .wrapper .system', 'frame', 'create_account', 'error_characters_password');
            return;
        }
        
        if (!isEmail(email)) {
            globalShowError(document, '.modal .create-account .wrapper .system', 'frame', 'create_account', 'error_invalid_email');
            return;
        }
    
        if (tos.checked === false) {
            globalShowError(document, '.modal .create-account .wrapper .system', 'frame', 'create_account', 'error_tos_not_accepted');
            return;
        }
    
        Window.this.xcall('doAccountCreate', username, password, email);
    });
    // CREATE ACCOUNT - END

    // Login button action
    document.$('#login').on('click', function() {
        const username = document.$('.connect-wrapper .field input[name="account"]').value;
        const password = document.$('.connect-wrapper .field input[name="password"]').value;

        document.$('.connect-wrapper .system').classList.remove('error');
        document.$('.connect-wrapper .system p').textContent = '';

        if (username.length === 0 || password.length === 0) {
            globalShowError(document, '.connect-wrapper .system', 'frame', 'connect', 'error_empty_fields');
            return;
        }

        if (username.length < 4 && username.length > 20) {
            globalShowError(document, '.modal .create-account .wrapper .system', 'frame', 'connect', 'error_characters_username');
            return;
        }

        if (password.length < 6 && password.length > 18) {
            globalShowError(document, '.modal .create-account .wrapper .system', 'frame', 'connect', 'error_characters_password');
            return;
        }
        
        Window.this.xcall('doAccountLogin', username, password);
    });

    // Exit button action
    document.$('#exit').on('click', function() {
        Window.this.xcall('doExit');
    });
});