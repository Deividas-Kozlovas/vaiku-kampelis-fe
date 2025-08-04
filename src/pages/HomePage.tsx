// import GameNavigation from "../components/navigation/CardNavigation.component";
// import confettiImage from "../assets/images/background/confetti-doodles.svg";
import numbersButton from "../assets/images/buttons/numbers-button.jpeg";
import lettersButton from "../assets/images/buttons/letters-button.jpeg";
import colorsButton from "../assets/images/buttons/colors-button.jpeg";
// import wordsButton from "../assets/images/buttons/words-button.jpeg";
import heroImage from "../assets/images/complimentary/landingPage.png";
import CardNavigation from "../components/navigation/CardNavigation.component";
import coloringButton from "../assets/images/printables/coloring/Bob-Minion-Poking-Tongue-Out-Coloring-Page-742x960.jpg";
import printableMathButton from "../assets/images/printables/math/Screenshot from 2025-08-03 18-47-27.png";

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

      <section className="max-w-7xl mx-auto p-10 mb-20 bg-white rounded-t-[200px] rounded-b-[80px] shadow-[0_8px_30px_rgba(124,58,237,0.15)] border border-purpleLight/30 overflow-hidden">
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold inline-block bg-purplePrimary text-white mb-8 rounded-[30px] px-6 py-2 shadow-lg">
            Pasirink žaidimą ir pradėk mokytis
          </h3>
        </div>

        <CardNavigation items={games} />
      </section>

      <section className="max-w-7xl mx-auto p-10 mb-20 bg-white rounded-t-[200px] rounded-b-[80px] shadow-[0_8px_30px_rgba(124,58,237,0.15)] border border-purpleLight/30 overflow-hidden">
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold inline-block bg-purplePrimary text-white mb-8 rounded-[30px] px-6 py-2 shadow-lg">
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
