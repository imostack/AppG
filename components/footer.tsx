"use client"

export function Footer() {
  return (
    <footer className="border-t border-border/40 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* --- Products --- */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://eventskona.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Events Kona
                </a>
              </li>
              <li>
                <a href="/accessra-partnership" className="hover:text-foreground transition-colors">
                  AccessRA Partnership
                </a>
              </li>
              <li>
                <a href="/custom-solutions" className="hover:text-foreground transition-colors">
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* --- Company --- */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-foreground transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* --- Resources --- */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://eventskona.com/login" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Events Kona Login
                </a>
              </li>
              <li>
                <a href="/accessra-partnership" className="hover:text-foreground transition-colors">
                  AccessRA Partnership
                </a>
              </li>
              <li>
                <a href="mailto:hello@appguts.com" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* --- Legal --- */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 App Guts Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}