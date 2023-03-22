export default abstract class Task {

    protected readonly time: number;
    protected readonly timer: NodeJS.Timer;


    protected constructor(time: number) {
        this.time = time;
        this.timer = setInterval(() => this.onRun(), time);
    }


    public abstract onRun() : void;
    public cancelTask() : void {clearInterval(this.timer);}
}