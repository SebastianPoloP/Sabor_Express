const loadHtml = (elementId, filePath) => {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.log('Error al cargar el archivo HTML: ', error);
        });
}