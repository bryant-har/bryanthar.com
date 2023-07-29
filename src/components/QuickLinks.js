import { Mail } from "lucide-react";
import Image from 'next/image'
import Typewriter from "typewriter-effect";
import doge from '../../public/static/ico.png'
import git from '../../public/static/github.png'
import disc from '../../public/static/discord.png'
import linkedin from '../../public/static/linkedin.png'
import chess from '../../public/static/lichess.ico'


export default function QuickLinks() {
  return (
    <div className="pb-8">
      <Image
        className="mx-auto rounded-full"
        height="auto"
        width="100"
        src={doge}
      />
      <div className="heading text-2xl text-center mb-2 text-slate-500">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Quick Links").start();
          }}
        />
      </div>
      <div className="flex items-center justify-center space-x-1">
        <a href="https://github.com/dreamShepherd">
          <Image width="24" height="auto" src={git}/>
        </a>
        <a href="https://lichess.org/@/DreamShepherd">
          <Image width="24" height="auto" src={chess}/>{" "}
        </a>
        <a href="https://discordapp.com/users/bryant3435">
          <Image width="24" height="auto" src={disc}/>
        </a>
        <a href="https://www.linkedin.com/in/bryant-har-a260ab186/">
          <Image width="24" height="auto" src={linkedin}/>
        </a>
        <a href="mailto:bhar@bryanthar.com">
          <Mail />
        </a>
      </div>
    </div>
  );
}
