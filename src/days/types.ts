export type DayImport = Promise<{ default: typeof Day }>;
export type Days = { [key: string]: () => DayImport };

export class Day {
  public static __hash: string;
  public static __name: string;
  public static __qrCode: string;
  public static __content: () => Promise<string>;

  public static async init(): Promise<void> {}
  public static getFrame(): HTMLImageElement {
    return new HTMLImageElement();
  }
}
