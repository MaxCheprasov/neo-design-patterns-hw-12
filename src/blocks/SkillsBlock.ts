/**
 * Блок відображення навичок резюме
 */
import { Skills } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SkillsBlock implements IBlock {
  constructor(private d: Skills) {}

  render(): HTMLElement {
    const sec = document.createElement("section");
    sec.className = "section skills";

    const h2 = document.createElement("h2");
    h2.textContent = "Skills";
    sec.appendChild(h2);

    for (const [category, items] of Object.entries(this.d) as [string, string[]][]) {
      const label = document.createElement("p");
      label.innerHTML = `<strong>${category}:</strong>`;

      const ul = document.createElement("ul");
      ul.className = "skills-list";

      items.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = skill;
        ul.appendChild(li);
      });

      sec.append(label, ul);
    }

    return sec;
  }
}
