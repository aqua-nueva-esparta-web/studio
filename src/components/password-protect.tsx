
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogoIcon } from './icons';

const PASSWORD = 'NuevaEsparta2026';

export default function PasswordProtect({ onAuthSuccess }: { onAuthSuccess: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setError('');
      onAuthSuccess();
    } else {
      setError('Contraseña incorrecta. Inténtelo de nuevo.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
            <div className="flex justify-center items-center mb-4">
                 <LogoIcon className="h-8 w-8 text-primary" />
            </div>
          <CardTitle>Acceso Protegido</CardTitle>
          <CardDescription>
            Este sitio está protegido por contraseña. Por favor, ingrese la clave para continuar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Introduzca la contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full">
              Acceder
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
