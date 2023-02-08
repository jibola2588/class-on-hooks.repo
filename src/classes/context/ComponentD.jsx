import React from 'react';
import ComponentG from './ComponentG';

const ComponentD = (props) => {
    console.log('props at component D' + props)
  return (
    <div>
      <h3 className='text-red-700'>component d : first grandchild of component A</h3>
      <ComponentG item = {props.miracle} />
    </div>
  );
}

export default ComponentD;
