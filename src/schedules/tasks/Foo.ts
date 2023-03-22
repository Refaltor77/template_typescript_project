import Task from "../Task";
import Main from "../../Main";

export default class Foo extends Task{

    private main: Main;
    private bar: number;

    protected constructor(main: Main) {
        super(1000);
        this.main = main;
        this.bar = main.getCache().get('foo_task_seconds') ?? 10;
    }

    public onRun(): void {
        this.main.getLogger().debug("Task FOO en cours d'execution pour : " + this.bar + " seconde(s)");
        this.bar--;
        if (this.bar < 0) {
            this.main.getLogger().debug("Fin de la task FOO.");
            this.main.getCache().del('foo_task_seconds');
            this.cancelTask();
        }
    }
}