# 🏢 Site Web Prassets

Site vitrine pour Prassets - Cabinet de Gestion de Patrimoine

## 📁 Structure du projet

```
SiteWebPrassets/
├── index.html              # Page principale
├── assets/
│   ├── css/
│   │   └── style.css      # Tous les styles
│   ├── js/
│   │   └── script.js      # Animations et interactions
│   └── images/            # Tes photos et images
├── README.md              # Ce fichier
└── .gitignore            # Fichiers à ignorer par Git
```

## 🚀 Comment utiliser ce projet ?

### 1️⃣ Ouvrir dans VS Code

```bash
# Ouvre le dossier dans VS Code
code SiteWebPrassets
```

### 2️⃣ Prévisualiser localement

- Option A : Double-clic sur `index.html` (s'ouvre dans le navigateur)
- Option B : Installe l'extension "Live Server" dans VS Code
  - Clic droit sur `index.html` → "Open with Live Server"
  - Recharge automatiquement à chaque changement ! ✨

### 3️⃣ Modifier le site

**Pour changer les couleurs** → `assets/css/style.css` (lignes 12-32)
**Pour changer les textes** → `index.html`
**Pour changer les animations** → `assets/js/script.js`

## 🎨 Personnalisation

### Couleurs principales

Dans `assets/css/style.css`, change les valeurs :

```css
--color-primary: #1a4d7a;        /* Bleu principal */
--color-primary-dark: #0f2d4a;   /* Bleu foncé */
--color-primary-light: #2563a8;  /* Bleu clair */
```

### Ajouter ta photo

1. Mets ta photo dans `assets/images/` (ex: `romain.jpg`)
2. Dans `index.html`, cherche la ligne avec `<img src=`
3. Change par : `<img src="assets/images/romain.jpg" alt="Romain">`

## 🌐 Mettre en ligne sur Netlify

### Méthode simple (Drag & Drop)

1. Va sur [netlify.com](https://netlify.com)
2. Connecte-toi
3. Glisse-dépose **tout le dossier** `SiteWebPrassets`
4. C'est en ligne ! 🎉

### Méthode professionnelle (Git + Auto-déploiement)

```bash
# 1. Initialise Git
git init
git add .
git commit -m "Premier commit - Site Prassets"

# 2. Crée un repo GitHub
# Va sur github.com → New repository → "site-prassets"

# 3. Connecte et push
git remote add origin https://github.com/TON-USERNAME/site-prassets.git
git branch -M main
git push -u origin main

# 4. Sur Netlify
# New site from Git → GitHub → site-prassets → Deploy
```

**À partir de là :** Chaque `git push` met à jour ton site automatiquement ! ⚡

## 📝 Pour continuer à travailler avec Claude

**Tu peux :**

1. **Revenir ici sur claude.ai** et me dire "modifie le fichier style.css pour..."
2. **Me copier-coller** un bout de code et me dire "améliore ça"
3. **M'expliquer** ce que tu veux changer, je te donne le code

**Je n'ai pas besoin d'accéder à ton ordinateur !**
Tu copies juste mes suggestions dans tes fichiers. Simple ! 😊

## 🆘 Problèmes courants

**Le site ne s'affiche pas ?**
→ Vérifie que `index.html` est bien à la racine du dossier

**Les styles ne marchent pas ?**
→ Vérifie le chemin : `<link rel="stylesheet" href="assets/css/style.css">`

**La photo ne s'affiche pas ?**
→ Vérifie le chemin : `<img src="assets/images/ta-photo.jpg">`

## ✨ Fonctionnalités du site

✅ Hero en 2 colonnes (texte + photo)
✅ Animation "slot machine" des catégories
✅ Bandeaux défilants (produits + partenaires)
✅ Gradients bleus élégants (style Family Office)
✅ Section Avis Google
✅ Responsive (mobile/tablette/desktop)
✅ Navigation sticky
✅ Animations fluides

## 📞 Contact

Développé avec Claude pour Prassets
Site : [à venir sur Netlify]
