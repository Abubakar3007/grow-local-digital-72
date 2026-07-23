export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  audience: string;
  content: { heading: string; body: string }[];
}

export const posts: BlogPost[] = [
  {
    slug: "why-every-gym-needs-a-website-in-2026",
    title: "Why Every Gym Needs a Website in 2026 (Not Just Instagram)",
    description:
      "Instagram alone won't fill your gym. Here's why a proper website brings in 3x more paying members — and what it must have.",
    category: "Gym Growth",
    readTime: "6 min read",
    date: "Jan 2026",
    audience: "Gym owners",
    content: [
      {
        heading: "The problem with 'Instagram-only' gyms",
        body: "Instagram is great for showing off transformations and reels. But when a serious lead searches 'best gym near me' on Google at 10 PM, your Instagram page doesn't show up. Your competitor's website does. That's a paying member you just lost — every single day.",
      },
      {
        heading: "What a good gym website does for you 24/7",
        body: "It ranks on Google for your locality, shows your class schedule, prices, trainers, real member reviews, and lets people book a free trial or WhatsApp you in one tap. No DMs to check, no back-and-forth. Just clean, qualified leads.",
      },
      {
        heading: "The 5 things every gym site must have",
        body: "1) Free-trial booking form, 2) Membership pricing with a 'talk to us' CTA, 3) Trainer profiles with certifications, 4) Google Maps + timings, 5) Before/after transformations with real names. Skip any of these and you're leaving money on the table.",
      },
      {
        heading: "How much does it cost, honestly?",
        body: "A solid gym website with all of the above costs less than one month of gym rent. And it pays for itself the moment it brings in 2–3 new members. That's not marketing spend — that's an asset.",
      },
    ],
  },
  {
    slug: "local-seo-for-small-business",
    title: "Local SEO Explained: How to Show Up on Google 'Near Me' Searches",
    description:
      "A no-jargon guide to getting your shop, gym, or salon on the first page of Google for people searching in your area.",
    category: "SEO",
    readTime: "8 min read",
    date: "Jan 2026",
    audience: "Local shop owners",
    content: [
      {
        heading: "What is 'local SEO'?",
        body: "Local SEO is what makes your business show up when someone nearby searches 'salon in Andheri' or 'cafe near me'. Google picks 3 businesses to show in the map pack — you want to be one of them.",
      },
      {
        heading: "Step 1: Claim your Google Business Profile",
        body: "It's free. Add real photos, correct hours, phone, WhatsApp, and website link. This alone puts you ahead of 60% of local competitors who never bother.",
      },
      {
        heading: "Step 2: Get 20+ real Google reviews",
        body: "Ask happy customers via WhatsApp with a direct review link. Aim for 20 reviews with a 4.5+ average. Reply to every single one — Google notices.",
      },
      {
        heading: "Step 3: A locally-optimised website",
        body: "Your website needs your city and area name in the page title, headings, and content. Add a Google Map embed, local landmarks, and a 'directions' button. This tells Google you belong to that area.",
      },
    ],
  },
  {
    slug: "website-vs-instagram-page",
    title: "Website vs Instagram Page: Which One Actually Grows Your Business?",
    description:
      "Honest comparison for local business owners. Spoiler — you need both, but only one is truly yours.",
    category: "Digital Strategy",
    readTime: "5 min read",
    date: "Dec 2025",
    audience: "Small business owners",
    content: [
      {
        heading: "Who owns your audience?",
        body: "On Instagram, Meta owns your followers. One shadowban, one algorithm change, and your reach drops 90% overnight. Your website is yours forever — no gatekeeper.",
      },
      {
        heading: "Trust factor",
        body: "A serious customer looking to spend money checks your website before they DM. No website = 'this looks like a hobby'. Website with reviews and pricing = 'this is a real business'.",
      },
      {
        heading: "Search traffic (the free kind)",
        body: "Instagram doesn't rank on Google. A well-built website brings in leads every day who typed exactly what you sell into Google. That traffic is free forever.",
      },
      {
        heading: "The verdict",
        body: "Use Instagram for content and community. Use your website to convert and get discovered. They're not competitors — they're teammates.",
      },
    ],
  },
  {
    slug: "how-much-does-a-business-website-cost-in-india",
    title: "How Much Does a Business Website Cost in India? (2026 Real Numbers)",
    description:
      "Straight pricing breakdown — from ₹0 DIY to ₹5 lakh custom. What you actually get at each level.",
    category: "Pricing",
    readTime: "7 min read",
    date: "Dec 2025",
    audience: "Small business owners",
    content: [
      {
        heading: "The ₹0 option (Wix/free templates)",
        body: "Free plans give you a subdomain like yourbiz.wixsite.com. Looks unprofessional, slow, tons of ads, can't be found on Google. Fine for testing — not for a real business.",
      },
      {
        heading: "The ₹8,000 – ₹25,000 range",
        body: "A clean 4–6 page website: home, services, about, contact, gallery. Mobile-friendly, WhatsApp button, basic SEO. This is where most local businesses should start.",
      },
      {
        heading: "The ₹40,000 – ₹1,00,000 range",
        body: "Custom design, booking system, payment integration, blog, advanced SEO, and a CMS you can update yourself. Right for growing gyms, clinics, and multi-location shops.",
      },
      {
        heading: "The ₹2 lakh+ range",
        body: "Fully custom web app — member portals, class scheduling, e-commerce, custom integrations. Only worth it once you're already generating revenue and need automation.",
      },
      {
        heading: "The real question",
        body: "Don't ask 'how cheap can I get it'. Ask 'how fast will it pay for itself'. A ₹20K website that brings 5 new customers a month is the best investment you'll make this year.",
      },
    ],
  },
  {
    slug: "whatsapp-marketing-for-local-business",
    title: "WhatsApp Marketing: The #1 Free Tool Local Businesses Ignore",
    description:
      "How to turn WhatsApp into a lead-closing machine — click-to-chat, broadcast lists, catalog, and quick replies.",
    category: "Lead Generation",
    readTime: "6 min read",
    date: "Dec 2025",
    audience: "Local shop owners",
    content: [
      {
        heading: "Why WhatsApp beats phone calls",
        body: "98% open rate. Instant. No 'sorry, please leave a voicemail'. Customers already live inside WhatsApp — meet them there.",
      },
      {
        heading: "Add a click-to-chat button on your website",
        body: "One tap on your site opens WhatsApp with a pre-filled message like 'Hi, I want a free trial'. This alone can 5x your enquiries. Every website we build has this by default.",
      },
      {
        heading: "Use the WhatsApp Business catalog",
        body: "Free feature. Upload your products or services with prices and photos. Customers browse inside the chat, pick, and order. No app, no signup, no friction.",
      },
      {
        heading: "Broadcast lists (not groups)",
        body: "Send offers to 256 customers at once — they receive it as a personal message. No group spam. Use it for weekly deals, class updates, or new arrivals.",
      },
    ],
  },
  {
    slug: "10-signs-your-website-is-losing-customers",
    title: "10 Signs Your Website is Silently Losing Customers Every Day",
    description:
      "Slow load, no WhatsApp button, ugly mobile view — check your site against this list and fix the leaks.",
    category: "Conversion",
    readTime: "5 min read",
    date: "Nov 2025",
    audience: "Small business owners",
    content: [
      {
        heading: "1. Loads slower than 3 seconds",
        body: "53% of mobile users leave. Test on pagespeed.web.dev — anything below 70 on mobile is bleeding leads.",
      },
      {
        heading: "2. No visible phone or WhatsApp on mobile",
        body: "People land on your site to contact you. If the button isn't in the first thumb-scroll, they're gone.",
      },
      {
        heading: "3. Prices are hidden",
        body: "'Contact for pricing' feels like a trap in 2026. At least show a starting-from price or a range.",
      },
      {
        heading: "4. Zero customer reviews",
        body: "No social proof = no trust. Add 5 real testimonials with names and photos. Instant credibility.",
      },
      {
        heading: "5. Broken on mobile",
        body: "80% of visitors are on phones. If text overflows, buttons overlap, or forms don't work — you've lost them.",
      },
      {
        heading: "6. No clear next action",
        body: "Every page must tell the visitor exactly what to do next — book, call, WhatsApp, buy.",
      },
      {
        heading: "7–10 (quick hits)",
        body: "7) No SSL (padlock) icon. 8) Stock photos that look fake. 9) 'Coming soon' pages. 10) No fresh content in 12+ months.",
      },
    ],
  },
  {
    slug: "gym-lead-generation-strategies",
    title: "7 Proven Gym Lead Generation Strategies That Actually Fill Classes",
    description:
      "From free trial funnels to Google Ads — battle-tested tactics gyms in India use to hit 100+ members.",
    category: "Gym Growth",
    readTime: "9 min read",
    date: "Nov 2025",
    audience: "Gym owners",
    content: [
      {
        heading: "1. The 7-day free trial funnel",
        body: "Free is the strongest word in marketing. Landing page → book free trial → confirmation WhatsApp → reminder day-before → in-person tour → close. Works every time.",
      },
      {
        heading: "2. Google Ads for 'gym near me'",
        body: "Hyper-local ads with 3km radius. ₹150–₹300 per lead in most Indian cities. Send them to a fast landing page, not your homepage.",
      },
      {
        heading: "3. Referral rewards",
        body: "Give existing members 1 month free for every referral who signs up for 3+ months. Cheaper than any ad — and higher retention.",
      },
      {
        heading: "4. Transformation content",
        body: "Weekly reel: before-after with permission, member quote, and 'book your free trial' overlay. Post from both member's and gym's account.",
      },
      {
        heading: "5. Corporate tie-ups",
        body: "Approach local offices with a 10-member group discount. One yes = 10 members. Repeat with 5 offices = 50 members.",
      },
      {
        heading: "6. Google reviews as your #1 marketing",
        body: "Ask every satisfied member on their 30th day. Aim for 100+ reviews at 4.7+. This ranks you in the map pack and closes leads before they even call.",
      },
      {
        heading: "7. Retargeting drop-offs",
        body: "Install Meta Pixel. Anyone who visited your site but didn't book gets a follow-up ad for 7 days. Recovers 20–30% of lost leads.",
      },
    ],
  },
  {
    slug: "mobile-first-design-why-it-matters",
    title: "Mobile-First Design: Why 80% of Your Visitors Never See Your Desktop Site",
    description:
      "If your website was designed on a laptop and 'made responsive' later, it's costing you leads. Here's the fix.",
    category: "Web Design",
    readTime: "5 min read",
    date: "Nov 2025",
    audience: "Small business owners",
    content: [
      {
        heading: "The 80/20 reality in India",
        body: "Over 80% of local business web traffic comes from mobile. Yet most agencies still design for desktop first. Result: cramped mobile, tiny buttons, forms that don't work.",
      },
      {
        heading: "What mobile-first actually means",
        body: "We design the phone view first — big tap targets, thumb-friendly buttons at the bottom, one-column layouts, images sized for 4G. Desktop gets the extra space, not the priority.",
      },
      {
        heading: "The single biggest mobile mistake",
        body: "Contact info hidden 5 scrolls down. Your phone / WhatsApp / booking button must be visible without scrolling. Every second of hunting = a lost lead.",
      },
      {
        heading: "Test it yourself in 60 seconds",
        body: "Open your site on your phone. Can a stranger call, WhatsApp, or book within 5 seconds? If not — that's the fix. It's not a redesign; it's survival.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}