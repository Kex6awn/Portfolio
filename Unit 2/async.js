async function prom() {
    let runner1 = false;
    let runner2 = false;
    let loser = "";

    var runner1Go = new Promise(function(resolve){
        setTimeout(()=>{
            // loser = "Frist";
            // runner1 = loser;
            loser = runner1;
            resolve(true);
        }, 4000);
    });

    var runner2Go = new Promise(function(resolve){
        setTimeout(()=>{
            // loser = "Base"
            loser = runner2;
            // runner2 = loser;
            resolve(true);
        }, 7000);
    });

    return myArray = [await runner1Go, await runner2Go, loser];
}

prom().then((myArray)=> {
    console.log(myArray[2]);
});