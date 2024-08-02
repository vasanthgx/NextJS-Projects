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

 import { RegisterSchema } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
 import {useForm} from "react-hook-form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { z } from "zod"
import { useFormStatus } from "react-dom"
import { useState } from "react"
 
 




const RegisterForm = () => {

  const [loading, setLoading] = useState(false);

//creating a form using 'react-hook-form'
const form = useForm({
  resolver: zodResolver(RegisterSchema),
  defaultValues: {
     email: "",
     name: "",
     password: "",
     confirmPassword: "",
  }

});

const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
  setLoading(true);
  console.log(data);
}


const {pending} = useFormStatus();

  return (
    <CardWrapper
    label = "Create an Account"
    title = "Register"
    backButtonHref = "/auth/login"
    backButtonLabel = "Already have an account?. Login here"
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field}  placeholder="Enter your name"/>
              </FormControl>
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
          <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input {...field} type="password"  placeholder="Enter password again"/>
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
          
          />

        </div>
        <Button className="w-full" type="submit" disabled={pending} >
          {loading ? "Loading..." : "Register"}
          
          
          </Button>
      
      </form>

    </Form>

    </CardWrapper>
  )
}

export default RegisterForm