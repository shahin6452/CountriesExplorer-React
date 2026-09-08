import { useState } from "react"
import type { CountriesType } from "../../Type"
import './Country.css'

export interface CountryProps {
    country: CountriesType
    handleVisitedCountry: (country:CountriesType) => void
    handleVisitedFlags: (flag:string) => void
}

export default function Country({ country, handleVisitedCountry, handleVisitedFlags }: CountryProps){
    const [visited, setVisited] = useState<boolean>(false)
    const handleVisited =  () =>{
        // visited ? setVisited(false) : setVisited(true)
        setVisited(!visited)
        handleVisitedCountry(country);
    }

    return (
        <div className={`country ${visited ? 'country-visited': '' }`}>
            <h3>{country.name.common} (Official: {country.name.official})</h3>
            <img src={country.flags.flags.png} alt=" " /> 
            <p className={visited ? 'Population-known' : ''}>Population: </p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Marked as Visited'}
            </button>
            <button onClick={() => handleVisitedFlags(country.flags.flags.png)}>
                Add Flag as visited
            </button>
        </div>
    )
}

// 