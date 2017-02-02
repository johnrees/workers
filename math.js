this.onmessage = function(e) {
  if (e.data.add !== undefined) {
    this.postMessage({ result: e.data.add.reduce((a, b) => (a+b), 0) })
  }
  // if (e.data.subtract !== undefined) {
  //   this.postMessage({ result: e.data.subtract[0] - e.data.subtract[1] })
  // }
  // if (e.data.subtractThis !== undefined) {
  //   this.postMessage({ result: e.data.subtractThis.num1 - e.data.subtractThis.num2 })
  // }
  if (e.data.getThis !== undefined) {
    this.postMessage({ result: "you clicked at: " + e.data.getThis.num })
  }
}
