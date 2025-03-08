export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "Wallet",
      href: "/wallet",
    },
    {
      label: "Transaction",
      href: "/transaction",
    },
    
  ],
  navMenuItems: [
    {
      label: "Pay",
      href: "/Pay",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Transactions",
      href: "/transaction",
    },
    
    {
      label: "Wallet",
      href: "/wallet",
    },
    
    
    
    {
      label: "Logout",
      href: "/login",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
