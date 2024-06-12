import { translation } from "lang.js";

let frameElement = document.$('#main');
let subFrameElement;

// Load the sub-frame into the variable after the first frame finished to load
frameElement.on('complete', function() {
	subFrameElement = frameElement.frame.document.globalThis.document.$('#submain');
});

// Search translated messages from translation constant and returns them in the current loaded language
function getTranslatedMessage(key) {
    return translation[key] || key;
}

// Show's the error box
function globalShowError(frame, wrapper, messageKey) {
    const translatedMessage = getTranslatedMessage(messageKey);

    frame.$(wrapper).classList.add('error');
    frame.$(wrapper).firstElementChild.textContent = 'Error: ' + translatedMessage;
}

// MSGBOX - START
function showMsgbox(title, message) {
    let modalTitle = document.$('#msgbox_modal').firstElementChild.firstElementChild.firstElementChild;
    let modalDescription = document.$('#msgbox_modal').firstElementChild.firstElementChild.nextElementSibling;

    modalTitle.innerText = title;
    modalDescription.innerText = message;

    document.$('#msgbox_modal').classList.add('active');
    document.$('#master_modal').classList.add('active');
}

function closeMsgbox() {
    document.$('#msgbox_modal').classList.remove('active');
    document.$('#master_modal').classList.remove('active');
}
// MSGBOX - END

// Close the sub-frame globally
function closeSubmainBox() {
	subFrameElement.classList.remove('active');
}

// Change the window depending on the provided frame
function changeView(frame, view) {
	if (frame === '#submain') {
		subFrameElement.frame.loadFile(view);
	} else {
		frameElement.frame.loadFile(view);
	}
}

function setMainScreen(view) {
	changeView("#main", view);
}

function showAccountLoginError(message) {
	globalShowError(frameElement.frame.document, '.connect-wrapper .system', 'frame', 'connect', message);
    return;
}

function showAccountCreateError(message) {
    globalShowError(frameElement.frame.document, '.modal .create-account .wrapper .system', 'frame', 'create_account', message);
    return;
}

function setCharacterInLobby(id, name, level, cClass, cLocation) {
    // CUANDO CARGAMOS LOS CHARACTER (Int, String, Int, String, String)
    frameElement.on('complete', function() {
        const father = frameElement.frame.document.globalThis.document.$('.characters-wrapper');
        const fragment = document.createDocumentFragment();
        const div = document.createElement('div');
        div.className = 'char';

        let currentClass = getTranslatedMessage(cClass);
        let currentLocation = getTranslatedMessage(cLocation);

        div.innerHTML = `<input class="hidden" type="number" value="${id}">
        <span class="name">${name}</span>

        <div class="char-info">
            <div class="char-level">
                <span.x>frame.account.level</span>
                <span>${level}</span>
            </div>
            <span class="class" data-translate>${currentClass}</span>
        </div>

        <span class="location" data-translate>${currentLocation}</span>`;

        fragment.appendChild(div);
    
        father.appendChild(fragment);
    });
}

function removeCharacterInLobby(id) {
    // CUANDO EL SERVIDOR NO HA DICHO QUE SE HA REMOVIDO (Int)
    frameElement.on('contentchange', function() {
        let allChars = frameElement.frame.document.globalThis.document.$$('.char');

        allChars.forEach(function(char) {
            let charId = char.children.item('0').value;

            if(charId == id) {
                char.remove();
                return;
            }
        });
    });
}

function isEmail(email) {
	return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
}

document.$('#msgbox_modal .msgbox .wrapper .header .mini-button').on('click', function() {
    closeMsgbox();
});

frameElement.on("document-created", function(event) {
    // Binds functions to the frame
    const newDocument = event.target;

	newDocument.globalThis.globalShowError = globalShowError;

    newDocument.globalThis.showMsgbox = showMsgbox;
    newDocument.globalThis.closeMsgbox = closeMsgbox;
	newDocument.globalThis.closeSubmainBox = closeSubmainBox;
    newDocument.globalThis.changeView = changeView;
    newDocument.globalThis.isEmail = isEmail;
});