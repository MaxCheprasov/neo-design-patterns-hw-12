/**
 * Патерн Decorator (Декоратор)
 *
 * HighlightDecorator додає клас 'highlight' до DOM-елемента
 * будь-якого IBlock, не змінюючи його внутрішньої структури.
 * Використовується для виділення нещодавніх проєктів (isRecent: true).
 */
import { IBlock } from "../blocks/BlockFactory";

export class HighlightDecorator implements IBlock {
  private wrapped: IBlock;

  constructor(block: IBlock) {
    this.wrapped = block;
  }

  render(): HTMLElement {
    const el = this.wrapped.render();
    el.classList.add("highlight");
    return el;
  }
}
