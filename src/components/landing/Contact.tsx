import { TextInput, Textarea, Button, Callout } from "@tremor/react"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { contactData } from "../../data/landing"
import { motion } from "framer-motion"
import useLanguageStore from "../../store/store"

const Contact = () => {

    // Form Refs
    const form = useRef<HTMLFormElement | null>(null)
    const name = useRef<HTMLInputElement | null>(null)
    const email = useRef<HTMLInputElement | null>(null)
    // const message = useRef<HTMLInputElement | null>(null)
    const [message, setMessage] = useState('')

    // Error Handling
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [disable, setDisable] = useState(false)

    const lan = useLanguageStore(s => s.lan)
    const data = lan == 'ES' ? contactData['ES'] : contactData['EN']


    const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setNameError(false)
        setEmailError(false)
        setMessageError(false)

        if (form.current === null) {
            return
        }

        if (name.current?.value.length === 0) {
            setNameError(true)
            return
        }

        if (email.current?.value.length === 0) {
            setEmailError(true)
            return
        }

        if (message.length === 0) {
            setMessageError(true)
            return
        }


        emailjs.sendForm('service_yf8dufv', 'template_v7o1xlg', form.current, {
            publicKey: 'JWOBBVI0xbGxiZOd0'
        }).then(() => {
            form.current?.reset()
            setSuccess(true)
            setDisable(true)
            setError(false)
            setMessage('')
        }).catch(() => {
            setSuccess(false)
            setDisable(false)
            setError(true)
        })
    }

  return (
    <section className="lg:max-w-[1280px]  min-h-screen mx-auto flex flex-col items-center justify-center gap-12 my-10">
        <motion.div 
            initial={{opacity: 0, translateY: -50}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.2}}
            className="flex flex-col justify-center items-center gap-6 ">
            <h2 className="lg:text-7xl text-5xl text-center">{data.title}</h2>
            <p className="text-xl">{data.subTitle}</p>
        </motion.div>
        {error && 
        <motion.div
            initial={{opacity: 0, translateY: -50}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 0.6}}
        >
            <Callout title={data.errorMessage} color='red'/>
        </motion.div>}
        {success && 
        <motion.div
            initial={{opacity: 0, translateY: -50}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 0.6}}
        >
            <Callout title={data.successMessage} color='teal'/>
        </motion.div>}
        <form onSubmit={handleSendEmail} ref={form} className=" overflow-hidden w-full flex flex-col gap-12 justify-center items-center lg:text-xl">
            <div className="max-lg:w-[75%] flex justify-center max-lg:flex-col items-center gap-8">
                <motion.div 
                    initial={{opacity: 0, translateX: -100}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.2}}
                    className="w-full flex flex-col justify-center items-center gap-4">
                    
                    <p>{data.nameLabel}</p>
                    <TextInput 
                        ref={name}
                        error={nameError}
                        errorMessage={data.nameError}
                        name="from_name" 
                        placeholder={data.namePlaceHolder} 
                        className="w-full lg:w-[450px]"/>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, translateX: 100}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.2}}
                    className="max-lg:w-full flex flex-col justify-center items-center gap-4">
                    <p>{data.emailLabel}</p>
                    <TextInput 
                        ref={email}
                        error={emailError}
                        errorMessage={data.emailError}
                        name="email_id" 
                        type="email"
                        placeholder={data.emailPlaceHolder} 
                        className="w-full lg:w-[450px] "/>
                </motion.div>
            </div>
            <motion.div 
                initial={{opacity: 0, translateY: 100}}
                whileInView={{opacity: 1, translateY: 0}}
                transition={{duration: 1.2}}
                className="max-lg:w-[75%] w-full flex flex-col justify-center items-center gap-4">
                <p>{data.messageLabel}</p>
                <Textarea 
                    value={message}
                    onValueChange={value => setMessage(value)}
                    error={messageError}
                    errorMessage={data.messageError}
                    name="message" 
                    placeholder={data.messagePlaceHolder} 
                    className="px-6 py-6 lg:w-[930px] h-[200px]" />
            </motion.div>
            <Button disabled={disable} color="blue">{data.buttonText}</Button>
        </form>
    </section>
  )
}

export default Contact