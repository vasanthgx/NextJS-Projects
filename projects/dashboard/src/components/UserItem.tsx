import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const UserItem = () => {
  return (
    <div>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/* <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
                <p>GD</p>
        </div> */}
           <div>

            <p className="text-[16px] font-bold">Vasanth Gopal</p>
            <p className="text-[12px] text-neutral-500">vasanth@gmail.com</p>

           </div>
    </div>
  )
}

export default UserItem