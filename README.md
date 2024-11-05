# Projet de Calculatrice Web

## Membres du groupe

| NOM | Prénom |
|-----|--------|
| SIMON | Adam   |
| NOBRE | Armand   |

## Lien vers le projet

[Rendu Calculatrice github](https://github.com/HyTaXx/rendu-github)  

## Architecture et Choix Techniques

Ce projet est une calculatrice web développée en utilisant **Next.js** pour le framework React et **Tailwind CSS** pour le style. L'architecture est organisée comme suit :

- `app/` : Contient l'ensemble de l'application Next.js.
- `components/` : Contient les composants réutilisables de l'application.
- `Calculator/` : Comprend la logique de calcul et le composant de la calculatrice.

### Étapes d'Installation

Pour exécuter et tester le projet localement, suivez ces étapes :

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/username/repo-name.git
   cd repo-name
    ```
2. Installer les dépendences
    ```bash
   npm install
    ```
3. Démarrez le serveur de développement :
    ```bash
   npm run dev
    ```

## Version Déployée sur Vercel
La version déployée de l'application est accessible à l'adresse suivante : https://votre-projet.vercel.app
(Remplacez par l'URL de votre déploiement Vercel)

Configuration de la Pipeline CI/CD
La pipeline CI/CD a été configurée avec GitHub Actions pour automatiser le processus de déploiement sur Vercel. Les étapes clés de la pipeline sont :

Install : Installe les dépendances nécessaires.

Test : Exécute les tests automatisés.

Lint : Vérifie le code pour les erreurs de style.
*NB: Le lint a été retiré de la pipeline car il causait des problèmes de dernières minutes*

Build : Construit le projet.

Deploy : Déploie le projet sur Vercel, mais uniquement pour les versions taguées.

Processus de Déploiement
Pour déployer la dernière version de l'application, créez une nouvelle balise Git (tag) et poussez-la sur le dépôt :

```bash
git tag v1.0.0
git push origin v1.0.0
```

