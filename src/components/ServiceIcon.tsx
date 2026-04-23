import Image from "next/image";
import { Icon } from "@iconify/react";

type Props = {
  icon: string;
  className?: string;
  size?: number;
};

/**
 * Renders a local SVG (path starting with "/") or an Iconify icon string.
 * For local SVGs, wrap in a span that applies CSS filter on group-hover to turn white.
 * For Iconify icons, currentColor handles the tint via className.
 */
export default function ServiceIcon({ icon, className = "", size = 40 }: Props) {
  if (icon.startsWith("/")) {
    return (
      <span className="transition-all duration-500 filter-[brightness(0)] group-hover:filter-[brightness(0)_invert(1)]">
        <Image
          src={icon}
          alt=""
          width={size}
          height={size}
          style={{ width: size, height: size }}
          className={className}
        />
      </span>
    );
  }

  return <Icon icon={icon} width={size} height={size} className={className} />;
}
