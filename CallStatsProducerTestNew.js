var Producer = require('../lib/Producer');


function ProducerClient(argHost,argPort,argTopic,argPartition) {
	this.ahost=argHost;
        this.aport=argPort;
        this.atopic=argTopic;
        this.apartition=argPartition;
        this.getHost = function(){
           return this.ahost;     
        }
        this.getPort = function(){
           return this.aport;  
        }    
        this.getTopic = function(){
           return this.atopic    
        } 
        this.getPartition = function(){
           return this.apartition;
        } 

        this.sendMsg = function(itself,argMsg){
           console.log("in function sendMsg,ahost is:"+this.ahost);
           var producer = new Producer({host: itself.getHost(), port:itself.getPort()}, function () {
//       log.info("connected");
           console.log("what about getPartition:"+itself.getPartition())
           var produceRequest = {
           requiredAcks: 1,
           timeout: 12344,
           topics: [
              {
                 topicName: itself.getTopic(),
                 partitions: [
                    {
                       partitionId: itself.getPartition(),
                       messages: [
                            {value: argMsg}
                       ] 
                    }
                 ]
             }
          ]
        } 
        console.log("request is constructed");    
        producer.produce(produceRequest, function (response) {
//          log.info(JSON.stringify(response, null, 2));
           console.log("recieve response");
           producer.close();
        })
    });

  }
}


module.exports.getProducerClient = function(argHost,argPort,argTopic,argPartition){
    var prod = new ProducerClient(argHost,argPort,argTopic,argPartition);
    return prod;
}
