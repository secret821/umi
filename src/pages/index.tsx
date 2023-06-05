import { history } from 'umi';
import { useEffect } from 'react';
import { getCode, getMock } from "../api/index";
import yayJpg from '../assets/yay.jpg';

import './style.less'

export default function HomePage() {

  useEffect(() => {
    getCode({})
    getMock({})
  },[])
  return (
    <div className='homepage'>
      <h2 onClick={()=>{ history.push('/doc') }}>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
