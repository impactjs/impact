import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiLinear } from "react-icons/si";

type IconProps = {
  origin: string;
};

export function Icon({ origin }: IconProps) {
  switch (origin) {
    case "github":
      return <FaGithub />;
    case "git":
      return <FaGitAlt />;
    case "linear":
      return <SiLinear />;
    default:
      return null;
  }
}
