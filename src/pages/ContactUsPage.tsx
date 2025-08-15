import ContactsImage from "../assets/images/pages/contact-us.png";

export default function ContactUsPage() {
  return (
    <section className="px-6 py-16 flex flex-col items-center text-purpleTextDark font-sans">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col md:flex-row items-center text-purplePrimary max-w-5xl mx-auto">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src={ContactsImage}
            alt="Vaikai rašo laišką"
            className="
             w-full
             md:max-w-lg
             lg:max-w-xl
             xl:max-w-2xl
             mx-auto
           "
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left px-6">
          <h1 className="text-4xl font-bold mb-4">Susisiekite su mumis</h1>
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
      </div>
    </section>
  );
}
