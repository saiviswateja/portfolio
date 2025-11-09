export default function Header() {
  return (
    <header className="container py-6 sm:py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Sai Viswa Teja Sreerama</h1>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm flex-wrap">
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#articles" className="hover:underline">Articles</a>
        </nav>
      </div>
    </header>
  )
}

