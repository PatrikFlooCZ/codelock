    const doorStatus = document.getElementById('doorStatus');

    document.getElementById('openButton').addEventListener('click', function () {
        console.log('Dveře otevřeny');
        doorStatus.textContent = 'Dveře jsou otevřeny';
    });

    document.getElementById('closeButton').addEventListener('click', function () {
        console.log('Dveře zavřeny');
        doorStatus.textContent = 'Dveře jsou zavřeny';
    });

