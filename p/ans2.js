function countTime(){
    let array = [1,1,2,2,3,3,4,4,5,6,7,7,7,7,8,8,8,9]
    if(array.length > 0){
        let i = 0
        for(let j = 0; j<array.length; j++){
            if(array[i] === array[j]){
                i++
                array[i] = array[j]
            }
            
        }
        console.log(i+1);
    }
}
countTime()