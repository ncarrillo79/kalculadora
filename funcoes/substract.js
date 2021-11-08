function substract(a,b){

    if (typeof a==='number' && typeof b==='number'){
        
        return a-b
    }else{
        
        return false
    }
  
}


exports.substract = substract;