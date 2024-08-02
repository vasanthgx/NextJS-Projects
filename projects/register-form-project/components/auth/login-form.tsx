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
import { useFormStatus } from "react-dom"
import { useState } from "react"

/**
 * useFormStatus is a custom hook used to get the current form status of the form.
 * It returns an object with the following properties:
 * 1. isSubmitting: a boolean indicating whether the form is currently submitting.
 * 2. isValidating: a boolean indicating whether the form is currently validating.
 * 3. dirtyFields: an array of the fields that have been modified.
 * 4. touchedFields: an array of the fields that have been touched.
 * 5. isDirty: a boolean indicating whether the form is dirty or not.
 * 6. isValid: a boolean indicating whether the form is valid or not.
 * 
 * This hook is particularly useful for understanding the current state of the form.
 * It can be used to disable the submit button if the form is not valid and is currently submitting.
 * It can also be used to show validation messages only when the field has been touched.
 * 
 * The useFormStatus hook is a wrapper around the useFormContext hook which is provided by react-hook-form.
 * It extracts the form status from the form context and returns it as an object.
 * 
 * */
 
 




const LoginForm = () => {

  const [loading, setLoading] = useState(false);
//creating a form using 'react-hook-form'
const form = useForm({
  resolver: zodResolver(LoginSchema),
  defaultValues: {
     email: "",
     password: "",
    
  }

});

const onSubmit = (data: z.infer<typeof LoginSchema>) => {
  setLoading(true);
  console.log(data);
}

const {pending} = useFormStatus();

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
        <Button className="w-full" type= "submit" disabled={pending}>
          
           {loading ? <p>Loading...</p> : "Login"}
          
          </Button>
       
      
      </form>

    </Form>

    </CardWrapper>
  )
}

export default LoginForm