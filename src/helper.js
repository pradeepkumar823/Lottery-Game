//function to generate a random lottery ticket
function genRendomNumber(n){
    let arr=new Array(n);

    for( let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    return arr;
}

//function for calculating the sum of the ticket
function sum(arr){
    return arr.reduce((sum,curr) => sum+curr,0);
}
export {genRendomNumber};
export {sum};