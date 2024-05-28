document.on('ready', function() {

    function removeAllClasses(element) {
        // Remove classes of the element passed as argument
        let arrList = element.classList.entries();

        if (arrList.length > 0) {
            for (var key in arrList) {
                element.classList.remove(arrList[key]);
            }
        }
    }

	function updateLook() {
		Window.this.xcall('vb_CharacterUpdateLook', document.$('#race').value, document.$('#gender').value, Window.this.Heading);
	}
	
	function updateLookAndHeading(heading) {
		Window.this.Heading = heading;
		updateLook();
	}
	
	updateLookAndHeading(3); // Auto-call
	
    // refresh animation
    this.timer = setInterval(() => {
		document.$('#character_example').requestPaint();
    }, 1000 / 12);

    document.$('#charname').on('focus-in', function() {
        document.$('#create_character').classList.add('marked');
    });

    document.$('#charname').on('focus-out', function() {
        document.$('#create_character').classList.remove('marked');
    });
			  
	document.$('#gender').on('change', function() {
        Window.this.xcall('vb_CharacterUpdateLook', document.$('#race').value, document.$('#gender').value, Window.this.Heading);
    });
	
    document.$('#race').on('change', function() {
        const race = document.$('#race').value;
        const charClass = document.$('#class').value;

        // Missing: Reflecting the changes that affect stats/stars/etc
		
        Window.this.xcall('vb_CharacterUpdateLook', document.$('#race').value, document.$('#gender').value, Window.this.Heading);
    });

    document.$('#class').on('change', function() {
        const race = document.$('#race').value;
        const charClass = document.$('#class').value;

        // Missing: Reflecting the changes that affect stats/stars/etc
    });

    document.$('#home').on('change', function() {
        // Replace home image on home change
        const flag = document.$('#flags');
        const value = parseInt(this.value);
        const homeOptions = ['home flags banderbill', 'home flags ullathorpe', 'home flags nix', 'home flags arghal', 'home flags lindos'];
        const home = homeOptions[value] || 'home flags banderbill';

        removeAllClasses(flag);

        flag.classList.add(home);
    });

    document.$('#create_character').on('click', function() {
        const home = document.$('#home').value;
        const name = document.$('#charname').value;
        const race = document.$('#race').value;
        const clazz = document.$('#class').value;
        const gender = document.$('#gender').value;

        if (name.length === 0) {
            showMsgbox('Crear personaje', 'Debes ingresar un nombre para tu personaje.');
            return;
        }
		
        Window.this.xcall('vb_CharacterCreate', name, home, race, clazz, gender);
    });

    document.$('#exit').on('click', function() {
		changeView('main', 'templates/account.html');
    });
		
	document.$('#head_set_prev').on('click', function() {
        Window.this.xcall('vb_CharacterUpdateHead', -1);
	});
	
	document.$('#head_set_next').on('click', function() {
        Window.this.xcall('vb_CharacterUpdateHead', +1);
	});
	
	document.$('#heading_set_prev').on('click', function() {
		++Window.this.Heading;
		if (Window.this.Heading > 4) {
			Window.this.Heading = 1
		}
		updateLookAndHeading(Window.this.Heading);
	});
	
	document.$('#heading_set_next').on('click', function() {
		--Window.this.Heading;
		if (Window.this.Heading < 1) {
			Window.this.Heading = 4
		}
		updateLookAndHeading(Window.this.Heading);
	});
	
});