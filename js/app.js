function convert(){
    const arr = [ 4, -5, -10, 6 ];
    let y = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0)
        y = y + arr[i];
    }
    console.log(y);
}
convert();