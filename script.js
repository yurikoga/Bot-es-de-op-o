const options = document.querySelectorAll('input[name="user-type"]');

options.forEach(option => {
    option.addEventListener('change', (e) => {
        if (e.target.checked) {
            console.log("Selecionado:", e.target.value);
            // Aqui você pode disparar outras funções de UI
        }
    });
});
