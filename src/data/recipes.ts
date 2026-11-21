import type { ImageMetadata } from "astro";
import sate from "../assets/images/sate.jpg";
import toffee from "../assets/images/toffee_bar.jpg";
import batagor from "../assets/images/batagor.jpg";
import ronde from "../assets/images/wedang_ronde.jpg";
import latte from "../assets/images/peanut_butter_latte.jpg";

export type Category = "Hidangan" | "Camilan" | "Minuman" | "Dessert";

export interface Ingredient {
  name: string;
  qty: string;
}

export interface IngredientGroup {
  title: string;
  items: Ingredient[];
}

export interface Recipe {
  slug: string;
  title: string;
  category: Category;
  /** Short label shown on the badge, e.g. "Minuman hangat". */
  label: string;
  tagline: string;
  description: string;
  meta?: string;
  image: ImageMetadata;
  imageAlt: string;
  ingredients: IngredientGroup[];
  steps: string[];
}

export const CATEGORIES: Category[] = [
  "Hidangan",
  "Camilan",
  "Minuman",
  "Dessert",
];

// TODO(client): confirm the official social URLs.
export const LINKS = {
  instagram: "https://www.instagram.com/skippy_indonesia",
};

export const recipes: Recipe[] = [
  {
    slug: "sate-ayam",
    title: "Sate Ayam ala SKIPPY®",
    category: "Hidangan",
    label: "Hidangan utama",
    tagline: "Lebih kaya rasa, lebih bertekstur.",
    description:
      "Sate panggang dengan bumbu kacang SKIPPY® Chunky yang kental dan gurih.",
    meta: "Marinasi 30 menit",
    image: sate,
    imageAlt:
      "Sate ayam dengan bumbu kacang di atas daun pisang, toples SKIPPY® di belakang",
    ingredients: [
      {
        title: "Bahan sate",
        items: [
          { name: "Dada ayam fillet (potong dadu)", qty: "500 g" },
          { name: "Bawang putih (halus)", qty: "3 siung" },
          { name: "Kecap manis", qty: "3 sdm" },
          { name: "Air jeruk nipis", qty: "2 sdm" },
          { name: "Minyak sayur", qty: "2 sdm" },
          { name: "Tusuk sate", qty: "secukupnya" },
        ],
      },
      {
        title: "Bumbu kacang",
        items: [
          { name: "SKIPPY® Chunky", qty: "6 sdm" },
          { name: "Bawang merah (halus)", qty: "5 siung" },
          { name: "Bawang putih (halus)", qty: "3 siung" },
          { name: "Cabai merah (halus, sesuai selera)", qty: "3 buah" },
          { name: "Kecap manis", qty: "4 sdm" },
          { name: "Air", qty: "150 ml" },
          { name: "Garam", qty: "½ sdt" },
          { name: "Gula merah", qty: "2 sdm" },
          { name: "Minyak sayur", qty: "1 sdm" },
        ],
      },
    ],
    steps: [
      "Marinasi ayam dengan bawang putih, kecap manis, air jeruk nipis, dan minyak sayur selama minimal 30 menit. Tusuk ayam dengan tusuk sate.",
      "Panggang sate di atas teflon atau grill hingga matang.",
      "Tumis bumbu halus hingga harum, masukkan SKIPPY® Chunky, kecap manis, air, garam, dan gula merah. Aduk hingga mengental. Sajikan sate ayam dengan bumbu kacang.",
    ],
  },
  {
    slug: "toffee-bars",
    title: "Peanut Butter Toffee Bars",
    category: "Dessert",
    label: "Dessert",
    tagline: "Manis, gurih, dan selalu jadi favorit.",
    description:
      "Dipanggang 25 menit, ditaburi cokelat keping dan potongan stik toffee.",
    meta: "Panggang 25 menit",
    image: toffee,
    imageAlt: "Potongan peanut butter toffee bars bertabur cokelat dan kacang",
    ingredients: [
      {
        title: "Bahan",
        items: [
          { name: "SKIPPY® Chunky Peanut Butter", qty: "1 cangkir (256 g)" },
          { name: "Butter", qty: "½ cangkir (112 g)" },
          {
            name: "Gula merah (light brown sugar), dipadatkan",
            qty: "¾ cangkir (165 g)",
          },
          { name: "Gula pasir", qty: "½ cangkir (100 g)" },
          { name: "Ekstrak vanili", qty: "5 ml" },
          { name: "Telur berukuran besar", qty: "2 butir" },
          { name: "Tepung serbaguna", qty: "2 cangkir" },
          { name: "Garam", qty: "3 g" },
          { name: "Cokelat keping", qty: "1 bag (340 g)" },
          { name: "Potongan stik toffee", qty: "1 cangkir (240 g)" },
        ],
      },
    ],
    steps: [
      "Panaskan oven hingga 175°C (350°F). Siapkan loyang 32,5 × 23 cm yang dilapisi mentega.",
      "Aduk peanut butter, butter, gula merah, gula pasir, dan vanili selama 5 menit hingga kental dan seperti krim. Aduk telur, terigu, dan garam dengan mixer, lalu tambahkan cokelat keping. Oleskan merata ke dalam loyang.",
      "Panggang 25 menit hingga agak kecokelatan. Dinginkan di rak kawat; segera taburi sisa cokelat keping, biarkan 5 menit, ratakan, lalu taburi potongan stik toffee. Dinginkan sepenuhnya, potong menjadi stik.",
    ],
  },
  {
    slug: "batagor",
    title: "Batagor Bumbu Kacang Skippy",
    category: "Camilan",
    label: "Camilan",
    tagline: "Pangsit isi udang, daging, dan mozzarella.",
    description:
      "Batagor renyah dengan bumbu kacang SKIPPY® Chunky. 10 porsi dalam 1 jam.",
    meta: "10 porsi · 1 jam",
    image: batagor,
    imageAlt: "Batagor goreng dengan siraman bumbu kacang dan jeruk limau",
    ingredients: [
      {
        title: "Bahan batagor",
        items: [
          { name: "Udang", qty: "150 g" },
          { name: "Daging sapi", qty: "70 g" },
          { name: "Telur", qty: "1 butir" },
          { name: "Bawang putih", qty: "30 g" },
          { name: "Saus tiram", qty: "5 g" },
          { name: "Minyak wijen", qty: "5 g" },
          { name: "Kecap asin", qty: "5 g" },
          { name: "Kaldu ayam", qty: "5 g" },
          { name: "Garam", qty: "3 g" },
          { name: "Tepung tapioka", qty: "40 g" },
          { name: "Tepung terigu", qty: "15 g" },
          { name: "Daun bawang", qty: "15 g" },
          { name: "Prochiz Mozzarella", qty: "160 g" },
          { name: "Kulit pangsit", qty: "1 pack" },
        ],
      },
      {
        title: "Bumbu kacang",
        items: [
          { name: "SKIPPY® Chunky", qty: "150 g" },
          { name: "Bawang putih", qty: "12 g" },
          { name: "Bawang merah", qty: "15 g" },
          { name: "Cabai merah keriting", qty: "50 g" },
          { name: "Air", qty: "100 ml" },
          { name: "Garam", qty: "5 g" },
          { name: "Kaldu ayam", qty: "5 g" },
          { name: "Gula merah", qty: "30 g" },
          { name: "Kecap manis", qty: "10 ml" },
          { name: "Jeruk limau", qty: "2 buah" },
        ],
      },
    ],
    steps: [
      "Siapkan food processor, masukkan udang, daging, bawang putih, telur, dan semua bumbu. Proses sampai halus.",
      "Setelah adonan halus, tambahkan tepung tapioka, tepung terigu, dan daun bawang yang sudah diiris tipis. Aduk sampai tercampur rata.",
      "Isi kulit pangsit dengan adonan, tambahkan Prochiz Mozzarella, lalu lipat membentuk topi. Goreng dengan api sedang sampai cokelat keemasan.",
      "Bumbu kacang: haluskan bawang putih, bawang merah, dan cabai, lalu tumis sampai harum. Masukkan SKIPPY® Chunky dan air, masak sampai mengental. Tambahkan garam, kaldu ayam, gula merah, dan kecap manis; masak hingga kekentalan yang diinginkan.",
      "Sajikan batagor dengan bumbu kacang, tambahan kecap, dan perasan jeruk limau.",
    ],
  },
  {
    slug: "wedang-ronde",
    title: "Wedang Ronde Skippy",
    category: "Minuman",
    label: "Minuman hangat",
    tagline: "Onde isi kacang dalam kuah jahe merah dan pandan.",
    description:
      "Onde isi kacang SKIPPY® dalam kuah jahe merah dan pandan, nikmat selagi hangat.",
    meta: "Rebus 30–45 menit",
    image: ronde,
    imageAlt: "Mangkuk wedang ronde dengan kuah jahe dan onde hijau pandan",
    ingredients: [
      {
        title: "Isian kacang",
        items: [
          { name: "SKIPPY® Peanut Butter Chunky", qty: "150 g" },
          { name: "Gula merah", qty: "75 g" },
          { name: "Gula pasir", qty: "25 g" },
        ],
      },
      {
        title: "Kulit",
        items: [
          { name: "Tepung ketan", qty: "200 g" },
          { name: "Tepung beras", qty: "25 g" },
          { name: "Pasta pandan", qty: "1 sdt" },
          { name: "Gula halus", qty: "15 g" },
          { name: "Air panas", qty: "60 ml" },
          { name: "Garam", qty: "5 g" },
        ],
      },
      {
        title: "Wedang",
        items: [
          { name: "Air", qty: "500 ml" },
          { name: "Daun pandan", qty: "2 lembar" },
          { name: "Gula merah", qty: "100 g" },
          { name: "Gula pasir", qty: "65 g" },
          { name: "Garam", qty: "5 g" },
          { name: "Jahe merah", qty: "70 g" },
        ],
      },
    ],
    steps: [
      "Isian kacang: blender SKIPPY® Peanut Butter Chunky, gula merah, dan gula pasir dengan sedikit minyak hingga halus.",
      "Bulatkan isian kacang sesuai selera, lalu simpan di chiller sampai set.",
      "Kulit: campur tepung ketan, tepung beras, pasta pandan, gula halus, dan garam. Tuang air panas sedikit demi sedikit hingga kalis seperti plastisin.",
      "Timbang adonan kulit dan bulatkan.",
      "Isi adonan kulit dengan isian kacang, lalu bulatkan kembali.",
      "Wedang: rebus jahe merah, gula merah, gula pasir, air, garam, dan daun pandan di api kecil selama 30–45 menit. Saring.",
      "Masukkan onde ke dalam kuah wedang. Sajikan selagi hangat.",
    ],
  },
  {
    slug: "creamy-nutty-latte",
    title: "Creamy Nutty Latte",
    category: "Minuman",
    label: "Minuman dingin",
    tagline: "Kopi, susu, dan SKIPPY® Creamy dalam satu gelas.",
    description:
      "Kopi, susu, dan SKIPPY® Creamy dalam satu gelas dingin yang lembut.",
    meta: "Resep batch",
    image: latte,
    imageAlt: "Gelas es kopi susu peanut butter dengan toples SKIPPY® Creamy",
    ingredients: [
      {
        title: "Bahan",
        items: [
          { name: "Nescafé", qty: "48 g" },
          { name: "Air panas", qty: "800 ml" },
          { name: "SKIPPY® Peanut Butter Creamy", qty: "486 g" },
          { name: "Brown sugar", qty: "160 g" },
          { name: "Susu bubuk", qty: "80 g" },
          { name: "Fresh milk", qty: "2000 ml" },
          { name: "Es batu", qty: "secukupnya" },
        ],
      },
    ],
    steps: [
      "Campurkan Nescafé, SKIPPY® Peanut Butter Creamy, brown sugar, dan susu bubuk ke dalam wadah.",
      "Tuang air panas, aduk hingga merata.",
      "Tambahkan es batu.",
      "Tambahkan fresh milk, aduk, dan sajikan.",
    ],
  },
];
