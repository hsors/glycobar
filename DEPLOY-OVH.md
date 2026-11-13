# Mise en ligne sur l'hébergement OVH (glycobar.com)

Le site est statique (dossier `dist/` produit par `npm run build`). Le workflow
GitHub Actions `.github/workflows/deploy-ovh.yml` le construit et l'envoie en SFTP
(SSH, port 22) sur l'hébergement OVH à chaque push sur `main`. Le serveur FTP
d'OVH n'offre pas le chiffrement (FTPS) : le FTP simple n'est donc pas utilisé, il
enverrait le mot de passe en clair. Le fichier `public/.htaccess` (copié dans
`dist/`) règle HTTPS, compression, cache et la non-indexation des copies de test.

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

### 3. Accès SFTP

Manager OVH → hébergement → onglet **FTP - SSH** :

1. Note le **login** et, si besoin, définis un nouveau mot de passe.
2. Vérifie que l'accès **SFTP / SSH est activé** pour ce login (bouton de
   modification de l'utilisateur). S'il ne l'est pas, active-le : sans cela la
   connexion en SFTP est refusée.
3. Le **serveur** à utiliser est `ssh.clusterXXX.hosting.ovh.net` (par exemple
   `ssh.cluster110.hosting.ovh.net`).

### 4. Secrets GitHub

Dépôt `hsors/glycobar` → **Settings → Secrets and variables → Actions →
New repository secret** → ajoute :

| Secret | Valeur |
| --- | --- |
| `OVH_FTP_HOST` | le serveur SSH/SFTP (`ssh.clusterXXX.hosting.ovh.net`) |
| `OVH_FTP_USER` | le login |
| `OVH_FTP_PASSWORD` | le mot de passe |
| `OVH_FTP_DIR` | *(facultatif)* dossier racine du site, `www` par défaut |

Tant que les trois premiers secrets n'existent pas, le workflow construit le site
et ignore l'envoi, sans erreur.

### 5. Premier déploiement

Dépôt GitHub → onglet **Actions → deploy-ovh → Run workflow** (ou simplement un
push sur `main`).
Puis vérifie `https://glycobar.com/`, `/products/`, `/impact/`, et
`https://www.glycobar.com/` (doit rediriger vers `glycobar.com`).

## Tester avant la mise en ligne

Pour une copie de test (par exemple `test.sors.net`), crée un multisite avec son
propre dossier (pas `www`), active son certificat SSL, puis mets `OVH_FTP_DIR` sur
ce dossier. Le `.htaccess` envoie `X-Robots-Tag: noindex` pour tout nom autre que
`glycobar.com` / `www.glycobar.com`. Pour la production, repasse `OVH_FTP_DIR` sur
`www`.

## Ensuite

Chaque push sur `main` met le site à jour sur OVH (environ une minute). Rien à
faire à la main.

## Dépannage

- **« Login failed » / « Access denied »** : l'accès SFTP/SSH n'est pas activé pour
  ce login (étape 3), ou le mot de passe est faux.
- **« Connection refused » / délai dépassé** : vérifie `OVH_FTP_HOST` (serveur
  `ssh.…`, port 22 ouvert).
- **Erreur « cd www »** : le dossier racine n'est pas `www` ; renseigne `OVH_FTP_DIR`.
- **Le serveur répond « security scheme is not implemented »** : c'est l'absence de
  FTPS chez OVH, d'où le SFTP ; ne repasse pas en FTP simple.
- **L'ancien site s'affiche encore** : l'étape 2 n'est pas faite, ou le DNS n'a pas
  fini de se propager (jusqu'à quelques heures).
- **Boucle de redirection ou page blanche en HTTPS** : le certificat SSL n'est pas
  encore actif (étape 1.2).
- **Revenir en arrière** : `git revert` du dernier commit, puis push.
