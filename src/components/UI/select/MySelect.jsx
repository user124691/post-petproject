import React from 'react'

export default function MySelect({options, value, onChange}){
    return(
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option disabled>Cортировка по:</option>
            {options.map((item) => {
                return <option key={item.value} value={item.value}>{item.name}</option>
            })}
        </select>
    )
}

