import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { IconType } from "react-icons";
import { MdArrowOutward } from "react-icons/md";
import { KeyTextField, LinkField } from "@prismicio/client";

type ShowContactProps = {
  linkfield: LinkField;
  label: KeyTextField;
  icon?: IconType;
  showIcon?: boolean;
  className?: string;
};

export default function ShowContact({
  linkfield,
  label,
  icon: Icon,
  showIcon = true,
  className,
}: ShowContactProps) {
  return (
    <PrismicNextLink field={linkfield} className={className}>
      <span className="relative flex items-center gap-2">
      <span className="font-bold transition-all duration-300 ease-in-out hover:text-yellow-300">
        {Icon && <Icon className="inline-block" />} {/* Display the icon */}
          {label}
          {showIcon && <MdArrowOutward className="inline-block" />}
        </span>{" "}
      </span>
    </PrismicNextLink>
  );
}
