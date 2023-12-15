import React, { memo, useRef} from 'react'
import { useAppDispatch } from '../../store/store'
import { addDoctors } from './doctorSlice'
import './style.css';

function AddDoctor():JSX.Element {
const firstNameInput = useRef<HTMLInputElement>(null)
const secondNameInput = useRef<HTMLInputElement>(null)
const patronymicInput = useRef<HTMLInputElement>(null)
const imgInput = useRef<HTMLInputElement>(null)
const descriptionInput = useRef<HTMLInputElement>(null)
const slotInput = useRef<HTMLInputElement>(null)
const dispatch = useAppDispatch()

const doctorAdd = (e:React.FormEvent<HTMLFormElement>):void=>{
e.preventDefault()
const firstName = firstNameInput.current?.value
const secondName = secondNameInput.current?.value
const patronymic = patronymicInput.current?.value
const img = imgInput.current?.value
const description = descriptionInput.current?.value
const slot = slotInput.current?.value

const formData = new FormData()

formData.append('firstName', firstName)
formData.append('secondName', secondName)
formData.append('patronymic', patronymic)
formData.append('img', img)
formData.append('description', description)
formData.append('slot', slot)

dispatch(addDoctors(formData))
}

  return (
    <div>
        <form onSubmit={doctorAdd}>
            <input name='firstName' type='text' ref={firstNameInput} placeholder='введите имя'/>
            <input name='secondName' type='text' ref={secondNameInput} placeholder='введите фамилию'/>
            <input name='patronymic' type='text' ref={patronymicInput} placeholder='введите отчество'/>
            <input name='img' type='file'  ref={imgInput}/>
            <input name='description' type='text' ref={descriptionInput} placeholder='введите описание'/>
            <input name='slot' type='number' ref={slotInput} placeholder='введите время стандартного приема'/>
            <button type='submit'>add</button>
        </form>
    </div>
  )
}

export default memo(AddDoctor)