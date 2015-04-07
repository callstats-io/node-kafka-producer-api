function TestOO(a,b){
   this.a=a;
   this.b=b;
   this.printOO=function(c){
       console.log(" "+c+a+b);               
   }
}




function ProducerClient(argHost,argPort,argTopic,argPartition) {
	this.ahost=argHost;
        this.aport=argPort;
        this.atopic=argTopic;
        this.apartition=argPartition;
        this.sendMsg = function(argMsg){
           var producer = new TestOO(1,2);
           producer.printOO(argMsg); 
       }  
  
  }


module.exports.getProducerClient = function(argHost,argPort,argTopic,argPartition){
     return new ProducerClient(argHost,argPort,argTopic,argPartition);
}
