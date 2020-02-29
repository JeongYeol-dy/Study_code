// 二分法查找
function getIndex(arr,num){
    let len = arr.length,
        st  = 0,
        end = len-1;
    while(st<=end){
        let mid = Math.floor((st+end)/2)
        if(num==arr[mid]){
            return mid;
        }else if(num>arr[mid]){
            st = mid+1;
        }else{
            end = mid-1;
        }
    }
    return arr;
}

let ary=[1,4,7,8,12,34,67,88,99,100];

console.log(getIndex(ary,12));