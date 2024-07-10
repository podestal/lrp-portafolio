import { TextInput, Textarea,Button } from "@tremor/react"
import { useRef } from "react"
import emailjs from '@emailjs/browser'
import { contactData } from "../../data/landing"
import { motion } from "framer-motion"
import useLanguageStore from "../../store/store"


const Contact = () => {

    const form = useRef(null)
    const lan = useLanguageStore(s => s.lan)
    const data = lan == 'ES' ? contactData['ES'] : contactData['EN']

    const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (form.current === null) {
            return
        }
        emailjs.sendForm('service_yf8dufv', 'template_v7o1xlg', form.current, {
            publicKey: 'JWOBBVI0xbGxiZOd0'
        }).then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
        
        
    }

  return (
    <section className="max-w-[1280px] min-h-[100vh] mx-auto flex flex-col items-center justify-center gap-12">
        <motion.div 
            initial={{opacity: 0, translateY: -200}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.2}}
            className="flex flex-col justify-center items-center gap-6">
            <h2 className="lg:text-7xk text-6xl text-center">{data.title}</h2>
            <p>{data.subTitle}</p>
        </motion.div>
        <form onSubmit={handleSendEmail} ref={form} className="w-full flex flex-col gap-12 justify-center items-center lg:text-xl ">
            <div className="max-lg:w-[75%] flex justify-center max-lg:flex-col items-center gap-8">
                <motion.div 
                    initial={{opacity: 0, translateX: -100}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.2}}
                    className="w-full flex flex-col justify-center items-center gap-4">
                    <p>{data.nameLabel}</p>
                    <TextInput name="user_name" placeholder={data.namePlaceHolder} className="w-full lg:w-[450px]"/>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, translateX: 100}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.2}}
                    className="max-lg:w-full flex flex-col justify-center items-center gap-4">
                    <p>{data.emailLabel}</p>
                    <TextInput name="user_email" placeholder={data.emailPlaceHolder} className="lg:w-[450px]"/>
                </motion.div>
            </div>
            <motion.div 
                initial={{opacity: 0, translateY: 100}}
                whileInView={{opacity: 1, translateY: 0}}
                transition={{duration: 1.2}}
                className="max-lg:w-[75%] w-full flex flex-col justify-center items-center gap-4">
                <p>{data.messageLabel}</p>
                <Textarea name="message" placeholder={data.messagePlaceHolder} className="px-6 py-6 lg:w-[930px] h-[200px]"/>
            </motion.div>
            <Button color="blue">{data.buttonText}</Button>
        </form>
    </section>
  )
}

export default Contact