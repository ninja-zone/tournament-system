//NOTE: This file is for test.

var WindowsManager = {};

WindowsManager._defaultHandler = '.handler';

WindowsManager._currentMousePosition = { x: 0, y: 0 };

WindowsManager._windowList = [];
WindowsManager._moveHandlerList = [];

WindowsManager._events = {
	mousedown: function (index) {
		WindowsManager._registerCurrentMousePosition(event);

		document.onmousemove = this.move.bind(WindowsManager, WindowsManager._windowList[index]);
		document.onmouseup = this.end.bind(WindowsManager, WindowsManager._moveHandlerList[index]);

		return false;
	},
	move: function (windowReference, event) {
		windowReference.style.top = ((event.clientY - this._currentMousePosition.y) + 'px');
		windowReference.style.left = ((event.clientX - this._currentMousePosition.x) + 'px');
	},
	end: function (handler, event) {
		this._registerCurrentMousePosition(event);

		document.onmousemove = undefined;
		document.onmouseup = undefined;
	}
};

WindowsManager._registerCurrentMousePosition = function (event) {
	this._currentMousePosition.x = (event.clientX - this._currentMousePosition.x);
	this._currentMousePosition.y = (event.clientY - this._currentMousePosition.y);
};

WindowsManager.registerWindow = function (windowReference, moveHandler) {
	var self = this;

	this._windowList.push(windowReference);

	handlerReference = windowReference.querySelector(moveHandler || WindowsManager._defaultHandler);
	this._moveHandlerList.push(handlerReference);

	handlerReference.onmousedown = this._events.mousedown.bind(WindowsManager._events, (this._windowList.length - 1));
};


window.onload = function () {
	var exampleWindow = document.querySelector('.window');

	WindowsManager.registerWindow(exampleWindow);
};







function ViewDefinition(templatePath, scriptPaths, multiple) {
    /**
     * 
     * @type {string}
     */
    this.templatePath = templatePath;
    /**
     * 
     * @type {string[]}
     */
    this.scriptPaths = scriptPaths;
    /**
     * 
     * @type {boolean}
     */
    this.multiple = multiple;
}


var views = {};

views.login = new ViewDefinition('views/login.html', [ 'scripts/login.js' ], true);



function WindowEvents() {}

WindowEvents.prototype.mousedown = function () {};

WindowEvents.prototype.move = function () {};

WindowEvents.prototype.end = function () {};

WindowEvents.prototype.resize = function () {};




function WindowManager() {
	this._DOMReference = undefined;
}

WindowManager.prototype = Object.create(WindowEvents.prototype);

WindowManager.prototype.open = function () {
	this._DOMReference = document.createElement('div');
};

WindowManager.prototype.load = function () {
	// AJAX load template, require load scripts.
};

WindowManager.prototype.close = function () {
	document.removeChild(this._DOMReference);
};






function TournamentSystem() {}

TournamentSystem.prototype.start = function () {
	// run login etc.
};
