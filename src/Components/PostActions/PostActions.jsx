import React, { Fragment } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import PostDeleteModal from "../PostDeleteModal/PostDeleteModal";
import UpdatePostModal from "../UpdatPostModal/UpdatePostModal";
import { useState } from "react";

const PostActions = ({ post }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="h-7 w-7 hover:bg-slate-300 bg-slate-200 rounded-full ">
            <BsThreeDots className="inline-flex items-center pl-1 text-2xl mr-2" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <label
                    htmlFor="delete-post"
                    onClick={() => setShowDeleteModal(true)}
                    className={`${
                      active ? "bg-[#ff059b] text-white" : "text-gray-900"
                    } group inline-flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <MdDelete className="mr-1 h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MdDelete className="mr-1 h-6 w-6" aria-hidden="true" />
                    )}
                    Delete
                  </label>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <label
                    htmlFor="update-post"
                    onClick={() => setShowUpdateModal(true)}
                    className={`${
                      active ? "bg-[#ff059b] text-white" : "text-gray-900"
                    } group inline-flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <GrDocumentUpdate
                        className="mr-1 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <GrDocumentUpdate
                        className="mr-1 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Update
                  </label>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {showDeleteModal && (
        <PostDeleteModal
          id={post._id}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
      {showUpdateModal && (
        <UpdatePostModal post={post} setShowUpdateModal={setShowUpdateModal} />
      )}
    </div>
  );
};

export default PostActions;
