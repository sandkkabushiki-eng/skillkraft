import { useEffect, useRef } from 'react'

export default function useScrollAnimation(threshold = 0.15) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold }
        )

        // Observe the element itself
        observer.observe(el)

        // Also observe all children with animation classes
        const children = el.querySelectorAll('.fade-in-up, .stagger-children')
        children.forEach((child) => observer.observe(child))

        return () => observer.disconnect()
    }, [threshold])

    return ref
}
