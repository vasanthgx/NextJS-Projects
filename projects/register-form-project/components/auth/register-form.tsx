"use client"


import CardWrapper from "./card-wrapper"
import { Form,
  FormDescription,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel
 } from "@/components/ui/form"



const RegisterForm = () => {
  return (
    <CardWrapper
    label = "Create an Account"
    title = "Register"
    backButtonHref = "/auth/login"
    backButtonLabel = "Already have an account?. Login here"
    >
      <div>
        
      </div>

    </CardWrapper>
  )
}

export default RegisterForm