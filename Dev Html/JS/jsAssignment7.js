//q1
arr=[2,3,4,5]
ssavg=(marks)=>{
    let sum=0;
    for(let i=0;i<marks.length;i++){
        sum+=marks[i]*marks[i]
    }
    console.log(sum/marks.length)
}
ssavg(arr)


//q2
let oldarr = [1, 2, 3, 4];

let newarr = oldarr.map((curr) => {
    return curr + 5;
});

//q3
old=['a','b','c']
let newarr2=old.map((curr)=>{
    return curr.toUpperCase()
})
console.log(newarr2)

//q4
doubleAndReturnArgs=(arr,...args)=>{
    let newarr=arr.map((curr)=>{
        return curr
    })
    let doubled=args.map((curr)=>{
        return curr*2
    })
    total=newarr+","+doubled
    return total
}

console.log(doubleAndReturnArgs([1,2,3],3,4,5))

//q5
let person={
    name:"unaiza",
    age:20,
    city:"karachi"
}
let fruit={
    name:"apple",
    color:"red",
    weight:"1kg"
}
cmbine=(obj1,obj2)=>{
    obj3={...obj1,...obj2}
    return obj3
}
console.log(cmbine(person,fruit))