import React from 'react'
import './App.css'
import { useCountry } from 'himesha-countries'

function App() {
  const { country, loading, error } = useCountry('Bangladesh');
  
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!country || country.length === 0) {
    return <div>No country data found</div>
  }

  console.log('Country data:', country); // Better logging

  return (
    <>
     <div className='text-3xl text-center'>
      <p>{country[0]?.name?.common}</p>
      <p>{country[0]?.capital}</p>
       <img 
        src={country[0]?.flags?.png} 
        alt={`Flag of ${country[0]?.name?.common}`}
        style={{ width: '100px', margin: '20px auto' }}
      />
     </div>
    </>
  )
}

export default App

