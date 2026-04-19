const http = require("http");
const WebSocket = require("ws");

const port = process.env.PORT || 3000;

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    console.log("Cliente conectado");

    ws.on("message", (msg) => {
        console.log("Recebido:", msg.toString());

        // responde de volta (teste)
        ws.send("Recebi: " + msg);
    });

    ws.on("close", () => {
        console.log("Cliente desconectado");
    });
});

server.listen(port, () => {
    console.log("Rodando na porta " + port);
});
