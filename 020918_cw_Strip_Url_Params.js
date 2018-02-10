function stripUrlParams(url, paramsToStrip){
var newUrl;
  var domain = url.match(/(.*\.com)\??(.*)?/); //domain[1]   param= domain[2]
  var param = domain[2];
  var newParam = [];
  if (param) {
    var paramObj = {};
    var paramArr = param.split('&'); //['a=1','b=2'...]
    paramArr.forEach(element => {
        var eArr = element.split('='); //['a','1']
        if (!paramObj[eArr[0]]) paramObj[eArr[0]] = eArr[1];
        if (paramsToStrip){
          for (var i = 0; i < paramsToStrip.length; i++) {
            if (paramsToStrip[i] !== eArr[0]) {
              if (!paramObj[eArr[0]]) paramObj[eArr[0]] = eArr[1]; 
            }
          }
        }
    });
    for (var key in paramObj) {
      if (paramsToStrip){
        if (!paramsToStrip.includes(key)){
          newParam.push(key + '=' + paramObj[key]);
        }
      } else { newParam.push(key + '=' + paramObj[key]); }
    }
    newParam = newParam.join('&');
  } else {
    newParam = '';
  }
  if (newParam) {
    newUrl =  domain[1] + '?' + newParam;
  } else {
  newUrl = domain[1];
  }
  return newUrl;
}
