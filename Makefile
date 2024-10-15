# Makefile pour lancer le backend et le frontend

# Commande pour initialiser le backend
init-backend:
	cd backend && npm install

# Commande pour initialiser le frontend
init-frontend:
	cd frontend && npm install

# Commande pour initialiser le projet complet
init: init-backend init-frontend

# Commande pour démarrer le backend
start-backend:
	cd backend && npm run dev

# Commande pour démarrer le frontend
start-frontend:
	cd frontend && npm run dev

# Commande pour démarrer le backend et le frontend en parallèle
start: 
	make start-backend & make start-frontend