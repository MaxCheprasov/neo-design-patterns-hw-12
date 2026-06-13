/**
 * Патерн Facade (Фасад)
 *
 * ResumePage — єдина точка входу для запуску генератора резюме.
 * Приховує деталі завантаження JSON та ланцюжок виклику імпортера.
 */
import { ResumeImporter } from "../importer/ResumeImporter";

export class ResumePage {
  async init(jsonPath: string): Promise<void> {
    const data = await this.fetchData(jsonPath);
    new ResumeImporter(data).import();
  }

  private async fetchData(path: string): Promise<unknown> {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load resume data from "${path}": ${response.statusText}`);
    }
    return response.json();
  }
}
