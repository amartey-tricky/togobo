import { Merriweather, Libre_Baskerville, Lilita_One, Margarine } from "next/font/google"

export const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin", "latin-ext"],
})

export const libre = Libre_Baskerville({
  weight: ["400", "700"],
  style: "italic",
  subsets: ["latin", "latin-ext"]
})

export const lilita = Lilita_One({
  weight: ["400"],
  style: "normal",
  subsets: ["latin", "latin-ext"]
})

export const margarine = Margarine({
  weight: ["400"],
  style: "normal",
  subsets: ["latin", "latin-ext"]
})