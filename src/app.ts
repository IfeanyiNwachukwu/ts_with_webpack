import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

export const prjInput = new ProjectInput();
export const activePrjList = new ProjectList("active");
export const finishedPrjList = new ProjectList("finished");
