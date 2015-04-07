var producerKafkaModule = require('./ttModule');

var producerClient = producerKafkaModule.getProducerClient("localhost",9092,"topicmp",0);
producerClient.sendMsg("partition 0, I like partition 0, there is a lot of soccer matches");
producerClient.sendMsg("partition 0, I like partition 0, this is 2nd msg in partition 0");

var producerClient2 = producerKafkaModule.getProducerClient("localhost",9092,"topicmp",1);
producerClient2.sendMsg("partition 1, I like partition 1, there is a lot of good songs");
producerClient2.sendMsg("partition 1, I like partition 1, this is 2nd msg in partition 1");

