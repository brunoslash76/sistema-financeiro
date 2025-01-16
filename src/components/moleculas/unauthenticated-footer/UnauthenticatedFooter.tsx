import { ContactSection } from "./components/contacts-section/ContactsSection";
import { ServiceSection } from "./components/service-section/ServiceSection";
import { SocialSection } from "./components/social-section/SocialSection";

export function UnauthenticatedFooter() {
  return (
    <footer className="bg-black py-10 w-full">
      <div
        className="
          flex
          flex-col
          px-12
          max-w-[1200px]
          mx-auto
          md:flex-row
          md:justify-between
        "
      >
        <ServiceSection />
        <ContactSection />
        <SocialSection />
      </div>
    </footer>
  )
}
