let frameElement = document.$('#main');
let subFrameElement;
let globalLang = 'english';
let globalTranslation; // holds the JSON file with the translation
let translationCache = {};

// Sets the default language
document.on('ready', function() {
	setDefaultLanguage(globalLang);
	loadLanguage(globalLang);
});

// Load the sub-frame into the variable after the first frame finished to load
frameElement.on('complete', function() {
	subFrameElement = frameElement.frame.document.globalThis.document.$('#submain');
});

// TRANSLATIONS - START
function loadJSON(filePath, callback) {
    if (translationCache[filePath]) {
        callback(translationCache[filePath]);
    } else {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                translationCache[filePath] = data;
                callback(data);
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }
}

function getNestedValue(obj, path) {
	if (translationCache[path]) {
		return translationCache[path];
	}

	let value = path.split('.').reduce((o, p) => o ? o[p] : null, obj);
	translationCache[path] = value;
	return value;
}

function applyTranslations() {
    let elements = document.querySelectorAll("[data-translate]");
    let frameElements = frameElement.frame.document.querySelectorAll("[data-translate]");

    let allElements = elements;
    if (frameElements) {
        allElements = Array.from(elements).concat(Array.from(frameElements));
    }

    let updates = [];

    allElements.forEach(function(element) {
        if (element.childNodes && element.childNodes.length > 0) {
            Array.from(element.childNodes).forEach(function(child) {
                if (child.nodeType === Node.TEXT_NODE) {
                    let textContent = child.nodeValue;
                    let matches = textContent.match(/{([^}]+)}/g);
                    if (matches) {
                        matches.forEach(function(match) {
                            let key = match.slice(1, -1);
                            let translation = getNestedValue(globalTranslation, key);
                            if (translation) {
                                textContent = textContent.replace(match, translation);
                            }
                        });
                        if (child.nodeValue !== textContent) {
                            updates.push({ child, textContent });
                        }
                    }
                }
            });
        }
    });

    function processBatch(updates, batchSize) {
        if (updates.length === 0) {
            return;
        }

        let fragment = document.createDocumentFragment();
        let batch = updates.splice(0, batchSize);

        batch.forEach(function(update) {
            if (update.child.parentNode) {
                let newNode = document.createTextNode(update.textContent);
                update.child.parentNode.replaceChild(newNode, update.child);
            }
        });

        document.body.appendChild(fragment);

        requestAnimationFrame(() => processBatch(updates, batchSize));
    }

    processBatch(updates, 1);
}

function getTranslations(masterKey, globalKey, translationKey) {
	return globalTranslation[masterKey][globalKey][translationKey];
}

function loadLanguage(language) {
	let filePath = "langs/" + language + ".json";

	loadJSON(filePath, function(translations) {
		globalTranslation = translations;
		applyTranslations();
	});
}

function setDefaultLanguage(language) {
	globalLang = language;
}

function switchLanguage(language) {
	globalLang = language;

	setDefaultLanguage(globalLang);
	loadLanguage(globalLang);
}

function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

// Using debouncing to prevent excessive calls to applyTranslations
window.addEventListener('resize', debounce(applyTranslations, 100));
// TRANSLATIONS - END

function globalShowError(frame, wrapper, master, global, key) {
	let errMsg = getTranslations(master, global, key);

	frame.$(wrapper).classList.add('error');
	frame.$(wrapper).firstElementChild.textContent = 'Error: ' + errMsg;
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

function isEmail(email) {
	return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
}

document.$('#msgbox_modal .msgbox .wrapper .header .mini-button').on('click', function() {
    closeMsgbox();
});

frameElement.on("document-created", function(event) {
    // Binds functions to the frame
    const newDocument = event.target;

	newDocument.globalThis.switchLanguage = switchLanguage;
	newDocument.globalThis.globalShowError = globalShowError;

    newDocument.globalThis.showMsgbox = showMsgbox;
    newDocument.globalThis.closeMsgbox = closeMsgbox;
	newDocument.globalThis.closeSubmainBox = closeSubmainBox;
    newDocument.globalThis.changeView = changeView;
    newDocument.globalThis.isEmail = isEmail;
});