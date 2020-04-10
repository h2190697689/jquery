function domManip(parentEles, target, callback) {
	var l = parentEles.length;
	var iNoClone = l - 1;

	if (l) {
		var fragment = buildFragment([target], parentEles[0].ownerDocument);
		first = fragment.firstChild;
		if (fragment.childNodes.length === 1) {
			fragment = first;
		}
		if (first) {
			callback.call(parentEles, first);
		}
	}

}
    