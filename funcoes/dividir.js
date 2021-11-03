function dividir(a,b){

    if (typeof a==='number' && typeof b==='number')
        if(b!=0){
        return a/b
    }else{
        
        return false
    }
  
}

console.log(dividir(12,5.5))