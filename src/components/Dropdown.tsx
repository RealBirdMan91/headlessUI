import { Fragment } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";

function Dropdown() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="text-white font-semibold text-lg focus:outline-none">
        Account
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0 translate-x-[160px]"
        enterTo="transform scale-100 opacity-100 translate-x-0"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100 translate-x-0"
        leaveTo="transform scale-95 opacity-0 translate-x-[160px]"
      >
        <Menu.Items className="absolute top-0 right-[-14px] bg-slate-100 w-60 rounded-md mt-12 shadow-md focus:outline-none">
          <div className="p-1 flex flex-col">
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={clsx(
                    "px-2 py-4 rounded-md text-left text-sm text-slate-600",
                    active && "bg-purple-200"
                  )}
                  to="/settings"
                >
                  Settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={clsx(
                    "px-2 py-4 rounded-md text-left text-sm text-slate-600",
                    active && "bg-purple-200"
                  )}
                >
                  Logout
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={clsx(
                    "px-2 py-4 rounded-md text-left text-sm text-slate-600",
                    active && "bg-purple-200"
                  )}
                  to="/help"
                >
                  I got hacked
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
