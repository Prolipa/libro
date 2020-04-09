HTMLElement.prototype.animate = function (animation, callback, context) {
	if (typeof animation != "string") return; // must pass animation type
	var _self = this;
	animation = " animated " + animation;
	_self.className += animation;
	setTimeout(function(){
		_self.className = _self.className.replace(animation, "");
		if (typeof callback == "function") {
			callback.call((context) ? context : window);
		}
	}, (animation == "hinge") ? 2e3 : 1e3)
}