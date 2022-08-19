export class TestClass {

   public main(): void {
	const a = "This is a variable";
	if(a == 'This is a variable') {
		console.log("code smell using double equals")
	}
	try {
		throw new Error("Should be a code smell");
	} catch(err) {
		console.log(err);
	}
	console.log("This is a test")
   }



}

new TestClass().main();


