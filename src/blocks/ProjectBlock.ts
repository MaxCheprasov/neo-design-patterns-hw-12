/**
 * Блок проєкту — "листовий" компонент патерну Composite.
 * Не має дочірніх елементів; просто відображає дані одного проєкту.
 */
import { Project } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class ProjectBlock implements IBlock {
  constructor(private d: Project) {}

  render(): HTMLElement {
    const container = document.createElement("div");
    container.className = "project-item";
    container.textContent = `• ${this.d.name} – ${this.d.description}`;
    return container;
  }
}
