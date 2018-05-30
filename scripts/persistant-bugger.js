function persistence(num) {
  var arr = num.toString().split("");
  var multiplyCount = 0;
  var product;
  while (arr.length > 1) {
    product = arr.reduce(function(a, b) {
      return a * b;
    });
    multiplyCount++;
    arr = product.toString().split("");
  }
  return multiplyCount;
}

persistence(39);
persistence(999);
persistence(4);