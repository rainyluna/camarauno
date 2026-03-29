import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = { name: 200, email: 254, phone: 30, service: 100, message: 5000 };

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const name = String(body.name || "").trim();
        const email = String(body.email || "").trim();
        const phone = String(body.phone || "").trim();
        const service = String(body.service || "").trim();
        const message = String(body.message || "").trim();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Nombre, email y mensaje son obligatorios." },
                { status: 400 }
            );
        }

        // Validate email format
        if (!EMAIL_REGEX.test(email)) {
            return NextResponse.json(
                { error: "El formato de email no es válido." },
                { status: 400 }
            );
        }

        // Validate lengths
        if (name.length > MAX_LEN.name || email.length > MAX_LEN.email ||
            phone.length > MAX_LEN.phone || service.length > MAX_LEN.service ||
            message.length > MAX_LEN.message) {
            return NextResponse.json(
                { error: "Uno o más campos exceden la longitud máxima permitida." },
                { status: 400 }
            );
        }

        // Sanitize for HTML
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safePhone = escapeHtml(phone);
        const safeService = escapeHtml(service);
        const safeMessage = escapeHtml(message);

        const { data, error } = await resend.emails.send({
            from: "Cámara Uno Web <edward@camarauno.com>",
            to: ["camaraunoproducciones@gmail.com"],
            replyTo: email,
            subject: `Nuevo mensaje de contacto: ${safeName}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="border-bottom: 2px solid #e4e4e7; padding-bottom: 12px;">
                        Nuevo mensaje desde camarauno.com
                    </h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; width: 140px; vertical-align: top;">Nombre</td>
                            <td style="padding: 8px 0;">${safeName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Email</td>
                            <td style="padding: 8px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                        </tr>
                        ${safePhone ? `<tr>
                            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Teléfono</td>
                            <td style="padding: 8px 0;">${safePhone}</td>
                        </tr>` : ""}
                        ${safeService ? `<tr>
                            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Servicio</td>
                            <td style="padding: 8px 0;">${safeService}</td>
                        </tr>` : ""}
                    </table>
                    <div style="margin-top: 20px; padding: 16px; background: #f4f4f5; border-radius: 4px;">
                        <strong>Mensaje:</strong>
                        <p style="margin: 8px 0 0; white-space: pre-wrap;">${safeMessage}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Error al enviar el mensaje. Inténtalo de nuevo." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, id: data?.id });
    } catch (err) {
        console.error("Server error:", err);
        return NextResponse.json(
            { error: "Error del servidor. Inténtalo de nuevo." },
            { status: 500 }
        );
    }
}
