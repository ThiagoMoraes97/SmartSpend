import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


export function UserInfoDialog({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  return(
    <DialogContent >
      <DialogHeader className="w-full flex flex-col items-center text-center">
        <Avatar className="h-28 w-28 mb-4 mx-auto border-2 border-muted-foreground">
          <AvatarImage src={user.avatar}  />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <DialogTitle>{user.name}</DialogTitle> 
        <DialogDescription>
          {user.email}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  )
}