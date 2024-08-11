const chessSets = document.querySelector('.chess-sets');
const dropdownMenu = document.querySelector('.dropdown-links');


chessSets.addEventListener('click', () => {
    if (dropdownMenu.classList.contains('hidden')){
        dropdownMenu.classList.remove('hidden');
    } else {
        dropdownMenu.classList.add('hidden');
    }
})

// chessSets.addEventListener('mouseover', () => {
//     if (dropdownMenu.classList.contains('hidden')){
//         dropdownMenu.classList.remove('hidden');
//     } else {
//         dropdownMenu.classList.add('hidden');
//     }
// })




