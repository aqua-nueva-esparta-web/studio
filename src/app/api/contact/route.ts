import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// NOTA: Para usar Proton Mail necesitas instalar Proton Mail Bridge
// y obtener las credenciales SMTP desde la aplicación Bridge
// Más info: https://proton.me/mail/bridge

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, interest, message } = body;

    // Validar que los campos requeridos estén presentes
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      );
    }

    // Verificar que las variables de entorno estén configuradas
    if (!process.env.PROTON_SMTP_USER || !process.env.PROTON_SMTP_PASS) {
      console.error('Variables de entorno PROTON_SMTP_USER o PROTON_SMTP_PASS no configuradas');
      // En desarrollo, mostrar mensaje informativo
      if (process.env.NODE_ENV === 'development') {
        console.log('\n=== CONFIGURACIÓN REQUERIDA ===');
        console.log('Para enviar emails a Vittonic@proton.me necesitas:');
        console.log('1. Instalar Proton Mail Bridge desde https://proton.me/mail/bridge');
        console.log('2. Obtener las credenciales SMTP desde Bridge');
        console.log('3. Agregar a .env.local:');
        console.log('   PROTON_SMTP_USER=tu_email@proton.me');
        console.log('   PROTON_SMTP_PASS=password_generada_por_bridge');
        console.log('================================\n');
      }
      return NextResponse.json(
        { error: 'Servicio de email no configurado. Revisa los logs del servidor.' },
        { status: 500 }
      );
    }

    // Configurar el transporte SMTP para Proton Mail Bridge
    const transporter = nodemailer.createTransport({
      host: '127.0.0.1', // Proton Mail Bridge usa localhost
      port: 1025, // Puerto SMTP de Proton Mail Bridge
      secure: false, // STARTTLS se habilita automáticamente
      auth: {
        user: process.env.PROTON_SMTP_USER, // Tu email de Proton
        pass: process.env.PROTON_SMTP_PASS, // Password generada por Bridge
      },
      tls: {
        rejectUnauthorized: false, // Necesario para certificado local de Bridge
      },
    });

    // Preparar el contenido del email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0066cc; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0066cc; }
            .value { margin-top: 5px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nuevo Mensaje de Contacto</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Teléfono:</div>
                <div class="value">${phone || 'No proporcionado'}</div>
              </div>
              <div class="field">
                <div class="label">Empresa:</div>
                <div class="value">${company || 'No proporcionado'}</div>
              </div>
              <div class="field">
                <div class="label">Área de Interés:</div>
                <div class="value">${interest || 'No proporcionado'}</div>
              </div>
              <div class="field">
                <div class="label">Mensaje:</div>
                <div class="value">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Este mensaje fue enviado desde el formulario de contacto de Agua Nueva Esparta</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Enviar el email a Vittonic@proton.me
    await transporter.sendMail({
      from: process.env.PROTON_SMTP_USER, // Tu email de Proton
      to: 'Vittonic@proton.me', // Destinatario fijo
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: htmlContent,
      text: `
Nuevo mensaje de contacto:

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || 'No proporcionado'}
Empresa: ${company || 'No proporcionado'}
Área de Interés: ${interest || 'No proporcionado'}

Mensaje:
${message}
      `,
    });

    console.log(`Email enviado exitosamente a Vittonic@proton.me desde ${email}`);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente a Vittonic@proton.me' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error al enviar el email:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud. Por favor, inténtalo de nuevo.' },
      { status: 500 }
    );
  }
}
