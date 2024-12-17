import { auth as middleware } from "@/auth"

export default middleware(async (req: any) => {
    const { nextUrl } = req

    const isLoggedIn = !!req.auth

    const isDashboardRoute = req.nextUrl.pathname.startsWith('/chat')
    const isTodoRoute = req.nextUrl.pathname.startsWith('/todo')
    const isLoginRoute = req.nextUrl.pathname.startsWith('/')
    const isContentRoute = req.nextUrl.pathname.startsWith('/content')
    // console.log(nextUrl);
    

    // if (isLoginRoute) {
    //     if (isLoggedIn) {
    //         return Response.redirect(new URL('/api/auth/signin', nextUrl))
    //     }
    // }

    // // if the user is not logged in then user should not access the dashboard
    if (isDashboardRoute) {
        if (!isLoggedIn) {
            return Response.redirect(new URL('/api/auth/signin', nextUrl))
        }
    }
    if (isTodoRoute) {
        if (!isLoggedIn) {
            return Response.redirect(new URL('/api/auth/signin', nextUrl))
        }
    }
    if (isContentRoute) {
        if (!isLoggedIn) {
            return Response.redirect(new URL('/api/auth/signin', nextUrl))
        }
    }

    return
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}