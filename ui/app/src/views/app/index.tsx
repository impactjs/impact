import { Accordion } from "@ark-ui/react";
import { css } from "@impacts/styled-system/css";
import { VStack } from "@impacts/styled-system/jsx";
import { impactResultSchema } from "@impacts/types/results";
import { Fragment } from "react/jsx-runtime";
import { Card } from "../../components/Card";
import { Tabs } from "../../components/Tabs";

declare global {
  const result: unknown;
}

Object.assign(globalThis, {
  result: {
    entrypoints: [
      {
        id: "root",
        description: "Main entry point for the application",
        path: "./src/index.ts",
        updates: [
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2326/corriger-la-remontee-des-infos-date-de-debut-date-de-fin-des-kits-lco",
              origin: "linear",
              title:
                'Corriger la remontée des infos : Date de Début / Date de Fin des kits LCO après validation de la commande sur la page "Mes kits souscrits"',
              id: "FRONT-2326",
              description:
                '# **Contexte (parcours d’entrée)**\n\nActuellement, sur le LCO, les infos concernant Date de Début / Date de Fin ne remontent pas sur la page "Mes kits souscrits".\n\n![Capture d’écran 2025-01-06 à 11.50.17.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/6a0a259c-a262-449a-9ce8-d54d9418fad6/3e32c316-a5b8-4d6e-b543-c5a90d0faa6d)\n\n⚠️ Bug présent uniquement sur MASTER ⚠️ \n\n![Capture d’écran 2025-01-06 à 12.27.04.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/73b97b9a-fb65-4de9-b386-19bca6aba355/c89318d0-f9db-4d78-9919-9608739ef8e2)\n\nNous pouvons voir que sur la query "/paginated-with-legacy" nous avons bien des données sur start_date et end_date. \n\n---\n\n# **Comportement voulu**\n\n* Afficher les informations : Date de Début / Date de Fin des kits LCO après validation de la commande sur la page "Mes kits souscrits"\n\n---\n\n# Critères d\'acceptations (entre 5 et 9) \n\n1. L\'utilisateur peut valider la commande de ses kits LCO\n2. Les kits LCO doivent remonter correctement dans la page mes kits souscrits \n3. Pour chaque ligne de la page "Mes kits souscrits" afficher une Date de Début et une Date de Fin\n\n---\n\n# Scénario de repro \n\n1. Se rendre sur Master LCO \n2. Cliquer sur le kit de communication : [https://master.lco.live.mobsuccess.com/kit/9b2157e1-8659-4092-9cf0-5422d37facc3?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae](https://master.lco.live.mobsuccess.com/kit/9b2157e1-8659-4092-9cf0-5422d37facc3?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae)\n3. Aller au bout du parcours et valider la commande\n4. Se rendre sur la page "Mes kits souscrits" \n5. Rechercher dans la ligne du kit qui vient d\'être commandé (filtrer sur "en attente de paiement" \n6. Constater que les infos concernant Date de Début / Date de Fin ne remontent pas dans le tableau\n\n---\n\n# **Informations complémentaires**\n\nLien du thread slack : [https://mobsuccess.slack.com/archives/C04UE0SHW1X/p1736162536078249](https://mobsuccess.slack.com/archives/C04UE0SHW1X/p1736162536078249)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de l\'affichage des informations : Date de Début / Date de Fin des kits après validation de la commande sur la page "Mes kits souscrits" du LCO\n\n🇺🇸 Correction of the display of information: Start Date / End Date of kits after order validation on the "My Subscribed Kits" page of the LCO.',
            },
            origin: "linear",
            timestamp: 1736180663000,
            references: [
              {
                url: "",
                origin: "git",
                id: "d2c2b8d4ff937c0344ea54f7499c88ea70988307",
                title:
                  "fix(table): date formatting when value is a string [FRONT-2326] (#2321)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2320/revoir-lexemple-du-radiogroupitem-pour-retirer-custom",
              origin: "linear",
              title:
                "Revoir l'exemple du RadioGroup.Item pour retirer `custom`",
              id: "FRONT-2320",
              description:
                "## Contexte\n\nLimiter le nombre de props aide a la facilité de maintenance des composants\n\n---\n\n## **Description du Problème**\n\n```\n<RadioGroup.Item custom value={index.toString()} className={itemCss}>\n```\n\nLa props `custom` n'est pas utilisé, il suffit d'utiliser les composant de ark directement\n\nCela mène à des branches de code non testé et a un code plus grand que nécessaire",
            },
            origin: "linear",
            timestamp: 1736155066000,
            references: [
              {
                url: "",
                origin: "git",
                id: "ae24a4a44e2a0f47420eb25663c604347abfc115",
                title:
                  "refactor(lco): refactor custom radio item [FRONT-2320] (#2317)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2291/colorpicker",
              origin: "linear",
              title: "ColorPicker",
              id: "FRONT-2291",
              description: "",
            },
            origin: "linear",
            timestamp: 1735910632000,
            references: [
              {
                url: "",
                origin: "git",
                id: "e85601c8942925ca60eaf609e6b532d590101bad",
                title:
                  "refactor(react-ui): color palette export [FRONT-2291] (#2289)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2322/mettre-le-titre-de-la-modal-en-composition",
              origin: "linear",
              title: "Mettre le titre de la modal en composition",
              id: "FRONT-2322",
              description:
                "#### Changelog\n\nAjout du titre de la modal en composition dans le code pour correspondre aux autres composants similaires",
            },
            origin: "linear",
            timestamp: 1735901410000,
            references: [
              {
                url: "",
                origin: "git",
                id: "2a5ee9ff4259d339f6d49fc2320868b6d2122d54",
                title:
                  "fix(react-ui): move modal title to composition and refine implementation [FRONT-2322] (#2311)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2311/corriger-le-changement-de-mois-dans-react-ui",
              origin: "linear",
              title: "Corriger le changement de mois dans react-ui",
              id: "FRONT-2311",
              description: "",
            },
            origin: "linear",
            timestamp: 1735899625000,
            references: [
              {
                url: "",
                origin: "git",
                id: "10f9ac61a4b482142661929a7b30ac1604265d0d",
                title:
                  "fix: change month in date and time picker [FRONT-2311] (#2309)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2310/doc-improve-the-input-panda-documentation",
              origin: "linear",
              title: "Doc: Improve the Input (panda) documentation",
              id: "FRONT-2310",
              description:
                "## Contexte\n\nAvoir une documentation a jour\n\n---\n\n## **Description du Problème**\n\nChamps en trop dans la documentation\n\nSur-couche inutile de style dans les examples\n\n![Screenshot 2025-01-02 at 09.29.43.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/c43b132e-93da-41be-89ed-85ddf049746a/3e01500c-df6e-4404-898e-12e730b7ec8f)",
            },
            origin: "linear",
            timestamp: 1735808615000,
            references: [
              {
                url: "",
                origin: "git",
                id: "2c31c5ea9b3b2668d509cac0c646798fa02795fa",
                title:
                  "docs(react-ui): improve input documentation [FRONT-2310] (#2308)",
                description: "",
              },
            ],
          },
        ],
      },
      {
        id: "_app",
        description: "Wrapper for the application",
        path: "./src/pages/_app.tsx",
        updates: [
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2324/utiliser-la-modale-pandark-dans-le-dialog-meta-custom",
              origin: "linear",
              title: "Utiliser la modale pandark dans le dialog Meta custom",
              id: "FRONT-2324",
              description:
                "## Contexte\n\nEn attendant de rework toute la modale, passer juste le composant Modal à pandark pour éviter les problèmes de zindex",
            },
            origin: "linear",
            timestamp: 1736181296000,
            references: [
              {
                url: "",
                origin: "git",
                id: "7c01077e3ea19d3eb510dda60258f55dbc0f3f08",
                title:
                  "chore(asset-manager): use pandark modal for meta custom [FRONT-2324] (#2318)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2326/corriger-la-remontee-des-infos-date-de-debut-date-de-fin-des-kits-lco",
              origin: "linear",
              title:
                'Corriger la remontée des infos : Date de Début / Date de Fin des kits LCO après validation de la commande sur la page "Mes kits souscrits"',
              id: "FRONT-2326",
              description:
                '# **Contexte (parcours d’entrée)**\n\nActuellement, sur le LCO, les infos concernant Date de Début / Date de Fin ne remontent pas sur la page "Mes kits souscrits".\n\n![Capture d’écran 2025-01-06 à 11.50.17.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/6a0a259c-a262-449a-9ce8-d54d9418fad6/3e32c316-a5b8-4d6e-b543-c5a90d0faa6d)\n\n⚠️ Bug présent uniquement sur MASTER ⚠️ \n\n![Capture d’écran 2025-01-06 à 12.27.04.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/73b97b9a-fb65-4de9-b386-19bca6aba355/c89318d0-f9db-4d78-9919-9608739ef8e2)\n\nNous pouvons voir que sur la query "/paginated-with-legacy" nous avons bien des données sur start_date et end_date. \n\n---\n\n# **Comportement voulu**\n\n* Afficher les informations : Date de Début / Date de Fin des kits LCO après validation de la commande sur la page "Mes kits souscrits"\n\n---\n\n# Critères d\'acceptations (entre 5 et 9) \n\n1. L\'utilisateur peut valider la commande de ses kits LCO\n2. Les kits LCO doivent remonter correctement dans la page mes kits souscrits \n3. Pour chaque ligne de la page "Mes kits souscrits" afficher une Date de Début et une Date de Fin\n\n---\n\n# Scénario de repro \n\n1. Se rendre sur Master LCO \n2. Cliquer sur le kit de communication : [https://master.lco.live.mobsuccess.com/kit/9b2157e1-8659-4092-9cf0-5422d37facc3?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae](https://master.lco.live.mobsuccess.com/kit/9b2157e1-8659-4092-9cf0-5422d37facc3?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae)\n3. Aller au bout du parcours et valider la commande\n4. Se rendre sur la page "Mes kits souscrits" \n5. Rechercher dans la ligne du kit qui vient d\'être commandé (filtrer sur "en attente de paiement" \n6. Constater que les infos concernant Date de Début / Date de Fin ne remontent pas dans le tableau\n\n---\n\n# **Informations complémentaires**\n\nLien du thread slack : [https://mobsuccess.slack.com/archives/C04UE0SHW1X/p1736162536078249](https://mobsuccess.slack.com/archives/C04UE0SHW1X/p1736162536078249)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de l\'affichage des informations : Date de Début / Date de Fin des kits après validation de la commande sur la page "Mes kits souscrits" du LCO\n\n🇺🇸 Correction of the display of information: Start Date / End Date of kits after order validation on the "My Subscribed Kits" page of the LCO.',
            },
            origin: "linear",
            timestamp: 1736180663000,
            references: [
              {
                url: "",
                origin: "git",
                id: "d2c2b8d4ff937c0344ea54f7499c88ea70988307",
                title:
                  "fix(table): date formatting when value is a string [FRONT-2326] (#2321)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2320/revoir-lexemple-du-radiogroupitem-pour-retirer-custom",
              origin: "linear",
              title:
                "Revoir l'exemple du RadioGroup.Item pour retirer `custom`",
              id: "FRONT-2320",
              description:
                "## Contexte\n\nLimiter le nombre de props aide a la facilité de maintenance des composants\n\n---\n\n## **Description du Problème**\n\n```\n<RadioGroup.Item custom value={index.toString()} className={itemCss}>\n```\n\nLa props `custom` n'est pas utilisé, il suffit d'utiliser les composant de ark directement\n\nCela mène à des branches de code non testé et a un code plus grand que nécessaire",
            },
            origin: "linear",
            timestamp: 1736155066000,
            references: [
              {
                url: "",
                origin: "git",
                id: "ae24a4a44e2a0f47420eb25663c604347abfc115",
                title:
                  "refactor(lco): refactor custom radio item [FRONT-2320] (#2317)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-1863/rework-dialoginstream",
              origin: "linear",
              title: "Rework DialogInstream",
              id: "FRONT-1863",
              description:
                "## Contexte\n\nLes forms n'en sont pas vraiment et utilisent des atoms mal typés.\n\n---\n\n## **Description du Problème**\n\nPlusieurs ts-nocheck au sein de ces composants en haut des fichiers, empêchant le typechecking de fonctionner.\n\n---\n\n## Informations complémentaires\n\n* Utiliser notre utilitaire pour les forms\n* Utiliser les validations mises en commun\n\n---\n\n## Critère d'acceptation\n\n* Plus aucun ts-nocheck dans le composant\n* Utilisation de tanstack-form pour ces modales\n* Pas de regression au niveau du comportement\n* Tests unitaires des fonctions logiques/métier\n* Test visuels au sommet de la modale\n* Optionnel: tests E2E (à voir avec @vincent.barrault)",
            },
            origin: "linear",
            timestamp: 1736154029000,
            references: [
              {
                url: "",
                origin: "git",
                id: "aaf4e6124e7bde91f3a66ac3e1190e1562457b29",
                title:
                  "refactor(lcm): migrate instream dialog [FRONT-1863] (#2242)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2291/colorpicker",
              origin: "linear",
              title: "ColorPicker",
              id: "FRONT-2291",
              description: "",
            },
            origin: "linear",
            timestamp: 1735910632000,
            references: [
              {
                url: "",
                origin: "git",
                id: "e85601c8942925ca60eaf609e6b532d590101bad",
                title:
                  "refactor(react-ui): color palette export [FRONT-2291] (#2289)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2322/mettre-le-titre-de-la-modal-en-composition",
              origin: "linear",
              title: "Mettre le titre de la modal en composition",
              id: "FRONT-2322",
              description:
                "#### Changelog\n\nAjout du titre de la modal en composition dans le code pour correspondre aux autres composants similaires",
            },
            origin: "linear",
            timestamp: 1735901410000,
            references: [
              {
                url: "",
                origin: "git",
                id: "2a5ee9ff4259d339f6d49fc2320868b6d2122d54",
                title:
                  "fix(react-ui): move modal title to composition and refine implementation [FRONT-2322] (#2311)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2311/corriger-le-changement-de-mois-dans-react-ui",
              origin: "linear",
              title: "Corriger le changement de mois dans react-ui",
              id: "FRONT-2311",
              description: "",
            },
            origin: "linear",
            timestamp: 1735899625000,
            references: [
              {
                url: "",
                origin: "git",
                id: "10f9ac61a4b482142661929a7b30ac1604265d0d",
                title:
                  "fix: change month in date and time picker [FRONT-2311] (#2309)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2310/doc-improve-the-input-panda-documentation",
              origin: "linear",
              title: "Doc: Improve the Input (panda) documentation",
              id: "FRONT-2310",
              description:
                "## Contexte\n\nAvoir une documentation a jour\n\n---\n\n## **Description du Problème**\n\nChamps en trop dans la documentation\n\nSur-couche inutile de style dans les examples\n\n![Screenshot 2025-01-02 at 09.29.43.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/c43b132e-93da-41be-89ed-85ddf049746a/3e01500c-df6e-4404-898e-12e730b7ec8f)",
            },
            origin: "linear",
            timestamp: 1735808615000,
            references: [
              {
                url: "",
                origin: "git",
                id: "2c31c5ea9b3b2668d509cac0c646798fa02795fa",
                title:
                  "docs(react-ui): improve input documentation [FRONT-2310] (#2308)",
                description: "",
              },
            ],
          },
        ],
      },
      {
        id: "business-unit",
        description: "Business Unit selection page",
        path: "./src/pages/index.ts",
        updates: [
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2324/utiliser-la-modale-pandark-dans-le-dialog-meta-custom",
              origin: "linear",
              title: "Utiliser la modale pandark dans le dialog Meta custom",
              id: "FRONT-2324",
              description:
                "## Contexte\n\nEn attendant de rework toute la modale, passer juste le composant Modal à pandark pour éviter les problèmes de zindex",
            },
            origin: "linear",
            timestamp: 1736181296000,
            references: [
              {
                url: "",
                origin: "git",
                id: "7c01077e3ea19d3eb510dda60258f55dbc0f3f08",
                title:
                  "chore(asset-manager): use pandark modal for meta custom [FRONT-2324] (#2318)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2326/corriger-la-remontee-des-infos-date-de-debut-date-de-fin-des-kits-lco",
              origin: "linear",
              title:
                'Corriger la remontée des infos : Date de Début / Date de Fin des kits LCO après validation de la commande sur la page "Mes kits souscrits"',
              id: "FRONT-2326",
              description:
                '# **Contexte (parcours d’entrée)**\n\nActuellement, sur le LCO, les infos concernant Date de Début / Date de Fin ne remontent pas sur la page "Mes kits souscrits".\n\n![Capture d’écran 2025-01-06 à 11.50.17.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/6a0a259c-a262-449a-9ce8-d54d9418fad6/3e32c316-a5b8-4d6e-b543-c5a90d0faa6d)\n\n⚠️ Bug présent uniquement sur MASTER ⚠️ \n\n![Capture d’écran 2025-01-06 à 12.27.04.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/73b97b9a-fb65-4de9-b386-19bca6aba355/c89318d0-f9db-4d78-9919-9608739ef8e2)\n\nNous pouvons voir que sur la query "/paginated-with-legacy" nous avons bien des données sur start_date et end_date. \n\n---\n\n# **Comportement voulu**\n\n* Afficher les informations : Date de Début / Date de Fin des kits LCO après validation de la commande sur la page "Mes kits souscrits"\n\n---\n\n# Critères d\'acceptations (entre 5 et 9) \n\n1. L\'utilisateur peut valider la commande de ses kits LCO\n2. Les kits LCO doivent remonter correctement dans la page mes kits souscrits \n3. Pour chaque ligne de la page "Mes kits souscrits" afficher une Date de Début et une Date de Fin\n\n---\n\n# Scénario de repro \n\n1. Se rendre sur Master LCO \n2. Cliquer sur le kit de communication : [https://master.lco.live.mobsuccess.com/kit/9b2157e1-8659-4092-9cf0-5422d37facc3?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae](https://master.lco.live.mobsuccess.com/kit/9b2157e1-8659-4092-9cf0-5422d37facc3?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae)\n3. Aller au bout du parcours et valider la commande\n4. Se rendre sur la page "Mes kits souscrits" \n5. Rechercher dans la ligne du kit qui vient d\'être commandé (filtrer sur "en attente de paiement" \n6. Constater que les infos concernant Date de Début / Date de Fin ne remontent pas dans le tableau\n\n---\n\n# **Informations complémentaires**\n\nLien du thread slack : [https://mobsuccess.slack.com/archives/C04UE0SHW1X/p1736162536078249](https://mobsuccess.slack.com/archives/C04UE0SHW1X/p1736162536078249)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de l\'affichage des informations : Date de Début / Date de Fin des kits après validation de la commande sur la page "Mes kits souscrits" du LCO\n\n🇺🇸 Correction of the display of information: Start Date / End Date of kits after order validation on the "My Subscribed Kits" page of the LCO.',
            },
            origin: "linear",
            timestamp: 1736180663000,
            references: [
              {
                url: "",
                origin: "git",
                id: "d2c2b8d4ff937c0344ea54f7499c88ea70988307",
                title:
                  "fix(table): date formatting when value is a string [FRONT-2326] (#2321)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2320/revoir-lexemple-du-radiogroupitem-pour-retirer-custom",
              origin: "linear",
              title:
                "Revoir l'exemple du RadioGroup.Item pour retirer `custom`",
              id: "FRONT-2320",
              description:
                "## Contexte\n\nLimiter le nombre de props aide a la facilité de maintenance des composants\n\n---\n\n## **Description du Problème**\n\n```\n<RadioGroup.Item custom value={index.toString()} className={itemCss}>\n```\n\nLa props `custom` n'est pas utilisé, il suffit d'utiliser les composant de ark directement\n\nCela mène à des branches de code non testé et a un code plus grand que nécessaire",
            },
            origin: "linear",
            timestamp: 1736155066000,
            references: [
              {
                url: "",
                origin: "git",
                id: "ae24a4a44e2a0f47420eb25663c604347abfc115",
                title:
                  "refactor(lco): refactor custom radio item [FRONT-2320] (#2317)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-1863/rework-dialoginstream",
              origin: "linear",
              title: "Rework DialogInstream",
              id: "FRONT-1863",
              description:
                "## Contexte\n\nLes forms n'en sont pas vraiment et utilisent des atoms mal typés.\n\n---\n\n## **Description du Problème**\n\nPlusieurs ts-nocheck au sein de ces composants en haut des fichiers, empêchant le typechecking de fonctionner.\n\n---\n\n## Informations complémentaires\n\n* Utiliser notre utilitaire pour les forms\n* Utiliser les validations mises en commun\n\n---\n\n## Critère d'acceptation\n\n* Plus aucun ts-nocheck dans le composant\n* Utilisation de tanstack-form pour ces modales\n* Pas de regression au niveau du comportement\n* Tests unitaires des fonctions logiques/métier\n* Test visuels au sommet de la modale\n* Optionnel: tests E2E (à voir avec @vincent.barrault)",
            },
            origin: "linear",
            timestamp: 1736154029000,
            references: [
              {
                url: "",
                origin: "git",
                id: "aaf4e6124e7bde91f3a66ac3e1190e1562457b29",
                title:
                  "refactor(lcm): migrate instream dialog [FRONT-1863] (#2242)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2291/colorpicker",
              origin: "linear",
              title: "ColorPicker",
              id: "FRONT-2291",
              description: "",
            },
            origin: "linear",
            timestamp: 1735910632000,
            references: [
              {
                url: "",
                origin: "git",
                id: "e85601c8942925ca60eaf609e6b532d590101bad",
                title:
                  "refactor(react-ui): color palette export [FRONT-2291] (#2289)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2322/mettre-le-titre-de-la-modal-en-composition",
              origin: "linear",
              title: "Mettre le titre de la modal en composition",
              id: "FRONT-2322",
              description:
                "#### Changelog\n\nAjout du titre de la modal en composition dans le code pour correspondre aux autres composants similaires",
            },
            origin: "linear",
            timestamp: 1735901410000,
            references: [
              {
                url: "",
                origin: "git",
                id: "2a5ee9ff4259d339f6d49fc2320868b6d2122d54",
                title:
                  "fix(react-ui): move modal title to composition and refine implementation [FRONT-2322] (#2311)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2311/corriger-le-changement-de-mois-dans-react-ui",
              origin: "linear",
              title: "Corriger le changement de mois dans react-ui",
              id: "FRONT-2311",
              description: "",
            },
            origin: "linear",
            timestamp: 1735899625000,
            references: [
              {
                url: "",
                origin: "git",
                id: "10f9ac61a4b482142661929a7b30ac1604265d0d",
                title:
                  "fix: change month in date and time picker [FRONT-2311] (#2309)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2310/doc-improve-the-input-panda-documentation",
              origin: "linear",
              title: "Doc: Improve the Input (panda) documentation",
              id: "FRONT-2310",
              description:
                "## Contexte\n\nAvoir une documentation a jour\n\n---\n\n## **Description du Problème**\n\nChamps en trop dans la documentation\n\nSur-couche inutile de style dans les examples\n\n![Screenshot 2025-01-02 at 09.29.43.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/c43b132e-93da-41be-89ed-85ddf049746a/3e01500c-df6e-4404-898e-12e730b7ec8f)",
            },
            origin: "linear",
            timestamp: 1735808615000,
            references: [
              {
                url: "",
                origin: "git",
                id: "2c31c5ea9b3b2668d509cac0c646798fa02795fa",
                title:
                  "docs(react-ui): improve input documentation [FRONT-2310] (#2308)",
                description: "",
              },
            ],
          },
        ],
      },
      {
        id: "agency",
        description: "Agency selection page",
        path: "./src/pages/[businessUnit]/index.tsx",
        updates: [
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2324/utiliser-la-modale-pandark-dans-le-dialog-meta-custom",
              origin: "linear",
              title: "Utiliser la modale pandark dans le dialog Meta custom",
              id: "FRONT-2324",
              description:
                "## Contexte\n\nEn attendant de rework toute la modale, passer juste le composant Modal à pandark pour éviter les problèmes de zindex",
            },
            origin: "linear",
            timestamp: 1736181296000,
            references: [
              {
                url: "",
                origin: "git",
                id: "7c01077e3ea19d3eb510dda60258f55dbc0f3f08",
                title:
                  "chore(asset-manager): use pandark modal for meta custom [FRONT-2324] (#2318)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2326/corriger-la-remontee-des-infos-date-de-debut-date-de-fin-des-kits-lco",
              origin: "linear",
              title:
                'Corriger la remontée des infos : Date de Début / Date de Fin des kits LCO après validation de la commande sur la page "Mes kits souscrits"',
              id: "FRONT-2326",
              description:
                '# **Contexte (parcours d’entrée)**\n\nActuellement, sur le LCO, les infos concernant Date de Début / Date de Fin ne remontent pas sur la page "Mes kits souscrits".\n\n![Capture d’écran 2025-01-06 à 11.50.17.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/6a0a259c-a262-449a-9ce8-d54d9418fad6/3e32c316-a5b8-4d6e-b543-c5a90d0faa6d)\n\n⚠️ Bug présent uniquement sur MASTER ⚠️ \n\n![Capture d’écran 2025-01-06 à 12.27.04.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/73b97b9a-fb65-4de9-b386-19bca6aba355/c89318d0-f9db-4d78-9919-9608739ef8e2)\n\nNous pouvons voir que sur la query "/paginated-with-legacy" nous avons bien des données sur start_date et end_date. \n\n---\n\n# **Comportement voulu**\n\n* Afficher les informations : Date de Début / Date de Fin des kits LCO après validation de la commande sur la page "Mes kits souscrits"\n\n---\n\n# Critères d\'acceptations (entre 5 et 9) \n\n1. L\'utilisateur peut valider la commande de ses kits LCO\n2. Les kits LCO doivent remonter correctement dans la page mes kits souscrits \n3. Pour chaque ligne de la page "Mes kits souscrits" afficher une Date de Début et une Date de Fin\n\n---\n\n# Scénario de repro \n\n1. Se rendre sur Master LCO \n2. Cliquer sur le kit de communication : [https://master.lco.live.mobsuccess.com/kit/9b2157e1-8659-4092-9cf0-5422d37facc3?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae](https://master.lco.live.mobsuccess.com/kit/9b2157e1-8659-4092-9cf0-5422d37facc3?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae)\n3. Aller au bout du parcours et valider la commande\n4. Se rendre sur la page "Mes kits souscrits" \n5. Rechercher dans la ligne du kit qui vient d\'être commandé (filtrer sur "en attente de paiement" \n6. Constater que les infos concernant Date de Début / Date de Fin ne remontent pas dans le tableau\n\n---\n\n# **Informations complémentaires**\n\nLien du thread slack : [https://mobsuccess.slack.com/archives/C04UE0SHW1X/p1736162536078249](https://mobsuccess.slack.com/archives/C04UE0SHW1X/p1736162536078249)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de l\'affichage des informations : Date de Début / Date de Fin des kits après validation de la commande sur la page "Mes kits souscrits" du LCO\n\n🇺🇸 Correction of the display of information: Start Date / End Date of kits after order validation on the "My Subscribed Kits" page of the LCO.',
            },
            origin: "linear",
            timestamp: 1736180663000,
            references: [
              {
                url: "",
                origin: "git",
                id: "d2c2b8d4ff937c0344ea54f7499c88ea70988307",
                title:
                  "fix(table): date formatting when value is a string [FRONT-2326] (#2321)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2320/revoir-lexemple-du-radiogroupitem-pour-retirer-custom",
              origin: "linear",
              title:
                "Revoir l'exemple du RadioGroup.Item pour retirer `custom`",
              id: "FRONT-2320",
              description:
                "## Contexte\n\nLimiter le nombre de props aide a la facilité de maintenance des composants\n\n---\n\n## **Description du Problème**\n\n```\n<RadioGroup.Item custom value={index.toString()} className={itemCss}>\n```\n\nLa props `custom` n'est pas utilisé, il suffit d'utiliser les composant de ark directement\n\nCela mène à des branches de code non testé et a un code plus grand que nécessaire",
            },
            origin: "linear",
            timestamp: 1736155066000,
            references: [
              {
                url: "",
                origin: "git",
                id: "ae24a4a44e2a0f47420eb25663c604347abfc115",
                title:
                  "refactor(lco): refactor custom radio item [FRONT-2320] (#2317)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-1863/rework-dialoginstream",
              origin: "linear",
              title: "Rework DialogInstream",
              id: "FRONT-1863",
              description:
                "## Contexte\n\nLes forms n'en sont pas vraiment et utilisent des atoms mal typés.\n\n---\n\n## **Description du Problème**\n\nPlusieurs ts-nocheck au sein de ces composants en haut des fichiers, empêchant le typechecking de fonctionner.\n\n---\n\n## Informations complémentaires\n\n* Utiliser notre utilitaire pour les forms\n* Utiliser les validations mises en commun\n\n---\n\n## Critère d'acceptation\n\n* Plus aucun ts-nocheck dans le composant\n* Utilisation de tanstack-form pour ces modales\n* Pas de regression au niveau du comportement\n* Tests unitaires des fonctions logiques/métier\n* Test visuels au sommet de la modale\n* Optionnel: tests E2E (à voir avec @vincent.barrault)",
            },
            origin: "linear",
            timestamp: 1736154029000,
            references: [
              {
                url: "",
                origin: "git",
                id: "aaf4e6124e7bde91f3a66ac3e1190e1562457b29",
                title:
                  "refactor(lcm): migrate instream dialog [FRONT-1863] (#2242)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2291/colorpicker",
              origin: "linear",
              title: "ColorPicker",
              id: "FRONT-2291",
              description: "",
            },
            origin: "linear",
            timestamp: 1735910632000,
            references: [
              {
                url: "",
                origin: "git",
                id: "e85601c8942925ca60eaf609e6b532d590101bad",
                title:
                  "refactor(react-ui): color palette export [FRONT-2291] (#2289)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2322/mettre-le-titre-de-la-modal-en-composition",
              origin: "linear",
              title: "Mettre le titre de la modal en composition",
              id: "FRONT-2322",
              description:
                "#### Changelog\n\nAjout du titre de la modal en composition dans le code pour correspondre aux autres composants similaires",
            },
            origin: "linear",
            timestamp: 1735901410000,
            references: [
              {
                url: "",
                origin: "git",
                id: "2a5ee9ff4259d339f6d49fc2320868b6d2122d54",
                title:
                  "fix(react-ui): move modal title to composition and refine implementation [FRONT-2322] (#2311)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2311/corriger-le-changement-de-mois-dans-react-ui",
              origin: "linear",
              title: "Corriger le changement de mois dans react-ui",
              id: "FRONT-2311",
              description: "",
            },
            origin: "linear",
            timestamp: 1735899625000,
            references: [
              {
                url: "",
                origin: "git",
                id: "10f9ac61a4b482142661929a7b30ac1604265d0d",
                title:
                  "fix: change month in date and time picker [FRONT-2311] (#2309)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2310/doc-improve-the-input-panda-documentation",
              origin: "linear",
              title: "Doc: Improve the Input (panda) documentation",
              id: "FRONT-2310",
              description:
                "## Contexte\n\nAvoir une documentation a jour\n\n---\n\n## **Description du Problème**\n\nChamps en trop dans la documentation\n\nSur-couche inutile de style dans les examples\n\n![Screenshot 2025-01-02 at 09.29.43.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/c43b132e-93da-41be-89ed-85ddf049746a/3e01500c-df6e-4404-898e-12e730b7ec8f)",
            },
            origin: "linear",
            timestamp: 1735808615000,
            references: [
              {
                url: "",
                origin: "git",
                id: "2c31c5ea9b3b2668d509cac0c646798fa02795fa",
                title:
                  "docs(react-ui): improve input documentation [FRONT-2310] (#2308)",
                description: "",
              },
            ],
          },
        ],
      },
      {
        id: "agency.create",
        description: "Agency creation page",
        path: "./src/pages/[businessUnit]/create.tsx",
        updates: [
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2324/utiliser-la-modale-pandark-dans-le-dialog-meta-custom",
              origin: "linear",
              title: "Utiliser la modale pandark dans le dialog Meta custom",
              id: "FRONT-2324",
              description:
                "## Contexte\n\nEn attendant de rework toute la modale, passer juste le composant Modal à pandark pour éviter les problèmes de zindex",
            },
            origin: "linear",
            timestamp: 1736181296000,
            references: [
              {
                url: "",
                origin: "git",
                id: "7c01077e3ea19d3eb510dda60258f55dbc0f3f08",
                title:
                  "chore(asset-manager): use pandark modal for meta custom [FRONT-2324] (#2318)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2326/corriger-la-remontee-des-infos-date-de-debut-date-de-fin-des-kits-lco",
              origin: "linear",
              title:
                'Corriger la remontée des infos : Date de Début / Date de Fin des kits LCO après validation de la commande sur la page "Mes kits souscrits"',
              id: "FRONT-2326",
              description:
                '# **Contexte (parcours d’entrée)**\n\nActuellement, sur le LCO, les infos concernant Date de Début / Date de Fin ne remontent pas sur la page "Mes kits souscrits".\n\n![Capture d’écran 2025-01-06 à 11.50.17.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/6a0a259c-a262-449a-9ce8-d54d9418fad6/3e32c316-a5b8-4d6e-b543-c5a90d0faa6d)\n\n⚠️ Bug présent uniquement sur MASTER ⚠️ \n\n![Capture d’écran 2025-01-06 à 12.27.04.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/73b97b9a-fb65-4de9-b386-19bca6aba355/c89318d0-f9db-4d78-9919-9608739ef8e2)\n\nNous pouvons voir que sur la query "/paginated-with-legacy" nous avons bien des données sur start_date et end_date. \n\n---\n\n# **Comportement voulu**\n\n* Afficher les informations : Date de Début / Date de Fin des kits LCO après validation de la commande sur la page "Mes kits souscrits"\n\n---\n\n# Critères d\'acceptations (entre 5 et 9) \n\n1. L\'utilisateur peut valider la commande de ses kits LCO\n2. Les kits LCO doivent remonter correctement dans la page mes kits souscrits \n3. Pour chaque ligne de la page "Mes kits souscrits" afficher une Date de Début et une Date de Fin\n\n---\n\n# Scénario de repro \n\n1. Se rendre sur Master LCO \n2. Cliquer sur le kit de communication : [https://master.lco.live.mobsuccess.com/kit/9b2157e1-8659-4092-9cf0-5422d37facc3?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae](https://master.lco.live.mobsuccess.com/kit/9b2157e1-8659-4092-9cf0-5422d37facc3?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae)\n3. Aller au bout du parcours et valider la commande\n4. Se rendre sur la page "Mes kits souscrits" \n5. Rechercher dans la ligne du kit qui vient d\'être commandé (filtrer sur "en attente de paiement" \n6. Constater que les infos concernant Date de Début / Date de Fin ne remontent pas dans le tableau\n\n---\n\n# **Informations complémentaires**\n\nLien du thread slack : [https://mobsuccess.slack.com/archives/C04UE0SHW1X/p1736162536078249](https://mobsuccess.slack.com/archives/C04UE0SHW1X/p1736162536078249)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de l\'affichage des informations : Date de Début / Date de Fin des kits après validation de la commande sur la page "Mes kits souscrits" du LCO\n\n🇺🇸 Correction of the display of information: Start Date / End Date of kits after order validation on the "My Subscribed Kits" page of the LCO.',
            },
            origin: "linear",
            timestamp: 1736180663000,
            references: [
              {
                url: "",
                origin: "git",
                id: "d2c2b8d4ff937c0344ea54f7499c88ea70988307",
                title:
                  "fix(table): date formatting when value is a string [FRONT-2326] (#2321)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2320/revoir-lexemple-du-radiogroupitem-pour-retirer-custom",
              origin: "linear",
              title:
                "Revoir l'exemple du RadioGroup.Item pour retirer `custom`",
              id: "FRONT-2320",
              description:
                "## Contexte\n\nLimiter le nombre de props aide a la facilité de maintenance des composants\n\n---\n\n## **Description du Problème**\n\n```\n<RadioGroup.Item custom value={index.toString()} className={itemCss}>\n```\n\nLa props `custom` n'est pas utilisé, il suffit d'utiliser les composant de ark directement\n\nCela mène à des branches de code non testé et a un code plus grand que nécessaire",
            },
            origin: "linear",
            timestamp: 1736155066000,
            references: [
              {
                url: "",
                origin: "git",
                id: "ae24a4a44e2a0f47420eb25663c604347abfc115",
                title:
                  "refactor(lco): refactor custom radio item [FRONT-2320] (#2317)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-1863/rework-dialoginstream",
              origin: "linear",
              title: "Rework DialogInstream",
              id: "FRONT-1863",
              description:
                "## Contexte\n\nLes forms n'en sont pas vraiment et utilisent des atoms mal typés.\n\n---\n\n## **Description du Problème**\n\nPlusieurs ts-nocheck au sein de ces composants en haut des fichiers, empêchant le typechecking de fonctionner.\n\n---\n\n## Informations complémentaires\n\n* Utiliser notre utilitaire pour les forms\n* Utiliser les validations mises en commun\n\n---\n\n## Critère d'acceptation\n\n* Plus aucun ts-nocheck dans le composant\n* Utilisation de tanstack-form pour ces modales\n* Pas de regression au niveau du comportement\n* Tests unitaires des fonctions logiques/métier\n* Test visuels au sommet de la modale\n* Optionnel: tests E2E (à voir avec @vincent.barrault)",
            },
            origin: "linear",
            timestamp: 1736154029000,
            references: [
              {
                url: "",
                origin: "git",
                id: "aaf4e6124e7bde91f3a66ac3e1190e1562457b29",
                title:
                  "refactor(lcm): migrate instream dialog [FRONT-1863] (#2242)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2291/colorpicker",
              origin: "linear",
              title: "ColorPicker",
              id: "FRONT-2291",
              description: "",
            },
            origin: "linear",
            timestamp: 1735910632000,
            references: [
              {
                url: "",
                origin: "git",
                id: "e85601c8942925ca60eaf609e6b532d590101bad",
                title:
                  "refactor(react-ui): color palette export [FRONT-2291] (#2289)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2322/mettre-le-titre-de-la-modal-en-composition",
              origin: "linear",
              title: "Mettre le titre de la modal en composition",
              id: "FRONT-2322",
              description:
                "#### Changelog\n\nAjout du titre de la modal en composition dans le code pour correspondre aux autres composants similaires",
            },
            origin: "linear",
            timestamp: 1735901410000,
            references: [
              {
                url: "",
                origin: "git",
                id: "2a5ee9ff4259d339f6d49fc2320868b6d2122d54",
                title:
                  "fix(react-ui): move modal title to composition and refine implementation [FRONT-2322] (#2311)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2311/corriger-le-changement-de-mois-dans-react-ui",
              origin: "linear",
              title: "Corriger le changement de mois dans react-ui",
              id: "FRONT-2311",
              description: "",
            },
            origin: "linear",
            timestamp: 1735899625000,
            references: [
              {
                url: "",
                origin: "git",
                id: "10f9ac61a4b482142661929a7b30ac1604265d0d",
                title:
                  "fix: change month in date and time picker [FRONT-2311] (#2309)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2310/doc-improve-the-input-panda-documentation",
              origin: "linear",
              title: "Doc: Improve the Input (panda) documentation",
              id: "FRONT-2310",
              description:
                "## Contexte\n\nAvoir une documentation a jour\n\n---\n\n## **Description du Problème**\n\nChamps en trop dans la documentation\n\nSur-couche inutile de style dans les examples\n\n![Screenshot 2025-01-02 at 09.29.43.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/c43b132e-93da-41be-89ed-85ddf049746a/3e01500c-df6e-4404-898e-12e730b7ec8f)",
            },
            origin: "linear",
            timestamp: 1735808615000,
            references: [
              {
                url: "",
                origin: "git",
                id: "2c31c5ea9b3b2668d509cac0c646798fa02795fa",
                title:
                  "docs(react-ui): improve input documentation [FRONT-2310] (#2308)",
                description: "",
              },
            ],
          },
        ],
      },
      {
        id: "agency.edit",
        description: "Agency edit page",
        path: "./src/pages/[businessUnit]/edit.[agency].tsx",
        updates: [
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2324/utiliser-la-modale-pandark-dans-le-dialog-meta-custom",
              origin: "linear",
              title: "Utiliser la modale pandark dans le dialog Meta custom",
              id: "FRONT-2324",
              description:
                "## Contexte\n\nEn attendant de rework toute la modale, passer juste le composant Modal à pandark pour éviter les problèmes de zindex",
            },
            origin: "linear",
            timestamp: 1736181296000,
            references: [
              {
                url: "",
                origin: "git",
                id: "7c01077e3ea19d3eb510dda60258f55dbc0f3f08",
                title:
                  "chore(asset-manager): use pandark modal for meta custom [FRONT-2324] (#2318)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2326/corriger-la-remontee-des-infos-date-de-debut-date-de-fin-des-kits-lco",
              origin: "linear",
              title:
                'Corriger la remontée des infos : Date de Début / Date de Fin des kits LCO après validation de la commande sur la page "Mes kits souscrits"',
              id: "FRONT-2326",
              description:
                '# **Contexte (parcours d’entrée)**\n\nActuellement, sur le LCO, les infos concernant Date de Début / Date de Fin ne remontent pas sur la page "Mes kits souscrits".\n\n![Capture d’écran 2025-01-06 à 11.50.17.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/6a0a259c-a262-449a-9ce8-d54d9418fad6/3e32c316-a5b8-4d6e-b543-c5a90d0faa6d)\n\n⚠️ Bug présent uniquement sur MASTER ⚠️ \n\n![Capture d’écran 2025-01-06 à 12.27.04.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/73b97b9a-fb65-4de9-b386-19bca6aba355/c89318d0-f9db-4d78-9919-9608739ef8e2)\n\nNous pouvons voir que sur la query "/paginated-with-legacy" nous avons bien des données sur start_date et end_date. \n\n---\n\n# **Comportement voulu**\n\n* Afficher les informations : Date de Début / Date de Fin des kits LCO après validation de la commande sur la page "Mes kits souscrits"\n\n---\n\n# Critères d\'acceptations (entre 5 et 9) \n\n1. L\'utilisateur peut valider la commande de ses kits LCO\n2. Les kits LCO doivent remonter correctement dans la page mes kits souscrits \n3. Pour chaque ligne de la page "Mes kits souscrits" afficher une Date de Début et une Date de Fin\n\n---\n\n# Scénario de repro \n\n1. Se rendre sur Master LCO \n2. Cliquer sur le kit de communication : [https://master.lco.live.mobsuccess.com/kit/9b2157e1-8659-4092-9cf0-5422d37facc3?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae](https://master.lco.live.mobsuccess.com/kit/9b2157e1-8659-4092-9cf0-5422d37facc3?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae)\n3. Aller au bout du parcours et valider la commande\n4. Se rendre sur la page "Mes kits souscrits" \n5. Rechercher dans la ligne du kit qui vient d\'être commandé (filtrer sur "en attente de paiement" \n6. Constater que les infos concernant Date de Début / Date de Fin ne remontent pas dans le tableau\n\n---\n\n# **Informations complémentaires**\n\nLien du thread slack : [https://mobsuccess.slack.com/archives/C04UE0SHW1X/p1736162536078249](https://mobsuccess.slack.com/archives/C04UE0SHW1X/p1736162536078249)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de l\'affichage des informations : Date de Début / Date de Fin des kits après validation de la commande sur la page "Mes kits souscrits" du LCO\n\n🇺🇸 Correction of the display of information: Start Date / End Date of kits after order validation on the "My Subscribed Kits" page of the LCO.',
            },
            origin: "linear",
            timestamp: 1736180663000,
            references: [
              {
                url: "",
                origin: "git",
                id: "d2c2b8d4ff937c0344ea54f7499c88ea70988307",
                title:
                  "fix(table): date formatting when value is a string [FRONT-2326] (#2321)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2320/revoir-lexemple-du-radiogroupitem-pour-retirer-custom",
              origin: "linear",
              title:
                "Revoir l'exemple du RadioGroup.Item pour retirer `custom`",
              id: "FRONT-2320",
              description:
                "## Contexte\n\nLimiter le nombre de props aide a la facilité de maintenance des composants\n\n---\n\n## **Description du Problème**\n\n```\n<RadioGroup.Item custom value={index.toString()} className={itemCss}>\n```\n\nLa props `custom` n'est pas utilisé, il suffit d'utiliser les composant de ark directement\n\nCela mène à des branches de code non testé et a un code plus grand que nécessaire",
            },
            origin: "linear",
            timestamp: 1736155066000,
            references: [
              {
                url: "",
                origin: "git",
                id: "ae24a4a44e2a0f47420eb25663c604347abfc115",
                title:
                  "refactor(lco): refactor custom radio item [FRONT-2320] (#2317)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-1863/rework-dialoginstream",
              origin: "linear",
              title: "Rework DialogInstream",
              id: "FRONT-1863",
              description:
                "## Contexte\n\nLes forms n'en sont pas vraiment et utilisent des atoms mal typés.\n\n---\n\n## **Description du Problème**\n\nPlusieurs ts-nocheck au sein de ces composants en haut des fichiers, empêchant le typechecking de fonctionner.\n\n---\n\n## Informations complémentaires\n\n* Utiliser notre utilitaire pour les forms\n* Utiliser les validations mises en commun\n\n---\n\n## Critère d'acceptation\n\n* Plus aucun ts-nocheck dans le composant\n* Utilisation de tanstack-form pour ces modales\n* Pas de regression au niveau du comportement\n* Tests unitaires des fonctions logiques/métier\n* Test visuels au sommet de la modale\n* Optionnel: tests E2E (à voir avec @vincent.barrault)",
            },
            origin: "linear",
            timestamp: 1736154029000,
            references: [
              {
                url: "",
                origin: "git",
                id: "aaf4e6124e7bde91f3a66ac3e1190e1562457b29",
                title:
                  "refactor(lcm): migrate instream dialog [FRONT-1863] (#2242)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2291/colorpicker",
              origin: "linear",
              title: "ColorPicker",
              id: "FRONT-2291",
              description: "",
            },
            origin: "linear",
            timestamp: 1735910632000,
            references: [
              {
                url: "",
                origin: "git",
                id: "e85601c8942925ca60eaf609e6b532d590101bad",
                title:
                  "refactor(react-ui): color palette export [FRONT-2291] (#2289)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2322/mettre-le-titre-de-la-modal-en-composition",
              origin: "linear",
              title: "Mettre le titre de la modal en composition",
              id: "FRONT-2322",
              description:
                "#### Changelog\n\nAjout du titre de la modal en composition dans le code pour correspondre aux autres composants similaires",
            },
            origin: "linear",
            timestamp: 1735901410000,
            references: [
              {
                url: "",
                origin: "git",
                id: "2a5ee9ff4259d339f6d49fc2320868b6d2122d54",
                title:
                  "fix(react-ui): move modal title to composition and refine implementation [FRONT-2322] (#2311)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2311/corriger-le-changement-de-mois-dans-react-ui",
              origin: "linear",
              title: "Corriger le changement de mois dans react-ui",
              id: "FRONT-2311",
              description: "",
            },
            origin: "linear",
            timestamp: 1735899625000,
            references: [
              {
                url: "",
                origin: "git",
                id: "10f9ac61a4b482142661929a7b30ac1604265d0d",
                title:
                  "fix: change month in date and time picker [FRONT-2311] (#2309)",
                description: "",
              },
            ],
          },
          {
            main: {
              url: "https://linear.app/mobsuccessgroup/issue/FRONT-2310/doc-improve-the-input-panda-documentation",
              origin: "linear",
              title: "Doc: Improve the Input (panda) documentation",
              id: "FRONT-2310",
              description:
                "## Contexte\n\nAvoir une documentation a jour\n\n---\n\n## **Description du Problème**\n\nChamps en trop dans la documentation\n\nSur-couche inutile de style dans les examples\n\n![Screenshot 2025-01-02 at 09.29.43.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/c43b132e-93da-41be-89ed-85ddf049746a/3e01500c-df6e-4404-898e-12e730b7ec8f)",
            },
            origin: "linear",
            timestamp: 1735808615000,
            references: [
              {
                url: "",
                origin: "git",
                id: "2c31c5ea9b3b2668d509cac0c646798fa02795fa",
                title:
                  "docs(react-ui): improve input documentation [FRONT-2310] (#2308)",
                description: "",
              },
            ],
          },
        ],
      },
    ],
    raw: [
      {
        id: "root",
        path: "./src/index.ts",
        description: "Main entry point for the application",
        diff: [
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/DatePickerSingleDay.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/AbstractInput/Decorators.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/Modal.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalAction.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalContent.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalTrigger.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/styles.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/RadioGroup/RadioGroup.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/helpers.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/index.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/formatters.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/stylesContext.tsx",
        ],
        commits: [
          {
            hash: "d2c2b8d4ff937c0344ea54f7499c88ea70988307",
            date: "2025-01-06T16:24:23+00:00",
            author: "Colin Lienard",
            message:
              "fix(table): date formatting when value is a string [FRONT-2326] (#2321)",
          },
          {
            hash: "ae24a4a44e2a0f47420eb25663c604347abfc115",
            date: "2025-01-06T09:17:46+00:00",
            author: "Vincent Barrault",
            message:
              "refactor(lco): refactor custom radio item [FRONT-2320] (#2317)",
          },
          {
            hash: "e85601c8942925ca60eaf609e6b532d590101bad",
            date: "2025-01-03T13:23:52+00:00",
            author: "Vincent Barrault",
            message:
              "refactor(react-ui): color palette export [FRONT-2291] (#2289)",
          },
          {
            hash: "2a5ee9ff4259d339f6d49fc2320868b6d2122d54",
            date: "2025-01-03T10:50:10+00:00",
            author: "Mathis Pinsault",
            message:
              "fix(react-ui): move modal title to composition and refine implementation [FRONT-2322] (#2311)",
          },
          {
            hash: "10f9ac61a4b482142661929a7b30ac1604265d0d",
            date: "2025-01-03T10:20:25+00:00",
            author: "Clemlvt",
            message:
              "fix: change month in date and time picker [FRONT-2311] (#2309)",
          },
          {
            hash: "2c31c5ea9b3b2668d509cac0c646798fa02795fa",
            date: "2025-01-02T09:03:35+00:00",
            author: "Vincent Barrault",
            message:
              "docs(react-ui): improve input documentation [FRONT-2310] (#2308)",
          },
        ],
      },
      {
        id: "_app",
        path: "./src/pages/_app.tsx",
        description: "Wrapper for the application",
        diff: [
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/DatePickerSingleDay.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/AbstractInput/Decorators.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/Modal.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalAction.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalContent.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalTrigger.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/styles.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/RadioGroup/RadioGroup.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/helpers.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/index.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/formatters.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/stylesContext.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogAssetParameters/DialogAssetParameters.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogImageVideoOnly/ImageVideoOnly/ImageVideoInformations/ImageVideoAssets/Asset/Asset.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogMetaCustom/DialogMetaCustom.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogMetaCustom/MetaCustom/MetaCustom.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogNative/NativeCreation/NativeInformations/NativeAssets/Asset/Asset.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/ModalWrapper/ModalWrapper.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/atoms/global-atoms.ts",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/constants/instreamModal.ts",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/utils/utils.ts",
        ],
        commits: [
          {
            hash: "7c01077e3ea19d3eb510dda60258f55dbc0f3f08",
            date: "2025-01-06T16:34:56+00:00",
            author: "Colin Lienard",
            message:
              "chore(asset-manager): use pandark modal for meta custom [FRONT-2324] (#2318)",
          },
          {
            hash: "d2c2b8d4ff937c0344ea54f7499c88ea70988307",
            date: "2025-01-06T16:24:23+00:00",
            author: "Colin Lienard",
            message:
              "fix(table): date formatting when value is a string [FRONT-2326] (#2321)",
          },
          {
            hash: "ae24a4a44e2a0f47420eb25663c604347abfc115",
            date: "2025-01-06T09:17:46+00:00",
            author: "Vincent Barrault",
            message:
              "refactor(lco): refactor custom radio item [FRONT-2320] (#2317)",
          },
          {
            hash: "aaf4e6124e7bde91f3a66ac3e1190e1562457b29",
            date: "2025-01-06T09:00:29+00:00",
            author: "Colin Lienard",
            message:
              "refactor(lcm): migrate instream dialog [FRONT-1863] (#2242)",
          },
          {
            hash: "e85601c8942925ca60eaf609e6b532d590101bad",
            date: "2025-01-03T13:23:52+00:00",
            author: "Vincent Barrault",
            message:
              "refactor(react-ui): color palette export [FRONT-2291] (#2289)",
          },
          {
            hash: "2a5ee9ff4259d339f6d49fc2320868b6d2122d54",
            date: "2025-01-03T10:50:10+00:00",
            author: "Mathis Pinsault",
            message:
              "fix(react-ui): move modal title to composition and refine implementation [FRONT-2322] (#2311)",
          },
          {
            hash: "10f9ac61a4b482142661929a7b30ac1604265d0d",
            date: "2025-01-03T10:20:25+00:00",
            author: "Clemlvt",
            message:
              "fix: change month in date and time picker [FRONT-2311] (#2309)",
          },
          {
            hash: "2c31c5ea9b3b2668d509cac0c646798fa02795fa",
            date: "2025-01-02T09:03:35+00:00",
            author: "Vincent Barrault",
            message:
              "docs(react-ui): improve input documentation [FRONT-2310] (#2308)",
          },
        ],
      },
      {
        id: "business-unit",
        path: "./src/pages/index.ts",
        description: "Business Unit selection page",
        diff: [
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/DatePickerSingleDay.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/AbstractInput/Decorators.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/Modal.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalAction.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalContent.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalTrigger.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/styles.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/RadioGroup/RadioGroup.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/helpers.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/index.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/formatters.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/stylesContext.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogAssetParameters/DialogAssetParameters.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogImageVideoOnly/ImageVideoOnly/ImageVideoInformations/ImageVideoAssets/Asset/Asset.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogMetaCustom/DialogMetaCustom.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogMetaCustom/MetaCustom/MetaCustom.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogNative/NativeCreation/NativeInformations/NativeAssets/Asset/Asset.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/ModalWrapper/ModalWrapper.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/atoms/global-atoms.ts",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/constants/instreamModal.ts",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/utils/utils.ts",
        ],
        commits: [
          {
            hash: "7c01077e3ea19d3eb510dda60258f55dbc0f3f08",
            date: "2025-01-06T16:34:56+00:00",
            author: "Colin Lienard",
            message:
              "chore(asset-manager): use pandark modal for meta custom [FRONT-2324] (#2318)",
          },
          {
            hash: "d2c2b8d4ff937c0344ea54f7499c88ea70988307",
            date: "2025-01-06T16:24:23+00:00",
            author: "Colin Lienard",
            message:
              "fix(table): date formatting when value is a string [FRONT-2326] (#2321)",
          },
          {
            hash: "ae24a4a44e2a0f47420eb25663c604347abfc115",
            date: "2025-01-06T09:17:46+00:00",
            author: "Vincent Barrault",
            message:
              "refactor(lco): refactor custom radio item [FRONT-2320] (#2317)",
          },
          {
            hash: "aaf4e6124e7bde91f3a66ac3e1190e1562457b29",
            date: "2025-01-06T09:00:29+00:00",
            author: "Colin Lienard",
            message:
              "refactor(lcm): migrate instream dialog [FRONT-1863] (#2242)",
          },
          {
            hash: "e85601c8942925ca60eaf609e6b532d590101bad",
            date: "2025-01-03T13:23:52+00:00",
            author: "Vincent Barrault",
            message:
              "refactor(react-ui): color palette export [FRONT-2291] (#2289)",
          },
          {
            hash: "2a5ee9ff4259d339f6d49fc2320868b6d2122d54",
            date: "2025-01-03T10:50:10+00:00",
            author: "Mathis Pinsault",
            message:
              "fix(react-ui): move modal title to composition and refine implementation [FRONT-2322] (#2311)",
          },
          {
            hash: "10f9ac61a4b482142661929a7b30ac1604265d0d",
            date: "2025-01-03T10:20:25+00:00",
            author: "Clemlvt",
            message:
              "fix: change month in date and time picker [FRONT-2311] (#2309)",
          },
          {
            hash: "2c31c5ea9b3b2668d509cac0c646798fa02795fa",
            date: "2025-01-02T09:03:35+00:00",
            author: "Vincent Barrault",
            message:
              "docs(react-ui): improve input documentation [FRONT-2310] (#2308)",
          },
        ],
      },
      {
        id: "agency",
        path: "./src/pages/[businessUnit]/index.tsx",
        description: "Agency selection page",
        diff: [
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/DatePickerSingleDay.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/AbstractInput/Decorators.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/Modal.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalAction.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalContent.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalTrigger.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/styles.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/RadioGroup/RadioGroup.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/helpers.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/index.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/formatters.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/stylesContext.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogAssetParameters/DialogAssetParameters.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogImageVideoOnly/ImageVideoOnly/ImageVideoInformations/ImageVideoAssets/Asset/Asset.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogMetaCustom/DialogMetaCustom.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogMetaCustom/MetaCustom/MetaCustom.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogNative/NativeCreation/NativeInformations/NativeAssets/Asset/Asset.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/ModalWrapper/ModalWrapper.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/atoms/global-atoms.ts",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/constants/instreamModal.ts",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/utils/utils.ts",
        ],
        commits: [
          {
            hash: "7c01077e3ea19d3eb510dda60258f55dbc0f3f08",
            date: "2025-01-06T16:34:56+00:00",
            author: "Colin Lienard",
            message:
              "chore(asset-manager): use pandark modal for meta custom [FRONT-2324] (#2318)",
          },
          {
            hash: "d2c2b8d4ff937c0344ea54f7499c88ea70988307",
            date: "2025-01-06T16:24:23+00:00",
            author: "Colin Lienard",
            message:
              "fix(table): date formatting when value is a string [FRONT-2326] (#2321)",
          },
          {
            hash: "ae24a4a44e2a0f47420eb25663c604347abfc115",
            date: "2025-01-06T09:17:46+00:00",
            author: "Vincent Barrault",
            message:
              "refactor(lco): refactor custom radio item [FRONT-2320] (#2317)",
          },
          {
            hash: "aaf4e6124e7bde91f3a66ac3e1190e1562457b29",
            date: "2025-01-06T09:00:29+00:00",
            author: "Colin Lienard",
            message:
              "refactor(lcm): migrate instream dialog [FRONT-1863] (#2242)",
          },
          {
            hash: "e85601c8942925ca60eaf609e6b532d590101bad",
            date: "2025-01-03T13:23:52+00:00",
            author: "Vincent Barrault",
            message:
              "refactor(react-ui): color palette export [FRONT-2291] (#2289)",
          },
          {
            hash: "2a5ee9ff4259d339f6d49fc2320868b6d2122d54",
            date: "2025-01-03T10:50:10+00:00",
            author: "Mathis Pinsault",
            message:
              "fix(react-ui): move modal title to composition and refine implementation [FRONT-2322] (#2311)",
          },
          {
            hash: "10f9ac61a4b482142661929a7b30ac1604265d0d",
            date: "2025-01-03T10:20:25+00:00",
            author: "Clemlvt",
            message:
              "fix: change month in date and time picker [FRONT-2311] (#2309)",
          },
          {
            hash: "2c31c5ea9b3b2668d509cac0c646798fa02795fa",
            date: "2025-01-02T09:03:35+00:00",
            author: "Vincent Barrault",
            message:
              "docs(react-ui): improve input documentation [FRONT-2310] (#2308)",
          },
        ],
      },
      {
        id: "agency.create",
        path: "./src/pages/[businessUnit]/create.tsx",
        description: "Agency creation page",
        diff: [
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/DatePickerSingleDay.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/AbstractInput/Decorators.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/Modal.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalAction.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalContent.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalTrigger.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/styles.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/RadioGroup/RadioGroup.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/helpers.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/index.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/formatters.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/stylesContext.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogAssetParameters/DialogAssetParameters.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogImageVideoOnly/ImageVideoOnly/ImageVideoInformations/ImageVideoAssets/Asset/Asset.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogMetaCustom/DialogMetaCustom.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogMetaCustom/MetaCustom/MetaCustom.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogNative/NativeCreation/NativeInformations/NativeAssets/Asset/Asset.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/ModalWrapper/ModalWrapper.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/atoms/global-atoms.ts",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/constants/instreamModal.ts",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/utils/utils.ts",
        ],
        commits: [
          {
            hash: "7c01077e3ea19d3eb510dda60258f55dbc0f3f08",
            date: "2025-01-06T16:34:56+00:00",
            author: "Colin Lienard",
            message:
              "chore(asset-manager): use pandark modal for meta custom [FRONT-2324] (#2318)",
          },
          {
            hash: "d2c2b8d4ff937c0344ea54f7499c88ea70988307",
            date: "2025-01-06T16:24:23+00:00",
            author: "Colin Lienard",
            message:
              "fix(table): date formatting when value is a string [FRONT-2326] (#2321)",
          },
          {
            hash: "ae24a4a44e2a0f47420eb25663c604347abfc115",
            date: "2025-01-06T09:17:46+00:00",
            author: "Vincent Barrault",
            message:
              "refactor(lco): refactor custom radio item [FRONT-2320] (#2317)",
          },
          {
            hash: "aaf4e6124e7bde91f3a66ac3e1190e1562457b29",
            date: "2025-01-06T09:00:29+00:00",
            author: "Colin Lienard",
            message:
              "refactor(lcm): migrate instream dialog [FRONT-1863] (#2242)",
          },
          {
            hash: "e85601c8942925ca60eaf609e6b532d590101bad",
            date: "2025-01-03T13:23:52+00:00",
            author: "Vincent Barrault",
            message:
              "refactor(react-ui): color palette export [FRONT-2291] (#2289)",
          },
          {
            hash: "2a5ee9ff4259d339f6d49fc2320868b6d2122d54",
            date: "2025-01-03T10:50:10+00:00",
            author: "Mathis Pinsault",
            message:
              "fix(react-ui): move modal title to composition and refine implementation [FRONT-2322] (#2311)",
          },
          {
            hash: "10f9ac61a4b482142661929a7b30ac1604265d0d",
            date: "2025-01-03T10:20:25+00:00",
            author: "Clemlvt",
            message:
              "fix: change month in date and time picker [FRONT-2311] (#2309)",
          },
          {
            hash: "2c31c5ea9b3b2668d509cac0c646798fa02795fa",
            date: "2025-01-02T09:03:35+00:00",
            author: "Vincent Barrault",
            message:
              "docs(react-ui): improve input documentation [FRONT-2310] (#2308)",
          },
        ],
      },
      {
        id: "agency.edit",
        path: "./src/pages/[businessUnit]/edit.[agency].tsx",
        description: "Agency edit page",
        diff: [
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/DatePickerSingleDay.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/AbstractInput/Decorators.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/Modal.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalAction.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalContent.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalTrigger.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/styles.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/RadioGroup/RadioGroup.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/helpers.tsx",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/index.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/formatters.ts",
          "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/stylesContext.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogAssetParameters/DialogAssetParameters.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogImageVideoOnly/ImageVideoOnly/ImageVideoInformations/ImageVideoAssets/Asset/Asset.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogMetaCustom/DialogMetaCustom.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogMetaCustom/MetaCustom/MetaCustom.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogNative/NativeCreation/NativeInformations/NativeAssets/Asset/Asset.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/ModalWrapper/ModalWrapper.tsx",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/atoms/global-atoms.ts",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/constants/instreamModal.ts",
          "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/utils/utils.ts",
        ],
        commits: [
          {
            hash: "7c01077e3ea19d3eb510dda60258f55dbc0f3f08",
            date: "2025-01-06T16:34:56+00:00",
            author: "Colin Lienard",
            message:
              "chore(asset-manager): use pandark modal for meta custom [FRONT-2324] (#2318)",
          },
          {
            hash: "d2c2b8d4ff937c0344ea54f7499c88ea70988307",
            date: "2025-01-06T16:24:23+00:00",
            author: "Colin Lienard",
            message:
              "fix(table): date formatting when value is a string [FRONT-2326] (#2321)",
          },
          {
            hash: "ae24a4a44e2a0f47420eb25663c604347abfc115",
            date: "2025-01-06T09:17:46+00:00",
            author: "Vincent Barrault",
            message:
              "refactor(lco): refactor custom radio item [FRONT-2320] (#2317)",
          },
          {
            hash: "aaf4e6124e7bde91f3a66ac3e1190e1562457b29",
            date: "2025-01-06T09:00:29+00:00",
            author: "Colin Lienard",
            message:
              "refactor(lcm): migrate instream dialog [FRONT-1863] (#2242)",
          },
          {
            hash: "e85601c8942925ca60eaf609e6b532d590101bad",
            date: "2025-01-03T13:23:52+00:00",
            author: "Vincent Barrault",
            message:
              "refactor(react-ui): color palette export [FRONT-2291] (#2289)",
          },
          {
            hash: "2a5ee9ff4259d339f6d49fc2320868b6d2122d54",
            date: "2025-01-03T10:50:10+00:00",
            author: "Mathis Pinsault",
            message:
              "fix(react-ui): move modal title to composition and refine implementation [FRONT-2322] (#2311)",
          },
          {
            hash: "10f9ac61a4b482142661929a7b30ac1604265d0d",
            date: "2025-01-03T10:20:25+00:00",
            author: "Clemlvt",
            message:
              "fix: change month in date and time picker [FRONT-2311] (#2309)",
          },
          {
            hash: "2c31c5ea9b3b2668d509cac0c646798fa02795fa",
            date: "2025-01-02T09:03:35+00:00",
            author: "Vincent Barrault",
            message:
              "docs(react-ui): improve input documentation [FRONT-2310] (#2308)",
          },
        ],
      },
    ],
  },
});
const parsed = impactResultSchema.safeParse(
  typeof result === "string" ? JSON.parse(result) : result,
);

export function App() {
  if (!parsed.success) {
    return (
      <VStack
        backgroundColor="interface.100"
        padding="md"
        size="full"
        overflow="hidden"
      >
        <pre>{parsed.error.message}</pre>
      </VStack>
    );
  }

  return (
    <VStack
      backgroundColor="interface.100"
      padding="md"
      size="full"
      overflow="hidden"
    >
      <Tabs.Root
        lazyMount
        orientation="vertical"
        className={css({ size: "full" })}
        defaultValue={parsed.data.entrypoints[0].id}
      >
        {parsed.data.entrypoints.map((summary) => (
          <Fragment key={summary.id}>
            <Tabs.Trigger key={summary.id} value={summary.id}>
              {summary.description} ({Object.values(summary.updates).length})
            </Tabs.Trigger>
            <Tabs.Content key={summary.id} value={summary.id}>
              <Accordion.Root collapsible>
                <VStack
                  gap="xs"
                  alignItems="start"
                  color="interface.600"
                  size="full"
                >
                  {summary.updates
                    .sort((a, b) => b.timestamp - a.timestamp)
                    .map((update) => (
                      <Card key={update.main.id} {...update} />
                    ))}
                </VStack>
              </Accordion.Root>
            </Tabs.Content>
          </Fragment>
        ))}
      </Tabs.Root>
    </VStack>
  );
}
