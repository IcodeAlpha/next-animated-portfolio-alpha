import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Alpha Portfolio App",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${roboto.className}`}>
       <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
