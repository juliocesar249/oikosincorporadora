import type React from "react";
import { Link } from "react-router-dom";

type RouterLinkProps = {
  children: React.ReactNode;
  link: string;
} & React.ComponentProps<"a">;

export function RouterLink({children, link, ...props}: RouterLinkProps) {
  return <Link {...props} to={link}>
  {children}
  </Link>
}