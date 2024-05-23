import { Locator, Page, expect } from "@playwright/test";

export class TemplatePage {
  readonly page: Page;

  // Lokatory - promenne pro elementy na strance
  // Seznam veci, ktere na strance muzu najit a s kterymi budu pracovat
  // Vsimni si, ze tu promennou muzes pojmenovat jak chces - treba necoNeco. 
  // To nedava ale smysl, protoze nevis pak v testu co to je. Takze to chce neco jako button, input, header, etc. S nejakym lepsim popisem.

  readonly necoNeco: Locator;
  readonly neboNecoTakoveho: Locator;

  constructor(page: Page) {
    this.page = page;

    // A ted naplnime lokatory - najdeme si elementy na strance
    this.necoNeco = page.locator("nejakyTvujLokator")
    this.neboNecoTakoveho = page.getByText("Neco takoveho")
  }
}
