import { useEffect } from 'react';

import { observer } from 'mobx-react';

import { quoteStore } from '@/entities/quotes/model';
import { TableQuotes } from '@/entities/quotes/ui';
import { TextVariantEnum } from '@/shared/theme/typographic';
import { LoaderContainer } from '@/shared/ui/loaderContainer';

import { useUpdate } from './hooks';
import * as Styles from './styles';

export const ViewQuotes = observer(() => {
  useEffect(() => {
    quoteStore.loadData();
  }, [])

  useUpdate(quoteStore.loadData);

  return (
    <>
      <LoaderContainer
        visible={!quoteStore.data}
        size="medium"
      />

      <Styles.Container>
        {
          quoteStore.error
            ? (
              <Styles.Status>
                <Styles.StatusText variant={TextVariantEnum.BODY}>Error</Styles.StatusText>
              </Styles.Status>
            )
            : null
        }
        <TableQuotes quotes={quoteStore.data || []} />
      </Styles.Container>
    </>
  );
});