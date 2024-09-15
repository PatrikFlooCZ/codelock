document.addEventListener('DOMContentLoaded', function () {
    const doorStatus = document.getElementById('doorStatus');
    const body = document.body;

    document.getElementById('openButton').addEventListener('click', function () {
        console.log('Dveře otevřeny');
        doorStatus.textContent = 'Dveře jsou otevřeny';
        body.classList.remove('closed');
        body.classList.add('open');
    });

    document.getElementById('closeButton').addEventListener('click', function () {
        console.log('Dveře zavřeny');
        doorStatus.textContent = 'Dveře jsou zavřeny';
        body.classList.remove('open');
        body.classList.add('closed');
    });
});

