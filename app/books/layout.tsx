export default function BookLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  )
}