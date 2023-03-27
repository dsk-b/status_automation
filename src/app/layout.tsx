import './globals.css'

export const metadata = {
  title: 'Status Automation',
  description: 'Status Automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className="box-border w-screen h-screen justify-center items-center bg-gradient-to-br from-teal-100 via-white to-teal-50 flex ">
        {children}
      </body>
    </html>
  )
}
