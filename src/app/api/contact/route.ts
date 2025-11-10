import { NextRequest, NextResponse } from 'next/server';

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

    // Crear el contenido del email
    const emailContent = `
      Nuevo mensaje de contacto:
      
      Nombre: ${name}
      Email: ${email}
      Teléfono: ${phone || 'No proporcionado'}
      Empresa: ${company || 'No proporcionado'}
      Área de Interés: ${interest || 'No proporcionado'}
      
      Mensaje:
      ${message}
    `;

    // Aquí se enviaría el email a Vittonic@proton.me
    // Por ahora, usaremos la API de correo del navegador o un servicio externo
    // Para implementación completa, se necesita configurar un servicio de email
    
    console.log('Email a enviar a Vittonic@proton.me:');
    console.log(emailContent);

    // Simulación de envío exitoso
    // En producción, aquí iría la lógica real de envío
    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente a Vittonic@proton.me' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
