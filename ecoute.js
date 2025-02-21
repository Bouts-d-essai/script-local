const ws = new WebSocket('wss://boutsdessai.allweb.fun/ws');
ws.onopen = () => console.log("WebSocket online ! Call https://boutsdessai.allweb.fun/webhook?event=paiement_ok&call= to trigger event");
ws.onmessage = (event) => {
    console.log("Message reçu :", event.data);
    const payload = JSON.parse(event.data);
    const { call, message, delay, wait } = payload;

console.log('Message:',message);
    if (!call) return;

    console.log('Calling webhook in '+delay+'s', call)
	appel(call, wait, delay);

}

function appel (call, wait, delay=0) {
	setTimeout(() => fetch(call)
        .then(response => response.json())
        .then(data => {
		console.log('Response from webhook:', data)
		if(wait && data.IsSuccessful === false) {
			setTimeout(() => appel(call,wait, delay),1000)
		}
	})

        .catch(error => console.error('Error calling webhook:', error)), delay*1000);
}
