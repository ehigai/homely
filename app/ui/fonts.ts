import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const fontInter = inter.className;
export const fontJakartaSans = plusJakartaSans.className;
