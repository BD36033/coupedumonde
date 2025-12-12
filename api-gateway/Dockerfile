FROM nginx:alpine

# Copier la configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port
EXPOSE 30

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]