export default function HomePage() {
  return (
    <div className="min-h-screen font-sans">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-purplePrimary leading-tight">
            Smagūs mokomieji žaidimai vaikams
          </h2>
          <p className="text-lg md:text-xl text-purpleTextMedium max-w-xl">
            Tyrinėkite, žaiskite ir mokykitės su interaktyviais žaidimais, kurie
            pavers mokymąsi džiaugsmu!
          </p>
          <a
            href="/apie-mus"
            className="inline-block bg-purplePrimary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purpleDark transition"
          >
            Mūsų Tikslas
          </a>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="Vaikai žaidžia žaidimus"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </section>

      <section
        id="games"
        className="bg-white bg-opacity-90 rounded-lg shadow-lg max-w-7xl mx-auto p-10 mb-20"
      >
        <h3 className="text-3xl font-bold text-purpleTextMedium mb-8 text-center">
          Pasirink žaidimą ir pradėk mokytis
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {[
            {
              title: "Abėcėlės",
              description: "Mokykis raidžių per smagias užduotis.",
              icon: "🅰️",
            },
            {
              title: "Matematika",
              description: "Skaičiuok, spręsk užduotis ir pažink matematiką.",
              icon: "🔢",
            },
          ].map((game) => (
            <div
              key={game.title}
              className="bg-purpleLight rounded-lg p-6 text-center shadow-md hover:shadow-xl transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label={`Žaisti: ${game.title}`}
            >
              <div className="text-6xl mb-4">{game.icon}</div>
              <h4 className="text-xl font-semibold text-purplePrimary mb-2">
                {game.title}
              </h4>
              <p className="text-purpleTextMedium">{game.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        id="contact"
        className="bg-purplePrimary text-white py-12 px-6 text-center"
      >
        <h3 className="text-3xl font-bold mb-4">Susisiekite su mumis</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Jei turite žaidimų pasiūlymų, pastebėjote klaidų ar tiesiog norite
          pasidalinti idėjomis – labai lauksime jūsų žinutės!
        </p>
        <a
          href="mailto:contact@learnplay.com"
          className="inline-block bg-white text-purplePrimary font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Parašykite mums
        </a>
      </section>
    </div>
  );
}
