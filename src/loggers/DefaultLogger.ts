export default class DefaultLogger {

    // colors
    private reset: string = "\x1b[0m";
    private red: string = "\x1b[31m";
    private green: string = "\x1b[32m";
    private yellow: string = "\x1b[33m";
    private blue: string = "\x1b[34m";
    private magenta: string = "\x1b[35m";
    private cyan: string = "\x1b[36m";
    private white: string = "\x1b[37m";

    // styles
    private bold: string = "\x1b[1m";
    private underline: string = "\x1b[37m";



    public info(message: string): void {
        const now = new Date();
        const timestamp = `${now.toLocaleTimeString()}`;
        console.log(this.reset + this.bold +  `[`+this.cyan+`${timestamp}`+this.reset+`] [`+ this.green +`INFO`+ this.reset + `] ${message}`);
    }

    public error(message: string): void {
        const now = new Date();
        const timestamp = `${now.toLocaleTimeString()}`;
        console.log(this.reset + this.bold +  `[`+this.cyan+`${timestamp}`+this.reset+`] [`+ this.red +`ERROR`+ this.reset + `] `+this.red + this.bold +`${message}` + this.reset);
    }

    public warning(message: string): void {
        const now = new Date();
        const timestamp = `${now.toLocaleTimeString()}`;
        console.log(this.reset + this.bold +  `[`+this.cyan+`${timestamp}`+this.reset+`] [`+ this.yellow +`WARNING`+ this.reset + `] `+this.yellow + this.bold +`${message}` + this.reset);
    }

    public debug(message: string): void {
        if (process.env.MODE === "DEV") {
            const now = new Date();
            const timestamp = `${now.toLocaleTimeString()}`;
            console.log(this.reset + this.bold +  `[`+this.cyan+`${timestamp}`+this.reset+`] [`+ this.cyan +`DEBUG`+ this.reset + `] `+ this.cyan +`${message}` + this.reset);
        }
    }
}