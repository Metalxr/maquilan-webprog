import {Outlet} from 'react-router-dom';
import Intro from "../assets/intro.gif";

const AuthLayout = () => {
    return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
        <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
            {/* Left decorative panel */}
            <div className="flex items-center justify-center border-b-2 border-zinc-300 bg-zinc-200 p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-zinc-300 lg:p-16">

                    <img
                      src={Intro}
                      alt="Auth visual"
                      className="w-full rounded-2xl object-cover shadow-lg"
                    />

            </div>

            {/* Right form panel */}
            <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
                <div className='mx-auto w-full max-w-md'>
                    <Outlet />
                </div>
            </main>
        </div>
    </section>
    )
};

export default AuthLayout;
