# TP1 – Cryptographie et Sécurisation Applicative

Ce projet a été réalisé dans le cadre du **TP 1 de Cryptographie**.  
Il illustre la distinction entre **hachage** et **chiffrement**, l’utilisation de **HMAC** via JWT, et la mise en œuvre de bonnes pratiques de développement sécurisé.

## Objectifs pédagogiques

- Distinguer le hachage (ex: bcrypt) du chiffrement (ex: HMAC)
- Utiliser les tokens signés HMAC (JWT) dans un contexte applicatif
- Implémenter des middlewares d’authentification et de validation
- Utiliser un fichier `.env` pour sécuriser les secrets

## Stack technique

- **Node.js**, **Express.js**
- **JWT** pour l’authentification avec HMAC
- **bcryptjs** pour le hachage des mots de passe
- **dotenv** pour la gestion des variables secrètes
- **helmet** pour sécuriser les headers HTTP
- **express-validator** pour valider et nettoyer les entrées utilisateur

## Fonctionnalités

- Création d’utilisateur avec mot de passe haché
- Authentification via token JWT (HMAC)
- Middleware d’accès aux routes sécurisées
- Refresh Token pour prolonger les sessions
- Séparation du code (routes, contrôleurs, middlewares)
- Sécurité des entrées utilisateur (validation et sanitizing)

## Lancer le projet

1. Cloner ou extraire le projet

```bash
git clone https://github.com/<TON-UTILISATEUR>/tp1-cryptographie.git
cd tp1-cryptographie
```

2. Installer les dépendances

```bash
npm install
```

3. Créer un fichier `.env` :

```
JWT_SECRET=supersecretetsecure123
JWT_REFRESH_SECRET=refreshsecret456
```

4. Lancer le serveur

```bash
node app.js
```

## ✅ Routes disponibles

| Méthode | URL                  | Auth requise | Description                        |
|---------|----------------------|--------------|------------------------------------|
| POST    | /api/auth/register   | ❌           | Créer un compte utilisateur        |
| POST    | /api/auth/login      | ❌           | Connexion et réception des tokens  |
| POST    | /api/auth/refresh-token | ❌        | Renouvellement d’un accessToken    |
| GET     | /api/auth/profile    | ✅           | Accès protégé au profil utilisateur|

## 👨‍🏫 Réalisé par

> Kenzi Boughadou – MSc Cybersécurité & Management – EFREI Paris  
> TP proposé par Boris Rose – 2 juin 2025
