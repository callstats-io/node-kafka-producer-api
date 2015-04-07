var Producer = require('../lib/Producer');


module.exports.CallstatsKafkaProducer =function(argHost,argPort,argTopic,argPartition,argMsg){
    var producer = new Producer({host: argHost, port: argPort}, function () {
//       log.info("connected");
       var produceRequest = {
          requiredAcks: 1,
          timeout: 12344,
          topics: [
             {
                topicName: argTopic,
                partitions: [
                   {
                      partitionId: argPartition,
                      messages: [
                            {value: argMsg}
                      ]
                   }
                ]
            }
         ] 
       } 

       producer.produce(produceRequest, function (response) {
//          log.info(JSON.stringify(response, null, 2));
          producer.close();
       }) 
   });
}
