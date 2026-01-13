num=10
if(num%10==0){
    console.log("good")

}
else{
    console.log("bad")
}
//let name=prompt("enter your name:")
//let age=prompt("enter age: ")
//alert("your name is "+name+"age is "+age)

num=2
switch(num){
    case 1:
        console.log("jan,feb,march")
        break;
    case 2:
        console.log("apr,may,june")
        break;
    case 3:
        console.log("july,aug,sept")
        break;
    case 4:
        console.log("oct,nov,dec")
        break;

}

word="golden"
if((word[0]=='a' || word[0]=='A') && length(word)>5){
  console.log("golden word")
}
else{
    console.log("not golden")
}

a=0
b=3
c=2
if(a>b && a>c){
    console.log("A is largest")
}
else if(b>a && b>c){
    console.log("B is largest") 
}
else{
    console.log("C is largest")
}

no1=1232
no2=32
if(no1[-1]==no2[-1]){
    console.log("same last digit")
}
else{
    console.log("different last digit")
}
console