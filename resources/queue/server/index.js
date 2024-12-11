import * as alt from 'alt-server'

alt.on("connectionQueueAdd", (connectionInfo) => {
  console.log("Connection Queue Add:", connectionInfo); // IConnectionInfo

  connectionInfo.accept();
});

alt.on("connectionQueueRemove", (connectionInfo) => {
  console.log("Connection Queue Remove:", connectionInfo); // null
});

alt.on('playerConnect', (player) => {
  console.log("Player Connect:", player); // IPlayer
});

alt.on('playerDisconnect', (player) => {
  console.log("Player Disconnect:", player); // IPlayer
})