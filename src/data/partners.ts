export type Partner = {
  name: string;
  logo: string | null;
  url?: string;
};

export const partners: Partner[] = [
  { name: "CCSA Africa", logo: "/assets/images/ccsa.svg", url: "https://www.callcentersolutionsafrica.com/" },
  { name: "Kenya Dept. for Diaspora Affairs", logo: "/assets/images/state-department.svg", url: "https://diaspora.go.ke/" },
  { name: "PAAN – Pan-African Agency Network", logo: "/assets/images/paan.svg", url: "https://paan.africa" },
  { name: "AJIRA Digital", logo: "/assets/images/ajira.svg", url: "https://ajiradigital.go.ke" },
  { name: "WeComply Labs", logo: "/assets/images/WeComply.svg", url: "https://complyguide.co.ke/" },
];
