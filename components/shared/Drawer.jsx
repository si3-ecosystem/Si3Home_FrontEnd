import {
  Dialog,
  Transition,
  TransitionChild,
  TransitionRoot,
  DialogPanel,
} from "@heroicons/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import React, { Fragment } from "react";

export default function Drawer({ open, setOpen, children, ...props }) {
  return (
    <div>
      {" "}
      <TransitionRoot show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setOpen}>
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            s
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex justify-between px-4 py-4 items-center border-b border-gray-200">
                  <button onClick={() => setOpen(false)}>
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="px-4">{children}</div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  );
}
