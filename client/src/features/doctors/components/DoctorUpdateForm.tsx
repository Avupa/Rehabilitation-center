import React, { useState } from 'react';
import type { Doctor } from '../redux/types/type';
import { useAppDispatch } from '../../../store/store';
import { updateDoctors } from '../redux/doctorSlice';
import '../style.css';

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
  const [shortDescription, setShortDescription] = useState(doctor.shortDescription);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [slot, setSlot] = useState(doctor.slot);
  const formData = new FormData();

  const update = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    formData.append('firstName', firstName);
    formData.append('secondName', secondName);
    formData.append('patronymic', patronymic);
    formData.append('description', description);
    formData.append('shortDescription', shortDescription);
    formData.append('slot', slot);

    if (selectedFile) {
      console.log(selectedFile, 'i am innn');

      try {
        formData.append('photo', selectedFile);
        console.log(formData);
        dispatch(updateDoctors(doctor.id, formData));
        setShowUpdate(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <form onSubmit={update}>
      <div className="mb-6">
        <input
          name="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <input
          name="secondName"
          type="text"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <input
          name="patronymic"
          type="text"
          value={patronymic}
          onChange={(e) => setPatronymic(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <input
          name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <input
          name="shortDescription"
          type="text"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <input name="photo" type="file" onChange={handleFileChange} />
      </div>
      <div className="mb-6">
        <input
          name="slot"
          type="text"
          value={slot}
          onChange={(e) => setSlot(Number(e.target.value))}
        />
      </div>
      <div className="main_link_button w-80 h-14">
        <button className="save" type="submit">
          сохранить изменения
        </button>
      </div>
    </form>
  );
}

export default DoctorUpdateForm;
