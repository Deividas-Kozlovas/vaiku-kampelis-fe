export default function ContactUsPage() {
  return (
    <section className="min-h-screen bg-opacity-90 py-16 px-6 flex flex-col items-center justify-center text-purpleTextDark font-sans">
      <div className="bg-white p-10 max-w-2xl w-full text-center rounded-lg">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
          alt="Vaikai rašo laišką"
          className="w-40 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4 text-purplePrimary">
          Susisiekite su mumis
        </h1>
        <p className="text-lg mb-8 text-purpleTextMedium">
          Jei turite klausimų, pasiūlymų ar tiesiog norite pasakyti labas –
          parašykite mums!
        </p>

        <div className="bg-purpleLight bg-opacity-30 rounded-lg shadow-lg p-6 text-left">
          <p className="text-lg mb-2 font-semibold">📧 El. paštas:</p>
          <a
            href="mailto:contact@vaikukampelis.lt"
            className="text-purplePrimary underline break-all"
          >
            contact@vaikukampelis.lt
          </a>
          <p className="text-sm text-purpleTextLight mt-10 italic">
            *Mes nesaugome jokių jūsų duomenų. Laiškai siunčiami el. paštu ir
            nėra išsaugomi svetainėje.*
          </p>
        </div>
      </div>
    </section>
  );
}
