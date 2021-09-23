
//Stores the active TCP connection Object
let connection;

// const setupInput = (conn) => {
//   connection = conn;
// };

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "w"){
    connection.write("Move: up")
  }
  if (key === "a"){
    connection.write("Move: left");
  }
  if (key === "s"){
    connection.write("Move: down");
  }
  if (key === "d"){
    connection.write("Move: right");
  }
  if (key === "p"){
    connection.write("Say: KILr");
  }
  if (key === '\u0003') {
    process.exit();
  }
};


module.exports = {
  setupInput
};