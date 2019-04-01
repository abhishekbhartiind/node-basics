var events= require('events');
var emitter= new events.EventEmitter();
emitter.on('someEvent',function(mssg){
  console.log(mssg);
});
emitter.emit('someEvent','The event was emitted');
