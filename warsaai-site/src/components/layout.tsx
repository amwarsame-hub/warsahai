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
        const id = hash ? decodeURIComponent(hash.slice(1)) : ""
        const target = id ? document.getElementById(id) : null
        if (target) {
            target.scrollIntoView()
            return
        }
        window.scrollTo(0, 0)
        if (!id) return
        // Lazy-loaded sections (e.g. /#how-we-build on the home page) mount a moment later.
        let tries = 0
        const timer = window.setInterval(() => {
            const el = document.getElementById(id)
            if (el || ++tries > 30) {
                window.clearInterval(timer)
                el?.scrollIntoView()
            }
        }, 100)
        return () => window.clearInterval(timer)
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