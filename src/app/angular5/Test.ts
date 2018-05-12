var k = "kishan";
class Change{
     k1 ="Jythi";
     static k2= "buvan";
    greet():void{
        var k:string = '2';
        var t:number = <number><any>k;
        var i = 3;
        console.log(i);
        i=9;
        console.log(i)
      console.log(t)
    }
  }


  console.log(k);
  console.log(Change.k2)

  var obj = new Change(); 
  obj.greet();
  console.log(obj.k1);
