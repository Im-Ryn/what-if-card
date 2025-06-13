const card_number = ["url('Assets/Card/Pertanyaan/Pertanyaan(1).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(2).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(3).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(4).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(5).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(6).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(7).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(8).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(9).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(10).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(11).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(12).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(13).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(14).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(15).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(16).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(17).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(18).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(19).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(20).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(21).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(22).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(23).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(24).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(25).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(26).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(27).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(28).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(29).jpg')","url('Assets/Card/Pertanyaan/Pertanyaan(30).jpg')"]

const cover_card = ["url('Assets/Card/Pertanyaan/cover/cover(1).jpg')","url('Assets/Card/Pertanyaan/cover/cover(2).jpg')","url('Assets/Card/Pertanyaan/cover/cover(3).jpg')","url('Assets/Card/Pertanyaan/cover/cover(4).jpg')","url('Assets/Card/Pertanyaan/cover/cover(5).jpg')","url('Assets/Card/Pertanyaan/cover/cover(6).jpg')","url('Assets/Card/Pertanyaan/cover/cover(7).jpg')","url('Assets/Card/Pertanyaan/cover/cover(8).jpg')","url('Assets/Card/Pertanyaan/cover/cover(9).jpg')","url('Assets/Card/Pertanyaan/cover/cover(10).jpg')","url('Assets/Card/Pertanyaan/cover/cover(11).jpg')","url('Assets/Card/Pertanyaan/cover/cover(12).jpg')","url('Assets/Card/Pertanyaan/cover/cover(13).jpg')","url('Assets/Card/Pertanyaan/cover/cover(14).jpg')","url('Assets/Card/Pertanyaan/cover/cover(15).jpg')","url('Assets/Card/Pertanyaan/cover/cover(16).jpg')","url('Assets/Card/Pertanyaan/cover/cover(17).jpg')","url('Assets/Card/Pertanyaan/cover/cover(18).jpg')","url('Assets/Card/Pertanyaan/cover/cover(19).jpg')","url('Assets/Card/Pertanyaan/cover/cover(20).jpg')","url('Assets/Card/Pertanyaan/cover/cover(21).jpg')","url('Assets/Card/Pertanyaan/cover/cover(22).jpg')","url('Assets/Card/Pertanyaan/cover/cover(23).jpg')","url('Assets/Card/Pertanyaan/cover/cover(24).jpg')","url('Assets/Card/Pertanyaan/cover/cover(25).jpg')","url('Assets/Card/Pertanyaan/cover/cover(26).jpg')","url('Assets/Card/Pertanyaan/cover/cover(27).jpg')","url('Assets/Card/Pertanyaan/cover/cover(28).jpg')","url('Assets/Card/Pertanyaan/cover/cover(29).jpg')","url('Assets/Card/Pertanyaan/cover/cover(30).jpg')"]
const card_used = []

const randomizeimage = () => {
    let image_number = Math.floor(Math.random() * 30);
    if((card_number[image_number] in card_used) == false){
        card_used.push(card_number[image_number])
        document.getElementById("back").style.backgroundImage = card_number[image_number]
        document.getElementById("front").style.backgroundImage = cover_card[image_number]
    }
}

const card = document.getElementById('card');
const button = document.getElementById('flip-btn');

// Untuk sentuhan di mobile
button.addEventListener('touchstart', () => {
  card.classList.add('flipped');
});

button.addEventListener('touchend', () => {
  card.classList.remove('flipped');
});

// Untuk klik & tahan di desktop
button.addEventListener('mousedown', () => {
  card.classList.add('flipped');
});

button.addEventListener('mouseup', () => {
  card.classList.remove('flipped');
});

// Tambahan: jika user menyeret keluar sebelum melepas, reset juga
button.addEventListener('mouseleave', () => {
  card.classList.remove('flipped');
});


randomizeimage()






