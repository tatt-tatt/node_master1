var _ = require('lodash');

(function(){
  // lodashテスト
  var arr = [1,2,3,4,5];
  console.log('1.lodashでリバース前:'+arr);
  _(arr).reverse().value();
  console.log('2.lodashでリバース後:'+arr);

  // constのテスト
  const PI = 3.14;
  //PI = 3;
  console.log('PI is ' + PI);

  // letのテスト
  (function letFunc(){
    let x = 31;
    if (true) {
      let x = 71;  // 異なる変数
      console.log(x);  // 71
    }
    console.log(x);  // 31
  })();
})();
