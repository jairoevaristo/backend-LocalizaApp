import { app, PORT } from "./app";

const server = app;

server.listen(PORT, () => console.log('Server is running'));