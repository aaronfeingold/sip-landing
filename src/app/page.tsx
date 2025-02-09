import React from "react";
import { Facebook, Instagram, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-pink-900 text-white p-4 isolate px-6 pt-14 lg:px-8 overflow-hidden">
      {/* Upper left gradient */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
        />
      </div>

      {/* Center gradient */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative w-[36.125rem] rotate-[45deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
        />
      </div>

      {/* Lower right gradient */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative w-[36.125rem] translate-x-1/3 rotate-[60deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
          Coming Soon: SIP in Style
        </h1>
        <p className="text-xl mb-8 text-pink-100">
          We're launching our new platform soon. Stay tuned!
        </p>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <a
            href="https://forms.gle/yourGoogleFormLink"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-white font-bold hover:bg-white hover:text-pink-900 transition-all duration-300 backdrop-blur-sm bg-white/10 rounded-lg"
          >
            Join the Beta
          </a>
          <a
            href="https://venmo.com/yourVenmoUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-white font-bold hover:bg-white hover:text-pink-900 transition-all duration-300 backdrop-blur-sm bg-white/10 rounded-lg"
          >
            Support the Project
          </a>
        </div>

        <div className="mt-8 flex gap-6">
          <a
            href="https://facebook.com/yourFacebookPage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-200 transition-colors"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://instagram.com/yourInstagramPage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-200 transition-colors"
          >
            <Instagram size={24} />
          </a>
        </div>
      </main>

      <footer className="relative z-10 mt-10">
        <a
          href="https://yourprofessionalwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-pink-200 transition-colors"
        >
          <Globe size={16} />
          <span>Visit my Professional Site</span>
        </a>
      </footer>
    </div>
  );
}
