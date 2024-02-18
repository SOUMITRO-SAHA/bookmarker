export default class BaseEmail {
  name = "";

  protected async getNodeMailerPayload(): Promise<Record<string, unknown>> {
    return {};
  }

  public async sendEmail() {
    // TODO:
  }
}
