export const errorMessages: Record<string, { title: string; message: string; action: { text: string; href: string } }> = {
    'AccessDenied': {
        title: 'Acceso denegado',
        message: 'No tienes permiso para acceder a esta aplicación.',
        action: {
            text: 'Volver al inicio',
            href: '/'
        }
    },
    'USER_NOT_REGISTERED': {
        title: 'Usuario no registrado',
        message: 'Esta cuenta de Google no está registrada en nuestro sistema. Por favor, regístrate primero.',
        action: {
            text: 'Registrarse',
            href: '/register'
        }
    },
    'CredentialsSignin': {
        title: 'Error de inicio de sesión',
        message: 'El correo electrónico o la contraseña son incorrectos.',
        action: {
            text: 'Volver al login',
            href: '/login'
        }
    },
    'default': {
        title: 'Error de autenticación',
        message: 'Ocurrió un error durante el proceso de autenticación.',
        action: {
            text: 'Volver al inicio',
            href: '/'
        }
    }
};