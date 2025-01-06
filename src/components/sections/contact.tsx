import contact from "@/data/contact.json"

import { ArrowRightCircle, Mail, Phone } from "lucide-react"
import Socials from "../socials"

const Contact = () => {
  const { partners } = contact

  return (
    <section className="border grid lg:grid-cols-2" id="contact">
      <div>
        <header className="border">
          <h2 className="py-2 px-4 lg:px-8">
            <span className="text-2xl lg:text-3xl text-primary font-extrabold mr-1">
              #
            </span>
            {contact.title}
          </h2>
        </header>

        <article className="border p-4 py-8 lg:p-10">
          <p className="mb-4">{contact.description}</p>

          <div className="flex gap-3 mb-2">
            <Mail />
            <a
              href={`mailto:${contact.contacts.email}`}
              className="text-sky-500 font-bold underline underline-offset-2"
            >
              {contact.contacts.email}
            </a>
          </div>

          <div className="flex gap-3 mb-6">
            <Phone />
            <a
              href={contact.contacts.whatsapp}
              className="text-sky-500 font-bold underline underline-offset-2"
            >
              {contact.contacts.phone}
            </a>
          </div>

          <Socials />
        </article>
      </div>

      <div className="flex flex-col">
        <header className="border">
          <h2 className="py-2 px-4 lg:px-8">
            <span className="text-2xl lg:text-3xl text-primary font-extrabold mr-1">
              #
            </span>
            {partners.title}
          </h2>
        </header>
        <article className="border p-4 py-8 lg:p-10 flex-1">
          <p className="mb-4">{partners.description}</p>
        </article>
        <a
          className="border bg-black text-white text-lg p-4 uppercase tracking-wide font-bold w-full flex justify-center items-center gap-1.5 hover:bg-white hover:text-black transition-colors"
          href={partners.button.link}
        >
          {partners.button.label}
          <ArrowRightCircle />
        </a>
      </div>
    </section>
  )
}
export default Contact
