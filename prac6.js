var events= require('events');
var util= require('util');

var Person =function(name){
  this.name=name;
};
util.inherits(Person, events.EventEmitter);

var john= new Person('john');
var arya= new Person('arya');
var stark= new Person('stark');

var people = [john,arya,stark];

people.forEach(function(per){
  per.on('speak',function(mssg){
    console.log(per.name+' said: '+ mssg);
  });
});
john.emit('speak','Hey People, We are in the Great war');
arya.emit('speak','I want be a warrior');
