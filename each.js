function each(data, callback){
	if(Array.isArray(data)){
		data.forEach(function(item,index){
			callback(index,item)
		})
	}
	if(typeof data === "object"){
		for(var i in data){
			callback(i, data[i])
		}
	}
	if(data.nodeType === 1){
		for(var i = 0;i<data.length; i++){
			
		}
	}
}

function callback(index,item){

}
