"use client";

import { TvMinimalPlay } from 'lucide-react';
import { FaRegListAlt } from "react-icons/fa";

import React, { forwardRef } from 'react';

const data = [
    {
        icon: TvMinimalPlay,
        type: "Course",
        description: "Create exceptional learning experiences thanks to video sessions, quizzes, coding exercises, etc."
    },
    {
        icon: FaRegListAlt,
        type: "Certification",
        description: "Aidez les participants à se préparer aux examens de certification en leur fournissant des questions de pratique."
    }
]

interface Props {
    selectedType: string;
    setSelectedType:React.Dispatch<React.SetStateAction<string>>
}

const Type = forwardRef<HTMLDivElement, Props>(
    ({selectedType,setSelectedType}, ref) => {
    //const [selectedType, setSelectedType] = useState(-1)
  return (
    <div ref={ref} className='flex gap-3 justify-center'>
        {
        data.map((i) => <div onClick={() => setSelectedType(i.type)} aria-checked={selectedType === i.type} key={i.type} className='border border-gray-300 flex flex-col items-center py-10 px-5 w-50 hover:bg-indigo-50 aria-checked:ring-2 aria-checked:ring-primary'>
            <i.icon size={25} />
            <p className='mt-5 font-semibold'>{i.type}</p>
            <p className='text-sm text-muted-foreground text-center'>{i.description}</p>
        </div>
        )}

    </div>
  )
})

Type.displayName = "Type";

export default Type