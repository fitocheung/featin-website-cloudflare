import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/85253469889",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1J1MmhxiNT/?mibextid=wwXIfr",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

export function SiteFooter() {
  const { lang, toggleLang, t } = useLanguage()

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      {/* Main Footer Content */}
      <div className="mx-auto w-full max-w-[1200px] px-4 py-12 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Contact */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {lang === "en" ? "Contact" : "聯絡我們"}
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-blue-600" />
                <span className="text-sm text-slate-600">
                  {lang === "en" 
                    ? "Room 1712A, 17/F, Witty Commercial Building, 1A Tung Choi Street, Kowloon, Hong Kong"
                    : "香港九龍旺角通菜街1A號威達商業大廈17樓1712A室"
                  }
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-blue-600" />
                <a href="mailto:hkfeatin@gmail.com" className="text-sm text-slate-600 hover:text-blue-600">
                  hkfeatin@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-blue-600" />
                <a href="tel:+85253469889" className="text-sm text-slate-600 hover:text-blue-600">
                  (+852) 5346 9889
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {lang === "en" ? "Follow Us" : "關注我們"}
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {lang === "en" ? "Quick Links" : "快速連結"}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/products" className="text-sm text-slate-600 hover:text-blue-600">
                  {t.navProducts}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-600 hover:text-blue-600">
                  {t.navServices}
                </Link>
              </li>
              <li>
                <Link href="/pdf-catalogue" className="text-sm text-slate-600 hover:text-blue-600">
                  {t.navPdfCatalogue}
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm text-slate-600 hover:text-blue-600">
                  {t.navAboutUs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-600 hover:text-blue-600">
                  {t.navContact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Navigate */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {t.navNavigateFit}
            </h3>
            <p className="mt-4 text-sm text-slate-600">
              {t.navExploreProducts}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-4 lg:px-6">
          <p className="text-sm font-medium text-slate-700">{t.footerCopyright}</p>
          <div className="flex items-center rounded-full border border-slate-300 bg-white shadow-sm overflow-hidden">
            <button
              type="button"
              onClick={() => lang !== "zh" && toggleLang()}
              className={cn(
                "h-8 px-3 text-xs font-semibold transition-colors",
                lang === "zh"
                  ? "bg-blue-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              )}
            >
              中文
            </button>
            <button
              type="button"
              onClick={() => lang !== "en" && toggleLang()}
              className={cn(
                "h-8 px-3 text-xs font-semibold transition-colors",
                lang === "en"
                  ? "bg-blue-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              )}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
