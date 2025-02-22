"use client"

import { BarChart2, Bot, Calendar, ChevronDown, ChevronRight, Home, Lightbulb, Settings, Users, Video } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

// import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const sidebarItems = [
  { name: "Home", href: "/doctors", icon: Home },
  { name: "Appointments", href: "/doctors/appointments", icon: Calendar },
  { name: "Patients", href: "/doctors/patients", icon: Users },
  { name: "Analytics", href: "/doctors/analytics", icon: BarChart2 },
  { name: "Video Consultation", href: "/doctors/video-consultation", icon: Video },
  { name: "Settings", href: "/doctors/settings", icon: Settings },
]

const aiTools = [
  { name: "AI Chatbot", href: "/doctors/ai-tools/chatbot", icon: Bot },
  { name: "AI Recommendations", href: "/doctors/ai-tools/recommendation", icon: Lightbulb },
]

export function Sidebar() {
  const pathname = usePathname()
  const [aiToolsOpen, setAiToolsOpen] = useState(false)

  return (
    <div className="flex h-full w-16 flex-col justify-between border-r bg-muted md:w-64">
      <div className="flex flex-col space-y-2 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 hidden px-4 text-lg font-semibold tracking-tight md:block">
            DocDial
          </h2>
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Button
                key={item.name}
                asChild
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline-block">{item.name}</span>
                </Link>
              </Button>
            ))}
            <Collapsible
              open={aiToolsOpen}
              onOpenChange={setAiToolsOpen}
              className="w-full"
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between"
                  onClick={() => setAiToolsOpen(!aiToolsOpen)}
                >
                  <span className="flex items-center">
                    <Bot className="mr-2 h-4 w-4" />
                    <span className="hidden md:inline-block">AI Tools</span>
                  </span>
                  {aiToolsOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1">
                {aiTools.map((tool) => (
                  <Button
                    key={tool.name}
                    asChild
                    variant={pathname === tool.href ? "secondary" : "ghost"}
                    className="w-full justify-start pl-6"
                  >
                    <Link href={tool.href}>
                      <tool.icon className="mr-2 h-4 w-4" />
                      <span className="hidden md:inline-block">{tool.name}</span>
                    </Link>
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  )
}

