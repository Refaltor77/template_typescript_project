import Logger from "./loggers/Logger";

export default class Main {

    private readonly logger: Logger;

    constructor() {
        this.logger = new Logger();
    }

    public main(): void {
        this.getLogger().info("The script is started !");
    }

    public getLogger(): Logger {return this.logger;}
}