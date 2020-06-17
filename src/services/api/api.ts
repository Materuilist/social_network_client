export class ApiService {
  protected static url: string = "http://localhost:3200/";

  private static joinPath(path: string): string {
    return this.url.concat(path);
  }

  private static isSuccess(res: Response): boolean {
    return Math.floor(res.status / 100) === 2;
  }

  private static async processResponse(res: Response) {
    const json = await res.json();
    if (!this.isSuccess(res)) {
      return json.message;
    }
    return json;
  }

  public static async get(path: string) {
    const res = await fetch(this.joinPath(path));
    return this.processResponse(res);
  }

  public static async post(path: string, body: any) {
    const res = await fetch(this.joinPath(path), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(body),
    });
    return this.processResponse(res);
  }
}
