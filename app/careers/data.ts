export interface JobRole {
  id: string
  title: string
  type: string
  team: string
  location: string
  posted: string
  summary: string
  about: string[]
  deliverable: string[]
  requirements: string[]
  niceToHave: string[]
  timeline: string
  compensation: string
  apply: {
    email: string
    subject: string
    instructions: string[]
  }
}

export const openRoles: JobRole[] = [
  {
    id: "motion-designer",
    title: "Motion Designer / Explainer Video Creator",
    type: "Contract",
    team: "Marketing",
    location: "Remote",
    posted: "April 2026",
    summary:
      "Create a short animated explainer video for EventsKona — our events ticketing platform launching in Nigeria. Clear deliverable, fast turnaround, fixed contract fee.",
    about: [
      "App Guts Limited is a SaaS company building platforms for African communities and businesses. Our flagship product, Events Kona, is an event discovery and ticketing platform focused on Nigeria — helping organisers sell tickets and helping people find things to do in their city.",
      "We need a compelling animated explainer video that introduces EventsKona to first-time visitors: what it is, how it works for both attendees and event organisers, and why they should sign up.",
    ],
    deliverable: [
      "One (1) animated explainer video, 60–90 seconds",
      "Style: clean 2D motion graphics (modern SaaS explainer — not cartoon, not live action)",
      "Voiceover: we will provide the script and can supply a VO track, or you can recommend an artist",
      "Format: MP4 (1920×1080) + web-optimised version (1280×720)",
      "Source files handed over on completion",
      "Up to 2 rounds of revisions included",
    ],
    requirements: [
      "Demonstrated portfolio of 2D animated explainer or product videos",
      "Proficient in After Effects, Adobe Animate, or equivalent (e.g. Jitter, Rive, Cavalry)",
      "Ability to work from a provided script and brand style guide",
      "Clear communicator — we move fast and need timely updates",
      "Available to start within the next 7 days",
    ],
    niceToHave: [
      "Experience creating videos for fintech, SaaS, or consumer apps",
      "Familiarity with African markets or audiences",
      "Can handle scriptwriting if needed (optional add-on)",
    ],
    timeline: "3 weeks from project kick-off to final delivery",
    compensation:
      "Fixed contract fee. Rate negotiable based on experience and portfolio. Please include your rate in your application.",
    apply: {
      email: "careers@appguts.com",
      subject: "Motion Designer – EventsKona Explainer Video",
      instructions: [
        "A link to your portfolio (2–3 relevant explainer video samples)",
        "Your proposed rate for this project",
        "Your earliest available start date",
        "A brief note (3–5 sentences) on your approach to this type of project",
      ],
    },
  },
  {
    id: "campus-brand-ambassador",
    title: "Campus Brand Ambassador — Port Harcourt",
    type: "Contract",
    team: "Growth",
    location: "Port Harcourt, Nigeria (On-ground)",
    posted: "April 2026",
    summary:
      "Be the face of EventsKona on your campus. Recruit event organisers in Port Harcourt, earn cash for every one whose event goes live — incentive-based, flexible, and a great line on your CV.",
    about: [
      "EventsKona is a new events discovery and ticketing platform launching in Nigeria. We're starting in Port Harcourt — one of Nigeria's most vibrant cities — and we need feet on the ground to build our organiser base.",
      "Your job is to find people who run events — student union execs, faculty association leaders, club organisers, party promoters, church programme coordinators — and get them to list their events on EventsKona using your referral code. You earn a fixed cash incentive for every organiser whose event is approved and goes live on the platform.",
    ],
    deliverable: [
      "Recruit event organisers across your campus using your unique referral link — you earn per organiser whose event is approved and published on EventsKona",
      "Target student union leaders, departmental associations, clubs, promoters, and anyone who organises campus events (paid or free)",
      "Distribute flyers and branded materials in high-traffic spots on campus (notice boards, cafeterias, hostels, lecture theatres)",
      "Post at least 4 pieces of EventsKona content per month on your personal social media (Instagram, X, TikTok, or WhatsApp Status)",
      "Attend one virtual onboarding session and one monthly check-in call with the growth team",
      "Submit a brief weekly update (voice note or short message) on activity and feedback from the field",
    ],
    requirements: [
      "Currently enrolled at a university or polytechnic in Port Harcourt (UniPort, RSUST, Ignatius Ajuru, Rivers State Poly, or similar)",
      "Well-connected on campus — you know student leaders, association execs, promoters, and event organisers across faculties",
      "Active on at least one social media platform with a genuine following among students",
      "Reliable, self-motivated, and able to work without being micromanaged",
      "Smartphone with internet access",
    ],
    niceToHave: [
      "You already organise events yourself, or are involved in student union or association activities",
      "Previous experience in campus marketing, brand ambassador, or sales roles",
      "Experience creating short-form video content (Reels, TikTok)",
      "Strong knowledge of the campus social scene — who runs the big events, which associations are most active",
    ],
    timeline: "1–3 month rolling contract, starting immediately",
    compensation:
      "Incentive-based. You earn a fixed fee for every organiser you refer whose event is approved and published on EventsKona — paid or free events both count. Bonus tiers for hitting monthly targets. Top performers will be considered for a paid extension as EventsKona grows in PH.",
    apply: {
      email: "growth@appguts.com",
      subject: "Campus Brand Ambassador – Port Harcourt",
      instructions: [
        "Your full name, university, faculty, and current level",
        "A link to your most active social media profile",
        "Two or three sentences on why you're the right person to rep EventsKona on your campus",
        "Any previous campus marketing or brand rep experience (if none, that's fine — just tell us about yourself)",
      ],
    },
  },
]
