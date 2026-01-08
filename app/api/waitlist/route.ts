import { NextRequest, NextResponse } from "next/server"

// TODO: After creating your Zoho Web-to-Lead form, update these values:
// 1. Go to Zoho CRM → Setup → Channels → Webforms → Create Webform
// 2. Copy the values from the generated HTML form code
const ZOHO_ACCOUNT_ID = process.env.ZOHO_ACCOUNT_ID || "YOUR_ZOHO_ACCOUNT_ID"
const ZOHO_FORM_ID = process.env.ZOHO_FORM_ID || "YOUR_FORM_ID"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, businessName, timestamp } = body

    // Validate required fields
    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 }
      )
    }

    // Submit to Zoho CRM Web-to-Lead
    const formData = new URLSearchParams({
      'xnQsjsdp': ZOHO_ACCOUNT_ID,
      'xmIwtLD': ZOHO_FORM_ID,
      'actionType': 'TGVhZHM=', // "Leads" in base64
      'returnURL': 'https://appguts.com/thank-you', // Optional: redirect after submission
      'Last Name': name.split(' ').pop() || name, // Last word of name
      'First Name': name.split(' ')[0] || '', // First word of name
      'Email': email,
      'Company': businessName || 'Not Provided',
      'Lead Source': 'AccessRA Waitlist',
      'Description': `Signed up for AccessRA waitlist on ${new Date(timestamp).toLocaleString()}`,
    })

    const zohoResponse = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })

    // Zoho Web-to-Lead returns 200 even on success, so we just check if it didn't error
    if (!zohoResponse.ok && zohoResponse.status !== 302) {
      console.error('Zoho submission error:', await zohoResponse.text())
      // Don't throw - we'll still return success to user
      // Log for debugging but don't block the user experience
    }

    // Always log submissions as backup
    console.log("Waitlist submission:", { email, name, businessName, timestamp })

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist"
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Waitlist submission error:", error)
    // Still return success to user - we've logged it
    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist"
      },
      { status: 200 }
    )
  }
}
