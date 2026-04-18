import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { openRoles } from "../data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return openRoles.map((role) => ({ slug: role.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const role = openRoles.find((r) => r.id === slug)
  if (!role) return {}
  return {
    title: `${role.title} | Careers at App Guts`,
    description: role.summary,
  }
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params
  const role = openRoles.find((r) => r.id === slug)
  if (!role) notFound()

  return (
    <main className="min-h-screen px-4 py-20">
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <div className="mb-10">
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground -ml-2">
            <Link href="/careers">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              All open roles
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-border">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
              {role.type}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
              {role.team}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
              {role.location}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            {role.title}
          </h1>
          <p className="text-muted-foreground leading-relaxed">{role.summary}</p>
        </div>

        {/* Body */}
        <div className="space-y-10">

          <Section title="About the Project">
            {role.about.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </Section>

          <Section title="What You'll Deliver">
            <BulletList items={role.deliverable} />
          </Section>

          <Section title="What We're Looking For">
            <BulletList items={role.requirements} />
          </Section>

          <Section title="Nice to Have">
            <BulletList items={role.niceToHave} muted />
          </Section>

          {/* Timeline & Compensation */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-muted/50 border border-border rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Timeline</p>
              <p className="text-foreground font-medium">{role.timeline}</p>
            </div>
            <div className="bg-muted/50 border border-border rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Compensation</p>
              <p className="text-foreground font-medium">{role.compensation}</p>
            </div>
          </div>

          <Section title="How to Apply">
            <p className="text-muted-foreground mb-4">
              Send an email to{" "}
              <a href={`mailto:${role.apply.email}`} className="text-primary font-semibold hover:underline">
                {role.apply.email}
              </a>{" "}
              with the subject line{" "}
              <span className="font-semibold text-foreground">&ldquo;{role.apply.subject}&rdquo;</span>{" "}
              and include:
            </p>
            <BulletList items={role.apply.instructions} />
          </Section>

          {/* Apply CTA */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${role.apply.email}?subject=${encodeURIComponent(role.apply.subject)}`}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Apply for this role →
            </a>
            <Button variant="outline" asChild>
              <Link href="/careers">View all open roles</Link>
            </Button>
          </div>

        </div>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-foreground mb-3">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function BulletList({ items, muted }: { items: string[]; muted?: boolean }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className={`flex items-start gap-2.5 text-sm ${muted ? "text-muted-foreground" : "text-foreground"}`}>
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
