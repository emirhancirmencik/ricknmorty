import React from 'react'

function handleChange(input){
    return input.normalize('NFD').replace(/\p{Diacritic}/gu, "").replaceAll("ı","i")
}

export default function MyInput({func, nav, id}) {

    
  return (
    <div><input
    data-testid={id}
    name="myInput"
    className="rounded-l bg-rnmYellow text-rnmBrown placeholder:text-gray-400 w-64 justify-self-start px-4"
    placeholder={`Filter by ${nav}`}
    onChange={(e) => func(handleChange(e.target.value))}
    /></div>
  )
}
