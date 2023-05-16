export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="pt-20">{children}
    <div className="sm:h-40"></div>
  </section>
}