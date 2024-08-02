// creating a layout to style the  display of all the children of /auth/ route pages [login and register]



const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <section className="w-full">
        <div className="h-screen flex items-center justify-center">
            {children}
        </div>
    </section>
  )
}

export default AuthLayout