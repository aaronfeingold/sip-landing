// src/app/page.js
export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-pink-900 text-white p-4 isolate px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon: SIP in Style</h1>
        <p className="text-xl mb-8">
          We're launching our new platform soon. Stay tuned!
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="https://forms.gle/yourGoogleFormLink"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-white font-bold hover:bg-white hover:text-pink-900 transition-colors"
          >
            Join the Beta
          </a>
          <a
            href="https://venmo.com/yourVenmoUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-white font-bold hover:bg-white hover:text-pink-900 transition-colors"
          >
            Support the Project
          </a>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href="https://facebook.com/yourFacebookPage"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/yourInstagramPage"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Instagram
          </a>
        </div>
      </main>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <footer className="relative z-10 mt-10">
        <a
          href="https://yourprofessionalwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Visit my Professional Site
        </a>
      </footer>
    </div>
  );
}
