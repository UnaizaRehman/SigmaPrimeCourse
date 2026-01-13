// console.log("helloooo");
// arr=[1,2,3,4,5,6,2,3]
// console.log(arr)
// num=2
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr[i]=-1
//     }
// }
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=-1){
//         console.log(arr[i])
//     }
// }



// number=287152
// digit=0
// while((number>0)){
//     number = Math.floor(number / 10)
//     digit++
//     console.log(digit)

// }
// console.log(digit)

// number=1234
// sum_total=0
// while((number>0)){
//     sum_total+=number %10
//     number = Math.floor(number / 10)

//     console.log(sum_total)

// }
// console.log(sum_total)


number=7
factorial=1
while(number>-1){
    if(number==0){
        factorial*=1
    }
    else{
        factorial*=number
        number--
        console.log(factorial)}
}
console.log(factorial)

