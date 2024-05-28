function keyCodeToHuman(keyCode) {
    const keyMappings = {
        256: 'Escape',
        290: 'F1',
        291: 'F2',
        292: 'F3',
        293: 'F4',
        294: 'F5',
        295: 'F6',
        296: 'F7',
        297: 'F8',
        298: 'F9',
        299: 'F10',
        300: 'F11',
        301: 'F12',
        92: 'º',
        49: '1',
        50: '2',
        51: '3',
        52: '4',
        53: '5',
        54: '6',
        55: '7',
        56: '8',
        57: '9',
        48: '0',
        91: "'",
        93: '¡',
        259: 'Retroceso',
        258: 'Tab',
        81: 'Q',
        87: 'W',
        69: 'E',
        82: 'R',
        84: 'T',
        89: 'Y',
        85: 'U',
        73: 'I',
        79: 'O',
        80: 'P',
        59: '``',
        61: '+',
        257: 'Enter',
        280: 'Bloq Mayús',
        65: 'A',
        83: 'S',
        68: 'D',
        70: 'F',
        71: 'G',
        72: 'H',
        74: 'J',
        75: 'K',
        76: 'L',
        96: 'Ñ',
        39: '´´',
        47: 'ç',
        340: 'Shift Izq',
        90: 'Z',
        88: 'X',
        67: 'C',
        86: 'V',
        66: 'B',
        78: 'N',
        77: 'M',
        44: ',',
        46: '.',
        45: '-',
        344: 'Shift Der',
        341: 'Ctrl Izq',
        342: 'Alt Izq',
        32: 'Espacio',
        346: 'Alt Der',
        345: 'Ctrl Der',
        260: 'Insertar',
        268: 'Inicio',
        266: 'Re Pág',
        261: 'Supr',
        269: 'Fin',
        267: 'Av Pág',
        265: 'Arriba',
        264: 'Abajo',
        263: 'Izquierda',
        262: 'Derecha',
        320: '0 (teclado numérico)',
        330: '. (teclado numérico)',
        321: '1 (teclado numérico)',
        322: '2 (teclado numérico)',
        323: '3 (teclado numérico)',
        324: '4 (teclado numérico)',
        325: '5 (teclado numérico)',
        326: '6 (teclado numérico)',
        327: '7 (teclado numérico)',
        328: '8 (teclado numérico)',
        329: '9 (teclado numérico)',
        282: 'Bloq Núm',
        331: '/ (teclado numérico)',
        332: '* (teclado numérico)',
        333: '- (teclado numérico)',
        334: '+ (teclado numérico)'
    };

    return keyMappings[keyCode];
}

function humanToKeyCode(string) {
    const keyMappings = {
        'Escape': 256,
        'F1': 290,
        'F2': 291,
        'F3': 292,
        'F4': 293,
        'F5': 294,
        'F6': 295,
        'F7': 296,
        'F8': 297,
        'F9': 298,
        'F10': 299,
        'F11': 300,
        'F12': 301,
        'º': 92,
        '1': 49,
        '2': 50,
        '3': 51,
        '4': 52,
        '5': 53,
        '6': 54,
        '7': 55,
        '8': 56,
        '9': 57,
        '0': 48,
        "'": 91,
        '¡': 93,
        'Retroceso': 259,
        'Tab': 258,
        'Q': 81,
        'W': 87,
        'E': 69,
        'R': 82,
        'T': 84,
        'Y': 89,
        'U': 85,
        'I': 73,
        'O': 79,
        'P': 80,
        '``': 59,
        '+': 61,
        'Enter': 257,
        'Bloq Mayús': 280,
        'A': 65,
        'S': 83,
        'D': 68,
        'F': 70,
        'G': 71,
        'H': 72,
        'J': 74,
        'K': 75,
        'L': 76,
        'Ñ': 96,
        '´´': 39,
        'ç': 47,
        'Shift Izq': 340,
        'Z': 90,
        'X': 88,
        'C': 67,
        'V': 86,
        'B': 66,
        'N': 78,
        'M': 77,
        ',': 44,
        '.': 46,
        '-': 45,
        'Shift Der': 344,
        'Ctrl Izq': 341,
        'Alt Izq': 342,
        'Espacio': 32,
        'Alt Der': 346,
        'Ctrl Der': 345,
        'Insertar': 260,
        'Inicio': 268,
        'Re Pág': 266,
        'Supr': 261,
        'Fin': 269,
        'Av Pág': 267,
        'Arriba': 265,
        'Abajo': 264,
        'Izquierda': 263,
        'Derecha': 262,
        '0 (teclado numérico)': 320,
        '. (teclado numérico)': 330,
        '1 (teclado numérico)': 321,
        '2 (teclado numérico)': 322,
        '3 (teclado numérico)': 323,
        '4 (teclado numérico)': 324,
        '5 (teclado numérico)': 325,
        '6 (teclado numérico)': 326,
        '7 (teclado numérico)': 327,
        '8 (teclado numérico)': 328,
        '9 (teclado numérico)': 329,
        'Bloq Núm': 282,
        '/ (teclado numérico)': 331,
        '* (teclado numérico)': 332,
        '- (teclado numérico)': 333,
        '+ (teclado numérico)': 334
    };

    return keyMappings[string];
}

