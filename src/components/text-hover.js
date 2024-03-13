export const TextHover = ({title}) => {
  return (
    <div className=''>
        <button className="
        group
        p-5
        cursor-pointer 
        relative  
        text-xl 
        font-normal 
        flex 
        items-center 
        justify-center
        bg-black 
            bg-opacity-20
         h-auto  
         w-[170px]  
         overflow-hidden   
         transition-all
         duration-100">
        <span className="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-5 
        border-y
            border-8
            border-blue-500
        border-l
           transition-all
         duration-500">
        </span>

        <p className="text-white font-bold group-hover:opacity-0 group-hover:translate-x-[-100%] font-bold absolute translate-x-0 transition-all
         duration-1200 ">{title}</p>

        <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-1200">{title}
        </span>

        <span
            className="text-blue-500 group-hover:w-full absolute right-0 h-full w-5  border-y border-r border-8 border-orange-500 transition-all duration-500">
        </span>
    </button>
    </div>
  )
}
