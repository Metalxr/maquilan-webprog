const Footer = () => {
  return (
    <footer className="flex items-center border-t-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          © {new Date().getFullYear()} Pokemon Compendium. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;