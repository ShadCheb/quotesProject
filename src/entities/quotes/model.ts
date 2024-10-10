import { action, makeObservable, observable, runInAction } from 'mobx';

import { api } from '@/shared/api';
import { TickerType } from '@/shared/api/types';

class QuoteStore {
  loading = false;
  error?: string = '';
  data: TickerType[] | null = null;

  constructor() {
    makeObservable(this, {
      loading: observable,
      error: observable,
      data: observable,
      loadData: action,
    });
  }

  loadData = async () => {
    this.loading = true;

    try {
      const result = await api.defaultApi.getTicker24h();

      runInAction(() => {
        this.data = result;
        this.error = '';
      });
    } catch (error) {
      console.error(error);
      runInAction(() => {
        this.error = 'Error';
        if (!this.data) {
          this.data = [];
        }
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

export const quoteStore = new QuoteStore();
