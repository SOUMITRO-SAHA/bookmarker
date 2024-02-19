export default class BaseEmail {
  name = "";

  protected async getNodeMailerPayload(): Promise<Record<string, unknown>> {
    return {};
  }

  protected getMailerOptions() {
    return {
      transport: serverConfig.transport,
      from: serverConfig.from,
      headers: serverConfig.headers,
    };
  }
  protected printNodeMailerError(error: Error): void {
    /** Don't clog the logs with unsent emails in E2E */
    if (process.env.NEXT_PUBLIC_IS_E2E) return;
    console.error(`${this.name}_ERROR`, error);
  }

  public async sendEmail() {
    // TODO:
  }
}
