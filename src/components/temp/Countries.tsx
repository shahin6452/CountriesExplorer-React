import { use, useState } from "react"
import type { CountriesType } from "../../Type"
import Country from "../Country/Country"
import './Countries.css'

export interface CountriesProps {
    countriesPromise: Promise<CountriesType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {

    const [visitedCountries, setVisitedCountries] = useState<CountriesType[]>([])

    const [visitedFlags, setVisitedFlags] = useState<string[]>([])


    const handleVisitedCountry = (country: CountriesType): void => {
        // if(visitedCountries.includes(country))
        const exists = visitedCountries.find(c => c.ccn3.ccn3 === country.ccn3.ccn3 )
        if(exists){
            const remaining = visitedCountries.filter(c => c.ccn3.ccn3 !== country.ccn3.ccn3)
            setVisitedCountries(remaining)
        }else{
            const newVisitedCountries = [...visitedCountries, country]
            setVisitedCountries(newVisitedCountries)
        }
    }

    const handleVisitedFlags = (flag: string): void => {
        console.log('Visited Flag', flag,)
        if (visitedFlags.includes(flag)){
            const remaingFlags = visitedFlags.filter(f => f !== flag)
            setVisitedFlags(remaingFlags)
        } else {
            const newVisitedFlags = [...visitedFlags, flag]
            setVisitedFlags(newVisitedFlags)
        }

    }

    const message = use(countriesPromise)
    console.log('test2', message)

    {console.log('test', visitedCountries)}

    return (

        <div>
            <h2>Countries: {message.length}</h2>
            <h2>Visited Countries Count:{visitedCountries.length}</h2>
            
            <h2>Visited Flags Count:{visitedFlags.length}</h2>
            <div>
                {visitedFlags.map((flag, ind) => <img key={ind} src={flag} alt="Visited Flag" /> )}
            </div>
            <ul>
                {visitedCountries.map(country => <li key={country.ccn3.ccn3}>{country.name.common}({country.ccn3.ccn3})</li> )}
            </ul>
            <div className="countries">{
                message.map(country => <Country
                    key={country.ccn3.ccn3}
                    country={country}
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}
                />)
            }
            </div>
        </div>
    )
}