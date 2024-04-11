import classNames from "classnames";
import Link from "next/link";
import { UrlObject } from "node:url";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

type Variant = "solid" | "outline" | "ghost";

type Props = {
  variant?: Variant;
  href?: string | UrlObject;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<Props> = ({
  variant = "solid",
  href,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        className,
        "rounded-md text-blue-600 hover:opacity-70",
        variant === "ghost" ? "border-none" : "border border-blue-600",
        {
          "bg-blue-600 text-white": variant === "solid",
          "px-2 py-1": !href,
        }
      )}
      {...props}
    >
      {href ? (
        <Link href={href} className="block px-2 py-1">
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
