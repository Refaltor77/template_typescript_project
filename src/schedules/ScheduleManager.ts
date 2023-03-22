import { readdirSync } from "fs";
import Main from "../Main";

export default class ScheduleManager {
    public loadTasks(main: Main) : void {
        main.getLogger().debug("Loading all schedules...");
        const allFiles = readdirSync(`${__dirname}/tasks`).filter(file => file.endsWith(".ts"));

        allFiles.forEach((file) => {
            import(`./tasks/${file}`).then((classImport) => {
                new classImport.default(main);
            })
        });
        main.getLogger().debug("All schedules was started.")
    }
}