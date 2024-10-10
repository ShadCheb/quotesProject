import { DefaultApi } from './defaultApi';
import { ApiPropsType } from './types';

const DEFAULT_BASE_PATH = 'https://api.poloniex.com';

export class Api {
  defaultApi: DefaultApi = new DefaultApi();

  basePath: string = DEFAULT_BASE_PATH;

  constructor(options: ApiPropsType = {}) {
    this.setConfig({
      basePath: options.basePath,
    });
  }

  private setConfig = ({ basePath }: { basePath?: string }) => {
    const path = basePath || DEFAULT_BASE_PATH;

    this.basePath = path;
    this.defaultApi = new DefaultApi({
      basePath: path,
    });
  };
}

export const api = new Api({});
