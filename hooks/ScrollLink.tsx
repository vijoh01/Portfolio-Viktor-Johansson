import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

// Mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;

type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

// Component definition
const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    
    const btn:any = e.target;
    // Log the click event here
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    const topOffset = elem?.getBoundingClientRect().top || 0;
    const currentScrollY = window.scrollY || window.pageYOffset;
    
    window.scrollTo({
      top: currentScrollY + topOffset,
      behavior: "smooth",
    });
  };

  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};

export default ScrollLink;
