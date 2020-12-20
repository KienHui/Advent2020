fs = require('fs');
fs.readFile("6/input-6.txt", 'utf8', (err, data) => {
  data = data.split("\n\n")
  data = data.map( d => {
    r = d.split("\n");
    r = r.map(v => v.split("")
      .map(c => 1 << c.charCodeAt(0)-("a".charCodeAt(0)))
      .reduce( (a,v) => (a += v), 0)
    )
    r= r.reduce ( (a,v) => a &= v, 0xffffffffff)
    return r;
  })
  data = data.map( v => {
    v = v - ((v >> 1) & 0x55555555);                    // reuse input as temporary
    v = (v & 0x33333333) + ((v >> 2) & 0x33333333);     // temp
    return ((v + (v >> 4) & 0xF0F0F0F) * 0x1010101) >> 24; // count  
  })
  data = data.reduce ( (a,v) => a=a+v, 0)
  console.log(data)
})