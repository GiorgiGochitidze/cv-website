export const metadata = {
  title: "Giorgi Gochitidze",
  description:
    "My portfolio website, where you can see more details about me, my projects, skills, etc",
};

import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
