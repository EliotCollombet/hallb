import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link from 'next/link';
import links from "@/interface/linked-button.json"
import { defaultLink } from "@/app/lib/links";

const linkedButtonVariants = cva(
  "transition-colors duration-200 rounded-lg",
  {
    variants: {
      variant: {
        primary: "bg-primary text-secondary hover:bg-primary-hover p-2",
        accent: "bg-accent text-secondary hover:bg-primary-hover p-2",
        box: "block py-2"
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type LinkedButtonProps =
    { id: string } &
    VariantProps<typeof linkedButtonVariants> & {
        className?: string;
    };

export function LinkedButton({ id, className, variant, ...props }: LinkedButtonProps) {
    const linkObject = links.find(item => item.id === id);
    let link = defaultLink
    let text = ""
    if (linkObject) {
        link = linkObject["link"]
        text = linkObject["text"]}
    return (
        <Link
            href = {link}
            className={clsx(linkedButtonVariants({ variant }), className)}
            {...props}
        >
            {text}
        </Link>
    );
}