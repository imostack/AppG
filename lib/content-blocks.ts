export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: string[]; variant?: "default" | "pro" | "con" }
  | { type: "steps"; items: { step: string; title: string; body: string }[] }
  | { type: "feature_cards"; items: { title: string; body: string }[]; columns?: 1 | 2 }
  | { type: "callout"; text: string; label?: string; variant?: "info" | "tip" | "warning" }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "tag_grid"; items: string[] }
  | { type: "cta"; heading: string; body: string; button_text: string; button_href: string }
