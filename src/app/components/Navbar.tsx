// src/app/components/Navbar.tsx
"use client"

import { Home, File, Globe, Folder } from "lucide-react"

export function Navbar() {
  return (
    <ul className="menu menu-horizontal bg-base-100 p-2 shadow">
      <li>
        <a href="/">
          <Home className="inline-block w-5 h-5 mr-1 align-text-bottom" />
          Home
        </a>
      </li>
      <li>
        <a href="/about">
          <File className="inline-block w-5 h-5 mr-1 align-text-bottom" />
          About Me
        </a>
      </li>
      <li>
        <a href="/projects">
          <Folder className="inline-block w-5 h-5 mr-1 align-text-bottom" />
          Projects
        </a>
      </li>
      <li>
        <a href="/contact">
          <Globe className="inline-block w-5 h-5 mr-1 align-text-bottom" />
          Contact
        </a>
      </li>
    </ul>
  )
}
