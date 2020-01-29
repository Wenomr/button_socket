const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 6868 })

const users = [];

let data = 'OFF';

console.log('WSS working');

const broadcast = (data, ws) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify(data))
        }
    })
}

wss.on('connection', (ws) => {
    console.log("Новое соединение");
    ws.send(JSON.stringify({data}));
    ws.on('message', (message) => {
        let value = JSON.parse(message);
        switch (value.type) {
            case 'TOGGLE':
                if (data === "OFF") {
                    data = "ON";
                } else {
                    data = "OFF";
                }
                ws.send(JSON.stringify({data}));
                broadcast({ data }, ws);
                break;
            case 'CONNECT':
                broadcast({ data }, ws);
                break;
            default:
                break;
        }
    })

  ws.on('close', () => {
    console.log("Соединение закрылось");
  })
})