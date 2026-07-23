export const site = {
  name: "PixelGrow Digital",
  tagline: "Helping local businesses grow with powerful websites and digital solutions",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  whatsappMessage: "Hi! I'm interested in getting a website for my business.",
  email: "hello@pixelgrow.digital",
  address: "Mumbai, India",
};

export const whatsappLink = () =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;