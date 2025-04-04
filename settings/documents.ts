import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Setup",
        href: "/setup",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Structure",
    href: "/structure",
    items: [
      {
        title: "Deep",
        href: "/deep",
        items: [
          {
            title: "Deeper",
            href: "/deeper",
            items: [
              {
                title: "Even deeper",
                href: "/even-deeper",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Documentation",
    href: "/powershell",
    heading: "PowerShell",
    items: [
      {
        title: "Official Docs",
        href: "/documents",
        items: [
          {
            title: "Set-ExecutionPolicy",
            href: "/setexecution",
          },
          {
            title: "Get-ExecutionPolicy",
            href: "/getexecution",
          },
          {
            title: "Get-Credential",
            href: "/getcredential",
          },
          {
            title: "Set-AuthenticodeSignature",
            href: "/setauthenticode",
          }
        ],
      },
      {
        title: "Learning",
        href: "/learning",
        items: [
          {
            title: "pwsh Basics",
            href: "/basics",
          },
          {
            title: "pwsh Advanced",
            href: "/advanced",
          },
          {
            title: "pwsh Professional",
            href: "/professional",
          }
        ]
      },
      {
        title: "Shellboxing",
        href: "/shellboxing",
      },
    ]
  },
  {
    spacer: true,
  },
  {
    title: "Markdown",
    href: "/markdown",
    heading: "Components",
    items: [
      {
        title: "Cards",
        href: "/cards",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Filetree",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
]
