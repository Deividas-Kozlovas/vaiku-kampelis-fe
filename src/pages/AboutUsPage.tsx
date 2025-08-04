import AboutUsImage from "../assets/images/complimentary/AboutUsPage.png";

export default function AboutUsPage() {
  return (
    <section className=" bg-opacity-90 px-6 py-16  flex flex-col items-center  text-purpleTextDark font-sans">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col md:flex-row items-center text-purplePrimary">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src={AboutUsImage}
            alt="Happy kids playing and learning illustration"
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
          <h3 className="text-3xl font-bold mb-6">Apie vaikukampelis.lt</h3>
          <p className="text-lg max-w-xl mx-auto md:mx-0 text-purpleTextDark leading-relaxed">
            Kiekvienas, susilaukęs vaiko, trokšta padėti jam augti, tobulėti ir
            pažinti pasaulį. Šios svetainės tikslas – suteikti vaikams galimybę
            mokytis žaismingai ir pagal jų individualų tempą. Nesvarbu, ar
            vaikas vystosi greičiau, ar susiduria su iššūkiais – mes tikime, kad
            kiekvienas nusipelno saugios, įtraukios ir įkvepiančios mokymosi
            aplinkos. Vaikukampelis.lt – tai vieta, kur mažieji gali tyrinėti,
            žaisti ir augti, o tėvai gali būti ramūs, kad jų vaikui suteikiama
            kokybiška, rūpestinga pagalba.
          </p>
        </div>
      </div>
    </section>
  );
}
