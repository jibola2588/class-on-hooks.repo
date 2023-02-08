import React from 'react';
import ComponentD from './ComponentD';

const ComponentB = (props) => {
console.log("props at component B" + props)
  return (
    <div>
      <h2 className = 'text-blue-700'>component B : first child of component A</h2>

      <ComponentD miracle = {props.user}/>
    </div>
  );
}

export default ComponentB;
