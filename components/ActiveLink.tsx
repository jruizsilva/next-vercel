import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  href: string
  text: string
}

export const ActiveLink = ({ href, text }: Props) => {
  const { asPath } = useRouter()
  const anchorRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (asPath !== href) return
    anchorRef.current?.focus()
  }, [asPath, href])
  return (
    <li>
      <Link href={href} ref={anchorRef}>
        {text}
      </Link>
    </li>
  )
}
