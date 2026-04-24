export default function BuiltFromNairobi() {
  return (
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: "1440 / 560" }}>
      {/* Parallax background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/images/built-nairobi-bg.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Subtle left fade so text is legible */}
      <div className="absolute inset-0 bg-linear-to-r from-white/80 via-white/10 to-transparent" />

      {/* Copy — top left */}
      <div className="absolute top-[12%] left-[4%] flex flex-col gap-4 max-w-lg">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-navy/70">
          Origin · Africa
        </p>
        <h2 className="text-4xl text-brand-navy lg:text-6xl">
          Built from Nairobi.{" "}
          <span className="block">
            <span className="font-serif italic text-brand-gold">Reaching </span>
            the world.
          </span>
        </h2>
      </div>
    </section>
  );
}
