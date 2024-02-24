import logo from "@/../public/assets/logo.png";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav class="bg-#EFDDFF text-purple-700">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-purple-400 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <Image src={logo} alt="logo" />
              </div>
              <div class="hidden sm:ml-6 sm:block lg:ml-[20%] lg:mt-[23px]">
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class=" hover:bg-purple-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    <b>Shop</b>
                  </a>
                  <a
                    href="#"
                    class=" hover:bg-purple-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    <b>Our Story</b>
                  </a>
                  <a
                    href="#"
                    class=" hover:bg-purple-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    <b> Gallery</b>
                  </a>
                  <a
                    href="#"
                    class=" hover:bg-purple-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    <b>Contact</b>
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                class="relative p-1 text-purple-700 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2 focus:ring-offset-purple-800"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">View notifications</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="h-6 w-6 text-purple-700"
                  fill="#602D89"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  />
                </svg>
              </button>

              <div class="relative ml-3">
                <button
                  type="button"
                  class="relative p-1 text-purple-700 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2 focus:ring-offset-purple-800"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">View notifications</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="h-6 w-6 text-purple-700"
                    fill="#602D89"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                    />
                  </svg>
                </button>
              </div>

              <div class="relative ml-3">
                <div>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2 text-purple-700">
            {/* <a
              href="#"
              class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a> */}
            <a
              href="#"
              class=" hover:bg-purple-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              <b>Shop</b>
            </a>
            <a
              href="#"
              class=" hover:bg-purple-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              <b>Our Story</b>
            </a>
            <a
              href="#"
              class=" hover:bg-purple-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              <b>Gallery</b>
            </a>
            <a
              href="#"
              class=" hover:bg-purple-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              <b>Contact</b>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
