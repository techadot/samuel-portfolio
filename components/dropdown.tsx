import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Profile from "./profile";
import { Download, Github, Instagram, Linkedin } from "lucide-react";
import DownloadLink from "./download-link";

const DropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Profile />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <h1>Abiodun Bankole</h1>{" "}
          <small className="text-muted-foreground">Software Engineer</small>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Github className="w-4 h-4 mr-2" />
            <a
              href="https://github.com/abbeydevs"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Linkedin className="w-4 h-4 mr-2" />
            <a
              href="https://www.linkedin.com/in/abiodun-bankole"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Instagram className="w-4 h-4 mr-2" />
            <a
              href="https://www.instagram.com/abbeydev_/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Download className="w-4 h-4 mr-2" />
            <DownloadLink filename="abbeydev_resume.pdf" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
