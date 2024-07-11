import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "@remixicon/react"
import { Icon } from "@tremor/react"
import { useState } from "react"

interface Props {
    imgs?: string[]
}

const ImgCarousel = ({ imgs }: Props) => {

    if (!imgs) return null

    const [curr, setCurr] = useState(0)

    const prev = () => setCurr(curr => curr === 0 ? imgs.length - 1: curr - 1)
    const next = () => setCurr(curr => curr === imgs.length - 1 ? 0 : curr + 1)

  return (
    <div className="flex gap-6 flex-col items-center justify-center my-10 overflow-hidden relative">
        <img className="w-[560px] h-[280px] lg:w-[800px] lg:h-[500px] object-contain mx-4" src={imgs[curr]}/>
        {/* <div className="absolute max-lg:hidden inset-0 flex items-center justify-between p-4">
            <button onClick={prev}>
                <Icon icon={RiArrowLeftCircleLine} size="xl"/>
            </button>
            <button onClick={next}>
                <Icon icon={RiArrowRightCircleLine} size="xl"/>
            </button>
        </div> */}
        <div className="w-full  flex items-center justify-evenly p-4">
            <button onClick={prev}>
                <Icon icon={RiArrowLeftCircleLine} size="xl"/>
            </button>
            <button onClick={next}>
                <Icon icon={RiArrowRightCircleLine} size="xl"/>
            </button>
        </div>
    </div>
  )
}

export default ImgCarousel