/**
 * Патерн Template Method — конкретна реалізація AbstractImporter.
 *
 * ResumeImporter реалізує три кроки алгоритму:
 *   validate() — перевірка обов'язкових полів
 *   map()      — приведення сирих даних до ResumeModel
 *   render()   — побудова DOM через BlockFactory
 */
import { AbstractImporter } from "./AbstractImporter";
import { ResumeModel } from "../models/ResumeModel";
import { BlockFactory, BlockType } from "../blocks/BlockFactory";

export class ResumeImporter extends AbstractImporter<ResumeModel> {
  protected validate(): void {
    const r = this.raw as Record<string, unknown>;
    const required: Array<keyof ResumeModel> = ["header", "summary", "experience", "education", "skills"];

    for (const field of required) {
      if (!r[field]) {
        throw new Error(`Resume JSON: missing required field "${field}"`);
      }
    }
  }

  protected map(): ResumeModel {
    return this.raw as ResumeModel;
  }

  protected render(model: ResumeModel): void {
    const root = document.getElementById("resume-content")!;
    const factory = new BlockFactory();

    const types: BlockType[] = ["header", "summary", "experience", "education", "skills"];
    for (const type of types) {
      root.appendChild(factory.createBlock(type, model).render());
    }
  }
}
