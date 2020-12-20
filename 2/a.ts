fs = require('fs');
fs.readFile("2/input-2.txt",'utf8',(err,data) => {  
  if(err){
    console.log(err);
  }
  splitlines = data.split("\n");
  passfile = splitlines.map(  _ => {
    [policy, pass] = _.split(":");
    [num,char] = policy.split(" ");
    pass = pass || "1";
    passChars = pass.split("");
    passCharCount = passChars.reduce( (a,i) => {
      a[i] = a[i]||0;
      a[i]++
    }, {"1":0});
    return {policy: {num: num, char:char}, pass:passCharCount};
  });
  console.log(passfile);
});