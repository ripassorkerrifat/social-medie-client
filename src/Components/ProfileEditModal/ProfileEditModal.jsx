import React, { useContext } from "react";
import { useAddProfileOrCoverPhotoOrInfoMutation } from "../../app/fetures/userApi/userSlice";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Loader from "../Spiner/Loader";

const ProfileEditModal = ({ setOpenModal, data }) => {
  const { user } = useContext(AuthContext);
  const [addPersonalInfo, { isError, isLoading }] =
    useAddProfileOrCoverPhotoOrInfoMutation();

  const handleUpdateInfo = (event) => {
    event.preventDefault();
    const form = event.target;
    const bio = form.bio.value;
    const collage = form.collage.value;
    const university = form.university.value;
    const currentLocation = form.currentLocation.value;
    const parmanentLocation = form.parmanentLocation.value;

    const personalInfo = {
      bio,
      collage,
      university,
      currentLocation,
      parmanentLocation,
      email: user.email,
    };
    addPersonalInfo(personalInfo);
    setOpenModal(false);
  };

  if (isError) {
    return (
      <>
        <p>Soemthing went wrong in updated personal information...</p>
      </>
    );
  }

  return (
    <div>
      <input type="checkbox" id="profile-edit-modal" className="modal-toggle" />
      <form onSubmit={handleUpdateInfo} className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="profile-edit-modal"
            className="inline-flex bg-gray-300 rounded-full p-1 absolute right-3 top-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
          <h3 className="text-lg font-bold">
            Add or edit your personal info...
          </h3>
          <div className="form-control w-full">
            <label className="label">
              <span className="text-base">Bio</span>
            </label>
            <input
              type="text"
              name="bio"
              defaultValue={data?.bio}
              placeholder="Write your bio..."
              className="input  focus:border-secondary input-bordered w-full focus:outline-none"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="text-base">Collage</span>
            </label>
            <input
              type="text"
              name="collage"
              placeholder="Collage name...."
              defaultValue={data?.collage}
              className="input  focus:border-secondary input-bordered w-full focus:outline-none"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="text-base">University</span>
            </label>
            <input
              type="text"
              name="university"
              placeholder="University name...."
              defaultValue={data?.university}
              className="input  focus:border-secondary input-bordered w-full focus:outline-none"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="text-base">Current location</span>
            </label>
            <input
              type="text"
              name="currentLocation"
              placeholder="Current location...."
              defaultValue={data?.currentLocation}
              className="input  focus:border-secondary input-bordered w-full focus:outline-none"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="text-base">Parmanent location</span>
            </label>
            <input
              type="text"
              name="parmanentLocation"
              placeholder="Parmanent location...."
              defaultValue={data?.parmanentLocation}
              className="input  focus:border-secondary input-bordered w-full focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-[#ff059b]  text-center w-full mt-3 text-gray-200 text-sm px-4 py-[8px]  rounded-md inline-block "
          >
            {isLoading ? <Loader /> : " Add/Edit Info"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditModal;
