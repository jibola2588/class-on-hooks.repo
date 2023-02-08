import React from 'react';
import ComponentE from './ComponentE';

const ComponentC = () => {
  return (
    <div>
      <h2 className='text-blue-700'>component c : second child of component A</h2>
     <ComponentE />
    </div>
  );
}

export default ComponentC;
