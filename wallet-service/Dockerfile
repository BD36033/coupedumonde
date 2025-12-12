FROM node:18-alpine

WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer toutes les dépendances (y compris dev pour le build)
RUN npm install

# Copier le code source
COPY . .

# Construire l'application
RUN npm run build

# Supprimer les dépendances de développement
RUN npm prune --omit=dev

# Exposer le port
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "start:prod"]