const card_used = []

const randomizeimage = () => {
    let image_number = Math.floor(Math.random() * 30) + 1;
    if((image_number in card_used) == false){
        card_used.push(image_number)
        document.getElementById("back").style.backgroundImage = `url('Assets/Card/Pertanyaan/Pertanyaan(${image_number}).jpg')` 
        document.getElementById("front").style.backgroundImage = `url('Assets/Card/Pertanyaan/cover/cover(${image_number}).jpg')`
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






