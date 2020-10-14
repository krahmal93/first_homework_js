let wrapper = document.querySelector('.wrapper');
let pass_window = document.querySelector('.pass-window');
let true_button = document.querySelector('.true-button');
let false_button = document.querySelector('.false-button');

true_button.onclick = function() {
    pass_window.classList.add('none');
    wrapper.classList.remove('none');
}

false_button.onclick = function() {
    pass_window.classList.add('none');
}
    