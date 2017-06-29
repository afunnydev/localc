## Rappel

Tel que mentionné dans l'introduction, il faut bien maitrîser le concept d'identifiant:

- Deux produits différents **ne doivent pas** avoir le même identifiant.
- La version française d'un produit et la version anglaise d'un produit **ont le même identifiant**.

C'est de cette manière que notre ami Hugo (encore une fois, ce n'est pas un nom de personne) reconnaîtra que c'est le même produit, mais sous une différente forme.

```hint|directive
Aussi, n'oubliez pas le Flow de travail décrit dans l'Introduction ;)

*Rappel*: J'utilise une fonctionnalité qui permet de travailler sur des changements avant de les mettre officiellement en ligne. Vous verrez que lorsque vous cliquer sur "Save" sur une page que vous avez modifié, cette modification est envoyée dans le champ "Draft" (Brouillon). Une fois satisfait, si vous voulez que quelqu'un d'autre l'approuve, vous pouvez le déplacer dans "Waiting for Review" (Révision). Une fois prêt, vous pouvez le déplacer dans "Waiting to go live". **Vous devez absolument cliquer sur "Publish Now" pour chaque élément que vous voulez publier.**
```

## Création

Tel qu'expliqué précédemment, vous devez déjà savoir comment créer un produits? Voyons voir..

1. Cliquez sur le menu
2. Cliquez sur le petit + à droite de Produit-FRS ou Produit-ENS

### Français VS Anglais

La version française et la version anglaise de votre produit sont séparées dans votre interface. Elles peuvent exister une sans l'autre et sont seulement reliées par leur identifiant. Tout le reste peut être différent. Vous devez les créer, sauvegarder et modifier de manière indépendante.

### Les champs

- *Nom officiel* : Ceci est le nom du produit que tout le monde pourra voir dans la liste et sur la page d'un produit individuel
- *Description SEO* : Description de la page web, indexé par Google. *non-visible*
- *Lien* : La portion de lien de la page web qui sera après le http://www.localc.com ou http://www.localc.com/en. Il peut contenir seulement des chiffes, lettres et tirets. C'est très important de le choisir intelligement, pour le référencement. 

```hint|directive
Exemple en français: "ceci-est-un-exemple" donnera http://www.localc.com/ceci-est-un-example
Exemple en anglais: "this-is-my-example" donnera http://www.localc.com/en/this-is-my-example
```

- *Nom d'affichage du créateur* : Ceci est le nom du créateur que tout le monde pourra voir sur la page d'un produit individuel
- *Délai de livraison* : Délai de livraison, vous pouvez écrire ce que vous voulez
- *Image principale* : C'est l'image qui apparaîtra **partout où le produit est sous son format "aperçu", c'est-à-dire dans le catalogue, dans les produits connexes ou bien les créateurs**.**AUCUN ESPACE, CARACTÈRE SPÉCIAUX OU ACCENT DANS LE NOM DU FICHIER**
- *Toutes les images* : **EN CONSTRUCTION**. Votre caroussel d'image sera créé à partir de toutes ces images là. N'oubliez pas la principale, vous devez aussi la mettre.**AUCUN ESPACE, CARACTÈRE SPÉCIAUX OU ACCENT DANS LE NOM DU FICHIER**
- *Identifiant du créateur* : Nous en avons discuté dans l'introduction. C'est l'identifiant unique du créateur de ce produit. C'est comme ça qu'Hugo va associer le produit à son créateur. Il est le même en anglais et en français. Il peut contenir seulement des chiffes, lettres et tirets. Ex: localc

```hint|directive
Vous voulez associé ce produit à Local C? Vous devez utiliser son identifiant unique que vous pouvez retrouver dans [la section créateur de votre CMS](/admin/#/collections/settings/entries/createurs). Dans ce cas-ci, vous utiliserez *localc*.
```

- *Catégories* : C'est ici que vous entrerez les noms des catégories utilisées. **Vous devez être constants dans le nom des catégories** pour qu'Hugo fasse le lien entre les articles. S'il y a plusieurs articles, vous devez les séparer d'une virgule et d'un espace. Vous pouvez entrer un nombre illimité de catégories.

```hint|directive
Voici un example si vous avez 4 catégories: Biomécanique, Blessures sportives, Orthèses plantaires, Posture
```

```hint|warning
Les catégories CADEAU, CADEAUX, cadeau, Cadeaux et Cadeau ne sont pas les mêmes.
```
- *Quantité et prix* : Vous devez créer des duos quantité et prix pour chacun de vos prix. Vous avez toute la latitude nécessaire.
- *Note à propos du prix* : *Pas obligatoire*. Si vous avez quelque chose à rajouter sous le prix
- *Interval de prix* : C'est l'interval qui apparaîtra **partout où le produit est sous son format "aperçu", c'est-à-dire dans le catalogue, dans les produits connexes ou bien les créateurs**. Très important de le rentrer.
- *Variantes* : Ces champs vont générer les premiers menus déroulants sous les prix. Vous pouvez créer autant de dup que vous voulez, chaque duo d'information deviendra une nouvelle ligne (donc nouveau champ). Pour les différents choix de la variante, vous **devez faire une liste d'éléments séparés d'une virgule**.
- *Personnalisations possibles*: C'est le dernier des menus déroulants, qui permet au gens de savoir comment ils peuvent personnaliser leur produit. Vous **devez faire une liste de personnalisations possibles, séparées d'une virgule**.

