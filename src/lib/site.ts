export const site = {
  name: "Krevora Digital",
  tagline: "From creative design and powerful websites to smart digital solutions, we help businesses build a strong online presence, connect with the right audience, and turn their digital potential into lasting growth and success.",
  phone: "+91 78368 12707",
  whatsappNumber: "7836812707",
  whatsappMessage: "Hi! I'm interested in getting a website for my business.",
  email: "bakardeveloper0007@gmail.com",
  address: "Noida 74, Delhi & Azamgarh 223225, India",
};

export const whatsappLink = () =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;