const ws = new WebSocket('wss://boutsdessai.allweb.fun/ws');
ws.onopen = () => console.log("WebSocket online ! Call https://boutsdessai.allweb.fun/webhook?event=paiement_ok&call= to trigger event");
ws.onmessage = (event) => {
    console.log("Message reçu :", event.data);
    const payload = JSON.parse(event.data);
    const { call } = payload;

    if (!call) return;

    console.log('Calling webhook ', call)
    fetch(call)
        .then(response => response.text())
        .then(data => console.log('Response from webhook:', data))
        .catch(error => console.error('Error calling webhook:', error));
}