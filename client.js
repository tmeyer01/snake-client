const net = require("net");
const { host, port } = require("./constants");


// establishes a connection with the game server
const connect = function() {
  
  const conn = net.createConnection({
    host: host,
    port: port,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data)=>{
    console.log(data);
  });
  conn.on("connect", ()=>{
    console.log("Successfully connected to game server");
    conn.write("Name: TBM");
   
  });
  
  
  return conn;
};

module.exports = {
  connect
};