const { spawn } = require("child_process");
const input = req.query.input;
const proc = spawn("/usr/bin/find", [input]); // Sensitive

export class TestClass {

   public main(): void {

	const input = req.query.input;
	const proc = spawn("/usr/bin/find", [input]); // Sensitive

	try {
		throw new Error("Should be a code smell");
	} catch(err) {
		console.log(err);
	}
	console.log("This is a test")
   }



}

new TestClass().main();


