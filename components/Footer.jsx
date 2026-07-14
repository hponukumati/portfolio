export default function Footer() {
  return (
    <footer className="border-t border-chalk/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-typewriter text-xs tracking-wider text-chalk/40 sm:flex-row">
        <p>© {new Date().getFullYear()} Sri Harsha Ponukumati</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
