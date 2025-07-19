import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
  });
const RootLayout = ({children}: {children: React.ReactNode}) => {
    return(
        <html lang="en">
            <body className={`${poppins.className} antialiased flex flex-col`}>{children}</body>
        </html>
    )
}

export default RootLayout