import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-footer-background/80 backdrop-blur-xl py-12 md:py-16 flex flex-col items-center mt-24">
      <div className="container mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4 px-6 xl:max-w-6xl">
        {/* Past FOUND Workshop */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Past Workshops</h3>
          <a
            href="https://iccv2025-found-workshop.limitlab.xyz/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            ICCV 2025 FOUND (1st)
          </a>
        </div>

        {/* Related Workshop */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Related Workshops</h3>
          <a
            href="https://eccv2026-limit-workshop.limitlab.xyz/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            ECCV 2026 LIMIT
          </a>
          <a
            href="https://cvpr2026-bigmac-workshop.limitlab.xyz/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            CVPR 2026 BigMAC
          </a>
          <a
            href="https://cvpr2026-vgi-workshop.limitlab.xyz/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            CVPR 2026 VGI
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/#cfp"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Poster Nominations
            </Link>
            <Link
              to="/#speakers"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Speakers
            </Link>
            <Link
              to="/#organizers"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Organizers
            </Link>
            <Link
              to="/#sponsorship"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Sponsors
            </Link>
            <Link
              to="/#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Share */}
        <div className="flex flex-col -mt-5">
          <div className="rounded-2xl p-px bg-gradient-to-br from-primary/40 via-primary/15 to-transparent">
            <div className="rounded-2xl bg-muted/20 backdrop-blur-sm p-5 flex flex-col gap-5 h-full">
              <h3 className="font-bold text-base">Spread the Word</h3>
              <div className="flex flex-col gap-1.5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-1">
                  Hashtags
                </p>
                <span className="text-sm text-muted-foreground font-medium select-all cursor-text">
                  #ECCV2026FOUND
                </span>
                <span className="text-sm text-muted-foreground font-medium select-all cursor-text">
                  #FOUNDWorkshop
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="container mx-auto mt-12 border-t border-border/50 pt-8 px-6 xl:max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="font-bold text-xl group-hover:text-primary transition-colors">
              FOUND Workshop
            </span>
          </Link>
          <p className="text-center text-sm text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} FOUND Workshop. All rights
            reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-right font-medium">
            Built by cvpaper.challenge Dev Team
          </p>
        </div>
      </div>
    </footer>
  );
}