```hint|directive
Exemple: Logo estampé, Logo en graffiti, Ajouté un nom
```

```hint|warning
*Mauvais exemple*: Logo en graffit/Logo estampé Ajouté un nom
```

- *Produits connexes* : C'est ici que vous entrerez les produits connexes qui apparaitront dans le bas de la page de ce produit-ci. Pour ce faire, vous **devez faire une liste des identifiants de ses produits, séparées d'une virgule**. Il est bien important d'utiliser les identifiants uniques.

```hint|directive
Exemple: 01-trousse-confort, 16-sucette-caramel, 20-tasse-cafe
```

```hint|warning
*Mauvais exemple*: Bloc porte cartes d’affaires, BOUGIE À BASE DE SOJA
```


### Texte

Il utilise la syntaxe Markdown, discutée dans la section précédente.

#### La case d'entrée de votre texte

Pour prévisualiser le passage du format Markdown au format texte, vous pouvez cliquer sur la switch vrai/faux qui se trouver en haut à droite. Lorsqu'active, vous pourrez voir le code au format Markdown. Je vous conseille de travailler avec la switch active, donc en format Markdown, pour éviter les bugs. Vous verrez qu'il y a des petits outils dans le haut pour vous aider:

- *Les liens* : Vous n'avez qu'à surligner un portion de texte et cliquer sur cette outil. Votre CMS vous demandera le lien que vous voulez mettre. Vous n'avez qu'à le rentrer et cliquer sur OK, le formattage se fera tout seul.
- *Le +* : Utilisé pour insérer une image. Vous choisissez une image sur votre ordinateur et puis vous entrez 1 mot ou 2 pour la décrire (Alt text), votre CMS se charge de formatter le tout

#### Exemple de produit

```
Cette trousse confort contient :

-   Une brosse à dent biodégradable 
-   Crème à main (50g)
-   Baume à lèvres
-   Pochette de canevas avec écusson de cuir 
 
Brosse à dent : manche en bambou, poil en polymères, exempts de BPA et d’autres toxines 
 
Crème à main forêt: Ingrédients: beurre de karité, huile de coco, huile de jojoba, huiles essentielles d'aiguille de sapin, pin et bois de cèdre.
Ou Crème à main Thé blanc à la rose: Ingrédients: beurre de karité, huile de coco, huile de jojoba, thé blanc organique à la rose, extrait de rose.
 
Baume à lèvres forêt: Ingrédients : cire de candelilla, beurre de cacao, beurre de karité, huile d’abricot, huile de jojoba, huile de ricin, huiles essentielles de cèdre, eucalyptus et pin.
Ou baume à lèvres orange et lavande : Ingrédients : cire de candelilla, beurre de cacao, beurre de karité, huile d’abricot, huile de jojoba, huile de ricin, huile essentielle d’orange et extrait de lavande.

*Dimension:* 9” x 5,5”

*Matériaux:*
 
Brosse à dent : manche en bambou, poil en polymères, exempts de BPA et d’autres toxines 
 
Crème à main forêt: Ingrédients: beurre de karité, huile de coco, huile de jojoba, huiles essentielles d'aiguille de sapin, pin et bois de cèdre.
Ou Crème à main Thé blanc à la rose: Ingrédients: beurre de karité, huile de coco, huile de jojoba, thé blanc organique à la rose, extrait de rose.
 
Baume à lèvres forêt: Ingrédients : cire de candelilla, beurre de cacao, beurre de karité, huile d’abricot, huile de jojoba, huile de ricin, huiles essentielles de cèdre, eucalyptus et pin.
Ou baume à lèvres orange et lavande : Ingrédients : cire de candelilla, beurre de cacao, beurre de karité, huile d’abricot, huile de jojoba, huile de ricin, huile essentielle d’orange et extrait de lavande.
 
Pochette: canvas 12 oz. 100% coton et écusson en cuir de vache
```

### L'aperçu

Cette portion est encore en construction, ne vous y fiez pas pour le moment, puisque ce n'est qu'un ramassi d'information. Vous verrez votre aperçu sur votre site une fois que vous aurez sauvegarder votre CMS :)

## Modification

Pour modifier un article, tous les champs sont identiques que ceux de la création. **Ne modifiez jamais un identifiant ou bien le lien du produit**. La personne en charge de votre référencement vous taperait sur les doigts. Il faut comprendre que Google indexe les liens de votre site et que si vous changez le lien, les gens ne pourront pu y accéder par Google tant que Google ne sera pas passer à nouveau sur votre site, ce qui peut être long, il a autre chose à faire ;) Si vous devez vraiment changer un lien, faites-moi signe!