import React, {useState} from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

export default function PostForm({create}){
    const [form, setForm] = useState({name: "", body: ""})

    return(
        <div>
            <MyInput placeholder="Название поста..." value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}></MyInput>
            <MyInput placeholder="Описание поста..." value={form.body} onChange={(e) => setForm({...form, body: e.target.value})}></MyInput>
            <MyButton onClick={function() {create(form, setForm)}}>Создать пост</MyButton>
        </div>
    )
}

