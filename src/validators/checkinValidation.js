const {z} =require('zod')
const CheckInSchema=z.object({
    fullName:z.
    string({required_error:"name is required"})
    .trim()
    .min(3,{message:'name must be minimum of 3 characters'})
    .max(30,{message:'name must be maximum of 30 characters'}),

    email:z.
    string({required_error:"email is required"})
    .min(6,{message:'email must be minimum of 6 characters'})
    .max(40,{message:'email must be maximum of 40 characters'}),

    phoneNumber:z.
    string({required_error:"Phone Number is required"})
    .min(10,{message:'Phone Number must be minimum of 10 characters'})
    .max(10,{message:'Phone Number must be maximum of 10 characters'}),

    
    message:z.
    string({required_error:"message is required"})
    .trim()
    .min(20,{message:'message must be minimum of 20 characters'})
    .max(1000,{message:'message must be maximum of 1000 characters'}),
})

module.exports=CheckInSchema