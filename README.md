# Livraison

## Feature

- Verification du token d'authentification

## Database

delivery_id : identifiant unique pour chaque livraison.
order_id : identifiant de la commande associée.
status : état actuel de la livraison (ex. : "en préparation", "en cours de livraison", "livrée", "retournée").
tracking_number : numéro de suivi de la livraison.
delivery_address : adresse de livraison.
customer_id : identifiant du client.
courier_id : identifiant du livreur ou du service de livraison.
estimated_delivery_date : date estimée de livraison.
actual_delivery_date : date réelle de livraison.
shipment_date : date d'expédition de la commande.
delivery_fee : frais de livraison.
last_status_update : date et heure de la dernière mise à jour du statut.
delivery_notes : remarques supplémentaires liées à la livraison (ex. : instructions spécifiques, retards, etc.).

## Run

cd backend
npm run dev


cd frontend
npm start
