import React from 'react'
import { Body, Button, Container, Head, Heading, Hr, Html, Tailwind, Text } from '@react-email/components'

const EmailVerification = ({url}:{url:string}) => {
  return (
    <Html>
        <Head />
        <Tailwind>
            <Body className='mx-auto p-2 font-sans'>
                <Container className='rounded-lg shadow-xl' style={{border: '1px solid #eee'}}>
                    <Container className='p-5 text-left'>
                        <Heading>Pedago<span className='text-indigo-600'>+</span></Heading>
                        <Text className='text-4xl'>Verify your email account</Text>
                        <Text className='text-gray-500'>Use the link below to verify your email and start enjoying Pedago+</Text>
                        <Button className='bg-indigo-700 py-2 px-4 text-white rounded-lg cursor-pointer' href={url}>Verify email</Button>
                    </Container>
                    <Container className='bg-black px-5 text-gray-400'>
                        <Text>Pedago<span className='text-indigo-600'>+</span></Text>
                        <Hr />
                        <Text className='text-xs'>Copyright © 2025</Text>
                    </Container>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

export default EmailVerification