function dialogColor() {
    let currentRed = parseInt(document.$('#dialogs_slider_red').value);
    let currentGreen = parseInt(document.$('#dialogs_slider_green').value);
    let currentBlue = parseInt(document.$('#dialogs_slider_blue').value);

    let finalValue = `rgb(${currentRed}, ${currentGreen}, ${currentBlue})`;

    document.$('#dialogs_color_example').style.setProperty('background', finalValue);
}

document.$('.main-modal .box .wrapper .header .mini-button').on('click', function() {
    // Close option modal
    closeSubmainBox();
});

document.on('click', '.main-modal .box .wrapper .body .tab-wrapper button', function(e, m) {
    let buttonId = m.getAttribute('id');

    const buttons = document.$$('.main-modal .box .wrapper .body .tab-wrapper button');
    buttons.forEach(button => button.classList.remove('active'));

    const bodies = document.$$('.main-modal .box .wrapper .body div')
    bodies.forEach(body => body.classList.remove('active'));

    m.classList.add('active');
    document.$(`.${buttonId}`).classList.add('active');
});

document.$('#master-volume').on('change', function() {
    // Checkbox to enable/disable master volume slider
    let currentValue = this.value;

    if (currentValue == false) {
        document.$('#slider-master').state.disabled = true;
    } else {
        document.$('#slider-master').state.disabled = false;
    }

    // Missing: saving the value
});

document.$('#music-volume').on('change', function() {
    // Checkbox to enable/disable music volume slider
    let currentValue = this.value;

    if (currentValue == false) {
        document.$('#slider-music').state.disabled = true;
    } else {
        document.$('#slider-music').state.disabled = false;
    }

    // Missing: saving the value
});

document.$('#effects-volume').on('change', function() {
    // Checkbox to enable/disable effects volume slider
    let currentValue = this.value;

    if (currentValue == false) {
        document.$('#slider-effects').state.disabled = true;
    } else {
        document.$('#slider-effects').state.disabled = false;
    }

    // Missing: saving the value
});

document.$('#ui-volume').on('change', function() {
    // Checkbox to enable/disable ui volume slider
    let currentValue = this.value;

    if (currentValue == false) {
        document.$('#slider-ui').state.disabled = true;
    } else {
        document.$('#slider-ui').state.disabled = false;
    }

    // Missing: saving the value
});

document.$('#slider-master').on('change', function() {
    // Current value of master volume slider
    let currentValue = parseInt(this.value);

    // Missing: Aurora doing her thing *.*
});

document.$('#slider-music').on('change', function() {
    // Current value of music volume slider
    let currentValue = parseInt(this.value);

    // Missing: Aurora doing her thing *.*
});

document.$('#slider-effects').on('change', function() {
    // Current value of effects volume slider
    let currentValue = parseInt(this.value);

    // Missing: Aurora doing her thing *.*
});

document.$('#slider-ui').on('change', function() {
    // Current value of ui volume slider
    let currentValue = parseInt(this.value);

    // Missing: Aurora doing her thing *.*
});

document.$('#guild_dialogs').on('change', function() {
    // Current value of guild dialogs (0 - Console / 1 - Screen)
    let currentValue = parseInt(this.value);

    if (currentValue === 1) {
        document.$('#dialog_amount').state.disabled = false;
    } else {
        document.$('#dialog_amount').state.disabled = true;
    }

    // Missing: Aurora doing her thing *.*
});

document.$('#dialog_amount').on('input', function() {
    // Current value of the amount of dialogs on the screen
    let finalValue = this.value;
    const regex = /^[1-9]$/;

    if (regex.test(finalValue)) {
        this.value = finalValue; // Change for input value
    } else {
        this.value = 5; // Change to 5 if the regex is invalid
    }
});

document.$('#keys').on('click', function() {
    // Open the keys modal
    document.$('.over-main-modal').classList.add('active');
    document.$('.over-main-modal .keys').classList.add('active');
});

document.$('#messages').on('click', function() {
    // Open the messages modal
    document.$('.over-main-modal').classList.add('active');
    document.$('.over-main-modal .messages').classList.add('active');
});

document.$('#console').on('click', function() {
    // Open the console modal
    document.$('.over-main-modal').classList.add('active');
    document.$('.over-main-modal .console').classList.add('active');
});

document.$('#dialogs').on('click', function() {
    // Open the dialogs modal
    document.$('.over-main-modal').classList.add('active');
    document.$('.over-main-modal .dialogs').classList.add('active');
});

document.$('#map').on('click', function() {
    // Open the world map window
    let frameElement = document.parentElement.ownerDocument.globalThis.document.$('#submain');

    frameElement.classList.add('active');

    changeView('#submain', 'worldmap.html');
});

document.$('#tutorial').on('click', function() {
    // Open the tutorial window
    let frameElement = document.parentElement.ownerDocument.globalThis.document.$('#submain');

    frameElement.classList.add('active');

    changeView('#submain', 'tutorial.html');
});

