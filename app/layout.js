import './globals.css'

export const metadata = {
  title: 'Zafeer Ahamed',
  description: 'I am a Software Engineer, Network Engineer, Cloud Engineer, Systems Engineer',
  keywords: 'Software Engineer, AWS, Tailwind CSS, React, Nodejs, HTML, CSS, Python, JavaScript, SEO, Web development, Web Developer, Software Developer, Backend Developer, Backend Engineer, Frontend Developer, Frontend Engineer, Linux, Networking, Flask, Fast API, PostgreSQL, MySQL, MongoDB, Figma, Git'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Zafeer Ahamed</title>
        <link rel="icon" href="/profile.ico"></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
