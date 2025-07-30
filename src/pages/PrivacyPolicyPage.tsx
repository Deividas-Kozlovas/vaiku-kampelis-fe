export default function PrivacyPolicyPage() {
  return (
    <section className=" bg-opacity-90 px-6 py-16  flex flex-col items-center  text-purpleTextDark font-sans">
      <div className=" bg-white text-purpleTextDark  px-6 py-16  mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-purplePrimary flex items-center justify-center gap-3">
          🔒 Privatumo politika
        </h1>

        <p className="text-lg mb-6 text-center max-w-xl mx-auto">
          Sveiki! 👋 <strong>Vaikukampelis.lt</strong> – tai linksma ir saugi
          vieta vaikams žaisti ir mokytis. Čia mes labai rūpinamės tavo
          privatumu ir saugumu!
        </p>

        <section className="mb-10 p-6 bg-purpleLight rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-purpleTextMedium flex items-center gap-2">
            1. Jokie duomenys nėra renkami
          </h2>
          <p>
            Mes nerenkame jokios tavo asmeninės informacijos. Visi žaidimai
            veikia tiesiog tavo naršyklėje – be prisijungimų ir registracijų!
          </p>
        </section>

        <section className="mb-10 p-6 bg-purpleLight rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-purpleTextMedium flex items-center gap-2">
            2. Jokio trečiųjų šalių sekimo
          </h2>
          <p>
            Šioje svetainėje nėra reklamų, slapukų ar kitų įrankių, kurie
            stebėtų tavo veiklą. Tu esi saugus!
          </p>
        </section>

        <section className="mb-10 p-6 bg-purpleLight rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-purpleTextMedium flex items-center gap-2">
            3. Tėvų kontrolė
          </h2>
          <p>
            Tėveliai, jei turite klausimų apie privatumo taisykles, rašykite
            mums el. paštu:{" "}
            <a
              href="mailto:info@vaikukampelis.lt"
              className="text-purplePrimary underline"
            >
              info@vaikukampelis.lt
            </a>
            . Mes visada pasiruošę padėti!
          </p>
        </section>

        <section className="mb-10 p-6 bg-purpleLight rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-purpleTextMedium flex items-center gap-2">
            4. Atnaujinimai
          </h2>
          <p>
            Privatumo politika gali būti keičiamasi bet kada, kai pridedame
            naujų žaidimų ar funkcijų. Sekite naujienas ir būkite ramūs!
          </p>
        </section>

        <p className="text-sm text-purpleTextLight mt-10 text-center italic">
          Paskutinį kartą atnaujinta: 2025-03-29
        </p>
      </div>
    </section>
  );
}
