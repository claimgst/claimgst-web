[![Build Status](https://travis-ci.org/claimgst/claimgst-web.svg?branch=master)](https://travis-ci.org/claimgst/claimgst-web)

claimgst-web
============

### About
ClaimGST allows users to achieve minimum amount required to claim GST of their goods by sharing the receipts from the same ABN.

### Stacks
- React: The javascript library
- react-router: Mapping requests to the actual components
- react-redux: State management
- [JWT](https://github.com/auth0/jwt-decode): Industry standard token format
- Webpack & Babel: Javascript bundler
- Docker: Isolating applications and setting up required environment
- Mocha & Chai: JS test framework and assertion library

### Architecture
The project is separated into two layers, front-end and back-end, to provide isolated systems for each layer that communicates through RESTful API.

[claimgst](https://github.com/claimgst/claimgst) (back-end) &nbsp;&harr;&nbsp; RESTful API ([JWT](https://jwt.io)) &nbsp;&harr;&nbsp; [claimgst-web](https://github.com/claimgst/claimgst-web) (front-end)
