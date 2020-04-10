/* parentNode nextSibling previousSibling */

function dir(elem, type, until){
	var matched = [];
	while((elem = elem[type])&& elem.nodeType !==9){
		if(elem.nodeType === 1){
			if(until !== undefined){
				if(elem.nodeName.toLowerCase() === until || 
					elem.className === until){
					break;
				}
			}
			matched.push(elem)
		}
	}
	return matched;
}