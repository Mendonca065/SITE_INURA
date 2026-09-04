export type SelectedPage = 
  | "hero" 
  | "highlights" 
  | "deepdive" 
  | "shielding" 
  | "proof"
  | "vps" 
  | "services" 
  | "support" 
  | "contact";

// types/server.ts
export type ServerConfig = {
  location: string;
  cpu: string;
  ram: number;
  storage: string;
  network: string;
  price: number;
};
