"use client" //karena pakai hooks

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function SearchInput() {
    const [search, setSearch] = useState<string>('') //hooks
    const router = useRouter()
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input 
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      type="text" 
      placeholder="Cari Video" />
      <Button onClick={()=> router.push(`/videos?query=${search}`)} 
      type="submit">Submit</Button>
    </div>
  )
}
