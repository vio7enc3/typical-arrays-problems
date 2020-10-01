
exports.min = function min (array) {
  if (array === undefined) return 0;
  if (array.length !== 0){
    var minValue = array[0];
    for (var i = 0; i < array.length; i++) {
      if (minValue > array[i]) minValue = array[i];
    }
    return minValue;
    
  } else return 0;
}

exports.max = function max (array) {
  if (array === undefined) return 0;
  if (array.length === 0){
    return 0;
  }
  else {
    var maxValue = array[0];
    for (var i = 0; i < array.length; i++){
      if (maxValue < array[i]) maxValue = array[i];
    }
    return maxValue;
  }
}

exports.avg = function avg (array) {
  if (array === undefined) return 0;
  var sum = 0;
  if (array.length === 0) return 0;
  else {
    var avgValue = array[0];
    for (var i = 0; i < array.length; i++){
      sum += array[i];
      avgValue = sum / array.length;
    }
    return avgValue;
  }
}
