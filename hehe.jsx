import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

function Card() {
  const[q,setQuestions]=useState([])
  useEffect(()=>{
    async function getAllQuestions() {
      try {
        const q = await axios.get("http://127.0.0.1:8000/api/get-questions/")
        console.log(q.data)
        setQuestions(q.data)
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getAllQuestions()
  },[])
  return (
    <main>
      {
        q.map((q,i)=>{
          return(
            <div className="container">
            <div className="top">
              <div className="quesNo">
                <h3 key={i}>{ q.id }</h3>
              </div>
    
              <div className="MarkMenu">
                <div className="gen" key={i}>{ q.marks }</div>
                <label className="burger" htmlFor="burger">
                  <input type="checkbox" id="burger" />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
            </div>
    
            <div className="question">
              <p>
                {q.question}
              </p>
            </div>
    
            <div className="options">
              <div className="option">
                <input type="radio" name="answer" className="answer" />
                <span className="op">a. HEHE</span>
              </div>
    
              <div className="option">
                <input type="radio" name="answer" className="answer" />
                <span className="op">a. HEHE</span>
              </div>
    
              <div className="option">
                <input type="radio" name="answer" className="answer" />
                <span className="op">a. HEHE</span>
              </div>
    
              <div className="option">
                <input type="radio" name="answer" className="answer" />
                <span className="op">a. HEHE</span>
              </div>
            </div>
    
            <div className="bottom">
              <span className="leftbtn">
                <input type="button" className="button" value="&larr; Prev. Question" />
              </span>
              <span className="rightbtn">
                <input type="button" className="button" value="Next Question &rarr;" />
              </span>
            </div>
          </div>
          )
        })
      }

    </main>
  );
}

export default Card;