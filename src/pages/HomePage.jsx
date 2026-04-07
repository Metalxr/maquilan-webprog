import Button from "../components/Button";
import main from "../assets/main.jpg";
import Snorlax from "../assets/Snorlax.png";
import Tyranitar from '../assets/Tyranitar.png';
import Blastoise from '../assets/Blastoise.png';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Pokemon Database
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Welcome to Pokemon Compendium
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Explore detailed information about Pokemon from different generations.
              Browse stats, types, abilities, and discover your favorite Pokemon all in one place.
            </p>

            <div className="mt-6">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-65 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img
                src={main}
                alt="Hero"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Users and Contributions
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Pokedex Overview
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">50</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Members
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">26</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Online
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Offline
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">04</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Pokemon Info
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Pokemon
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Pokemon from Gen 1 to 3
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="aspect-4/3 overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src={Snorlax}
                alt="Feature"
                className="w-full h-full object-contain p-4"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Snorlax
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A massive, sleepy Pokemon known for blocking roads while it naps.
              Despite its size, Snorlax is calm and very powerful.
            </p>

            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="aspect-4/3 overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src={Tyranitar}
                alt="Feature"
                className="w-full h-full object-contain p-4"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Tyranitar
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A Rock and Dark type Pokemon with incredible strength.
              Tyranitar can reshape landscapes and is known for its destructive power.
            </p>

            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="aspect-4/3 overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src={Blastoise}
                alt="Feature"
                className="w-full h-full object-contain p-4"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Blastoise
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
             A Water type Pokemon equipped with powerful water cannons on its shell.
             Blastoise can blast water with enough force to pierce steel.
            </p>

            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
