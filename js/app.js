function validaBusca() {
    var searchInput = document.querySelector('#q');
    if (searchInput.value.trim() === '') {
        alert("O formulário não pode ser deixado em branco.");
        return false;
    }
    return true;
}

document.querySelector('#formularioHeader').addEventListener('submit', function(event) {
    if (!validaBusca()) {
        event.preventDefault();
    }
});
