export default function WelcomeSplash() {
    return (
        <div className="isolate text-secondary dark:text-primary">
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <div>
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    Go from <span className="text-brand" aria-hidden="true">
                                        lease to loan
                                    </span>
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-trinary sm:text-center">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                                    amet fugiat veniam occaecat fugiat aliqua.
                                </p>
                                <form className="group relative">
                                    <div className="mt-20 flex gap-x-4 sm:justify-center">
                                        <svg width="20" height="20" fill="currentColor" className="absolute left-5 top-1/2 -mt-2.5 text-slate-500 pointer-events-none group-focus-within:text-brand" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                                        </svg>
                                        <input className="inline-block bg-slate-200 dark:bg-slate-800 focus:ring-2 focus:ring-brand dark:focus:ring-brand focus:outline-none w-full appearance-none text-base leading-6 placeholder-slate-500 rounded-md py-2 pl-12 ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm" type="text" aria-label="VIN or License Plate Number" placeholder="VIN or License Plate Number"></input>
                                        <a
                                            href="#"
                                            className="inline-block rounded-lg bg-brand px-4 py-5 w-4/12 text-base text-center text-white font-semibold leading-7 shadow-sm ring-1 ring-brand hover:bg-brand hover:ring-brand hover:bg-indigo-400 dark:hover:bg-indigo-600"
                                        >
                                            Get started{' '}
                                            <span aria-hidden="true">
                                                &rarr;
                                            </span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
