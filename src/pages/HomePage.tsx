// import GameNavigation from "../components/navigation/CardNavigation.component";
// import confettiImage from "../assets/images/backgrounds/confetti-doodles.svg";
import numbersButton from "../assets/images/buttons/math-button.webp";
import lettersButton from "../assets/images/buttons/letter-button.webp";
import colorsButton from "../assets/images/buttons/colors-button.webp";
// import wordsButton from "../assets/images/buttons/words-button.jpg";
import heroImage from "../assets/images/pages/landing-page.png";
import CardNavigation from "../components/CardNavigation.component";
import SEO from "../components/SEO";
import coloringButton from "../assets/images/buttons/coloring-button.webp";
import printableMathButton from "../assets/images/printables/math/math-worksheet-1.png";

export default function HomePage() {
  const games = [
    {
      path: "/zaidimai/rask-skaiciu-pagal-zodi",
      image: numbersButton,
      altText: "Žaidimai su skaičiais, lavinantys matematinius įgūdžius",
      text: "Žaidimai su skaičiais",
    },
    {
      path: "/zaidimai/rask-raides",
      image: lettersButton,
      altText: "Žaidimai su raidėm, lavinantys kalbos įgūdžius",
      text: "Žaidimai su raidėm",
    },
    {
      path: "/zaidimai/rask-spalvas",
      image: colorsButton,
      altText: "Žaidimai su spalvom",
      text: "Žaidimai su spalvom",
    },
    // {
    //   path: "/zaidimai/rask-vonios-diagtus",
    //   image: wordsButton,
    //   altText: "Žaidimai su žodžiais",
    //   text: "Žaidimai su žodžiais",
    // },
  ];

  const printable = [
    {
      path: "/spauda/spalvinimo-lapai",
      image: coloringButton,
      altText: "Spalvinimo lapai",
      text: "Spalvinimo lapai",
    },
    {
      path: "/spauda/matematikos-spalvinimo-lapai",
      image: printableMathButton,
      altText: "Matematikos spausdinamas",
      text: "Matematikos spausdinamas",
    },
    // {
    //   path: "/zaidimai/rask-spalvas",
    //   image: colorsButton,
    //   altText: "Žaidimai su spalvom",
    //   text: "Žaidimai su spalvom",
    // },
    // {
    //   path: "/zaidimai/rask-vonios-diagtus",
    //   image: wordsButton,
    //   altText: "Žaidimai su žodžiais",
    //   text: "Žaidimai su žodžiais",
    // },
  ];
  return (
    <div className="min-h-screen font-sans">
      <SEO
        title="Vaikų kampelis – Smagūs mokomieji žaidimai ir spausdinami lapai"
        description="Interaktyvūs lavinamieji žaidimai vaikams: spalvos, raidės, skaičiai. Nemokami spausdinami užduočių lapai. Mokymasis per žaidimą!"
        canonical="https://www.vaikukampelis.lt/"
        ogImage={heroImage}
      />
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
            src={heroImage}
            alt="Vaikai žaidžia žaidimus"
            className="w-full md:max-w-lg lg:max-w-xl mx-auto"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 sm:p-8 md:p-10 mb-20 bg-white rounded-t-4xl sm:rounded-t-8xl md:rounded-t-9xl lg:rounded-t-10xl rounded-b-3xl sm:rounded-b-5xl md:rounded-b-6xl lg:rounded-b-7xl shadow-[0_8px_30px_rgba(124,58,237,0.15)] border border-purpleLight/30 overflow-hidden">
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold inline-block bg-purplePrimary text-white mb-8 rounded-3xl px-6 py-2 shadow-lg">
            Pasirink žaidimą ir pradėk mokytis
          </h3>
        </div>

        <CardNavigation items={games} />
      </section>

      <section className="max-w-7xl mx-auto p-6 sm:p-8 md:p-10 mb-20 bg-white rounded-t-4xl sm:rounded-t-8xl md:rounded-t-9xl lg:rounded-t-10xl rounded-b-3xl sm:rounded-b-5xl md:rounded-b-6xl lg:rounded-b-7xl shadow-[0_8px_30px_rgba(124,58,237,0.15)] border border-purpleLight/30 overflow-hidden">
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold inline-block bg-purplePrimary text-white mb-8 rounded-3xl px-6 py-2 shadow-lg">
            Pasirinkite kategoriją spausdinimui
          </h3>
        </div>

        <CardNavigation items={printable} />
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
          href="mailto:info@vaikukampelis.lt"
          className="inline-block bg-white text-purplePrimary font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Parašykite mums
        </a>
      </section>
    </div>
  );
}
