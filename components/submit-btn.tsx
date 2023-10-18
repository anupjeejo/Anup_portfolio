import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type='submit'
            className='flex h-[3rem] w-[8rem] bg-gray-700 text-xl rounded-full
               outline-none transition-all items-center justify-center
               gap-2 foucs:scale-110 hover:scale-110
               hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65'
               disabled={pending}>
            {
                pending ? 
                (
                    <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
                )
                :
                (
                    <>
                        Submit 
                        <FaPaperPlane className='opacity-70 transition-all
                                                 group-hover:translate-x-1
                                                 group-hover:-translate-y-1'/>{" "}
                    </>
                )
            }
    </button>
  )
}
