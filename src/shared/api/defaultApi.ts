import { ApiPropsType, TickerType } from './types';

export class DefaultApi {
  basePath: string = '';

  constructor(options: ApiPropsType = {}) {
    this.basePath = options?.basePath || '';
  }

  /**
   * получение данных котировок
   */
  public async getTicker24h() {
    const response = await fetch(`${this.basePath}/markets/ticker24h`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });

    if (!response.ok) {
      throw Error(
        `Error. Status: ${response.status} StatusText: ${
          response.statusText || '-'
        }`
      );
    }

    const result: TickerType[] = await response.json();

    return result;
  }
}
