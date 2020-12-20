fs = require('fs');
fs.readFile("7/input-7.txt", 'utf8', (err, data) => {
  //parse
  data = data.split("\n")
  data = data.map( rule => {
    rule = rule.replace(/\s+bag(s)?/g,"")
    rule = rule.slice (0,-1);
    [parent, children] = rule.split(" contain ");
    children = children.split(", ")
    children = children.map( c => {
      [n,...bag] = c.split(" ")
      return bag.join(" ")
    })
    return {p:parent, c:children}
  })
  // invert - items have possible parents
  rules = data.reduce( (a,rule) => { 
    rule.c.map( c => 
      a[c] = [rule.p].concat( a[c] || [] )
    );
    return a
    }, {})
  //
  bags = []
  gold = {}
  function tag (name) {
    if(!gold[name] ){
      gold[name] = true;
      bags.push(name);
      console.log(name)
      if(rules[name]) {
        rules[name].map( b=>tag(b))
      }
    }
  }
  tag('shiny gold')
  bags.sort()
  console.log(bags.length-1)
  console.log(bags)
})