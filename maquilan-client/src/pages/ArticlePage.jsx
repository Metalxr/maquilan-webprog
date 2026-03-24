import Button from "../components/Button";
import pokemonBlue from "../assets/pokemonBlue.jpg";
import pokemonGold from "../assets/pokemonGold.jpg";
import fireRed from "../assets/fireRed.jpg";
import Platinum from "../assets/platinum.jpg";

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Articles
        </p>

        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Featured articles about different Generations
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          Explore the history of Pokemon through different game generations.
          Each generation introduced new regions, Pokemon, mechanics, and adventures
          that shaped the Pokemon world we know today.
        </p>

        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Articles
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Generations from 1 to 4
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="aspect-4/3 overflow-hidden rounded-[1.25rem] bg-zinc-200">
                  <img
                      src={pokemonBlue}
                      alt="Feature"
                      className="w-full h-full object-contain p-4"
                  />
              </div>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Generation 01
            </p>

            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Pokemon Blue
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Pokemon Blue introduced players to the Kanto region, the original 151 Pokemon,
              and the classic journey of becoming a Pokemon Champion while battling Team Rocket.
            </p>

            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="aspect-4/3 overflow-hidden rounded-[1.25rem] bg-zinc-200">
                  <img
                      src={pokemonGold}
                      alt="Feature"
                      className="w-full h-full object-contain p-4"
                  />
              </div>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Generation 02
            </p>

            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Pokemon Gold
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Pokemon Gold expanded the world with the Johto region, added new Pokemon types,
              a day and night system, breeding mechanics, and the ability to revisit Kanto.
            </p>

            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="aspect-4/3 overflow-hidden rounded-[1.25rem] bg-zinc-200">
                  <img
                      src={fireRed}
                      alt="Feature"
                      className="w-full h-full object-contain p-4"
                  />
              </div>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Generation 03
            </p>

            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Pokemon FireRed
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Pokemon FireRed is a remake of the original Kanto games with improved graphics,
              new features, and expanded story content for a new generation of trainers.
            </p>

            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="aspect-4/3 overflow-hidden rounded-[1.25rem] bg-zinc-200">
                  <img
                      src={Platinum}
                      alt="Feature"
                      className="w-full h-full object-contain p-4"
                  />
              </div>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Generation 04
            </p>

            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Pokemon Platinum
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Pokemon Platinum enhanced the Sinnoh region with new story elements,
              the Distortion World, improved gameplay mechanics, and more Pokemon to discover.
            </p>

            <Button className="mt-4">Read More</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
