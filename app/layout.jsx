import { Bebas_Neue, Inter, Lora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata = {
  title: "Sri Harsha Ponukumati — Full-Stack Developer",
  description:
    "Portfolio of Sri Harsha Ponukumati: full-stack developer and ML engineer building scalable, user-centric software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bebas.variable} ${inter.variable} ${lora.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
