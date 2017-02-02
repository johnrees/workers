var ASQ = require('asynquence')
if (!window.Worker) { alert("NO WEB WORKERS") }
var myWorker = new Worker("math.js")

document.addEventListener('click', function(event) {
  ASQ(event.clientX)
  .then(function(done,msg){
    // myWorker.postMessage({getThis: {num: msg}})
    myWorker.postMessage({add: [4,5,34,5]})
    myWorker.onmessage = function(e) {
      done(e.data.result)
    }
  })
  .then(function(done,msg){
    done(msg + "px (from webworker)");
  })
  .then(function(_,msg){
    document.getElementById('logger').innerHTML = msg
  })
})
