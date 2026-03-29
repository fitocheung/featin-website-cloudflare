"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const pdfCatalogues = [
  {
    key: "pdfOphthalmic" as const,
    href: "https://www.852featin.com/new/wp-content/uploads/2026/03/HK-Feat-In-Tech-Ophthalmic-Instruments-Catalogue-.pdf",
  },
  {
    key: "pdfHair" as const,
    href: "https://www.852featin.com/new/wp-content/uploads/2026/03/HK-Feat-In-Tech-Hair-Transplant-Instruments-Catalogue.pdf",
  },
  {
    key: "pdfPlastic" as const,
    href: "https://www.852featin.com/new/wp-content/uploads/2026/03/HK-Feat-In-Tech-Plastic-Surgery-Catalogue-.pdf",
  },
  {
    key: "pdfSurgical" as const,
    href: "https://www.852featin.com/new/wp-content/uploads/2026/03/HK-Feat-In-Tech-Surgical-Instruments-Catalogue-.pdf",
  },
]

const leadingNavItems = [
  { href: "/", key: "navHome" as const },
  { href: "/products", key: "navProducts" as const },
]

const trailingNavItems = [
  { href: "/services", key: "navServices" as const },
  { href: "/about-us", key: "navAboutUs" as const },
  { href: "/contact", key: "navContact" as const },
]

const mobileNavItems = [
  ...leadingNavItems,
  { href: "/pdf-catalogue", key: "navPdfCatalogue" as const },
  ...trailingNavItems,
]

function getDesktopLinkClass(isActive: boolean) {
  return cn(
    "inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors",
    isActive
      ? "bg-blue-50 text-blue-800"
      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  )
}

export function SiteNavigation() {
  const pathname = usePathname()
  const { lang, toggleLang, t } = useLanguage()
  const isPdfActive = pathname === "/pdf-catalogue"

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-20 w-full max-w-300 items-center justify-between gap-4 px-4 lg:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="shrink-0 h-12 max-h-12 overflow-hidden flex items-center">
            <Image
              src="/logo.png"
              alt="Feat In Technology"
              className="h-12 w-auto max-w-full object-contain"
              width={180}
              height={48}
              priority
            />
          </div>
          <div className="hidden min-w-0 sm:block">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
              Hong Kong
            </p>
            <p className="truncate text-xl font-medium text-slate-800">Feat In Technology</p>
          </div>
        </Link>

        <NavigationMenu className="hidden lg:flex ml-auto" viewport={false}>
          <NavigationMenuList className="gap-0">
            {leadingNavItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link href={item.href} className={getDesktopLinkClass(pathname === item.href)}>
                    {t[item.key]}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={getDesktopLinkClass(isPdfActive)}
                    aria-label={t.navPdfCatalogue}
                  >
                    {t.navPdfCatalogue}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
                >
                  <DropdownMenuLabel className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {t.navPdfCatalogue}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {pdfCatalogues.map((item) => (
                    <DropdownMenuItem
                      key={item.key}
                      asChild
                      className="rounded-lg px-3 py-3 text-slate-700 focus:bg-slate-100"
                    >
                      <Link href={item.href} target="_blank" className="flex flex-col items-start gap-1">
                        <span className="font-medium text-slate-900">{t[item.key]}</span>
                        <span className="text-xs text-slate-500">{t.navOpenPdf}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="rounded-lg px-3 py-3 focus:bg-blue-50">
                    <Link href="/pdf-catalogue" className="font-medium text-blue-800">
                      {t.navViewAll}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            {trailingNavItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link href={item.href} className={getDesktopLinkClass(pathname === item.href)}>
                    {t[item.key]}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center rounded-full border border-slate-300 bg-white shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => lang !== "zh" && toggleLang()}
            className={`h-9 px-3 text-sm font-semibold transition-colors ${
              lang === "zh"
                ? "bg-blue-600 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            中文
          </button>
          <button
            type="button"
            onClick={() => lang !== "en" && toggleLang()}
            className={`h-9 px-3 text-sm font-semibold transition-colors ${
              lang === "en"
                ? "bg-blue-600 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            EN
          </button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon-lg"
              className="rounded-full border-slate-300 bg-white text-slate-700 hover:bg-slate-100 lg:hidden"
            >
              <Menu className="size-5" />
              <span className="sr-only">Open navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-sm gap-0 border-slate-200 bg-white p-0">
            <SheetHeader className="border-b border-slate-200 px-6 py-5 text-left">
              <SheetTitle className="text-base font-semibold text-slate-900">{t.navNavigateFit}</SheetTitle>
              <SheetDescription className="text-sm leading-6 text-slate-500">
                {t.navExploreProducts}
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto p-4">
              <nav className="flex flex-col gap-2">
                {mobileNavItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-blue-50 text-blue-800"
                          : "text-slate-700 hover:bg-slate-100"
                      )}
                    >
                      {t[item.key]}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {t.navPdfCatalogue}
                </p>
                <div className="mt-3 grid gap-2">
                  {pdfCatalogues.map((item) => (
                    <SheetClose asChild key={item.key}>
                      <Link
                        href={item.href}
                        target="_blank"
                        className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
                      >
                        {t[item.key]}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </div>

            <SheetFooter className="border-t border-slate-200 bg-slate-50 px-4 py-4">
              <Button
                asChild
                variant="outline"
                className="h-10 rounded-full border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
              >
                <Link href="https://wa.me/85253469889" target="_blank">
                  {t.navWhatsApp}
                </Link>
              </Button>
              <Button asChild className="h-10 rounded-full bg-slate-900 text-white hover:bg-slate-800">
                <Link href="/contact">{t.navSendInquiry}</Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
