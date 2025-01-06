import { form } from "@/data/contact.json"
import Input from "../ui/input"
import Label from "../ui/label"
import Button from "../ui/button"
import { ArrowRightCircle } from "lucide-react"

const ContactForm = () => {
  const { name, phone, consent, submit } = form.fields
  return (
    <section className="p-4 py-8 lg:p-10 border-2 grid lg:grid-cols-6 bg-black text-white items-center space-y-6">
      <div className="flex justify-center lg:col-span-2">
        <h2 className="text-secondary lg:text-right leading-snug">
          {form.title}
        </h2>
      </div>

      <form className="lg:col-start-4 lg:col-span-2 space-y-4">
        <div>
          <Label htmlFor={name.name}>{name.label}</Label>
          <Input
            className="w-full"
            type={name.type}
            id={name.name}
            placeholder={name.placeholder}
          />
        </div>

        <div>
          <Label htmlFor={phone.name}>{phone.label}</Label>
          <Input
            className="w-full"
            type={phone.type}
            id={phone.name}
            placeholder={phone.placeholder}
          />
        </div>

        <div className="flex gap-2">
          <Input type={consent.type} id={consent.name} className="mr-1" />
          <Label htmlFor={consent.name} className="text-sm">
            {consent.label}
          </Label>
        </div>

        <Button
          className="w-full flex justify-center items-center gap-1"
          type="submit"
        >
          {submit.label}
          <ArrowRightCircle strokeWidth={1.5} />
        </Button>
      </form>
    </section>
  )
}
export default ContactForm
