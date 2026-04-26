"use client"

import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import type { ContentBlock } from "@/lib/content-blocks"

export function NewsRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="max-w-3xl mx-auto space-y-14">
      {blocks.map((block, i) => (
        <NewsBlock key={i} block={block} />
      ))}
    </div>
  )
}

function NewsBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {

    case "paragraph":
      return (
        <p className="text-lg text-muted-foreground leading-relaxed">{block.text}</p>
      )

    case "heading":
      return (
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{block.text}</h2>
      )

    case "subheading":
      return (
        <h3 className="text-xl font-semibold text-foreground">{block.text}</h3>
      )

    case "bullets": {
      const dotColor =
        block.variant === "pro" ? "bg-emerald-500"
        : block.variant === "con" ? "bg-destructive"
        : "bg-indigo-500"
      return (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-muted/10">
              <div className={`w-1.5 h-1.5 rounded-full ${dotColor} mt-2 flex-shrink-0`} />
              <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      )
    }

    case "steps":
      return (
        <div className="space-y-3">
          {block.items.map((item, i) => (
            <div key={i} className="flex gap-5 p-5 rounded-xl border border-border/40">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 font-bold text-sm flex items-center justify-center flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      )

    case "feature_cards":
      return (
        <div className={`grid gap-4 ${block.columns === 2 ? "sm:grid-cols-2" : ""}`}>
          {block.items.map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-border/40 bg-muted/10">
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      )

    case "callout": {
      const styles = {
        info:    "border-indigo-500/20 bg-indigo-500/5",
        tip:     "border-emerald-500/20 bg-emerald-500/5",
        warning: "border-amber-500/20 bg-amber-500/5",
      }
      const style = styles[block.variant ?? "info"]
      return (
        <div className={`p-5 rounded-xl border ${style} text-sm text-muted-foreground leading-relaxed`}>
          {block.label && <strong className="text-foreground">{block.label}: </strong>}
          {block.text}
        </div>
      )
    }

    case "quote":
      return (
        <div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-500/5">
          <p className="text-lg text-muted-foreground leading-relaxed italic">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <p className="mt-4 text-sm text-muted-foreground">— {block.attribution}</p>
          )}
        </div>
      )

    case "tag_grid":
      return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {block.items.map((item, i) => (
            <div key={i} className="px-3 py-2 rounded-lg bg-muted/40 border border-border/40 text-sm font-medium text-foreground text-center">
              {item}
            </div>
          ))}
        </div>
      )

    case "cta":
      return (
        <div className="text-center p-8 sm:p-10 rounded-2xl border border-border/40 bg-muted/10">
          <h2 className="text-2xl font-bold text-foreground mb-3">{block.heading}</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">{block.body}</p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12"
          >
            <a href={block.button_href} target="_blank" rel="noopener noreferrer">
              {block.button_text}
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      )

    default:
      return null
  }
}
