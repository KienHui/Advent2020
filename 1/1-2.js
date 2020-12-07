fs = require('fs');
fs.readFile("input",'utf8',(err,data) => {
    if(err){
        console.log(err);
    }
    splitdata = data.split("\n")
    out={};
    splitdata.forEach(p1 => {
        if (p1 !=0) {
            splitdata.forEach(p2 => {            
                if (p2 !=0) {
                    splitdata.forEach(p3 => {
                        if (p3 !=0) {
                            out[p1/1+p2/1+p3/1] = p1*p2*p3;
                        }
                    })
                }
            })
        }
    });
    console.log(out[2020]);
})