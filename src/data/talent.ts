export type TalentProfile = {
  name: string;
  category: string;
  location: string;
  image: string;
  tall?: boolean;
};

export const talentProfiles: TalentProfile[] = [
  { name: "J. Mensah",  category: "Construction",        location: "Accra, Ghana",        image: "/assets/images/sector-img-1.png" },
  { name: "A. Diallo",  category: "Manufacturing",       location: "Dakar, Senegal",      image: "/assets/images/sector-img-2.png" },
  { name: "C. Okafor",  category: "Industrial",          location: "Lagos, Nigeria",      image: "/assets/images/sector-img-3.png" },
  { name: "M. Otieno",  category: "Warehousing",         location: "Nairobi, Kenya",      image: "/assets/images/sector-img-4.png", tall: true },
  { name: "F. Kamara",  category: "Agriculture",         location: "Freetown, S. Leone",  image: "/assets/images/sector-img-5.png" },
  { name: "K. Asante",  category: "Skilled Trades",      location: "Kumasi, Ghana",       image: "/assets/images/sector-img-6.png" },
  { name: "N. Traoré",  category: "Hospitality",         location: "Abidjan, C. d'Ivoire",image: "/assets/images/sector-img-7.png" },
  { name: "E. Banda",   category: "Logistics",           location: "Lusaka, Zambia",      image: "/assets/images/sector-img-8.png" },
];
