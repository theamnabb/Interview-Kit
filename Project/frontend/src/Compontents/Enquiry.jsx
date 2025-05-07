import React from 'react'
import { Button, Textarea, Label, TextInput } from "flowbite-react";


const Enquiry = () => {
  return (
    <div>
        <h1 className='text-[40px] text-center py-6 font-bold '>User Enquiry</h1>
        <div className="grid grid-cols-[30%_auto]">
            <div className='bg-blue-900 p-4'>
                <h2 className='text-[20px] font-bold text-amber-300'>Enquiry Form</h2>
                <form action="">
                    <div className="p-3">
                    <Label htmlFor="name">Your Name</Label>
                    <TextInput id="name" type="text" placeholder="Your Name" required />
                    </div>
                    {/* Email */}
                    <div className="p-3">
                    <Label htmlFor="email">Your Email</Label>
                    <TextInput id="email" type="email" placeholder="email@gamil.com" required />
                    </div>
                    {/*Phone number */}
                    <div className="p-3">
                    <Label htmlFor="phone">Your Phone</Label>
                    <TextInput id="phone" type="text" placeholder="+92 3055504567" required />
                    </div>
                    {/* Message */}
                    <div className="p-3">
                    <Label htmlFor="phone">Message</Label>
                    <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
                    </div>

                    {/* Button */}
                    <div className="p-3">
                    <Button type="submit" className='w-[100%]'>Save</Button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Enquiry