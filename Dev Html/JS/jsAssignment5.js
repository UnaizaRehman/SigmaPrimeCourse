n=5
arr=[3,4,5,6,7]
function checker(a,b){
for(let i=0;i<arr.length;i++){
    if(arr[i]>n){
        console.log(arr[i])
    }
}
}

checker(n,arr)

let str = "abcdabcdhij";
let arr2 = [];

function finder(str, arr2) {
    for (let i = 0; i < str.length; i++) {
        let found = false;

        for (let j = 0; j < arr2.length; j++) {
            if (str[i] == arr2[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            arr2.push(str[i]);
        }
    }
    console.log(arr2);
}

finder(str, arr2);


country=["Australia","Germany","UnitedStatesofAmerica"]
let winner=""
let maxlen=-1
function maxfinder(a, maxlen,winner){
    for(let i=0;i<a.length;i++){
        if(a[i].length>maxlen){
            maxlen=a[i].length
            winner=a[i]
        }
    }
    console.log(winner)
}
maxfinder(country, maxlen,winner)


vow=['a','e','i','o','u']
str="my name is unaiza"
count=0
function vowfinder(a,b,count){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]==b[j]){
                count++
            }
        }
    }
    console.log(count)
}
vowfinder(str,vow,count)


function random_number_generator(start,end){
    console.log(Math.ceil((Math.random()*(end-start))+start))
}
random_number_generator(1,6)