import Test from "./test/Test";

export default class Main {

    private readonly test: Test;

    constructor() {
        this.test = new Test();
    }

    public main(): void {
        this.getTest().log("Hello Template TS !");
    }

    private getTest(): Test {return this.test;}
}