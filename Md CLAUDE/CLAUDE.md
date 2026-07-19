# CLAUDE.md — Halal Sunnah (Agence Omra)

Ce fichier donne à Claude Code le contexte nécessaire pour travailler sur ce projet.

## Présentation du projet

**Halal Sunnah** est une agence de voyage spécialisée dans l'organisation de la **Omra** (petit pèlerinage à La Mecque). Le site est un site vitrine / commercial destiné à présenter les offres de l'agence, rassurer les clients et générer des demandes de devis ou de contact.

- **Public cible** : familles et particuliers musulmans francophones souhaitant effectuer la Omra.
- **Ton** : chaleureux, rassurant, respectueux, professionnel. Vocabulaire conforme aux usages religieux (Omra, Ihram, Tawaf, Sa'i, Zamzam, Médine, La Mecque, etc.), à utiliser correctement et sans erreur.
- **Langue principale** : français. (Si une version arabe ou anglaise est ajoutée plus tard, le faire via i18n Astro, pas de duplication de fichiers à la main.)

## Stack technique

- **Framework** : [Astro](https://docs.astro.build) (dernière version stable).
- **Styling** : Tailwind CSS (sauf indication contraire — demander avant d'ajouter une autre lib CSS).
- **Contenu** : pages statiques + collections de contenu Astro (`src/content/`) pour les offres de Omra et les articles de blog/conseils.
- **Déploiement cible** : à confirmer avec l'utilisateur (Vercel/Netlify/Cloudflare) — ne pas supposer.
- **Images** : utiliser `astro:assets` (composant `<Image />`) pour l'optimisation automatique.

## Identité visuelle — IMPORTANT

- Le **logo** et la **charte graphique** (couleurs, typographies, ton visuel) sont **fournis par l'utilisateur**.
- Claude Code **ne doit jamais inventer ou modifier** les couleurs, polices ou le logo sans demande explicite.
- Les tokens de design (couleurs, fonts) doivent être centralisés dans un seul endroit (ex: `tailwind.config.mjs` ou `src/styles/tokens.css`) pour être faciles à mettre à jour quand l'utilisateur fournit ses éléments définitifs.
- Si le logo ou la charte n'ont pas encore été fournis au moment d'une tâche, utiliser des placeholders neutres et le signaler clairement plutôt que de choisir des couleurs définitives.

## Structure des pages (proposition par défaut)

À ajuster selon les besoins réels de l'utilisateur :

- `/` — Accueil (présentation agence, offres phares, réassurance, CTA contact)
- `/omra` ou `/offres` — Liste des formules/packages Omra (dates, prix, hôtels, inclusions)
- `/omra/[slug]` — Page détail d'une offre
- `/a-propos` — Présentation de l'agence, agréments/licences, équipe
- `/conseils` ou `/blog` — Articles pratiques (préparer sa Omra, visa, bagages, rites)
- `/faq` — Questions fréquentes
- `/contact` — Formulaire de contact / demande de devis
- `/mentions-legales`, `/cgv` — Pages légales (importantes pour une agence de voyage)

## Conventions de code

- Composants Astro en `src/components/`, layouts en `src/layouts/`, pages en `src/pages/`.
- Privilégier le rendu statique (SSG) pour les pages de contenu ; éviter le JS client inutile (philosophie "islands" d'Astro : interactivité seulement où nécessaire, ex. formulaire de contact, carrousel).
- Composants accessibles (attributs alt sur les images, contrastes suffisants, navigation au clavier).
- Code et noms de variables en anglais, contenu textuel du site en français.

## Sensibilité du contenu (à respecter scrupuleusement)

- Vérifier l'exactitude des termes religieux et rituels avant de les utiliser dans un texte généré (Omra, Ihram, Miqat, Tawaf, Sa'i, etc.). En cas de doute, demander à l'utilisateur plutôt que d'improviser.
- Pas d'imagerie ou de contenu visuel inapproprié (tenues non modestes, représentations contraires aux valeurs de l'agence).
- Pas de promesses commerciales trompeuses (prix, disponibilités, garanties de visa) : utiliser des textes de remplacement clairement marqués `[À CONFIRMER]` si une information précise manque.

## Commandes utiles

```bash
npm install
npm run dev       # serveur de développement
npm run build     # build de production
npm run preview   # prévisualiser le build
```

## Ce que Claude Code ne doit PAS faire sans confirmation

- Choisir des couleurs/typographies définitives à la place de l'utilisateur.
- Publier, déployer ou pousser sur un dépôt distant.
- Modifier la structure des offres/prix sans donner les vraies données fournies par l'utilisateur.
- Ajouter des dépendances lourdes (CMS, base de données) non demandées.
