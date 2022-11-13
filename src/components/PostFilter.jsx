import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

export default function PostFilter({filter, setFilter}){
    return(
        <div>
            <MyInput value={filter.quary} placeholder='Поиск...' onChange={e => setFilter({...filter, quary: e.target.value})}></MyInput>
            <MySelect 
                value={filter.sort} 
                onChange={(key) => setFilter({...filter, sort: key})} 
                options={[{name: "Названию", value: "title"}, {name: "Описанию", value: "body"}]}>
            </MySelect>
        </div>
    )
}

