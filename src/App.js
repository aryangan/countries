import './App.css';
import React, {useState} from "react";
import Search from "./Search";
// import ReactDOM from "react-dom";
import axios from 'axios';
import Container from "./Container";
import { Multiselect } from 'multiselect-react-dropdown';
import 'react-dropdown/style.css';

function intersperse(arr, sep, property) {
  var result;
  if (arr.length === 0) {
      result = [{[property]: "None"}];
  }

  else result = arr.slice(1).reduce(function(xs, x, i) {
      return xs.concat([sep, x]);
  }, [arr[0]]);

  var ans = "";
  for (let i = 0; i < result.length; ++i) {
    if (result[i] === sep) {
      ans += result[i];
      continue;
    }
    ans += result[i][property];
  }

  return ans;
}

function App() {
  const [open, setOpen] = useState();
  const [countries, setCountries] = useState('');
  const [input, setInput] = useState();
  const [languages, setLanguages] = useState();
  const [capital, setCapital] = useState();
  const [currency, setCurrency] = useState();
  const [code, setCode] = useState();
  const [regionalBloc, setRegionalBloc] = useState();
  const [nation, setNation] = useState();
  const apiURL = "https://restcountries.eu/rest/v2/all";
  const fetchData = async () => {
    const response = await axios.get(apiURL)
    setCountries(response.data) 
  };

  window.onload = fetchData;
  function openModal(nation, languages, capital, currency, code, regionalBloc) {
    setLanguages(languages);
    setCapital(capital);
    setCurrency(currency);
    setCode(code);
    setRegionalBloc(regionalBloc);
    setNation(nation);
    setOpen(true);
  };
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setOpen(false);
  }

  const flagStyle = {
    width: "35px",
    height: "35px"
  };

  const dropdownStyle = {
    multiselectContainer: {
      width: "35%",
      margin: "auto"
    },

    optionContainer: { // To change css for option container 
      backgroundColor: "light-gray",
      color: "navy"
    },

    inputField: {
      textAlign: "center",
      color: "navy"
    },

    searchBox: {
      backgroundColor: "light-gray",
      color: "navy",
      textAlign: "center",
      margin: "auto"
    }
  }

  const updateInput = async (input) => {
    setInput(input);
    const response = await axios.get(apiURL);
    const filtered = response.data.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase());
    })
    setCountries(filtered);
 };

  const options = [{name: "Africa", id: 1}, {name: "Americas", id: 2}, {name: "Asia", id: 3}, {name: "Europe", id: 4}, 
    {name: "Oceania", id: 5}, {name: "Polar", id: 6}];
    
  const updateFilter = async (list, filter) => {
    filter = filter.name;
    const response = await axios.get(apiURL);
    const filtered = response.data.filter(country => {
      if (list.length === 0) {
        return true;
      }

      let lowerCountry = country.region.toLowerCase();
      for (let i = 0; i < list.length; ++i) {
        let check = list[i].name.toLowerCase();
        if (lowerCountry === check) {
          return true;
        }
      }

      return false;
    })
    setCountries(filtered);
  }

  return (
    <div className="App">

      <Multiselect options={options} onSelect={updateFilter} onRemove={updateFilter} style={dropdownStyle} displayValue="name" 
      placeholder="Filter by region..." />

      <Search
        keyword={input}
        setKeyword={updateInput}
      />

        <Container modalIsOpen={open} afterOpenModal={afterOpenModal} closeModal={closeModal} country={nation} languages={languages}
                      capital={capital} currency={currency} code={code} regionalBloc={regionalBloc}/>

        <div className="countries">
          <table style={{margin: "auto"}}>
            {countries &&
              countries.map((country, index) => {

                const name = country.name;
                const population = country.population;
                const flag = country.flag;
                const region = country.region;
                const languages = intersperse(country.languages, ", ", "name");
                const capital = country.capital === "" ? "None" : country.capital;
                const currency = intersperse(country.currencies, ", ", "name");
                const code = country.alpha3Code;
                const regionalBloc = intersperse(country.regionalBlocs, ", ", "name");                

                if (index === 0) {
                  return (

                    <tbody key={index}>
                      <tr>
                        <th>Index</th>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Population</th>
                      </tr>
                      <tr>
                        <td>{index+1}</td>
                        <td><img style={flagStyle} src={flag} alt={flag}></img></td>
                        <td><button onClick={()=>openModal(name, languages, capital, currency, code, regionalBloc)}>{name}</button></td>
                        <td>{region}</td>
                        <td>{population}</td>
                      </tr>
                    </tbody>
                  )
                }
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{index+1}</td>
                      <td><img style={flagStyle} src={flag} alt={flag}></img></td>
                      <td><button onClick={()=>openModal(name, languages, capital, currency, code, regionalBloc)}>{name}</button></td>
                      <td>{region}</td>
                      <td>{population}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
        </div>
      
    </div>
    
  );
}

export default App;
