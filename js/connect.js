document.on('ready',function() {

    document.$('#create_account').on('click', function() {
        showCreateAccount();
    });

    document.$('#login').on('click', function() {
        const username = document.$('.connect-wrapper .field input[name="account"]').value;
        const password = document.$('.connect-wrapper .field input[name="password"]').value;

        if (username.length === 0 || password.length === 0) {
            // showMsgbox('Error', 'Debes completar todos los campos para ingresar a tu cuenta.');
            globalShowError(document, '.connect-wrapper .system', 'frame', 'connect', 'error_empty_fields');
            return;
        }
        
        Window.this.xcall('vb_AccountLogin', username, password);
    });

    document.$('#exit').on('click', function() {
        Window.this.xcall('vb_Exit');
    });

    document.$('.connect-wrapper .field input[name="password"]').on('focus-in', function() {
        document.$('#login').classList.add('marked');
    });

    document.$('.connect-wrapper .field input[name="password"]').on('focus-out', function() {
        document.$('#login').classList.remove('marked');
    });

    // Test to change the language
    // document.$('#switch').on('click', function() {
    //     switchLanguage('spanish');
    // });
    
});