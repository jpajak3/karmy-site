export default function Footer() {
  return (
    <footer className="bg-navy border-t border-stone/10 py-8">
      <div className="max-w-site mx-auto px-5 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="https://www.instagram.com/itsmekarmy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs text-stone hover:text-coral tracking-widest uppercase transition-colors duration-[180ms]"
        >
          @itsmekarmy
        </a>

        <p className="font-body text-[11px] text-stone/30">
          catch me outside
        </p>

        <p className="font-body text-[11px] text-stone/30">
          © {new Date().getFullYear()} Karmy
        </p>
      </div>
    </footer>
  )
}
