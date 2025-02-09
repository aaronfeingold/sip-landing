export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-200 text-black p-4">
      <main className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4">
          Coming Soon: SIP, your Somm in Palm
        </h1>
        <p className="text-xl mb-8">
          SIP in Style this Valentine's Day. Stay tuned!
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="https://forms.gle/yourGoogleFormLink"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-black font-bold hover:bg-gray-200"
          >
            Join the Beta
          </a>
          <a
            href="https://venmo.com/yourVenmoUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-black font-bold hover:bg-gray-200"
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

      <footer className="mt-10">
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
