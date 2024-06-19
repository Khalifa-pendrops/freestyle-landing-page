import React from 'react'

function NameList() {
    const nameArray = ['khalifa', 'shino', 'ogechi']
  return (
    <div>
      {/* <h2>{nameArray[0]}</h2>
      <h2>{nameArray[1]}</h2>
      <h2>{nameArray[2]}</h2> */}
          {nameArray.map(name => <h2>{name}</h2>)}
    </div>
  );
}

export default NameList
