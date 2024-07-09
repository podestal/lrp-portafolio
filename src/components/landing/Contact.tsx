import { TextInput, Textarea,Button } from "@tremor/react"
import { contactData } from "../../data/landing"
import { motion } from "framer-motion"
import useLanguageStore from "../../store/store"

const Contact = () => {

    const lan = useLanguageStore(s => s.lan)
    const data = lan == 'ES' ? contactData['ES'] : contactData['EN']

  return (
    <section className="max-w-[1280px] min-h-[140vh] mx-auto flex flex-col items-center justify-center gap-12">
        <motion.div 
            initial={{opacity: 0, translateY: -200}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.2}}
            className="flex flex-col justify-center items-center gap-6">
            <h2 className="lg:text-7xk text-6xl text-center">{data.title}</h2>
            <p>{data.subTitle}</p>
        </motion.div>
        <form className="w-full flex flex-col gap-12 justify-center items-center lg:text-xl">
            <div className="max-lg:w-[75%] flex justify-center max-lg:flex-col items-center gap-8">
                <motion.div 
                    initial={{opacity: 0, translateX: -100}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.2}}
                    className="w-full flex flex-col justify-center items-center gap-4">
                    <p>{data.nameLabel}</p>
                    <TextInput placeholder={data.namePlaceHolder} className="w-full lg:w-[450px]"/>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, translateX: 100}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.2}}
                    className="max-lg:w-full flex flex-col justify-center items-center gap-4">
                    <p>{data.emailLabel}</p>
                    <TextInput placeholder={data.emailPlaceHolder} className="lg:w-[450px]"/>
                </motion.div>
            </div>
            <motion.div 
                initial={{opacity: 0, translateY: 100}}
                whileInView={{opacity: 1, translateY: 0}}
                transition={{duration: 1.2}}
                className="max-lg:w-[75%] w-full flex flex-col justify-center items-center gap-4">
                <p>{data.messageLabel}</p>
                <Textarea placeholder={data.messagePlaceHolder} className="px-6 py-6 lg:w-[750px] h-[200px]"/>
            </motion.div>
            <Button color="blue">{data.buttonText}</Button>
        </form>
    </section>
  )
}

export default Contact