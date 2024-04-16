let frameElement = document.$('#main');
let subFrameElement;

// Load the sub-frame into the variable after the first frame finished to load
frameElement.on('complete', function() {
	subFrameElement = frameElement.frame.document.globalThis.document.$('#submain');
});

function showMsgbox(title, message) {
    let modalTitle = document.$('#msgbox_modal').firstElementChild.firstElementChild.firstElementChild.firstElementChild;
    let modalDescription = document.$('#msgbox_modal').firstElementChild.firstElementChild.firstElementChild.nextElementSibling;

    modalTitle.innerText = title;
    modalDescription.innerText = message;
	
	Window.this.document.globalThis.DISABLE_AURORA = true; // HACK
	
    document.$('#msgbox_modal').classList.add('active');
}

function closeMsgbox() {
    document.$('#msgbox_modal').classList.remove('active');
	
	Window.this.document.globalThis.DISABLE_AURORA = false; // HACK
}

// Close the sub-frame globally
function closeSubmainBox() {
	subFrameElement.classList.remove('active');
}

// Change the window depending on the provided frame
function changeView(frame, view) {
	if (frame === '#submain') {
		subFrameElement.frame.loadFile(view);
	} else {
		document.$('#main').frame.loadFile(view);
	}
}

function isEmail(email) {
	return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
}

function Connect_setName(username) {
    if (username !== undefined) {
		frameElement.frame.document.$('.field input[name="account"]').value = username;	
		frameElement.frame.document.$('.field input[name="password"]').focus(true);
	} else {
		frameElement.frame.document.$('.field input[name="account"]').focus(true);
	}
}

function Account_setCharacterNames(name1, name2, name3, name4, name5, name6, name7, name8) {
    if (name1 !== undefined) frameElement.frame.document.$('#char_name_1').innerText = name1;
	if (name2 !== undefined) frameElement.frame.document.$('#char_name_2').innerText = name2;
    if (name3 !== undefined) frameElement.frame.document.$('#char_name_3').innerText = name3;
    if (name4 !== undefined) frameElement.frame.document.$('#char_name_4').innerText = name4;
    if (name5 !== undefined) frameElement.frame.document.$('#char_name_5').innerText = name5;
    if (name6 !== undefined) frameElement.frame.document.$('#char_name_6').innerText = name6;
    if (name7 !== undefined) frameElement.frame.document.$('#char_name_7').innerText = name7;
    if (name8 !== undefined) frameElement.frame.document.$('#char_name_8').innerText = name8;
}

function Main_setUsername(nickname) {
	frameElement.frame.document.$('#nickname').innerText = nickname;
}

function Main_setCoordinates(x, y, map) {
	frameElement.frame.document.$('#coordinates').innerText = `${map} X: ${x} Y: ${y}`;
}

function Main_setStats(minLife, maxLife, minMana, maxMana, minEnergy, maxEnergy, minHunger, maxHunger, minThirst, maxThirst) {
	frameElement.frame.document.$('#health_value').innerText = `${minLife}/${maxLife}`;
	frameElement.frame.document.$('#mana_value').innerText = `${minMana}/${maxMana}`;
	frameElement.frame.document.$('#stamina_value').innerText = `${minEnergy}/${maxEnergy}`;
	frameElement.frame.document.$('#hunger_value').innerText = `${minHunger}/${maxHunger}`;
	frameElement.frame.document.$('#thirst_value').innerText = `${minThirst}/${maxThirst}`;
	
	frameElement.frame.document.$('#health_bar').style.width = `${minLife*100/maxLife}%`;
	frameElement.frame.document.$('#mana_bar').style.width = `${minMana*100/maxMana}%`;
	frameElement.frame.document.$('#stamina_bar').style.width = `${minEnergy*100/maxEnergy}%`;
	frameElement.frame.document.$('#hunger_bar').style.width = `${minHunger*100/maxHunger}%`;
	frameElement.frame.document.$('#thirst_bar').style.width = `${minThirst*100/maxThirst}%`;
}

function Main_setExperience(level, experience, maxExperience) {
	frameElement.frame.document.$('#level_value').innerText = level;
	frameElement.frame.document.$('#exp_value').innerText = `${experience}/${maxExperience}`;

	var expPercentage = (experience * 100 / maxExperience);
	frameElement.frame.document.$('#exp_perc_value').innerText = `[${expPercentage.toFixed(2)}%]`;
	frameElement.frame.document.$('#exp_perc_bar').style.width = `${expPercentage}%`;
}

function Main_setGold(gold) {
	frameElement.frame.document.$('#gold_value').innerText = gold;
}

function Main_setStrAgi(str, dex) {
	frameElement.frame.document.$('#str').innerText = str;
	frameElement.frame.document.$('#dex').innerText = dex;
}

document.$('#msgbox_modal .msgbox .wrapper .header .mini-button').on('click', function() {
    closeMsgbox();
});

frameElement.on("document-created", function(event) {
    // Binds functions to the frame
    const newDocument = event.target;

    newDocument.globalThis.showMsgbox = showMsgbox;
    newDocument.globalThis.closeMsgbox = closeMsgbox;
	newDocument.globalThis.closeSubmainBox = closeSubmainBox;
    newDocument.globalThis.changeView = changeView;
    newDocument.globalThis.isEmail = isEmail;
});