import { cn } from '@/lib/utils'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CTA from './sections/shared/cta'
import Footer from './sections/shared/footer'
import Navbar from './sections/shared/navbar'

interface LayoutProps {
    children: React.ReactNode
    className?: string
    props?: React.HTMLAttributes<HTMLDivElement>
}

const ScrollToTop = () => {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        // Links like /academy#curriculum land on that section; everything else starts at the top.
        const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
        if (target) {
            target.scrollIntoView()
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])

    return null
}

const Layout = ({ children, className, ...props }: LayoutProps) => {
    return (
        <main className={cn("min-h-screen", className)} {...props}>
            <ScrollToTop />
            <Navbar />
            {children}
            <CTA />
            <Footer />
        </main>
    )
}

export default Layout