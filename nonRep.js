var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

var uniq = names.reduce((a,b) => {
    if (a.indexOf(b) < 0 )
    a.push(b);
    return a;
  },[]);

console.log(uniq)
