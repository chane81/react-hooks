import useSWR from 'swr';

/**
 * swr을 이용한 카운터
 */
const useSwrCounter = () => {
  const { data, mutate } = useSWR("state", () => window.count, {
});
  return {
    data: data || 0,
    mutate: (count) => {
      window.count = count;
      mutate();
    }
  };
}

export default useSwrCounter;