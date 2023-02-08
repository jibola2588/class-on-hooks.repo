import React from 'react';
import ComponentF from './ComponentF';

const ComponentE = () => {
  return (
    <div>
      <h3 className = 'text-red-700'>component E : second grandchild of component A</h3>
      <ComponentF />
    </div>
  );
}

export default ComponentE;
