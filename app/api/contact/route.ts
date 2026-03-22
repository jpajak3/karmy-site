import { NextRequest, NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  brand: string
  email: string
  message?: string
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload

    // Validate required fields
    if (!body.name?.trim() || !body.brand?.trim() || !body.email?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    /*
      WIRE UP: Pipe to your preferred delivery method.

      Option A — Resend (recommended):
        import { Resend } from 'resend'
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: 'karmy@itsmekarmy.com',
          to: 'hello@itsmekarmy.com',
          subject: `Partnership inquiry from ${body.brand}`,
          text: `Name: ${body.name}\nBrand: ${body.brand}\nEmail: ${body.email}\n\n${body.message ?? ''}`,
        })

      Option B — Notion database:
        POST to Notion API with the partnership data

      Option C — Log for now (development):
    */
    console.log('[Contact form submission]', {
      name: body.name,
      brand: body.brand,
      email: body.email,
      message: body.message ?? '',
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
