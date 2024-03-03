function gameDevelopment(player, hpParameter, ...restParameter) {
    let name = player;
    let hp = hpParameter;
    let moves = restParameter;

    gameObject = {
        getName() {
            return name;
        },
        gethp() {
            return hp;
        },
        getMoves() {
            let div = document.querySelector('.moves');
            for (let x of moves) {
                let myParagraph = document.createElement("p");
                let textNode = document.createTextNode(x);
                myParagraph.appendChild(textNode);
                div.appendChild(myParagraph);
            } 

            return moves;
        }
    }
    return gameObject;
}

let myGame = gameDevelopment("Keshawn", 200, "Jump", "Right", "Left");

gameObject.getMoves();
console.log(gameObject.getName());
console.log(gameObject.gethp());