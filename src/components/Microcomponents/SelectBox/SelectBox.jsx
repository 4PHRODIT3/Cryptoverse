import React from 'react';
import './styles.css';

const selectbox = ({options,setState,state}) => {
  return (
      <>
        <form>
          <div className="cryptoverse__microcomponents__select">
              <select className="cryptoverse__microcomponents__select-input" onChange={(e) => setState(e.target.value)} value={state}>
                  {
                  options?.map((option) => (
                      <option key={option} value={option}>{option}</option>
                  ))
                  }
              </select>
              
          </div>
        </form>
      </>
  )
}

export default selectbox;