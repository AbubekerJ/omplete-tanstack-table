import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
     <Link href = {'https://omplete-tanstack-table.vercel.app/person'}>
      <Button size='lg'>Click To See The Table</Button>
     </Link>
    </div>
  );
}
