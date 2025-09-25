export const metadata = {
  title: "Giorgi Gochitidze",
  description:
    "My portfolio website, where you can see more details about me, my projects, skills, etc",
};

import "@/styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
