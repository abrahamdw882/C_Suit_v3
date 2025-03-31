const { spawn } = require("child_process");
const path = require("path");

function start() {
  let scriptArgs = [path.join(__dirname, "main.js"), ...process.argv.slice(2)];
  console.log([process.argv[0], ...scriptArgs].join("\n"));

  let childProcess = spawn(process.argv[0], scriptArgs, {
    stdio: ["inherit", "inherit", "inherit", "ipc"]
  });

  childProcess.on("message", (message) => {
    if (message === "reset") {
      console.log("Restarting test...");
      childProcess.kill();
      start();
    }
  });

  childProcess.on("exit", (exitCode) => {
    console.error("Exited with code:", exitCode);
    if (exitCode === "." || exitCode === 1 || exitCode === 0) {
      start();
    }
  });
}

start();
