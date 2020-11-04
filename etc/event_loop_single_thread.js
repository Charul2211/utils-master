function placeOrder(orderId){
	console.log('open  placeOrder called  ###' + orderId);
	
	getOrder(orderId ,function(ReturnorderId){
		console.log('done placeOrder getOrder called @@@' + ReturnorderId);
	})
}

function getOrder(orderId, callback){
	setTimeout(function(){
		console.log('inprogress getOrder called -->' + orderId);
		callback(orderId);
	}, 5000);
}


placeOrder(1);
placeOrder(2);


OUTPUT : 

open  placeOrder called  ###1
open  placeOrder called  ###2
inprogress getOrder called -->1
done placeOrder getOrder called @@@1
inprogress getOrder called -->2
done placeOrder getOrder called @@@2

