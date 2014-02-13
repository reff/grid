function minify(node){
	for (var i=0; i<node.childNodes.length; i++){
		var child = node.childNodes[i];
		if(child.nodeType == 3 && !/\S/.test(child.nodeValue)){
			node.removeChild(child);
			i--;
		}
		if(child.nodeType == 1){
			minify(child);
		}
	}
	return node;
}

window.onload = function(e){
	minify(document); 
}