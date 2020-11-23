export type DayImport = Promise<{ default: typeof Day }>;
export type Days = { [key: string]: () => DayImport };

export type DaysData = DayData[];
export type DayData = {
  __hash: string;
  __name: string;
  __qrCode: () => Promise<{ default: string }>;
};

export class Day {
  public static __hash: string;
  public static __name: string;
  public static __qrCode: string;
  public static __content: () => Promise<string>;

  public static init(): Promise<void> { throw new Error("not implemented") }
  public static getFrame(): HTMLCanvasElement { throw new Error("not implemented") }
}
