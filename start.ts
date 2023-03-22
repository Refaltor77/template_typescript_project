import Main from "./src/Main";
import dotenv from "dotenv";

dotenv.config();

let start = new Main();
start.getLogger().info("Starting script ...");
start.main();