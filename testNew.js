var producerKafkaModule = require('./CallStatsProducerTestNew');

var producerClient = producerKafkaModule.getProducerClient("test-rs.callstats.io",9092,"topicmp",0);
console.log("in testNew, localhost is:"+producerClient.getHost());
producerClient.sendMsg(producerClient,"partition 0, I like partition 0, there is a lot of soccer matches");
producerClient.sendMsg(producerClient,"partition 0, I like partition 0, this is 2nd msg in partition 0");

var producerClient2 = producerKafkaModule.getProducerClient("test-rs.callstats.io",9092,"topicmp",1);
producerClient2.sendMsg(producerClient2,"partition 1, I like partition 1, there is a lot of good songs");
producerClient2.sendMsg(producerClient2,"partition 1, I like partition 1, this is 2nd msg in partition 1");

