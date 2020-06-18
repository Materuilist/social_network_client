export class ApiService {
  protected static url: string = "http://localhost:3200/";

  private static attachToken(): { [key: string]: string } {
    return {
      Authorization: `Bearer:${localStorage.getItem("jwt")}`,
    };
  }

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
    const res = await fetch(this.joinPath(path), {
      headers: { ...this.attachToken() },
    });
    return this.processResponse(res);
  }

  public static async post(path: string, body: any) {
    const res = await fetch(this.joinPath(path), {
      method: "POST",
      headers: { "Content-Type": "application/json", ...this.attachToken() },
      body: JSON.stringify(body),
    });
    return this.processResponse(res);
  }
}
