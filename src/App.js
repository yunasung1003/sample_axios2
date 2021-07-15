import './App.css';
import React,{ useEffect, useState } from 'react';
import axois from 'axios';
import axios from 'axios';

function App() {
// 1. useState 선언
  const [data, setData] = useState([]);
//2. 통신하기
  const load_data = async() => {
    let result = await axios.get('/message.json');
    // 3. 결과값 찍어보기
    console.log(result);
    //4. 잘 나왔으면 setData 에 결과값 넣기
    setData(result.data);
  }

//5. setData 잘 들어갔는지 확인
    useEffect(()=>{
      console.log(setData);
    },[data]);

//6. load_data 한번만 실행
  useEffect(()=>{
    load_data();
  },[]); // 한번만 실행
 
  return (
    <div>
      <h2>연습6</h2>
    
      <ul>        
        {data.map((item, index)=>{
          let text_color="green";
          if(item.date==='2021-07-02') {
            text_color="red";
          }
          return  
          <li style={{color:text_color}}>{item.date} {item.message}</li>;
        })}       
      </ul>


    </div>
  );
}

export default App;