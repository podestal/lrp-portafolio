import { Tag } from "../data/landing"

interface Props {
    tags: Tag[]
}


const tags = ({ tags }: Props) => {
  return (
    <div className="w-full h-full flex max-md:flex-col justify-center items-center lg:gap-6 gap-8">
        {tags.map((tag, idx) => (
            <p key={idx} className={` block font-semibold font-poppins rounded-3xl px-4 py-2 ${tag.styles}`}>{tag.title}</p>
        ))}
    </div>
  )
}

export default tags