import { sayHello } from "./main2.js";//приклад з конспекту: import { export1 } from "module-name";	Імпорт конкретного експорту з модуля.
const output = document.querySelector('output');
output.textContent = sayHello('Світ');