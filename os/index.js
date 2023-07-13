const os = require('os');

console.log("CPU architecture - "+ os.arch())
console.log("free memory - "+ os.freemem())
console.log("total memory - "+ os.totalmem())
console.log("networ interfaces - "+ os.networkInterfaces())
console.log("JSON stringify on network interfaces - "+ JSON.stringify(os.networkInterfaces()))
console.log("temporary dir - "+ os.tmpdir())
console.log("endianness - "+ os.endianness())
console.log("hostname - "+ os.hostname())
console.log("type - "+ os.type())
console.log("platform - "+ os.platform())
console.log("release - "+ os.release())