# <center>🌍 Template typescript 🌍</center>

### Installation 🖇️
````
git clone https://github.com/Refaltor77/template_typescript_project
cd template_typescript_project
npm install
````

### Logger system 🚔
````typescript
import DefaultLogger from "./loggers/DefaultLogger";

// new instance for logger, but the default logger has instanced in Main.ts
let logger = new DefaultLogger();

logger.info("Starting the script...");
logger.warning("Script is not secure");
logger.error("SCRIPT CORRUPTED !");
logger.debug("Task #4589 was canceled"); // only in "DEV" mode
````

### Cache system 📨
````typescript
// exemple cache system, "getCache()" is situated in Main.ts

this.getCache().set('foo_task_seconds', 5);
console.log(this.getCache().get('foo_task_seconds')); // 5
this.getCache().del('foo_task_seconds');
console.log(this.getCache().get('foo_task_seconds')); // undefined
````




### Schedule system 📈
> All tasks has situated in "schedules/tasks" folder.
````typescript
// exemple task Foo.ts

import Task from "../Task";
import Main from "../../Main";

export default class Foo extends Task{

    private main: Main;
    private bar: number = 5;

    protected constructor(main: Main) {
        super(1000);
        this.main = main;
    }

    public onRun(): void {
        this.main.getLogger().debug("Task FOO is running for : " + this.bar + " second(s)");
        this.bar--;
        if (this.bar < 0) {
            this.main.getLogger().debug("Task FOO is canceled.");
            this.cancelTask();
        }
    }
}
````