import { TextInput, Textarea,Button } from "@tremor/react"
import { contactData } from "../../data/landing"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section className="max-w-[1280px] min-h-[140vh] mx-auto flex flex-col items-center justify-center gap-12">
        <motion.div 
            initial={{opacity: 0, translateY: -200}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.2}}
            className="flex flex-col justify-center items-center gap-6">
            <h2 className="lg:text-7xk text-6xl">{contactData.title.titleEs}</h2>
            <p>{contactData.title.subTitleEs}</p>
        </motion.div>
        <form className="w-full flex flex-col gap-12 justify-center items-center lg:text-xl">
            <div className="flex justify-center items-center gap-8">
                <motion.div 
                    initial={{opacity: 0, translateX: -100}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.2}}
                    className="flex flex-col justify-center items-center gap-4">
                    <p>{contactData.name.labelEs}</p>
                    <TextInput placeholder={contactData.name.placeholderEs} className="lg:w-[450px]"/>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, translateX: 100}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.2}}
                    className="flex flex-col justify-center items-center gap-4">
                    <p>{contactData.email.labelEs}</p>
                    <TextInput placeholder={contactData.email.placeholderEs} className="lg:w-[450px]"/>
                </motion.div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-4">
                <p>{contactData.message.labelEs}</p>
                <Textarea placeholder={contactData.message.placeholderEs} className="px-6 py-6 lg:w-[750px] h-[200px]"/>
            </div>
            <Button color="blue">Enviar</Button>
        </form>
    </section>
  )
}

export default Contact