import { Mail } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function QuickLinks() {
  return (
    <div className="pb-8">
      <img
        className="mx-auto rounded-full"
        height="auto"
        width="100"
        src="./static/ico.png"
      ></img>
      <div className="heading text-2xl text-center mb-2 text-slate-500">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Quick Links").start();
          }}
        />
      </div>
      <div className="flex items-center justify-center space-x-1">
        <a href="https://github.com/dreamShepherd">
          <img width="24" height="auto" src="./static/github.png"></img>
        </a>
        <a href="https://lichess.org/@/DreamShepherd">
          <img width="24" height="auto" src="./static/lichess.ico"></img>{" "}
        </a>
        <a href="https://discordapp.com/users/bryant3435">
          <img width="24" height="auto" src="./static/discord.png"></img>
        </a>
        <a href="https://www.linkedin.com/in/bryant-har-a260ab186/">
          <img width="24" height="auto" src="./static/linkedin.png"></img>
        </a>
        <a href="mailto:bryanthar100@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  );
}
