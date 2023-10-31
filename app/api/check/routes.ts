import { checkAvailability } from '@/app/utils/check-username'
import { type NextRequest, NextResponse } from 'next/server'



// example: /api/check?username=hello
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const username = searchParams.get('username')

    // validate input username
    if (username == null || username.trim().length == 0) {
        return NextResponse.json({ error: 'Username cannot be empty' }, { status: 400 })
    }

    const availability = await checkAvailability(username)

    return NextResponse.json(availability, { status: 200 })
}
