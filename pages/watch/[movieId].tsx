import React from "react";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function Watch() {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav
        className="
            fixed 
            w-full 
            p-4 z-10 
            flex 
            flex-row 
            items-center 
            gap-8 
            bg-black 
            bg-opacity-70
            "
      >
        <BsFillArrowLeftCircleFill
          onClick={() => router.push("/")}
          className="text-white hover:cursor-pointer"
          size={40}
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light mr-2">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video autoPlay controls className="h-full w-full" src={data?.videoUrl} />
    </div>
  );
}

export default Watch;
