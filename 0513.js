console.log

var count;
var count=1;
console.log(count);

count=count+1;
console.log(count);

count=count-1;
//又可寫成count-=1;
console.log(count);

//運算
console.log(-100*2)

var add=1;
//add+=1 = add=add+1
add+=1;
console.log(add);

//餘數 用YU抽屜的資料除以2的結果

//判斷 ===比較嚴謹的判斷 ==比教不嚴僅的判斷 !==不等於 &&而且
console.log(3==="3");
console.log(3=="3");
console.log(3!=="3");
console.log((3<4)&&(5>6));
console.log(!(3<4));

//小練習
var a=3;
var b=a++;
console.log(b);
var c=3;
var d=++c;
console.log(d);


var i=true;
var j=!i;
var k=!j;
console.log(j);
console.log(k);


var m=15;
var n=m+11;
var o=n-20;
var p=o*9;
var q=p%10;
console.log(m,n,o,p,q);


console.log(5==="5")

// &&而且 ||或 
// A ? B : C  判斷A描述正確不正確 A正確執行冒號前面的結果B A錯誤執行冒號後面的結果C


//typeof 裡面是什麼類型資料
var count=3;
console.log(typeof count);


//
var a=17;
var b=3;

//有打錯的地方
var count=question;
console.log(str[3]);
console.log(str.length);
console.log(str.indexof("q"));
console.log(str.slice(3));

//function
var add=function(a,b){
	return a+b;
};
console.log(add(6,9));
console.log(add(4,8));

//function practice:圓面積計算
var pi=3.14;
function area(r){
	return r*r*pi;
};
console.log(area(5);