import fs from "fs";
import path from "path";

const directoryPath = "./src/data/tasks";
const tasks = [];
const loadTasks = () => {
  fs.readdirSync(directoryPath)
    .filter((filename) => path.extname(filename).toLowerCase() === ".json")
    .forEach((filename) => {
      const filePath = path.join(directoryPath, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const task = JSON.parse(fileContent);
      task.id = filename.replace(".json", "");
      tasks.push(task);
    });
};

loadTasks();
console.log(tasks);
fs.writeFile(
  "./src/data/tasks.json",
  JSON.stringify({ tasks }),
  "utf8",
  () => {},
);
