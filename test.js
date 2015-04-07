var producerClient = require('./CallStatsProducerTest');

producerClient.CallstatsKafkaProducer("localhost",9092,"topica",0,"partition 0, this is msg calling from own js haha!!");
producerClient.CallstatsKafkaProducer("localhost",9092,"topica",0,"partition 0, continus calling, I am calling now!!");
producerClient.CallstatsKafkaProducer("localhost",9092,"topicmp",0,"partition 0, I like partition 0, there is a lot of soccer matches");
producerClient.CallstatsKafkaProducer("localhost",9092,"topicmp",0,"partition 0, I like partition 0, this is 2nd msg in partition 0");
producerClient.CallstatsKafkaProducer("localhost",9092,"topicmp",1,"partition 1, I like partition 1, there is a lot of good songs");
producerClient.CallstatsKafkaProducer("localhost",9092,"topicmp",1,"partition 1, I like partition 1, this is 2nd msg in partition 1");

