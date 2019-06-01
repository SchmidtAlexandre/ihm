######Alexandre SCHMIDT

#Compte Rendu de IHM

###INTRODUCTION

Dans le cadre du cours de IHM, nous avons eu un projet durant tout le mois de mai pour concevoir un Pokedex avec Angular. Le projet se décomposait en plusieurs parties. 

##### 1. Initialisation du projet

Je suis parti de aucune connaissance en Angular, mais en suivant le tp, cela n'a pas été compliqué d'initialiser le projet. On obtient facilement la structure du projet, même si on ne comprend pas encore l'utilité de chaque fichier, en suivant les étapes je n'ai pas eu de problème. Cependant quand on s'intéresse aux fichiers j'ai eu du mal dans un premier temps au fait que le fichier html, ts et css soient séparés, contrairement à vue.js auquel je m'etais habitué ce qui m'a un peu perdu au début notament pour passer des données du TypeScript au HTML, il faut un petit temps d'adaptation, de même avec les autres fichiers ou on comprend pas dès le début ou se mettent les imports, ...

##### 2. Data-binding

Le début de cette partie n'est pas compliquée non plus quand on suit le tp, on arrive assez facilement son premier data-binding avec un input pour voir le fonctionnement et comment faire passer des données entre le HTML et le Ts.

##### 3. Recherche dans une liste.

C'est la que commence mes premières difficultés, tout d'abord j'ai pas compris directement que la class pokemon devait être un constructeur, je pensais que c'était direct juste un tableau. J'ai quand même assez vite corrigé mon erreur pour faire un constructeur et ainsi pouvoir créer une liste fictive.

La balise select avec un *ngFor* n'était pas non plus super évidente la première fois qu'on l'a réalise, mais on fini par y arriver.

Il faut ensuite récupérer la valeur mais si on a compris le data-binding de l'étape précédente, cela ne pose pas trop de problème.

Le *ng-pipe* non plus n'a pas était des plus évident pour moi, malgré avoir lu toute la documentation, j'ai mis pas mal de temps à le mettre en place et qu'il fonctionne correctement. 

##### 4. Accès à une API

Générer un nouveau service avec le `@Injectable()` n'est pas compliqué, mais lorsqu'il s'agit de récupérer la liste des pokémons en utilisant le service http, cela est devenu tout de suite plus compliqué. J'ai fais de nombreuses recherches sur Internet, notamment sur le site de Angular ou j'ai esssayé de reproduire le HttpClient mais rien ne fonctionné, je me suis alors basé sur d'autres sites, mais beaucoup utilisaient des méthodes différentes qui n'ont fait que me perdre. J'ai alors réutiliser le site d'angular et en lui tenant tête j'ai fini par réussir à le faire marcher mais cela m'a demandé pas mal de temps le temps de comprendre comment on récupérait tous les pokemons. 

Ensuite j'ai du adapter mon select qui ne marchait plus, j'étais obligé de rentrer un input pour qu'il trouve les pokemons dans le select, surement un problème du fais que ça soit asynchrone, mais une fois que je les avais, je pouvais effacer mon input, et ils étaient bien tous présent dans le select. 

#### 5. Embellissement du projet

Pour avoir une interface un peu plus sympas j'ai décidé de télécharger Angular Matérial qui a l'air d'être un outil très utilisé et très fonctionnel, cependant j'ai réussis à avoir que des erreurs, en essayant de les enlever j'y arrivais plus ou moins mais d'autres apparaissaient, je ne m'en sortais plus et je m'inquiétais pour mon projet comme plus rien ne marchait ni s'affichait, j'ai alors essayé d'enlever ce que j'avais téléchargé et rajouter dans les différents fichiers, mais encore des erreurs ! J'ai faillit tout recommencer, mais déjà que j'étais très short niveau timinig, j'ai continué à chercher d'ou venait le problème, et cela venait des lignes qu'il fallait rajouter dans le *style* du fichier `package.json`. 

Au final j'ai laissé tombé Angular matérial, j'avais passé trop de temps à essayer de l'installer pour ne pas y arriver je me suis dis que ça sera surement plus simple avec prime-NG, ce qui ne l'a pas forcément été et m'a demandé un certain temps et un certain nombre de tuto pour qu'il soit fonctionnel. 

J'ai alors pu remplacer le select par un *AutoComplete*, j'ai alors pu voir des mécanismes de fonctionnement encore différents du select et du pipe. De plus j'ai pu faire un AutoComplete avec tous les noms des pokemons mais aussi on peut faire une recherche dedans, et chaque pokemon est accompagné de sa photo à coté dans la liste pour que ça soit plus visuel que juste les noms.

Ensuite j'ai pu rajouter un carrousel ou peut retrouver tout les pokémons avec leur photo, et les informations sur eux.

### CONCLUSION

J'ai malheureusement du m'arrêter la pour faute de temps, le design n'est pas très travaillé et j'aurais aimé avoir le temps de pouvoir récupérer d'avantages d'informations sur les pokemons pour les afficher. Mon mois de mai étant très chargé, j'ai commencé le projet très tard et je n'ai malheureusement pas réussi à lui consacrer beaucoup plus de temps personnel pour de nombreuses raisons... Je suis pas loin de la fin, c'est beaucoup de design qu'il reste à faire car le reste n'est pas compliqué, le plus dur est fait. J'aurais aimé arriver à le finir, notamment qu'il s'agit d'un sujet qui m'intéresse et sur lequel je vais faire mes 2 mois de stage, c'est pour cela que je vais surement essayer de le finir au cours du mois de juin en dehors de mes heures de stage, même si la date de rendu sera dépassée. Je mettrais tout de même mon avancement sur GitHub. 

