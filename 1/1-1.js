fs = require('fs');
fs.readFile("input",'utf8',(err,data) => {
    if(err){
        console.log(err);
    }
    splitdata = data.split("\n")
    out={};
    splitdata.forEach(p1 => {
        splitdata.forEach(p2 => {
            out[p1/1+p2/1] = p1*p2;
        })
    });
    console.log(out[2020]);
})