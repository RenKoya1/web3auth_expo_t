global.Buffer = require("buffer").Buffer;

// Needed so that 'stream-http' chooses the right default protocol.
global.location = {
  protocol: "file:",
};

global.process.version = "v18.18.0";
if (!global.process.version) {
  global.process = require("process");
  console.log({ process: global.process });
}

process.browser = true;
