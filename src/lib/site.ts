export const site = {
  name: "Krevora Digital",
  tagline: "From creative design and powerful websites to smart digital solutions, we help businesses build a strong online presence, connect with the right audience, and turn their digital potential into lasting growth and success.",
  phone: "+91 85959 25473",
  whatsappNumber: "918595925473",
  whatsappMessage: "Hi! I'm interested in getting a website for my business.",
  email: "bakardeveloper0007@gmail.com",
  address: "Noida 50, Delhi, India",
};

export const whatsappLink = () =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;