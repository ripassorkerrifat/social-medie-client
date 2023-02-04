import React from "react";

const ProfileEditModal = ({ setOpenModal }) => {
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
    };
    console.log(personalInfo);
    setOpenModal(false);
  };

  return (
    <div>
      <input type="checkbox" id="profile-edit-modal" className="modal-toggle" />
      <form onSubmit={handleUpdateInfo} className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="profile-edit-modal"
            class="inline-flex bg-gray-300 rounded-full p-1 absolute right-3 top-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
              className="input  focus:border-secondary input-bordered w-full focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-[#ff059b]  text-center w-full mt-3 text-gray-200 text-sm px-4 py-[8px]  rounded-md inline-block "
          >
            Add/Edit Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditModal;
