import DefaultLogger from "./loggers/DefaultLogger";
import ScheduleManager from "./schedules/ScheduleManager";
import NodeCache from "node-cache";

export default class Main {

    private readonly logger: DefaultLogger;
    private readonly scheduleManager: ScheduleManager;
    private readonly cache: NodeCache;

    constructor() {
        this.logger = new DefaultLogger();
        this.scheduleManager = new ScheduleManager();
        this.cache = new NodeCache();
    }

    public main(): void {
        this.getLogger().info("The script is started !");
        this.getLogger().info("Project mode: " + process.env.MODE);
        this.getCache().set('foo_task_seconds', 5);

        this.scheduleManager.loadTasks(this);
    }

    public getLogger(): DefaultLogger {return this.logger;}
    public getScheduleManager(): ScheduleManager {return this.scheduleManager;}
    public getCache(): NodeCache {return this.cache;}
}