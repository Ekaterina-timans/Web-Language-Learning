import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./assets/styles/globals.scss";
import { SITE_NAME } from "./configs/seo.constants";
import { AuthProvider } from "providers/AuthProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
  description: "An application for learning foreign words",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
            {children}
            <Toaster
              position='bottom-right'
              duration={1500}
              style={{ padding: '6px', borderRadius: '5px' }}
            />
          </AuthProvider>
      </body>
    </html>
  );
}
