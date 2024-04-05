## HRnet

HRnet est une application web basée sur React conçue pour gérer efficacement les informations des employés. Elle permet aux utilisateurs d'ajouter de nouveaux enregistrements d'employés, de consulter une liste d'employés et de naviguer dans l'application à l'aide du routage. Le projet tire parti de l'écosystème React, y compris Redux pour la gestion de l'état, react-router-dom pour le routage, et diverses autres bibliothèques pour améliorer l'UI et la fonctionnalité.

### Fonctionnalités

`Ajouter un employé` : Les utilisateurs peuvent créer de nouveaux enregistrements d'employés à travers une interface de formulaire, capturant des détails tels que le nom, le département et la date de début.
`Voir les employés` : Une vue en liste affiche tous les employés, avec des fonctionnalités pour trier, filtrer et paginer à travers les enregistrements.
`Validation de formulaire` : L'application valide les entrées de formulaire avant la soumission pour garantir l'intégrité des données.
`Navigation` : Les utilisateurs peuvent naviguer entre la vue de formulaire et la vue de liste des employés en utilisant React Router.
`Persistance` : Les données des employés sont persistées dans le localStorage du navigateur pour simplifier.

### Structure du projet

`src/components/` : Contient des composants UI réutilisables comme les champs de saisie, les champs de sélection, et les sélecteurs de date.
`src/redux/` : Comprend des slices Redux toolkit pour la gestion de l'état.
`src/views/` : Abrite les principales vues/pages de l'application, telles que le formulaire d'employé et les vues de liste d'employés.
`App.js` : Le composant racine qui configure le routage pour l'application.
`index.js` : Le point d'entrée de l'application React qui rend le composant App.

### Dépendances

`React`
`Redux Toolkit`
`React Router DOM`
`React Table`
`React DatePicker`
`React Select`
`Simple Library Modal (pour les dialogues modaux)`

### employeeFormView.js

Ce composant est un formulaire pour ajouter de nouveaux employés. Il valide les entrées utilisateur, gère la soumission du formulaire, et affiche un modal lors de la soumission réussie. Il utilise des composants d'entrée personnalisés comme InputField et SelectField pour les champs de formulaire, et DatePickerField pour la sélection de date.

### employeeListView.js

Affiche une liste d'employés en utilisant les données récupérées du store Redux. Il s'intègre avec react-table pour les fonctionnalités de tri, filtrage et pagination. Des composants comme SearchBox, Table et Pagination sont utilisés ici pour fournir une vue complète des données des employés.

### employeesSlice.js

Définit le slice Redux pour les employés. Il gère l'état de l'application lié aux employés, y compris l'ajout de nouveaux enregistrements d'employés à l'état et leur persistance dans localStorage.

### InputField.js et SelectField.js

Composants de formulaire réutilisables pour les champs de saisie et de sélection, respectivement. Ils affichent des étiquettes, le contrôle de formulaire réel (entrée ou sélection) et les messages d'erreur de validation.

### SearchBox.js

Un composant qui offre une fonctionnalité de recherche et la capacité d'ajuster le nombre de lignes de table affichées. Il interagit avec l'état de filtre global et la taille de page de react-table.

### Table.js

Rend un tableau d'employés avec des fonctionnalités comme des indicateurs de tri. Il repose sur la bibliothèque react-table pour son implémentation, en utilisant les hooks fournis par la bibliothèque pour gérer l'état et le comportement du tableau.

### Pagination.js

Un composant qui fournit des contrôles de pagination pour naviguer à travers les pages d'employés dans le tableau. Il affiche la page actuelle, le total des entrées et permet à l'utilisateur de passer à la page suivante ou précédente.

### datePickerField.js et dateTimePicker.js

datePickerField.js enveloppe le composant DateTimePicker, fournissant un champ de sélecteur de date stylisé, y compris une étiquette et des messages d'erreur. dateTimePicker.js est une implémentation personnalisée de sélecteur de date utilisant react-datepicker.
