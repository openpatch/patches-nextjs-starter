import { Link as PLink, LinkProps as PLinkProps } from "@openpatch/patches";
import NLink, { LinkProps as NLinkProps } from "next/link";

export type LinkProps = Omit<PLinkProps, "as"> & NLinkProps;

/**
 * Link component for client-side routing.
 */
export const Link = ({
  href,
  as,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  ...props
}: LinkProps) => {
  return (
    <NLink
      href={href}
      as={as}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      passHref
    >
      <PLink href={href} {...props} />
    </NLink>
  );
};
