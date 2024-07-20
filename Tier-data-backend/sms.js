const  africastalking = require('africastalking') 

const credentials = africastalking({
    username: 'sandbox',
    // apiKey : 'atsk_bd92cf71715b67722a284c045c440ff2043f4c32b1c8ba4627857e856e6c2f0face7fe15',
    apiKey: 'atsk_4d9ad34b68cc758260d42c38ec2eed10c41c1fde5740aedd4084a3188bc26320525c3361'
})

credentials.SMS.send({
    to: '+254112027035',
    // message: 'Dear David, your prepaid balance is almost due. Please top up immediately to avoid service interruptions. Thank you!',
    message: 'Dear David, your prepaid balance is running low. Please top up soon to ensure uninterrupted service. Thank you!',
    from: 'smartWater'
})
.then(()=> {
    console.log('message sent successfully')
})
.catch((err)=>{
    console.log("error while sending your message", err)
})
