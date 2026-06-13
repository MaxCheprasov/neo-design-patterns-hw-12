/**
 * Блок відображення освіти в резюме
 */
import { Education } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class EducationBlock implements IBlock {
  constructor(private d: Education[]) {}

  render(): HTMLElement {
    const el = document.createElement("section");
    el.className = "section education";

    const h2 = document.createElement("h2");
    h2.textContent = "Education";
    el.appendChild(h2);

    this.d.forEach((edu) => {
      const item = document.createElement("div");
      item.className = "education-item";
      item.innerHTML = `
        <strong>${edu.institution}</strong><br>
        ${edu.degree} · ${edu.field} — ${edu.graduation}
      `;
      el.appendChild(item);
    });

    return el;
  }
}
