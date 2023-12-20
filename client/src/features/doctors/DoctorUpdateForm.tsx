import React, { useState } from 'react';
import type { Doctor } from './type';
import { useAppDispatch } from '../../store/store';
import { updateDoctors } from './doctorSlice';
import './style.css';

function DoctorUpdateForm({
  setShowUpdate,
  doctor,
}: {
  setShowUpdate: (status: boolean) => void;
  doctor: Doctor;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState(doctor.firstName);
  const [secondName, setSecondName] = useState(doctor.secondName);
  const [patronymic, setPatronymic] = useState(doctor.patronymic);
  const [description, setDescription] = useState(doctor.description);
  const [img, setImg] = useState(doctor.img);
  const [slot, setSlot] = useState(doctor.slot);

  const update = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      updateDoctors({ id: doctor.id, firstName, secondName, patronymic, description, img, slot }),
    );
    setShowUpdate(false);
  };
  return (
    <form onSubmit={update}>
      <input
        name="firstName"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        name="secondName"
        type="text"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
      <input
        name="patronymic"
        type="text"
        value={patronymic}
        onChange={(e) => setPatronymic(e.target.value)}
      />
      <input
        name="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input name="img" type="text" value={img} onChange={(e) => setImg(e.target.value)} />
      <input name="slot" type="text" value={slot} onChange={(e) => setSlot(Number(e.target.value))} />
      <button className="save" type="submit">
        сохранить изменения
      </button>
    </form>
  );
}

export default DoctorUpdateForm;
