# Mise en ligne sur l'hébergement OVH (glycobar.com)

Le site est statique (dossier `dist/` produit par `npm run build`). Le workflow
GitHub Actions `.github/workflows/deploy-ovh.yml` le construit et l'envoie en FTP
sur l'hébergement OVH à chaque push sur `main`. Le fichier `public/.htaccess`
(copié dans `dist/`) règle HTTPS, compression et cache côté Apache.

Le dépôt vit sur GitHub (`hsors/glycobar`). Le workflow `.gitea/workflows/build-and-deploy.yml`
(copie Docker sur `glycobar.ironhandscapital.com`) est conservé mais ne s'exécute
que sur Gitea : GitHub l'ignore.

## À faire une seule fois

### 1. Hébergement et domaine (Manager OVH)

1. **Hébergements → ton hébergement → Multisite** : vérifie que `glycobar.com`
   (et `www.glycobar.com`) est rattaché, avec son dossier racine (par défaut `www`).
2. **Certificat SSL** : active le certificat gratuit (Let's Encrypt) pour le domaine
   **avant** le premier déploiement. Le `.htaccess` redirige tout vers HTTPS : sans
   certificat, le site serait inaccessible.
3. **DNS** : si `glycobar.com` ne pointe pas déjà vers cet hébergement, modifie
   l'enregistrement `A` (et `AAAA`) de la zone DNS vers l'adresse indiquée dans le
   Manager. **Ne touche pas aux enregistrements `MX`** si le domaine sert aux e-mails.

### 2. Sauvegarder puis vider l'ancien site

Si le dossier racine contient encore l'ancien site (WordPress : `wp-content`,
`index.php`, etc.), télécharge-le d'abord en sauvegarde (FileZilla) puis vide le
dossier. Sinon `index.php` passerait avant `index.html` et l'ancien site resterait
affiché. Le déploiement ne supprime que `assets/` ; il ne nettoie pas le reste.

### 3. Identifiants FTP

Manager OVH → hébergement → onglet **FTP - SSH** : note le **serveur FTP**
(`ftp.clusterXXX.hosting.ovh.net`), le **login** et, si besoin, définis un nouveau
mot de passe.

### 4. Secrets GitHub

Dépôt `hsors/glycobar` → **Settings → Secrets and variables → Actions →
New repository secret** → ajoute :

| Secret | Valeur |
| --- | --- |
| `OVH_FTP_HOST` | le serveur FTP |
| `OVH_FTP_USER` | le login FTP |
| `OVH_FTP_PASSWORD` | le mot de passe FTP |
| `OVH_FTP_DIR` | *(facultatif)* dossier racine du site, `www` par défaut |
| `OVH_FTP_VERIFY_CERT` | *(facultatif)* mettre `no` seulement si le déploiement échoue sur la vérification du certificat TLS |

Tant que les trois premiers secrets n'existent pas, le workflow construit le site
et ignore l'envoi, sans erreur.

### 5. Premier déploiement

Dépôt GitHub → onglet **Actions → deploy-ovh → Run workflow** (ou simplement un
push sur `main`).
Puis vérifie `https://glycobar.com/`, `/products/`, `/impact/`, et
`https://www.glycobar.com/` (doit rediriger vers `glycobar.com`).

## Ensuite

Chaque push sur `main` met le site à jour sur OVH (environ une minute). Rien à
faire à la main.

## Dépannage

- **Le job échoue sur `lftp` / certificat** : ajoute le secret `OVH_FTP_VERIFY_CERT = no`.
- **Erreur « cd www »** : le dossier racine n'est pas `www` ; renseigne `OVH_FTP_DIR`.
- **L'ancien site s'affiche encore** : l'étape 2 n'est pas faite, ou le DNS n'a pas
  fini de se propager (jusqu'à quelques heures).
- **Boucle de redirection ou page blanche en HTTPS** : le certificat SSL n'est pas
  encore actif (étape 1.2).
- **Revenir en arrière** : `git revert` du dernier commit, puis push.
