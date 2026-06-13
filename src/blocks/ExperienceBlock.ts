/**
 * Патерн Composite (Компоновщик)
 *
 * ExperienceBlock — "гілка" (composite node), яка містить дочірні блоки
 * проєктів (ProjectBlock). Кожен проєкт з isRecent=true додатково
 * декорується через HighlightDecorator.
 */
import { Experience } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";
import { ProjectBlock } from "./ProjectBlock";
import { HighlightDecorator } from "../decorators/HighlightDecorator";

export class ExperienceBlock implements IBlock {
  constructor(private d: Experience[]) {}

  render(): HTMLElement {
    const container = document.createElement("section");
    container.className = "section experience";

    const h2 = document.createElement("h2");
    h2.textContent = "Experience";
    container.appendChild(h2);

    this.d.forEach((exp) => {
      const item = document.createElement("div");
      item.className = "experience-item";
      item.innerHTML = `<strong>${exp.position}</strong> at ${exp.company} <em>(${exp.start} – ${exp.end})</em>`;

      // Composite: додаємо дочірні блоки проєктів
      exp.projects.forEach((project) => {
        let block: IBlock = new ProjectBlock(project);

        // Decorator: виділяємо червоним нещодавні проєкти
        if (project.isRecent) {
          block = new HighlightDecorator(block);
        }

        item.appendChild(block.render());
      });

      container.appendChild(item);
    });

    return container;
  }
}
