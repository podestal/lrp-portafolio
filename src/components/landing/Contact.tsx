import { TextInput,Button } from "@tremor/react"

const Contact = () => {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-12">
        <h2 className="lg:text-7xk text-6xl">Contáctame</h2>
        <form className="flex gap-12 justify-center items-center">
            <TextInput placeholder="Correo electrónico ..." className="lg:w-[450px]"/>
            <Button color="blue">Enviar</Button>
        </form>
    </div>
  )
}

export default Contact