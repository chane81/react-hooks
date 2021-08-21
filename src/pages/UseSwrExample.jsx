import React from 'react';
import UseSwrG1Example from './UseSwrG1Example'
import UseSwrG2Example from './UseSwrG2Example'
import useCounter from '../hooks/useSwrCounter'
import useSWR from 'swr';

const UseSwrExample = () => {
  const { data } = useCounter();

  const { data: userName, isValidating } = useSWR('https://randomuser.me/api', async (url) => {
    const { results } = await (await fetch(url)).json();
    const userName = results[0].name.first + results[0].name.last;

    return userName;
  }, {
    refreshInterval: 1000
  })

  return (
    <div>
      <div>
        <h1>{ isValidating ? 'loading': 'not loading'}</h1>
        <h1>실시간 반영 사용자명: <b>{userName ? userName : ''}</b></h1>
      </div>
      <div>
        <h1>
          현재 카운터 값은 <b>{data}</b> 입니다.
        </h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <div style={{ marginRight: '1rem', border: '1px solid #adb5bd', padding: '1rem'}}>
          <UseSwrG1Example />
        </div>
        <div style={{ border: '1px solid #adb5bd', padding: '1rem'}}>
          <UseSwrG2Example />
        </div>
      </div>
    </div>
  )
}

export default UseSwrExample;