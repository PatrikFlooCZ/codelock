    const doorStatus = document.getElementById('doorStatus');

    document.getElementById('openButton').addEventListener('click', function () {
        console.log('Dveře otevřeny');
        doorStatus.textContent = 'Dveře jsou otevřeny';
    });

    document.getElementById('closeButton').addEventListener('click', function () {
        console.log('Dveře zavřeny');
        doorStatus.textContent = 'Dveře jsou zavřeny';
    });


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, (err) => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
