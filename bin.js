#!/usr/bin/env node

const { execSync } = require("child_process")

const shadcnCommand =
  "npx shadcn@latest add sidebar accordion alert alert-dialog aspect-ratio avatar badge breadcrumb button calendar card carousel chart checkbox collapsible command context-menu dialog drawer dropdown-menu form hover-card input input-otp label menubar navigation-menu pagination popover progress radio-group resizable scroll-area select separator sheet skeleton slider sonner switch table tabs textarea toast toggle toggle-group tooltip"

try {
  execSync(shadcnCommand, { stdio: "inherit" })
} catch (error) {
  console.error("Error executing shadcn command:", error)
  process.exit(1)
}
