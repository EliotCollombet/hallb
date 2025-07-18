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
            accent: "bg-accent text-secondary hover:bg-primary p-2",
            box: "text-primary-hover block py-2 hover:text-accent bg-transparent"
        }, 
        size: {
            normal: "text-sm", 
            big: "text-2xl, w-full py-4"
        }, 
    },
    defaultVariants: {
      variant: "primary",
      size: "normal"
    },
  }
);

type LinkedButtonProps =
    { id: string } &
    VariantProps<typeof linkedButtonVariants> & {
        className?: string;
    };

export function LinkedButton({ id, className, variant, size, ...props }: LinkedButtonProps) {
    const linkObject = links.find(item => item.id === id);
    let link = defaultLink
    let text = ""
    if (linkObject) {
        link = linkObject["link"]
        text = linkObject["text"]}
    return (
        <Link
            href = {link}
            className={clsx(linkedButtonVariants({ variant, size }), className)}
            {...props}
        >
            {text}
        </Link>
    );
}