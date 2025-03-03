---
defaultLocaleVersion: en/bypass-privileges-for-windows-software
title: Omitir Privilegios para Software en Windows
description: Este tutorial explica cómo ejecutar software en Windows sin necesidad de privilegios de administrador, utilizando un sencillo script en Bash. Esto es útil cuando quieres evitar los mensajes de Control de Cuentas de Usuario (UAC) o no tienes acceso a permisos elevados.
link: ''
isExternalLink: false
date: 2025-01-16T17:54:00
cover: /images/bypass-privileges-for-windows-software.webp
author: en/yuniel-acosta
tags: []
categories:
  - en/tools
draft: true
---
![Omitir Privilegios para Software en Windows](/images/bypass-privileges-for-windows-software.webp "Omitir Privilegios para Software en Windows")

# Omitir Privilegios para Software en Windows

## **Descripción**

Este tutorial explica cómo ejecutar software en Windows sin necesidad de privilegios de administrador, utilizando un sencillo script en Bash. Este método es útil para evitar los mensajes del Control de Cuentas de Usuario (UAC) o cuando no se tiene acceso a permisos elevados.

⚠️ **Advertencia:**

Este método debe usarse con responsabilidad. No se recomienda para ejecutar software de fuentes no confiables, ya que puede poner en riesgo la seguridad del sistema.

## **Pasos para Implementar**

1. **Crea un Archivo de Script:**
Abre tu editor de texto preferido (Bloc de notas, Notepad++, VSCode).
2. **Escribe el Siguiente Contenido:**Set_COMPAT_LAYER=RunAsInvoker
Start SteamSetup.exe

    - `Set_COMPAT_LAYER=RunAsInvoker`: Indica a Windows que ejecute el programa sin elevar privilegios.
    - `Start SteamSetup.exe`: Inicia el instalador de Steam (puedes reemplazarlo con cualquier ejecutable).

3. **Guarda el Archivo:**

    - **Extensión:** `.bat` o `.cmd` (Ejemplo: `bypass-admin.bat`)
    - **Ubicación:** Guárdalo en una carpeta de fácil acceso.

4. **Ejecuta el Script:**

    - Haz doble clic en el archivo `.bat` para ejecutar el programa sin solicitar permisos de administrador.

## **Aplicaciones Prácticas**

- Ejecutar instaladores que normalmente requieren permisos elevados.
- Probar software sin modificar configuraciones del sistema.
- Evitar mensajes de UAC en programas de confianza.

## **Notas Adicionales**

- No todos los programas permiten ser ejecutados con este método, especialmente si requieren acceso a recursos protegidos del sistema.
- Puedes crear accesos directos al script para automatizar procesos.

## **Recursos Relacionados**

- Tutorial sobre permisos en Windows
- Scripts para automatización en Windows

✅ **Estado:**

- **Probado en:** Windows 10, Windows 11
- **Compatibilidad:** Funciona con la mayoría de programas que no requieren acceso a recursos críticos.
