import React from "react";

const AllPhotos = ({ posts }) => {
  const photos = posts?.filter((p) => p.postImage);

  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold">Photos</h4>

      {photos?.length ? (
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-1 rounded-md mt-2 overflow-hidden">
          {photos?.map((photo, i) => (
            <img
              key={i}
              className="lg:h-20 md:h-16  w-full"
              src={photo.postImage}
              alt=""
            />
          ))}
        </div>
      ) : (
        <p className="mt-2">No photos uploaded</p>
      )}

      <hr className="border-b pageHr border-gray-400 mt-5 opacity-60" />
    </div>
  );
};

export default AllPhotos;
