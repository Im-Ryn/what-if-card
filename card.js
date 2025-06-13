const card_number = ["Assets/Card/Pertanyaan/Pertanyaan(1).jpg","Assets/Card/Pertanyaan/Pertanyaan(2).jpg","Assets/Card/Pertanyaan/Pertanyaan(3).jpg","Assets/Card/Pertanyaan/Pertanyaan(4).jpg","Assets/Card/Pertanyaan/Pertanyaan(5).jpg","Assets/Card/Pertanyaan/Pertanyaan(6).jpg","Assets/Card/Pertanyaan/Pertanyaan(7).jpg","Assets/Card/Pertanyaan/Pertanyaan(8).jpg","Assets/Card/Pertanyaan/Pertanyaan(9).jpg","Assets/Card/Pertanyaan/Pertanyaan(10).jpg","Assets/Card/Pertanyaan/Pertanyaan(11).jpg","Assets/Card/Pertanyaan/Pertanyaan(12).jpg","Assets/Card/Pertanyaan/Pertanyaan(13).jpg","Assets/Card/Pertanyaan/Pertanyaan(14).jpg","Assets/Card/Pertanyaan/Pertanyaan(15).jpg","Assets/Card/Pertanyaan/Pertanyaan(16).jpg","Assets/Card/Pertanyaan/Pertanyaan(17).jpg","Assets/Card/Pertanyaan/Pertanyaan(18).jpg","Assets/Card/Pertanyaan/Pertanyaan(19).jpg","Assets/Card/Pertanyaan/Pertanyaan(20).jpg","Assets/Card/Pertanyaan/Pertanyaan(21).jpg","Assets/Card/Pertanyaan/Pertanyaan(22).jpg","Assets/Card/Pertanyaan/Pertanyaan(23).jpg","Assets/Card/Pertanyaan/Pertanyaan(24).jpg","Assets/Card/Pertanyaan/Pertanyaan(25).jpg","Assets/Card/Pertanyaan/Pertanyaan(26).jpg","Assets/Card/Pertanyaan/Pertanyaan(27).jpg","Assets/Card/Pertanyaan/Pertanyaan(28).jpg","Assets/Card/Pertanyaan/Pertanyaan(29).jpg","Assets/Card/Pertanyaan/Pertanyaan(30).jpg"]
const card_used = []

const randomizeimage = () => {
    let image_number = Math.floor(Math.random() * 30);
    if((card_number[image_number] in card_used) == false){
        card_used.push(card_number[image_number])
        document.getElementById("question").src = card_number[image_number]
    }
}






