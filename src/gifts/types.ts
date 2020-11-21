export type GiftImport = Promise<{ default: typeof Gift }>;
export type Gifts = { [key: string]: () => GiftImport };

export class Gift {
  public static content: string;
  public static qrCode: string;

  public static async init(): Promise<void> {}
  public static getFrame(): HTMLImageElement {
    return new HTMLImageElement();
  }
}
