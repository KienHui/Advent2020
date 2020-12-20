fs = require('fs');
fs.readFile("6/input-6.txt", 'utf8', (err, data) => {
  data = data.split("\n\n")
  data = data.map( d => {
    r = d.split("\n");
    r = r.map(v => v.split("").reduce((a, f) => {
      if (f) { (a[f] = 1); }
      return a;
    }, {}))
    r= Object.keys(r.reduce((a,f) => a = {...a, ...f},{}))
    return r.length;
  })
  data = data.reduce ( (a,v) => a=a+v, 0)
  console.log(data)
})