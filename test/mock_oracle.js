var connectable=true;
var returnParam={price:299};
function connection(){
	this.connected=true;
	this.execute=function(procedure_name,params,nextFunction){
		var results=undefined;
		if(procedure_name.indexOf("bad_procedure")>-1){
			nextFunction({error:"Invalid SP Name"}, null);
		}else{
			nextFunction(null, {returnParam:returnParam});	
		}
	};
	this.isConnected=function(){
		return this.connected;
	};
	this.close=function(){
		this.connected=false;
	}
}
function connect(settings,connectFunction){
	if(connectable){
		var conn=new connection();
		connectFunction(null,conn);
	}else{
		connectFunction({error:"db error"},conn);
	}
};
function OutParam(){

}

exports.connect=connect;
exports.OutParam=OutParam;