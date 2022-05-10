function FindMax(arr)
{
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

let arr1 =[1,5,12,16,14,42,421,143,18];
let result = FindMax(arr1);
alert(result);