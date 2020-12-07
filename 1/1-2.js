fs = require('fs');
fs.readFile("input",'utf8',(err,data) => {
    if(err){
        console.log(err);
    }
    splitdata = data.split("\n")
    splitdata = splitdata.filter( arg => arg !=0 )
    out={};
    splitdata.forEach(p1 => {
            splitdata.forEach(p2 => {            
                    splitdata.forEach(p3 => {
                            out[p1/1+p2/1+p3/1] = p1*p2*p3;
                        
                    })
                
            })
        
    });
    console.log(out[2020]);
})