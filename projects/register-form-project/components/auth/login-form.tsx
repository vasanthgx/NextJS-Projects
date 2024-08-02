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

 import { LoginSchema } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
 import {useForm} from "react-hook-form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { z } from "zod"
 
 




const LoginForm = () => {
//creating a form using 'react-hook-form'
const form = useForm({
  resolver: zodResolver(LoginSchema),
  defaultValues: {
     email: "",
     password: "",
    
  }

});

const onSubmit = (data: z.infer<typeof LoginSchema>) => {
  console.log(data);
}


  return (
    <CardWrapper
    label = "Login to your account"
    title = "Login"
    backButtonHref = "/auth/register"
    backButtonLabel = "Don't have an account?. Register here"
    >
    <Form {...form}>
      {/* note the callback function onSubmit within the handleSubmit metho will be triggered only when the form is successfully validated*/}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
        
        {/* the FormField component takes in 3 props control, render and name
        control is used to access the form methods
         <!--
          * 3 props for FormField component
          * 1. control: this is used to access the form methods
            this is responsible for controlling the form state and validation.
          * 2. render: this is a callback function that takes in the formMethods and the provided name and returns the JSX for the field
          * 3. name: this is used to identify the field and access its values in the form context
          -->
         

        */}
          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="Enter your email"/>
              </FormControl>
               {/* <!-- FormMessage is used to display error messages -->  */}
              <FormMessage />
            </FormItem>
            
          )}
          
          />
          
          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password"  placeholder="Enter your password"/>
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
          
          />
          

        </div>
        <Button className="w-full" type= "submit">Login</Button>
      
      </form>

    </Form>

    </CardWrapper>
  )
}

export default LoginForm