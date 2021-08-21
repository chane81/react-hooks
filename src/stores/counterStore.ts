import useSWR from 'swr';

export interface ICountStore {
  count: number;
}

const STORE_NAME = 'CountStore';

/**
 * swr을 이용한 카운터
 */
const useSwrCountStore = () => {
  const { data, mutate } = useSWR<number>(STORE_NAME, () => (window as any).count, {});
  

  return {
		store: data || 0,
    mutate: (count: number) => {
      console.log('winst', (window as any).count);
			//winStore.count = count;
      (window as any).count = count;

      console.log('winst 22', count,(window as any).count);
			mutate();
		}
	};
}

export default useSwrCountStore;