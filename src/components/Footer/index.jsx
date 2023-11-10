import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <section id="footer" className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-28 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center flex-col gap-y-4">
            <div className="flex items-center justify-center gap-x-6">
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-700">© 2023 Your Company | All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
