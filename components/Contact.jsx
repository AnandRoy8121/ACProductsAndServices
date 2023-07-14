import React, { useState } from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { EmailOutlined } from '@mui/icons-material';
import LoadingSpinner from './LoadingSpinner';


const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
          const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message}),
          });
    
          if (response.ok) {
            //console.log('Email sent successfully');
            setIsLoading(false);
            setEmail('')
            setName('')
            setMessage('')
            // Handle success, show a success message, or redirect the user
          } else {
            //console.log('Failed to send email');
            // Handle error, show an error message, or redirect the user
          }
        } catch (error) {
          console.error('Error:', error);
          setIsLoading(false);
        }
      };
  return (
    <section id="contact" className="w-full mt-4 px-8 py-4">
        <h1 className="font-serif text-2xl mb-4 font-bold sm:text-4xl text-Primary-Color text-center">
        Contact Us
      </h1>
      <div className='flex flex-col rounded-md relative'>
        <img className='w-full h-[250px] object-cover rounded-md' src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png" alt="contact us image" />
        <div className='flex flex-col sm:flex-row'>
        <div className='flex flex-col gap-2 absolute sm:top-[220px] top-[180px] w-full sm:w-1/4 h-[70px] bg-blue-400 shadow-xl sm:left-10 rounded-md items-center justify-center'>
        <PhoneAndroidIcon fontSize='large' className='text-Primary-Color'/>
        <h2 className='font-semibold text-Primary-Color'>+91 7978717120</h2>
        </div>
        <div className='flex flex-col gap-2 absolute sm:top-[220px] top-[80px] w-full sm:w-1/3 h-[70px] bg-blue-400 shadow-xl sm:right-10 rounded-md items-center justify-center'>
            <EmailOutlined fontSize='large' className='text-Primary-Color'/>
            <h2 className='font-semibold text-Primary-Color text-sm'>info@kanakadurgaconsultancyservices.com</h2>
        </div>
        </div>
        
        <div className='flex flex-col mx-auto my-20 w-[90%] sm:w-[70%] bg-green-300 shadow-md rounded-md'>
        <div className="flex flex-col gap-10">
            <h1 className="font-bold text-2xl text-center mt-4 text-gray-600">
              Email us below
            </h1>
            <input
              className="rounded-lg px-4 py-2 w-[90%] sm:w-1/2 mx-auto"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          {/* Input Email */}
            <input
              className="rounded-lg px-4 py-2 w-[90%] sm:w-1/2 mx-auto"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Input Phone */}
            <textarea
              className="rounded-lg px-4 py-2 w-[90%] sm:w-1/2 mx-auto"
              type="text"
              name="Message"
              id="message"
              placeholder="Message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="px-10 py-2 bg-blue-500 rounded-full font-bold text-white my-10 w-[90%] sm:w-1/2 mx-auto" onClick={handleSubmit}>
            {isLoading ? <LoadingSpinner /> : 'Send Enquiry'}
            </button>
        </div>
      </div>
    </section>
  )
}

export default Contact