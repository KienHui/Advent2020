fs = require('fs');
fs.readFile("7/input-7.txt", 'utf8', (err, data) => {
  //parse
  data = data.split("\n")
  data = data.map( rule => {
    rule = rule.replace(/\s+bag(s)?/g,"")
    rule = rule.replace(/no /g,"0 ")
    rule = rule.slice (0,-1);
    [parent, children] = rule.split(" contain ");
    children = children.split(", ")
    children = children.map( c => {
      [n,...bag] = c.split(" ")
      return {num: n, bag: bag.join(" ")}
    })
    return {p:parent, c:children}
  })
  // make tree
  rules = data.reduce( (a,rule) => { 
    a[rule.p] = rule
    return a
  }, {})

  //traverse tree
  function countBags(name) {
    ret = 0
    if (name == 'other') {
      ret = 0;
    } else if (rules[name].count){
      ret = rules[name].count+1
    } else {
      rules[name].count = rules[name].c.reduce((a,e) => a+countBags(e.bag)*e.num/1,0)
      ret =  rules[name].count+1
    }
    console.log(name)
    console.log(ret)
    return ret
  }
  console.log(countBags('shiny gold')-1)
})