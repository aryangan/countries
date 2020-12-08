import React from 'react';

const Search = ({keyword, setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#dddaf2", border:"none", padding:"0.5rem", textAlign:"center", color:"black"};
  return (
    <input 
     style={BarStyling}
    //  key="random1"
     value={keyword}
     placeholder={"Search for a country:"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default Search