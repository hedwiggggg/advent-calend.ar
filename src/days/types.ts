export type DayImport = Promise<{ default: typeof Day }>;
export type Days = { [key: string]: () => DayImport };

export class Day {
  public static hash: string;
  public static qrCode: string;
  public static content: string;

  public static async init(): Promise<void> {}
  public static getFrame(): HTMLImageElement {
    return new HTMLImageElement();
  }
}