// Keys window functions
document.on('click', '.over-main-modal .keys .tabs-wrapper button', function(e, m) {
    // Tab clicking
    let buttonId = m.getAttribute('id');

    // Remove the active class on all tabs
    const buttons = document.$$('.over-main-modal .keys .tabs-wrapper button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class
    m.classList.add('active');

    // Missing loading all the values depending on the configuration selected
});

document.$$('.over-main-modal .keys input[type="text"]').forEach(function(input) {
    // Change the value of any input key
    input.addEventListener('keydown', function(event) {
        event.preventDefault();
        event.stopPropagation();

        const pressedKeyCode = event.keyCode;
        const targetInput = event.target;
        let allInputs = document.$$('.over-main-modal .keys input[type="text"]');

        if (targetInput.tagName === 'INPUT') {

            // Windows, Context menu, Bloq Despl & Pause keys
            if (pressedKeyCode === 343 || 
                pressedKeyCode === 349 || 
                pressedKeyCode === 281 || 
                pressedKeyCode === 284) {
                return false;
            }

            allInputs.forEach(function(input) {
                // Translate string to keyCode
                let currentValue = humanToKeyCode(input.value);

                // Remove the value if the key is already set
                if (currentValue === pressedKeyCode) {
                    input.value = null;
                }
            });

            targetInput.value = keyCodeToHuman(pressedKeyCode);
        }
    });
});

document.$('#key_active_cfg').addEventListener('change', function() {
    // Mark configuration as 'active'
    if (this.checked) {
        let activeButtonId = null;
        let buttons = document.$$('.over-main-modal .keys .tabs-wrapper button');
        
        buttons.forEach(function(button) {
            if (button.classList.contains('active')) {
                activeButtonId = button.id;
            }
        });

        // Missing saving the current configuration as 'active'
    }
});

document.$('#keys_load_defaults').on('click', function() {
    // Load default keys - this is just filler
    document.$('#key_up').value = 'Arriba';
    document.$('#key_down').value = 'Abajo';
    document.$('#key_left').value = 'Izquierda';
    document.$('#key_right').value = 'Derecha';

    document.$('#key_grab').value = 'A';
    document.$('#key_wear').value = 'E';
    document.$('#key_tame').value = 'D';
    document.$('#key_steal').value = 'R';
    document.$('#key_hide').value = 'O';
    document.$('#key_drop').value = 'T';
    document.$('#key_use').value = 'U';
    document.$('#key_attack').value = 'Control';

    document.$('#key_talk').value = 'Enter';
    document.$('#key_guild_talk').value = 'Suprimir';

    document.$('#key_toggle_music').value = 'M';
    document.$('#key_fix_coordinates').value = 'L';
    document.$('#key_toggle_names').value = 'N';
    document.$('#key_toggle_sounds').value = 'S';
    document.$('#key_toggle_fxs').value = 'F';

    document.$('#key_toggle_fps').value = 'F2';
    document.$('#key_toggle_options').value = 'F5';
    document.$('#key_meditate').value = 'F6';
    document.$('#key_macro_spells').value = 'F7';
    document.$('#key_macro_work').value = 'F8';
    document.$('#key_exit').value = 'F12';
    document.$('#key_toggle_safemode').value = '* (teclado numérico)';
    document.$('#key_toggle_resurrectionmode').value = 'Fin';

    // Missing: aurora doing her thing *.*
});

document.$('#keys_save').on('click', function() {
    // Save all the configurations
    let allInputs = document.$$('.over-main-modal .keys input[type="text"]');

    allInputs.forEach(function(input) {
        // Translate string to keyCode
        let currentValue = humanToKeyCode(input.value);
    });

    // Missing saving all the configurations

    document.$('.over-main-modal').classList.remove('active');
    document.$('.over-main-modal .keys').classList.remove('active');
});

// Messages window functions
document.$('#messages_exit').on('click', function() {
    document.$('.over-main-modal').classList.remove('active');
    document.$('.over-main-modal .messages').classList.remove('active');
});

document.$('#messages_save').on('click', function() {
    // Missing: Aurora doing her thing *.*
});

// Console window functions
document.$('#console_exit').on('click', function() {
    document.$('.over-main-modal').classList.remove('active');
    document.$('.over-main-modal .console').classList.remove('active');
});

document.$('#console_save').on('click', function() {
    // Missing: Aurora doing her thing *.*
});

// Dialogs window functions
document.$$('.dialogs input[type="hslider"]').forEach(function(input) {
    input.on('change', function() {
        dialogColor();
    });
});

document.$('#dialogs_color_default').on('click', function() {
    // Currently set to white, missing: type of dialog and default color value
    document.$('#dialogs_slider_red').value = 255;
    document.$('#dialogs_slider_green').value = 255;
    document.$('#dialogs_slider_blue').value = 255;

    dialogColor();
});

document.$('#dialogs_all_default').on('click', function() {
    // Missing: default color values for all the type dialogs
});

document.$('#dialogs_save').on('click', function() {
    // Missing: Aurora doing her thing *.*

    document.$('.over-main-modal').classList.remove('active');
    document.$('.over-main-modal .dialogs').classList.remove('active');
});