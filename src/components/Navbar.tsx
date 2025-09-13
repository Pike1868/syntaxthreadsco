import { LinksDropdown, Logo, ModeToggle, NavLinks} from "."

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between align-element h-16">
        <Logo />
        <LinksDropdown />
        <NavLinks />

        <div className="flex items-center justify-center gap-x-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
