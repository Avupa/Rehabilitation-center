import React, { memo, useRef, useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { addDoctors } from './doctorSlice';
import './style.css';

function AddDoctor(): JSX.Element {
  const firstNameInput = useRef<HTMLInputElement>(null);
  const secondNameInput = useRef<HTMLInputElement>(null);
  const patronymicInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);
  const shortDescriptionInput = useRef<HTMLInputElement>(null);
  const slotInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const formData = new FormData();

  const doctorAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const firstName = firstNameInput.current?.value;
    const secondName = secondNameInput.current?.value;
    const patronymic = patronymicInput.current?.value;
    const description = descriptionInput.current?.value;
    const shortDescription = shortDescriptionInput.current?.value;
    const slot = slotInput.current?.value;

    formData.append('firstName', firstName)
    formData.append('secondName', secondName)
    formData.append('patronymic', patronymic)
    formData.append('description', description)
    formData.append('shortDescription', shortDescription)
    formData.append('slot', slot)
    
    if (selectedFile) {
        try {
          formData.append('photo', selectedFile);
          dispatch(addDoctors(formData));
        } catch (error) {
          console.error(error);
        }
      }
}
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <div className="cardSmall">
      <form onSubmit={doctorAdd}>
        <div className="mb-6">
          <input name="firstName" type="text" ref={firstNameInput} placeholder="введите имя" />
        </div>
        <div className="mb-6">
          <input
            name="secondName"
            type="text"
            ref={secondNameInput}
            placeholder="введите фамилию"
          />
        </div>
        <div className="mb-6">
          <input
            name="patronymic"
            type="text"
            ref={patronymicInput}
            placeholder="введите отчество"
          />
        </div>
        <div className="mb-10">
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <div className="mb-6">
          <input
            name="description"
            type="text"
            ref={descriptionInput}
            placeholder="введите описание"
          />
        </div>
        <div className="mb-6">
          <input
            name="shortdescription"
            type="text"
            ref={shortDescriptionInput}
            placeholder="введите короткое описание"
          />
        </div>
        <input
          name="slot"
          type="number"
          ref={slotInput}
          placeholder="введите время стандартного приема"
        />

        <div className="main_link_button w-44 h-14">
          <button className="" type="submit">
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
}

export default memo(AddDoctor);
