# Configuración del Formulario de Contacto

---

## 🚨 ACTUALIZACIÓN: Implementación con Proton Mail

**¡El formulario ahora está configurado para usar Proton Mail!**

Se ha implementado la integración con **Nodemailer** y **Proton Mail Bridge** para enviar emails directamente a **Vittonic@proton.me**.

### Pasos para activar el envío:

#### 1. Instalar Nodemailer

```bash
npm install nodemailer
npm install -D @types/nodemailer
```

#### 2. Descargar e instalar Proton Mail Bridge

1. Ve a https://proton.me/mail/bridge
2. Descarga la versión para tu sistema operativo
3. Instala y ejecuta la aplicación
4. Inicia sesión con tu cuenta de Proton Mail

#### 3. Obtener credenciales SMTP desde Bridge

1. Abre Proton Mail Bridge
2. Haz clic en tu cuenta
3. Selecciona **"SMTP Settings"** o **"Configuración SMTP"**
4. Verás:
   - **Server**: 127.0.0.1
   - **Port**: 1025
   - **Username**: tu_email@proton.me
   - **Password**: [una contraseña generada automáticamente]

⚠️ **IMPORTANTE**: Usa la contraseña generada por Bridge, NO tu contraseña de Proton Mail.

#### 4. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
PROTON_SMTP_USER=tu_email@proton.me
PROTON_SMTP_PASS=password_generada_por_bridge
```

#### 5. Reiniciar el servidor de desarrollo

```bash
npm run dev
```

### ✅ ¡Listo!

Ahora el formulario enviará automáticamente los mensajes a **Vittonic@proton.me** con formato HTML profesional.

### Características implementadas:

- ✅ Envío SMTP a través de Proton Mail Bridge
- ✅ Emails HTML con diseño profesional
- ✅ Validación de variables de entorno
- ✅ Mensajes de error informativos
- ✅ Logs detallados del envío
- ✅ Destinatario fijo: **Vittonic@proton.me**

---



## Estado Actual

El formulario de contacto está **configurado y funcional** para enviar datos a **Vittonic@proton.me**.

### ¿Qué está implementado?

✅ Formulario de contacto funcional en `/src/app/contact/page.tsx`  
✅ API endpoint en `/src/app/api/contact/route.ts`  
✅ Validación de campos requeridos (nombre, email, mensaje)  
✅ Manejo de estado de carga durante el envío  
✅ Notificaciones toast para éxito/error  
✅ Limpieza automática del formulario después del envío exitoso  

### ¿Qué falta para el envío real de emails?

Actualmente, el endpoint API recibe y valida los datos correctamente, pero **no envía emails reales**. Para completar la funcionalidad, necesitas configurar un servicio de envío de emails.

## Opciones de Servicios de Email

### Opción 1: Resend (Recomendado)

**Ventajas:** Fácil de configurar, API moderna, generoso plan gratuito

1. **Instalar Resend:**
```bash
npm install resend
```

2. **Obtener API Key:**
   - Registrarse en https://resend.com
   - Crear una API key
   - Verificar tu dominio o usar el dominio de prueba

3. **Configurar variables de entorno:**
Crear archivo `.env.local` en la raíz:
```env
RESEND_API_KEY=tu_api_key_aqui
```

4. **Actualizar `/src/app/api/contact/route.ts`:**
```typescript
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, interest, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev', // Usar tu dominio verificado
      to: 'Vittonic@proton.me',
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Empresa:</strong> ${company || 'No proporcionado'}</p>
        <p><strong>Área de Interés:</strong> ${interest || 'No proporcionado'}</p>
        <h3>Mensaje:</h3>
        <p>${message}</p>
      `
    });

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente a Vittonic@proton.me' },
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
```

### Opción 2: Nodemailer con Gmail

1. **Instalar Nodemailer:**
```bash
npm install nodemailer
npm install -D @types/nodemailer
```

2. **Configurar Gmail:**
   - Habilitar verificación en 2 pasos en tu cuenta Gmail
   - Generar una contraseña de aplicación

3. **Variables de entorno en `.env.local`:**
```env
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion
```

### Opción 3: SendGrid

Similar a Resend, requiere API key y ofrece plan gratuito generoso.

## Pruebas

1. Una vez configurado el servicio de email, reinicia el servidor de desarrollo:
```bash
npm run dev
```

2. Ve a `http://localhost:9002/contact`

3. Completa y envía el formulario

4. Verifica que el email llegue a **Vittonic@proton.me**

## Notas Importantes

- **Seguridad:** Nunca subas el archivo `.env.local` a Git (ya está en `.gitignore`)
- **Producción:** Configura las variables de entorno en tu plataforma de hosting (Vercel, Netlify, etc.)
- **Dominio verificado:** Para producción, verifica tu dominio propio en el servicio de email elegido
- **Destinatario:** El email siempre se envía a **Vittonic@proton.me** como está configurado

## Soporte

Si tienes problemas con la configuración:
1. Verifica que las variables de entorno estén correctas
2. Revisa los logs de la consola del servidor
3. Confirma que tu API key tiene los permisos necesarios
