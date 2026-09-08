import './App.css'
import Countries from './components/Countries/Countries'
import type { CountriesType } from './Type'
import { Suspense } from 'react'


// step:1: create a promise to load data
const countriesPromise = async():Promise<CountriesType[]> => {
  const res = await fetch('https://openapi.programming-hero.com/api/all')
  const data = await res.json()
  return data.countries
}


function App() {

  return (
    <>
      <h2>World on the go...</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </>
  )
}

export default App
