export default function ContactUsPage() {
  return (
    <section className=" bg-opacity-90 px-6 py-16  flex flex-col items-center  text-purpleTextDark font-sans">
      <div className=" bg-white text-purpleTextDark  px-6 py-16  mx-auto">
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
            href="mailto:info@vaikukampelis.lt"
            className="text-purplePrimary underline break-all"
          >
            info@vaikukampelis.lt
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
