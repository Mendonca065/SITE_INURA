export type SelectedPage = "hero" | "services" | "vps" | "support" | "server";

// types/server.ts
export type ServerConfig = {
  location: string;
  cpu: string;
  ram: number;
  storage: string;
  network: string;
  price: number;
};
