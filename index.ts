export class TestClass {

   public main(): void {
	try {
		throw new Error("Should be a code smell");
	} catch(err) {
		console.log(err);
	}
	console.log("This is a test")
   }



}

new TestClass().main();


