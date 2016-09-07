claimgst-web
============

### About
ClaimGST allows users to achieve minimum amount required to claim GST of their goods by sharing the receipts from the same ABN.

### Stacks
- ReactJS
- react-router
- react-redux
- [JWT](https://github.com/auth0/jwt-decode)
- Webpack, Babel
- Docker

### Architecture
The project is separated into two layers, front-end and back-end, to provide isolated systems for each layer that communicates through RESTful API.

[claimgst](https://github.com/claimgst/claimgst) (back-end) &nbsp;&harr;&nbsp; RESTful API ([JWT](https://jwt.io)) &nbsp;&harr;&nbsp; [claimgst-web](https://github.com/claimgst/claimgst-web) (front-end)
