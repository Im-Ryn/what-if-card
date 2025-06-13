box_1 = document.getElementById("box1")
box_2 = document.getElementById("box2")
box_3 = document.getElementById("box3")

const cards = [
    document.getElementById("box1"),
    document.getElementById("box2"),
    document.getElementById("box3")
]

const moveLeft = () => {
    const position = []

    for(i=0 ; i<cards.length ; i++){
        const card = cards[i]
        if(card.classList.contains("left")){
            position.push("left")
        }
        else if(card.classList.contains("center")){
            position.push("center")
        }
        else {
            position.push("right")
        }
    }

    for(i=0; i<cards.length; i++){
        cards[i].classList.remove("left","center","right")

        if(position[i] === "left"){
            cards[i].classList.add("right")
        }
        else if(position[i] === "center"){
            cards[i].classList.add("left")
        }
        else{
            cards[i].classList.add("center")
        }
    }
}

const moveRight = () => {
    const position = []

    for(i=0 ; i<cards.length ; i++){
        const card = cards[i]
        if(card.classList.contains("left")){
            position.push("left")
        }
        else if(card.classList.contains("center")){
            position.push("center")
        }
        else {
            position.push("right")
        }
    }

    for(i=0; i<cards.length; i++){
        cards[i].classList.remove("left","center","right")

        if(position[i] === "left"){
            cards[i].classList.add("center")
        }
        else if(position[i] === "center"){
            cards[i].classList.add("right")
        }
        else{
            cards[i].classList.add("left")
        }
    }
}

document.getElementById("arrowRight").addEventListener("click", moveLeft);
document.getElementById("arrowLeft").addEventListener("click", moveRight);


// box_1.style.animationName = "middle_to_left";
// box_2.style.animationName = "right_to_middle";
// box_3.style.animationName = "left_to_right";

// let l_slide = 0
// let r_slide = 0

// function left(){
//     r_slide += 1
//     if((l_slide - r_slide) === -1){
//         box_1.style.animationName = "middle_to_left";
//         box_2.style.animationName = "left_to_right";
//         box_3.style.animationName = "right_to_middle";
//     }
//     else if((l_slide - r_slide) === -2){
//         box_3.style.animationName = "middle_to_left";
//         box_2.style.animationName = "right_to_middle";
//         box_1.style.animationName = "left_to_right";
//     }
// }

// function left(){

// }