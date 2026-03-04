"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import {
  CalendarDaysIcon,
  UserGroupIcon,
  TicketIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline"

const audiences = [
  {
    icon: CalendarDaysIcon,
    title: "Event Organizers",
    description: "Create events, sell tickets, track attendance, and manage guests — all from one platform.",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: UserGroupIcon,
    title: "Creators & Communities",
    description: "Host experiences, grow your audience, and build stronger local communities around what you do.",
    gradient: "from-violet-500 to-fuchsia-600",
  },
  {
    icon: TicketIcon,
    title: "Event Attendees",
    description: "Discover what's happening around you in Port Harcourt and get your tickets in seconds.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: MegaphoneIcon,
    title: "Brands & Promoters",
    description: "Promote events, reach the right audiences, and measure how your campaigns perform.",
    gradient: "from-amber-500 to-orange-600",
  },
]

export function WhoItsFor() {
  return (
    <section className="relative border-t border-border/40 px-4 py-20 sm:py-24 lg:py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-4">
              Who it&apos;s built for
            </p>
            <h2 className="mb-5 text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              Built for the people who make events happen
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Whether you are running the show or attending it — Events Kona is built for you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item, index) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div className="group relative flex flex-col bg-background border border-border/40 rounded-2xl p-7 hover:border-border hover:shadow-xl transition-all duration-300 h-full">
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.04] rounded-2xl transition-opacity duration-300`} />

                  <div className="relative flex flex-col h-full">
                    {/* Icon */}
                    <div className={`inline-flex w-fit p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-5`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Text */}
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
