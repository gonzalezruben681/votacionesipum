# Usamos una imagen ligera de Nginx
FROM nginx:stable-alpine

# Copia la configuración de Nginx que creaste
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia *todos* los archivos de la raíz de tu repo (que son los archivos web compilados)
# al directorio de servicio de Nginx.
# NOTA: Este comando asume que los contenidos de tu `build/web`
# están directamente en la raíz de tu repositorio de GitHub.
COPY . /usr/share/nginx/html

# Expone el puerto 80, que es donde Nginx escuchará
EXPOSE 80

# Comando para iniciar Nginx cuando el contenedor se inicie
CMD ["nginx", "-g", "daemon off;"]