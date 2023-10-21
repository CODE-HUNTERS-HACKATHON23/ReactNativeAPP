import React from 'react';
import { IconContext } from "react-icons";

const Like = () => {
  return (
    <IconContext.Provider
      value={{style: { color: '#f4a200', fontSize: '50px' }}}
    >
      <div>
        <FaHeart />
        <FaRegHeart />
      </div>
    </IconContext.Provider>
  );
}
 
export default Like;