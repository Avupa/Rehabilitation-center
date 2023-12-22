import React, { useState, useRef } from 'react';
import type { Doctor } from '../redux/types/type';
import { useAppDispatch } from '../../../store/store';
import { updateDoctors } from '../redux/doctorSlice';
import '../style.css';

type TypeDoctorUpdateForm = {
  setShowUpdate: (status: boolean) => void;
  doctor: Doctor;
  handleContentClick: (e: React.MouseEvent) => void;
};

function DoctorUpdateForm({
  setShowUpdate,
  doctor,
  handleContentClick,
}: TypeDoctorUpdateForm): JSX.Element {
  const dispatch = useAppDispatch();

  const firstNameInput = useRef<HTMLInputElement>(null);
  const secondNameInput = useRef<HTMLInputElement>(null);
  const patronymicInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);
  const shortDescriptionInput = useRef<HTMLInputElement>(null);
  const slotInput = useRef<HTMLInputElement>(null);

  // const [firstName, setFirstName] = useState(doctor.firstName);
  // onst [secondName, setSecondName] = useState(doctor.secondName);
  // const [patronymic, setPatronymic] = useState(doctor.patronymic);
  // const [description, setDescription] = useState(doctor.description);
  // const [shortDescription, setShortDescription] = useState(doctor.shortDescription);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const [slot, setSlot] = useState(doctor.slot);

  const formData = new FormData();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const update = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const firstName = firstNameInput.current?.value;
    const secondName = secondNameInput.current?.value;
    const patronymic = patronymicInput.current?.value;
    const description = descriptionInput.current?.value;
    const shortDescription = shortDescriptionInput.current?.value;
    const slot = slotInput.current?.value;

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
        void dispatch(updateDoctors({ id: doctor.id, obj: formData }));
        setShowUpdate(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="modal_background" onClick={() => setShowUpdate(false)}>
      <div className="modal_absolut " onClick={handleContentClick}>
        {doctor.description}
        <form onSubmit={update}>
          <div className="mb-6">
            <input
              name="firstName"
              type="text"
              defaultValue={doctor.firstName}
              ref={firstNameInput}
            />
          </div>
          <div className="mb-6">
            <input
              name="secondName"
              type="text"
              ref={secondNameInput}
              defaultValue={doctor.secondName}
            />
          </div>
          <div className="mb-6">
            <input
              name="patronymic"
              type="text"
              defaultValue={doctor.patronymic}
              ref={patronymicInput}
            />
          </div>
          <div className="mb-6">
            <input
              name="description"
              type="text"
              defaultValue={doctor.description}
              ref={descriptionInput}
            />
          </div>
          <div className="mb-6">
            <input
              name="shortDescription"
              type="text"
              defaultValue={doctor.shortDescription}
              ref={shortDescriptionInput}
            />
          </div>

          <div className="mb-6">
            <input name="photo" type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <div className="mb-6">
            <input name="slot" type="text" defaultValue={doctor.slot} ref={slotInput} />
          </div>
          <div className="main_link_button w-80 h-14">
            <button className="save" type="submit">
              сохранить изменения
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DoctorUpdateForm;
