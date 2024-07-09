import { TextInput, Textarea,Button } from "@tremor/react"
import { contactData } from "../../data/landing"

const Contact = () => {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-12">
        <h2 className="lg:text-7xk text-6xl">{contactData.title.titleEs}</h2>
        <p>{contactData.title.subTitleEs}</p>
        <form className="w-full flex flex-col gap-12 justify-center items-center lg:text-xl">
            <div className="flex justify-center items-center gap-8">
                <div className="flex flex-col justify-center items-center gap-4">
                <p>{contactData.name.labelEs}</p>
                <TextInput placeholder={contactData.name.placeholderEs} className="lg:w-[450px]"/>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                <p>{contactData.email.labelEs}</p>
                <TextInput placeholder={contactData.email.placeholderEs} className="lg:w-[450px]"/>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-4">
                <p>Mensaje</p>
                <Textarea placeholder={contactData.message.placeholderEs} className="px-6 py-6 lg:w-[750px] h-[200px]"/>
            </div>
            <Button color="blue">Enviar</Button>
        </form>
    </div>
  )
}

export default Contact