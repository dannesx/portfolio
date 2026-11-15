import contact from "@/data/contact.json"
import { FormEvent, useState } from "react"
import { Mail, Phone } from "lucide-react"
import PosterButton from "../poster-button"
import Socials from "../socials"

const { form } = contact
const { name, phone, consent, submit } = form.fields

const Contact = () => {
  const [error, setError] = useState("")

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const person = String(data.get(name.name) ?? "").trim()
    const number = String(data.get(phone.name) ?? "").trim()
    const allowed = data.get(consent.name) === "on"

    if (!person || !number || !allowed) {
      setError("Preencha nome, telefone e a autorização para continuar.")
      return
    }

    const text = `Oi, Daniel! Meu nome é ${person}. Meu telefone é ${number}.`
    const url = `${form.whatsapp}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")
    setError("")
  }

  return (
    <section id="contato" className="bg-paper py-14 lg:py-20">
      <div className="wrap grid items-start gap-5 lg:grid-cols-2">
        <article className="rounded-[22px] border-[3px] border-ink bg-card p-6 shadow-hard-lg sm:p-8">
          <h2 className="font-display text-4xl leading-[0.9] tracking-[-0.03em] sm:text-5xl">
            {form.title}
          </h2>
          <p className="mt-3 max-w-[40ch] text-base leading-relaxed">{form.hint}</p>
          <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate={false}>
            <div>
              <label htmlFor={name.name} className="mb-1.5 block font-mono text-xs uppercase tracking-[0.08em]">
                {name.label}
              </label>
              <input
                id={name.name}
                name={name.name}
                type={name.type}
                required={name.required}
                autoComplete="name"
                placeholder={name.placeholder}
                className="h-12 w-full rounded-xl border-2 border-ink bg-paper px-3 text-base"
              />
            </div>
            <div>
              <label htmlFor={phone.name} className="mb-1.5 block font-mono text-xs uppercase tracking-[0.08em]">
                {phone.label}
              </label>
              <input
                id={phone.name}
                name={phone.name}
                type={phone.type}
                required={phone.required}
                autoComplete="tel"
                placeholder={phone.placeholder}
                className="h-12 w-full rounded-xl border-2 border-ink bg-paper px-3 text-base"
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                id={consent.name}
                name={consent.name}
                type="checkbox"
                required={consent.required}
                className="mt-1 size-5 accent-ink"
              />
              <label htmlFor={consent.name} className="text-sm leading-snug">
                {consent.label}
              </label>
            </div>
            {error ? (
              <p role="alert" className="text-sm font-medium text-pop">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border-2 border-ink bg-ink px-4 text-[15px] font-semibold text-card shadow-hard transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#1A120C] motion-reduce:transition-none"
            >
              {submit.label}
            </button>
          </form>
        </article>

        <div className="grid gap-5">
          <article className="rounded-[22px] border-[3px] border-ink bg-card p-6 shadow-hard-lg sm:p-8">
            <h2 className="font-display text-4xl leading-[0.9] tracking-[-0.03em]">{contact.title}</h2>
            <p className="mt-3 leading-relaxed">{contact.description}</p>
            <div className="mt-5 space-y-3">
              <a href={`mailto:${contact.contacts.email}`} className="flex items-center gap-3 font-semibold underline decoration-2 underline-offset-4">
                <Mail className="size-5 shrink-0" aria-hidden="true" />
                {contact.contacts.email}
              </a>
              <a
                href={contact.contacts.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-semibold underline decoration-2 underline-offset-4"
              >
                <Phone className="size-5 shrink-0" aria-hidden="true" />
                {contact.contacts.phone}
              </a>
            </div>
            <div className="mt-6">
              <Socials />
            </div>
          </article>

          <article className="rounded-[22px] border-[3px] border-ink bg-sun p-6 shadow-hard-lg sm:p-8">
            <h2 className="font-display text-4xl leading-[0.9] tracking-[-0.03em]">{contact.partners.title}</h2>
            <p className="mt-3 leading-relaxed">{contact.partners.description}</p>
            <PosterButton href={contact.partners.button.link} tone="ink" className="mt-6">
              {contact.partners.button.label}
            </PosterButton>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
