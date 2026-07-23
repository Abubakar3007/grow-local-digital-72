export const site = {
  name: "WebDost",
  tagline: "Helping local businesses grow with powerful websites and digital solutions",
  phone: "+91 85959 25473",
  whatsappNumber: "918595925473",
  whatsappMessage: "Hi! I'm interested in getting a website for my business.",
  email: "bakardeveloper0007@gmail.com",
  address: "Mumbai, India",
};

export const whatsappLink = () =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;