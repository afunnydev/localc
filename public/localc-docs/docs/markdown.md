### Markdown

Vous devrez vous familiariser avec la terminologie Markdown, mais je vous fait la promesse que c'est plus simple que ce à quoi vous êtes habitués et que vous allez préférer à Wordpress.

Qu'est-ce que [Markdown](https://learn.getgrav.org/content/markdown)? C'est une manière simplifiée d'écrire du HTML, qui est la façon dont vous allez organiser les éléments de votre page (les en-têtes, les listes, les mots en gras, etc). 

Voici un fichier qui va grandement vous aider à vous retrouver. C'est surtout la première page qui va vous êtes utile.

```download|span-3
{
    "title": "Aide-mémoire Markdown (.pdf)",
    "filename": "markdown-cheatsheet",
    "subtitle": "C'est pour votre bien!",
    "url": "docs/markdown-cheatsheet.pdf"
}
```
#### Règles de base

- Après chaque symbole Markdown, vous devez mettre un espace pour que le système fasse la distinction entre le texte et l'organisation

```hint|warning
*####Qu'est-ce que la podiatrie?* ne fonctionne pas :) Vous devez utiliser *\#\#\#\# Qu'est-ce que la podiatrie*
```

- Espacer bien votre texte et vos titres avec des sauts de ligne
- Pour mettre quelque chose en italique, encercler votre mot ou paragraphe de \* et cela se fera automatiquement, comme suit \*test\*
- Si vous devez utiliser le symbole \# ou \*, vous devez ajouter \ devant le \# ou le \* pour que le système sache qu'il ne doit pas l'interpréter

#### Ce que vous devez savoir

Voici les choses à savoir qui vous seront utiles:

- Lors que vous faites une liste d'éléments, il faut sauter une ligne avec et après la liste, et commencer chaque élément par un tiret (-) et un espace



```hint
span: 3
neutral: true
---
**Exemple**
Pour tester une liste:

\- Tu saute une ligne
\- Tu mets un tiret
\- Tu mets un espace
\- Tu sautes une autre ligne avant ton texte!
```
```hint
span: 3
directive: true
---
**Résultat**
Pour tester une liste:

- Tu saute une ligne
- Tu mets un tiret
- Tu mets un espace
- Tu sautes une autre ligne avant ton texte!
```

- Tous les paramètres dans les description (ex: dimension) sont en italique (donc \*dimension\*)
- Pour mettre en emphase des éléments avec style, vous pouvez ajouter un \> au début de la ligne. 

```hint
span: 4
neutral: true
---
**Exemple**
\> Ceci est une phrase un paragraphe que vous trouver important et que vous voulez souligner à votre utilisateur.
```
**Résultat**
> Ceci est une phrase un paragraphe que vous trouver important et que vous voulez souligner à votre utilisateur.
