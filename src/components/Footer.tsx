import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import tecnoLogo from "@/assets/tecno-logo.webp";

const Footer = () => (
  <footer className="bg-muted/50 border-t border-border/30 pt-14 pb-8">
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand + Contact Info */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={tecnoLogo} alt="TECNO" className="h-16 w-auto" />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Leading manufacturer and exporter of premium surgical, dental, and beauty instruments since 1998.
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>Industrial Estate, Sialkot 51310, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <span>+92 52 1234567</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <span>info@tecnoinstruments.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Mon–Sat, 9 AM – 6 PM (PKT)</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[["Products","/products"],["Technology","/technology"],["Sustainability","/sustainability"],["About","/about"]].map(([l,h])=>(
              <li key={h}><Link to={h} className="hover:text-primary transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-foreground mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[["Contact","/contact"],["Inquiry","/inquiry"],["Feedback","/feedback"],["Privacy Policy","/privacy"],["Terms","/terms"]].map(([l,h])=>(
              <li key={h}><Link to={h} className="hover:text-primary transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Newsletter + Map */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-foreground mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Stay updated with our latest innovations.</p>
          <form onSubmit={e => { e.preventDefault(); }} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button type="submit" className="gradient-button px-4 py-2 text-sm w-full">Subscribe</button>
          </form>

          {/* Map */}
          <div className="mt-4 rounded-lg overflow-hidden border border-border/30">
            <iframe
              title="TECNO Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54200.0!2d74.52!3d32.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eea7a5074f781%3A0x75dc4ed3b1e6e0a1!2sSialkot%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="120"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border/20 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} TECNO Instruments. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
