import { useIsFocused } from '@react-navigation/native';

import { useInterval } from '@/shared/hooks/useInterval';

const TIMER = 5_000;

/**
 * Обновление котировкок при фокусе экрана с интервалом времени
 */
export const useUpdate = (taskFunction: () => void) => {
  const isFocused = useIsFocused();

  useInterval(taskFunction, isFocused ? TIMER : null);
};
