import React from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const TailWind = () => {
  const people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More people...
  ];
  return (
    <div>
      <div class="min-h-screen flex items-center justify-center bg-blue-400">
        <div class="bg-white p-16 rounded shadow-2x1 w-1/2">
          <h2 class="text-3xl font-bold mb-10 text-gray-800">
            Create Your Account
          </h2>

          <form class="space-y-5">
            <div>
              <label class="block mb-1 font-bold text-gray-500">Name</label>
              <input
                type="text"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">Email</label>
              <input
                type="email"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">Password</label>
              <input
                type="password"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div class="flex items-center">
              <input type="checkbox" id="agree" />
              <label for="agree" class="ml-2 text-gray-700 text-sm">
                I agree to the terms and privacy.
              </label>
            </div>

            <div>
              <button class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TailWind;
