fs = require('fs');
fs.readFile("4/input-4.txt", 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  data = data.replace(/\n(?=\w)/g, " ")
  passdata = data.split("\n").map(_ => {
    return _.split(" ").reduce((a, f) => {
      [k, v] = f.split(":");
      if (k) { (a[k] = v); }
      return a;
    }, {})
  })
  checked = passdata.filter(d => d.byr >= 1920 && d.byr <= 2002)
  checked = checked.filter(d => d.iyr >= 2010 && d.iyr <= 2020)
  checked = checked.filter(d => d.eyr >= 2020 && d.eyr <= 2030)
  checked = checked.filter(d => /#[0-9a-f]{6}/.test(d.hcl))
  checked = checked.filter(d => /(amb|blu|brn|gry|grn|hzl|oth)/.test(d.ecl))
  checked = checked.filter(d => /[0-9]{9}/.test(d.pid))
  checked = checked.filter(d => {
    r = /(\d+)(cm|in)/.exec(d.hgt)
    if (r == null) { return false }
    [x, h, u] = r
    top = { in: 76, cm: 193 }[u];
    bottom = { in: 59, cm: 150 }[u];
    return bottom <= h && h <= top;
  })
  checked.sort( (d1,d2) => d1.hgt.localeCompare(d2.hgt) )
  checked = checked.map(d => d.hgt)
  //console.log(passdata);
  console.log(checked);
})