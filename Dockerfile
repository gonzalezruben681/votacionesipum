# --- Etapa 1: Construcción de la aplicación Flutter Web ---
# Usamos una imagen que ya incluye Flutter y Dart SDK para simplificar
FROM cirrusci/flutter:latest AS build-stage

WORKDIR /app

# Copia los archivos pubspec para instalar dependencias primero
# Esto optimiza el caché de Docker si solo cambian los archivos de código
COPY pubspec.yaml pubspec.lock ./
RUN flutter pub get

# Copia el resto del código fuente de tu aplicación
COPY . .

# Construye la aplicación Flutter para la web en modo release
RUN flutter build web --release

# --- Etapa 2: Servir la aplicación con Nginx ---
# Usamos una imagen ligera de Nginx para el servidor final
FROM nginx:stable-alpine AS final-stage

# Copia la configuración de Nginx que creaste
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos estáticos de la aplicación Flutter construida al directorio de Nginx
COPY --from=build-stage /app/build/web /usr/share/nginx/html

# Expone el puerto 80, que es donde Nginx escuchará
EXPOSE 80

# Comando para iniciar Nginx cuando el contenedor se inicie
CMD ["nginx", "-g", "daemon off;"]