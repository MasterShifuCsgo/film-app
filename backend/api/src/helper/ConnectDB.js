import mysql from "mysql";


let connection = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "user",
    password: ""            
  }
)

export default function connectDB(){
  if(connection.state === "disconnected"){
    connection.connect(function(err){
      if(err){
        console.error("error connecting:", err);
        return;
      }
    })
  }

  console.log("connected as id ", connection.threadId);
  return connection;
}
