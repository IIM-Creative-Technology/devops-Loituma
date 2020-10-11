# portfolio-vue

Ce projet permet d'utiliser Github Action et de deploy sur Heroku.

Utilisation de VueJs pour commencer à l'apprendre en adaptant mon portfolio.

Il y a une branche pour la production et une pour la preproduction.

### Liens des sites
- prod : https://iim-vue-devops.herokuapp.com
- preprod : https://iim-vue-devops-preprod.herokuapp.com/

### Configuration

#### Github Workflow
- `deploy.yaml` est le fichier pour les actions lors d'un push sur la branche master (Prod).
- `deploy-preprod.yaml` est le fichier pour les actions lors d'un push sur la branche preprod (Preprod).
- `pull-request.yaml` est le fichier pour les actions lorsque une pull request est ouverte.

##### Explication des actions
- `Init project` permet d'accéder à notre repository.
- `Setup Nodejs` permet d'installer Nodejs.
- `Install Packages` installe les package du projet.
- `Build Application` construit l'application a partir du package.json.
- `Run ESLint` permet de test la qualité du code.
- `Deploy to Heroku` deploy le projet sur Heroku.
