import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Globe } from "lucide-react";
import sipTheOwl from "../../public/sipTheOwl.svg";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-pink-900 text-white p-4 isolate px-6 pt-14 lg:px-8 overflow-hidden">
      {/* Upper left gradient */}
      <div className="absolute top-0 left-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Center gradient */}
      <div className="absolute top-[calc(50%-30rem)] left-[calc(50%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-30rem)] sm:left-[calc(50%-30rem)]">
        <div
          className="relative aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Lower right gradient */}
      <div className="absolute bottom-0 right-[calc(50%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:right-[calc(50%-30rem)]">
        <div
          className="relative aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center text-center w-full max-w-md mx-auto">
        <div className="mb-12 w-full px-4">
          <Image
            src={sipTheOwl}
            alt="SIP in Style Owl Logo"
            width={192}
            height={192}
            className="w-48 h-48 md:w-56 md:h-56 object-contain hover:opacity-90 transition-opacity duration-300 mx-auto"
          />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200 px-4">
          Coming Soon: &quot;Somm in Palm&quot;
        </h1>

        <p className="text-lg md:text-xl mb-12 text-pink-100 px-4">
          SIP the Owl is serving elevated dining experiences in{" "}
          <b>New Orleans</b> this Valentine&apos;s
        </p>
        <div className="flex flex-col gap-4 w-full max-w-xs px-4">
          <a
            href="https://forms.gle/3uyzDNNS2qc7GnWG6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 border-2 border-white font-bold hover:bg-white hover:text-pink-900 transition-all duration-300 backdrop-blur-sm bg-white/10 rounded-lg text-lg"
          >
            Join the Beta Version
          </a>
          <a
            href="https://venmo.com/Aaron-Feingold"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 border-2 border-white font-bold hover:bg-white hover:text-pink-900 transition-all duration-300 backdrop-blur-sm bg-white/10 rounded-lg text-lg"
          >
            Support the Project
          </a>
        </div>

        <div className="mt-12 flex gap-8">
          <a
            href="https://facebook.com/yourFacebookPage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-200 transition-colors"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://instagram.com/yourInstagramPage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-200 transition-colors"
          >
            <Instagram size={32} />
          </a>
        </div>
      </main>

      <footer className="relative z-10 mt-16 mb-8">
        <a
          href="https://www.aaron-feingold.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-pink-200 transition-colors text-lg"
        >
          <Globe size={20} />
          <span>Learn About the Team</span>
        </a>
      </footer>
    </div>
  );
}
