var Producer = require('../lib/Producer');
var Optimist = require('optimist');
var bunyan = require('bunyan');

var log = bunyan.createLogger({
    name:"producer-test",
    level: bunyan["DEBUG"]
});


var argv = Optimist.usage('Usage: $0 --host [host] --port [port] --topic [topic]').
    default('port', 9092).
    default('host', 'localhost').
    default('topic', 'node-topic').argv;

log.info("Connecting to: " + argv.host + ":" + argv.port);

var producer = new Producer({host: argv.host, port: argv.port}, function () {
    log.info("connected");
    var produceRequest = {
        requiredAcks: 1,
        timeout: 12344,
        topics: [
            {
                topicName: argv.topic,
                partitions: [
                    {
                        partitionId: 0,
                        messages: [
                            {value: "test message without key on partition 0 a"},
                            {key: "key", value: "test message with key on partition 0i b"}
                        ]
                    }
                ]
            }
        ]
    }

    producer.produce(produceRequest, function (response) {
        log.info(JSON.stringify(response, null, 2));
        producer.close();
    })


});
/*
log.info("connected");
var produceRequestsjj = {
   requiredAcks: 1,
   timeout: 12344,
   topics: [
      {
         topicName: argv.topic,
         partitions: [
            {
               partitionId: 0,
               messages: [
                  {value: "sjj message, wahaha 1"},
                  {key: "key", value: "sjj test message with wahhahaa 2"}
              ]
            }
         ]
      }
  ]
}

producer.produce(produceRequestsjj, function (response) {
   log.info(JSON.stringify(response, null, 2));
   producer.close();
})
*/

var producer2 = new Producer({host: argv.host, port: argv.port}, function () {
    log.info("connected");
    var produceRequest2 = {
        requiredAcks: 1,
        timeout: 12344,
        topics: [
            {
                topicName: argv.topic,
                partitions: [
                    {
                        partitionId: 0,
                        messages: [
                            {value: "juhani messages a"},
                            {key: "key", value: "juhani msg b"}
                        ]
                    }
                ]
            }
        ]
    }

    producer2.produce(produceRequest2, function (response) {
        log.info(JSON.stringify(response, null, 2));
        producer2.close();
    })


});

