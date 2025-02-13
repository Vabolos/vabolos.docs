import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Contact",
    href: "https://github.com/vabolos/vabolos.docs/issues/new",
    external: true,
  },
]

export const GitHubLink = {
  href: "https://github.com/vabolos",
}
