export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-primary" />
              <span className="font-bold text-foreground">App Guts</span>
            </div>
            <p className="text-sm text-muted-foreground">Building digital products that power everyday life.</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#products" className="hover:text-foreground transition-colors">
                  AccessRA
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-foreground transition-colors">
                  Events Kona
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-foreground transition-colors">
                  Custom Apps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 App Guts Limited. All rights reserved.</p>
          
          </div>
        </div>
      </div>
    </footer>
  )
}
