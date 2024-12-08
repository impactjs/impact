import type { ImpactResult } from "@impacts/types/results";

export const example: ImpactResult = {
  entrypoints: [
    {
      id: "business-unit",
      description: "Business Unit",
      path: "./src/pages/index.ts",
      updates: [
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2085/utiliser-les-imports-type-sur-les-webapps",
            title: "Utiliser les imports type sur les webapps",
            origin: "linear",
            description:
              "`biome lint --only=style/useImportType --write  ./webapps/lcm/src`",
            id: "FRONT-2085",
          },
          origin: "linear",
          timestamp: 1732638143000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2106",
              title:
                "refactor(packages,configs): use import types [FRONT-2085]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nUse import types in preparation for adding `verbatimModuleSyntax` in the tsconfig\r\nUsed `biome lint --only=style/useImportType --write  ./webapps/[webapp]/src`",
              id: 2106,
            },
            {
              url: "",
              origin: "git",
              id: "5e8884f1983f868f4644037fb05e57182d7c583c",
              title:
                "refactor(packages,configs): use import types [FRONT-2085] (#2106)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2086/utiliser-les-imports-type-sur-les-packages-et-configs",
            title: "Utiliser les imports type sur les packages et configs",
            origin: "linear",
            description:
              "`biome lint --only=style/useImportType --write  ./webapps/lcm/src`",
            id: "FRONT-2086",
          },
          origin: "linear",
          timestamp: 1732637287000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2105",
              title: "refactor(webapps): use import types [FRONT-2086]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nUse import types in preparation for adding `verbatimModuleSyntax` in the tsconfig\r\nUsed `biome lint --only=style/useImportType --write  ./webapps/[webapp]/src`",
              id: 2105,
            },
            {
              url: "",
              origin: "git",
              id: "69fb2483d8c4118d02c8e536de7b4505d0a4bf17",
              title: "refactor(webapps): use import types [FRONT-2086] (#2105)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2059/retirer-le-code-mort-de-react-ui",
            title: "Retirer le code mort de react-ui",
            origin: "linear",
            description:
              "#### Changelog\n\nSuppression des codes morts de react-ui",
            id: "FRONT-2059",
          },
          origin: "linear",
          timestamp: 1732554823000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2092",
              title:
                "chore(knip): cleanup unused exports react-ui [FRONT-2059]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nuse knip to remove unused `export` statements\ndetect unused code with eslint (exported code was ignore by eslint -- removing export statements allows eslint to detect unused code)\n",
              id: 2092,
            },
            {
              url: "",
              origin: "git",
              id: "8f39ac3b271ef2295d1bac4be40915b2ebb85c6b",
              title:
                "chore(knip): cleanup unused exports react-ui [FRONT-2059] (#2092)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2057/nettoyer-les-fonctions-exportations-types-inutilises-du-lcm-knip-tache",
            title:
              "Nettoyer les fonctions / exportations / types inutilisés du LCM (knip) - tâche interne",
            origin: "linear",
            description:
              "#### Changelog\n\nNettoyage des fonctions inutilisées du LCM (knip) effectué pour améliorer la performance du produit",
            id: "FRONT-2057",
          },
          origin: "linear",
          timestamp: 1732548370000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2090",
              title:
                "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nuse knip to remove unused `export` statements\ndetect unused code with eslint (exported code was ignore by eslint -- removing export statements allows eslint to detect unused code)\n",
              id: 2090,
            },
            {
              url: "",
              origin: "git",
              id: "84ca8bfba9e81dd4209edaa03e6f5d0952a5a489",
              title:
                "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057] (#2090)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2034/retirer-les-layout-de-rui-qui-forward-panda",
            title: "Retirer les Layout de RUI qui forward Panda",
            origin: "linear",
            description:
              '## Contexte\n\nPanda est notre framework pour le design system\n\n---\n\n## **Description du Problème**\n\nPour ne pas nous coupler fortement avec PandaCSS, nous avions faire une facade pour "forwarder" les composants de Layout et garder leur "responsabilité" chez nous\n\nDans la pratique, nous utilisons directement les composant de PandaCSS sans passer par les notres.\n\n---\n\n## Critère d\'acceptation\n\n* retirer ces composants Layout',
            id: "FRONT-2034",
          },
          origin: "linear",
          timestamp: 1732279334000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2071",
              title:
                "refactor: remove forwarded layout components [FRONT-2034]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- Remove forwarded layout components\r\n- Update imports",
              id: 2071,
            },
            {
              url: "",
              origin: "git",
              id: "f8319ac227f737a8912c80a36b00d1e89b1c0d4c",
              title:
                "refactor: remove forwarded layout components [FRONT-2034] (#2071)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1820/integrer-le-theme-leroy-merlin-sur-le-lco",
            title: "Intégrer le thème Leroy Merlin sur le LCO",
            origin: "linear",
            description:
              "# User Story\n\nEn tant qu'équipe conseil et partenariat\n\nJe souhaites faire une démo du LCO au couleur de Leroy merlin\n\nPour gagner un appel d'offre\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. Le thème est disponible pour le client Leroy merlin uniquement (client_id : 9a7f9b94-7211-4daa-98a7-6cf21cf54266)\n2. Le thème Leroy Merlin doit s'appliquer à l'ensemble du LCO: couleurs, typographies, icônes etc..\n3. Les couleurs doivent correspondre à la charte graphique de Leroy merlin\n4. Les éléments d'interface (boutons, barres de navigation, sections) doivent être adaptés au design Leroy Merlin\n5. L'intégration du thème correspond au maquettes figma\n\n---\n\n# **Comportement voulu**\n\nLe LCO doit afficher automatiquement le thème Leroy Merlin pour les utilisateurs identifiés comme clients Leroy merlin.\n\n---\n\n# **Informations complémentaires**\n\nPalette colors Leroy Merlin : \n\n[Primary Leroy Merlin - Local Campaign Order (Figma)](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12095-87475&t=dVj2A3FLf4XECYUY-4)\n\nFigma : [https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12046-70492&t=SIn5jwwUQUUdTsmX-4](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12046-70492&t=SIn5jwwUQUUdTsmX-4)\n\n---\n\n## Product Designer 🧑‍🎨 \n\n@rosanora @anne-sophie.doumenge \n\n---\n\n# Changelog\n\n🇫🇷  Intégration du theme Leroy Merlin sur le LCO\n\n🇺🇸 Integration of Leroy merlin theme on the LCO",
            id: "FRONT-1820",
          },
          origin: "linear",
          timestamp: 1731665548000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1993",
              title: "feat: add leroy merlin theme [FRONT-1820]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n<img width="1659" alt="image" src="https://github.com/user-attachments/assets/fd627eb2-dc12-4b40-a54c-ed17c198a474">',
              id: 1993,
            },
            {
              url: "",
              origin: "git",
              id: "1d393c4352f7952fa90d041aafa3812693bd227f",
              title: "feat: add leroy merlin theme [FRONT-1820] (#1993)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1892/corriger-les-imports-relatifs-des-packages",
            title: "Corriger les imports relatifs des packages",
            origin: "linear",
            description:
              "Dans nos webapps certaines fonctions ou composants sont importés via un chemin relatif vers le package.\ni\n\n```\nimport { replaceTextInBlob } from \"../../../../../../packages/react-shared/src/public/utils/replace-text-blob\";\n```\n\n​​Il faudrait corriger les chemins d'import, et mettre en place une règle eslint qui permet d'éviter ces erreurs",
            id: "FRONT-1892",
          },
          origin: "linear",
          timestamp: 1730997549000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1965",
              title: "refactor: fix import paths from packages [FRONT-1892]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nfix relative import paths to packages\r\nadd eslint rule",
              id: 1965,
            },
            {
              url: "",
              origin: "git",
              id: "ed07f19ebe8191fcd0b7f81871c7edb544b797a5",
              title:
                "refactor: fix import paths from packages [FRONT-1892] (#1965)",
              description: "",
            },
          ],
        },
      ],
    },
    {
      id: "container",
      description: "App wrapper that provides global contexts",
      path: "./src/pages/_app.tsx",
      updates: [
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2046/migrer-les-pages-inaccessibles-du-dashboard-farly-a-pandark",
            title:
              "Migrer les pages inaccessibles du dashboard-farly à Pandark",
            origin: "linear",
            description:
              "## Contexte\n\nCertaines pages du dashboard farly sont inaccessibles, mais il faudrait tout de même les migrer car elles seront sans doute un jour utilisées.\n\nPages :\n\n* /final-numbers\n* /invoices\n* /all-reports\n\nDiscussion slack :\n\n[Slack](https://mobsuccess.slack.com/archives/C04EBKSK0LA/p1732533517011609)",
            id: "FRONT-2046",
          },
          origin: "linear",
          timestamp: 1732702169000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2089",
              title:
                "refactor(blocked-routes): migrate to pandark [FRONT-2046]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nSome pages are not accessible but we still need to migrate them to pandark\r\n\r\n### Scope\r\n\r\n/final-numbers\r\n/invoices\r\n/all-reports\r\n\r\n### QA\r\n\r\n![image](https://github.com/user-attachments/assets/40501c53-fbb5-40b4-a70d-d8dd69d49313)\r\n![image](https://github.com/user-attachments/assets/3a6f0346-bc84-45ad-8c17-9631c536af39)\r\n![image](https://github.com/user-attachments/assets/3d78eb33-b5e1-49a8-877d-56325217ebdd)\r\n\r\n### Test URL\r\n\r\nhttp://localhost:3115/final-numbers?client=flutter&id_account=3239\r\nhttp://localhost:3115/invoices?client=flutter&id_account=3239\r\nhttp://localhost:3115/all-reports?client=flutter&id_account=3239\r\n\r\nNot possible on deployed envs, you need to checkout to the branch and:\r\n- in `/webapps/dashboard-farly/src/pages/_app.tsx`, comment lines 51 to 53\r\n- in `webapps/dashboard-farly/src/components/SidebarProvider/SidebarProvider.tsx`, comment lines 91 and 102",
              id: 2089,
            },
            {
              url: "",
              origin: "git",
              id: "b881c8a3c64a9ab704804ac9c4dbd494ffce3141",
              title:
                "refactor(blocked-routes): migrate to pandark [FRONT-2046] (#2089)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1964/migration-du-datepickersingleday-sur-le-lc0",
            title: "Migration du DatepickerSingleDay sur le LC0",
            origin: "linear",
            description:
              "## Contexte\n\nIl faut remplacer sur le LCO l'ancien composant `<DatePickerSingleDay />` par notre nouveau composant PandaArk `<DatePicker />`\n\n---\n\n## Informations complémentaires\n\n* [https://master.lco.live.mobsuccess.com/](https://master.lcm.live.mobsuccess.com/)\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression",
            id: "FRONT-1964",
          },
          origin: "linear",
          timestamp: 1732696835000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2088",
              title:
                "feat: migrate the datepicker onto lco [FRONT_1964] [FRONT-1964]",
              origin: "github",
              description:
                "### What does it do? Why?\r\nChange the datePickerSingleDay of lco/KitDatRange to the new datePicker (Panda)\r\n### Scope\r\nlco\r\n### QA\r\n\r\n### Test URL\r\nhttps://pr-2088.lco.live.mobsuccess.com/kit/19104c93-f839-4501-9c11-a1d5553d74df?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae",
              id: 2088,
            },
            {
              url: "",
              origin: "git",
              id: "b08fa79b728e5bcafa7fd4905da2ba7bb0f13344",
              title:
                "feat: migrate the datepicker onto lco [FRONT_1964] [FRONT-1964] (#2088)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2085/utiliser-les-imports-type-sur-les-webapps",
            title: "Utiliser les imports type sur les webapps",
            origin: "linear",
            description:
              "`biome lint --only=style/useImportType --write  ./webapps/lcm/src`",
            id: "FRONT-2085",
          },
          origin: "linear",
          timestamp: 1732638143000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2106",
              title:
                "refactor(packages,configs): use import types [FRONT-2085]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nUse import types in preparation for adding `verbatimModuleSyntax` in the tsconfig\r\nUsed `biome lint --only=style/useImportType --write  ./webapps/[webapp]/src`",
              id: 2106,
            },
            {
              url: "",
              origin: "git",
              id: "5e8884f1983f868f4644037fb05e57182d7c583c",
              title:
                "refactor(packages,configs): use import types [FRONT-2085] (#2106)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2086/utiliser-les-imports-type-sur-les-packages-et-configs",
            title: "Utiliser les imports type sur les packages et configs",
            origin: "linear",
            description:
              "`biome lint --only=style/useImportType --write  ./webapps/lcm/src`",
            id: "FRONT-2086",
          },
          origin: "linear",
          timestamp: 1732637287000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2105",
              title: "refactor(webapps): use import types [FRONT-2086]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nUse import types in preparation for adding `verbatimModuleSyntax` in the tsconfig\r\nUsed `biome lint --only=style/useImportType --write  ./webapps/[webapp]/src`",
              id: 2105,
            },
            {
              url: "",
              origin: "git",
              id: "69fb2483d8c4118d02c8e536de7b4505d0a4bf17",
              title: "refactor(webapps): use import types [FRONT-2086] (#2105)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1835/update-react-share",
            title: "update react-share",
            origin: "linear",
            description:
              "# \n\n# Contexte \n\n*certains todo demande de mettre a jour react-share. Cela peut être déjà avoir été fait, mais pour des raison de sécurité il reste nécessaire de voir si tout est bon etant donnée qu'ils sont suivi d'un* \n\n*\\`\\`\\` **// eslint-disable-next-line \\`\\`\\`***\n\n```\n// TODO: update the rule for react-shared\n```\n\n**En tant que :** *Developper front*\n\n**Je souhaite :** *savoir si le todo est toujours d'actualité, si oui le regler si non l'effacer*\n\n**Pour  :** *nettoyer l'espace de travail (*[https://mobsuccess.slack.com/archives/C06RATUQ3DZ/p1730303085128759](https://mobsuccess.slack.com/archives/C06RATUQ3DZ/p1730303085128759))\n\n---\n\n# Critères d'acceptations\n\n1. résoudre le todo\n2. pas de changement dans le fonctionnement de l'application",
            id: "FRONT-1835",
          },
          origin: "linear",
          timestamp: 1732632089000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1930",
              title:
                "fix: Move GTM and Hotjar components to src/components and re-export from public [FRONT_1835] [FRONT-1835]",
              origin: "github",
              description:
                "### What does it do? Why?\r\nPlace the GTM and Hotjar components in src/components/ and re-export them from public.\r\n### Scope\r\n\r\n### QA\r\n\r\n### Test URL\r\n",
              id: 1930,
            },
            {
              url: "",
              origin: "git",
              id: "846c73184da9007db6cbd06a78727ea39b5e582a",
              title:
                "fix: Move GTM and Hotjar components to src/components and re-export from public [FRONT_1835] [FRONT-1835] (#1930)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2058/migrer-les-derniers-call-apis-du-lcm-vers-des-appel-react-client",
            title:
              "Migrer les derniers call apis du lcm vers des appel react-client",
            origin: "linear",
            description:
              "#### Changelog\n\nMigration des derniers appels APIs du LCM vers l'appel client React",
            id: "FRONT-2058",
          },
          origin: "linear",
          timestamp: 1732615734000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2091",
              title: "chore(rdc-migration): remove rdc references [FRONT-2058]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- remove rdc related code from lcm\r\n- migrate verify api call\r\n- migrate audiences retrieval (still direct call to platform but using axiosGet)\r\n- migrate facebook account listing\r\n",
              id: 2091,
            },
            {
              url: "",
              origin: "git",
              id: "35f9e6c1b931e3ff20d5666ee9118cededca0c87",
              title:
                "chore(rdc-migration): remove rdc references [FRONT-2058] (#2091)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2059/retirer-le-code-mort-de-react-ui",
            title: "Retirer le code mort de react-ui",
            origin: "linear",
            description:
              "#### Changelog\n\nSuppression des codes morts de react-ui",
            id: "FRONT-2059",
          },
          origin: "linear",
          timestamp: 1732554823000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2092",
              title:
                "chore(knip): cleanup unused exports react-ui [FRONT-2059]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nuse knip to remove unused `export` statements\ndetect unused code with eslint (exported code was ignore by eslint -- removing export statements allows eslint to detect unused code)\n",
              id: 2092,
            },
            {
              url: "",
              origin: "git",
              id: "8f39ac3b271ef2295d1bac4be40915b2ebb85c6b",
              title:
                "chore(knip): cleanup unused exports react-ui [FRONT-2059] (#2092)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2057/nettoyer-les-fonctions-exportations-types-inutilises-du-lcm-knip-tache",
            title:
              "Nettoyer les fonctions / exportations / types inutilisés du LCM (knip) - tâche interne",
            origin: "linear",
            description:
              "#### Changelog\n\nNettoyage des fonctions inutilisées du LCM (knip) effectué pour améliorer la performance du produit",
            id: "FRONT-2057",
          },
          origin: "linear",
          timestamp: 1732548370000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2090",
              title:
                "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nuse knip to remove unused `export` statements\ndetect unused code with eslint (exported code was ignore by eslint -- removing export statements allows eslint to detect unused code)\n",
              id: 2090,
            },
            {
              url: "",
              origin: "git",
              id: "84ca8bfba9e81dd4209edaa03e6f5d0952a5a489",
              title:
                "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057] (#2090)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2044/migrer-le-blockloader-du-lcm-auth",
            title: "Migrer le BlockLoader du LCM + Auth",
            origin: "linear",
            description:
              "## Contexte\n\nNous avons un nouveau loader: `Loader.Block`\n\n---\n\n## **Description du Problème**\n\nRetirer les anciennes utilisation du `BlockLoader`\n\n---\n\n## Informations complémentaires\n\n* faire que le LCM\n\n---",
            id: "FRONT-2044",
          },
          origin: "linear",
          timestamp: 1732547702000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2086",
              title: "refactor: use loader dot block [FRONT-2044]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n- Replace `BlockLoader` by `Loader.Block`\r\n  - LCM\r\n  - Auth\r\n\r\n### Score\r\n\r\nLCM & Auth\r\n\r\n### QA\r\n\r\nLCM\r\n\r\n<img width="1452" alt="lcm1" src="https://github.com/user-attachments/assets/afe130cc-c582-44a1-ad09-494b7962d812">\r\n<img width="1452" alt="lcm3" src="https://github.com/user-attachments/assets/8b8904cd-2dac-4378-945d-94e3a85ac843">\r\n\r\nAuth\r\n\r\n<img width="1452" alt="auth" src="https://github.com/user-attachments/assets/4eccdf09-41f4-42c2-86be-faac58b807ad">\r\n\r\n\r\n',
              id: 2086,
            },
            {
              url: "",
              origin: "git",
              id: "b84e63e8382283601c22f04decca3ebe3f5b87f7",
              title: "refactor: use loader dot block [FRONT-2044] (#2086)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2037/mettre-a-jour-lales-pages-dannonceur-sur-le-meme-format-que-les-pages",
            title:
              "Mettre à jour la/les pages d'annonceur sur le même format que les pages annonce",
            origin: "linear",
            description:
              "#### Changelog\n\nMise à jour du format des pages d'annonceur pour correspondre aux pages annonce",
            id: "FRONT-2037",
          },
          origin: "linear",
          timestamp: 1732536219000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2077",
              title: "change(migration-rdc): advertiser page [FRONT-2037]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- migrate advertiser table page\n  - add new table\n  - display more advanced informations\n- add /create page for advertisers (using the same form)\n- add /edit/:uui page for advertisers (using the same form)\n\n### Scope\n\nmigration lcm\n",
              id: 2077,
            },
            {
              url: "",
              origin: "git",
              id: "575b3e2f12f68e7d09bb5ba6ab1504436380e241",
              title:
                "change(migration-rdc): advertiser page [FRONT-2037] (#2077)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2035/reparer-migration-inattendue-du-workspace-dans-platformapi",
            title: "Réparer migration inattendue du workspace dans PlatformApi",
            origin: "linear",
            description:
              "#### Changelog\n\nCorrection de la migration inattendue du workspace dans PlatformApi",
            id: "FRONT-2035",
          },
          origin: "linear",
          timestamp: 1732286884000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2074",
              title:
                "fix: workspace should not have been migrate in PlatformApi [FRONT-2035]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- workspace should not have been migrate in PlatformApi\n",
              id: 2074,
            },
            {
              url: "",
              origin: "git",
              id: "ee28e2768233b3be327885a11ddaa361c3e9f409",
              title:
                "fix: workspace should not have been migrate in PlatformApi [FRONT-2035] (#2074)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2030/renomer-les-parametres-agence-et-annonceur",
            title: "Renomer les paramètres agence et annonceur",
            origin: "linear",
            description:
              "#### Changelog\n\nChangement de nom pour les paramètres de l'agence et de l'annonceur dans le code",
            id: "FRONT-2030",
          },
          origin: "linear",
          timestamp: 1732285748000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2066",
              title: "change: uri params naming [FRONT-2030]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nrename all references to `client` and `account` to `agency` and `advertiser` respectively\n\n### Scope\n\nlcm > migrations\n",
              id: 2066,
            },
            {
              url: "",
              origin: "git",
              id: "e2e0ec414882b47ffc74ad00194b8ee40c38d937",
              title: "change: uri params naming [FRONT-2030] (#2066)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2034/retirer-les-layout-de-rui-qui-forward-panda",
            title: "Retirer les Layout de RUI qui forward Panda",
            origin: "linear",
            description:
              '## Contexte\n\nPanda est notre framework pour le design system\n\n---\n\n## **Description du Problème**\n\nPour ne pas nous coupler fortement avec PandaCSS, nous avions faire une facade pour "forwarder" les composants de Layout et garder leur "responsabilité" chez nous\n\nDans la pratique, nous utilisons directement les composant de PandaCSS sans passer par les notres.\n\n---\n\n## Critère d\'acceptation\n\n* retirer ces composants Layout',
            id: "FRONT-2034",
          },
          origin: "linear",
          timestamp: 1732279334000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2071",
              title:
                "refactor: remove forwarded layout components [FRONT-2034]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- Remove forwarded layout components\r\n- Update imports",
              id: 2071,
            },
            {
              url: "",
              origin: "git",
              id: "f8319ac227f737a8912c80a36b00d1e89b1c0d4c",
              title:
                "refactor: remove forwarded layout components [FRONT-2034] (#2071)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1906/migrer-le-nouveau-table-de-la-page-overview-du-dashboard-farly",
            title:
              "Migrer le nouveau Table de la page `Overview` du Dashboard-farly",
            origin: "linear",
            description:
              "## Contexte\n\nNous devons migrer le nouveau Table `Performances summary` sur la page  `Overview` du Dashboard-farly\n\n---\n\n## Informations complémentaires\n\n* [https://master.dashboard-farly.live.mobsuccess.com/overview?client=flutter&id_account=3239&ran\\[…\\]0Z&range_filterend=2024-10-01T22%3A00%3A00.000Z](https://master.dashboard-farly.live.mobsuccess.com/monetization?client=flutter&id_account=3239&range_filterstart=2024-09-30T22%3A00%3A00.000Z&range_filterend=2024-10-01T22%3A00%3A00.000Z)\n* \n\n  ![Capture d’écran 2024-11-08 à 16.24.54.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/59862a90-d6ed-44a0-8023-df785c70749e/1584febb-6296-4659-aae0-dab7bd2c14d2)\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression par rapport à l'ancien Table ",
            id: "FRONT-1906",
          },
          origin: "linear",
          timestamp: 1732271220000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2021",
              title: "refactor(overview): use pandark table [FRONT-1906]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nReplace old table with pandark table\r\n\r\n### Scope\r\n\r\nOverview\r\n\r\n### QA\r\n\r\n![Screenshot 2024-11-18 at 16 42 25](https://github.com/user-attachments/assets/640c479d-0029-4e12-8462-3fc30f694e49)\r\n\r\n### Test URL\r\n\r\nhttps://pr-2021.dashboard-farly.live.mobsuccess.com/overview?client=flutter&id_account=3239&range_filterstart=2024-07-31T22:00:00.000Z&range_filterend=2024-10-30T23:00:00.000Z",
              id: 2021,
            },
            {
              url: "",
              origin: "git",
              id: "4d071d877dd92ed44711bce44403268402684971",
              title:
                "refactor(overview): use pandark table [FRONT-1906] (#2021)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1946/migration-de-linput-sur-le-package-react-shared",
            title: "Migration de l'Input sur le package React-shared",
            origin: "linear",
            description:
              "## Contexte\n\nIl faut remplacer sur le package React-shared l'ancien composant `<AdvancedInput />` par notre nouveau `<Input />` pandaArk.\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression",
            id: "FRONT-1946",
          },
          origin: "linear",
          timestamp: 1732208956000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2055",
              title:
                "change: migrate AdvancedInput to panda input [FRONT-1946]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- migrate `<AdvancedInput />` to `<Input.Root />` in react-shared\r\n  - migrate `Login`\r\n  - migrate `ForgotPassword`\r\n  - migrate `ResetPassword`\r\n\r\n### Scope\r\n\r\nmigration > panda\r\n\r\n\r\n### Tests\r\n\r\n[Login](https://pr-2055.auth.live.mobsuccess.com/)\r\n\r\n![image](https://github.com/user-attachments/assets/e85defa4-4c06-4b5c-ad83-eb031ce4baf9)\r\n\r\n[Forgot Password](https://pr-2055.auth.live.mobsuccess.com/?action=forgot-password)\r\n\r\n![image](https://github.com/user-attachments/assets/825365fa-4056-463a-84e6-e056970f4b41)\r\n\r\n[Reset Password](https://pr-2055.auth.live.mobsuccess.com/?action=reset-password)\r\n\r\n![image](https://github.com/user-attachments/assets/03090473-da1e-480a-81a9-f85786e572ef)\r\n",
              id: 2055,
            },
            {
              url: "",
              origin: "git",
              id: "57330cd9cc9ae11fd7a3020e90e95eed1791c76b",
              title:
                "change: migrate AdvancedInput to panda input [FRONT-1946] (#2055)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1918/migrer-la-page-agence-vers-un-table-pandaark",
            title: "Migrer la page agence vers un table PandaArk",
            origin: "linear",
            description:
              "* Utiliser un Table dans la page de séléction d'Agence\n* Migrer les appels api vers des endpoints typés\n\n#### Changelog\n\nAjout des endpoints typés pour les pages d'agence  + Utiliser un Table dans la page de séléction d'Agence",
            id: "FRONT-1918",
          },
          origin: "linear",
          timestamp: 1732196340000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1981",
              title: "feat: use typed endpoint for agency pages [FRONT-1918]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- use typed endpoints from lcm-microservice to list agencies\n- use table to display agencies instead of custom list\n- use forms apis for creating and updating agencies\n\n### Scope\n\nagencies > list/create/update\n",
              id: 1981,
            },
            {
              url: "",
              origin: "git",
              id: "bbbae9ad3efd48b4268d96931c65c632d8764f3f",
              title:
                "feat: use typed endpoint for agency pages [FRONT-1918] (#1981)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2026/ajouter-une-icone-a-letat-vide-dans-staticworkspacecontextprovider",
            title:
              "Ajouter une icône à l'état vide dans StaticWorkspaceContextProvider",
            origin: "linear",
            description:
              "#### Changelog\n\nAjout d'une icône à l'état vide dans StaticWorkspaceContextProvider",
            id: "FRONT-2026",
          },
          origin: "linear",
          timestamp: 1732185236000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2059",
              title:
                "fix: add icon to empty state in StaticWorkspaceContextProvider [FRONT-2026]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nadd missing icon in workspace empty state\n",
              id: 2059,
            },
            {
              url: "",
              origin: "git",
              id: "8b555df4b507179bff4ea5a94259f5cf349e5baa",
              title:
                "fix: add icon to empty state in StaticWorkspaceContextProvider [FRONT-2026] (#2059)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2019/ameliorer-le-styling-de-dialog-fileupload-image-et-table-dans-react-ui",
            title:
              "Améliorer le styling de Dialog FileUpload Image et Table dans react-ui",
            origin: "linear",
            description:
              "#### Changelog\n\nAmélioration du styling de Dialog, FileUpload, Image et Table dans react-ui",
            id: "FRONT-2019",
          },
          origin: "linear",
          timestamp: 1732114253000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2051",
              title:
                "change: update styling in Dialog FileUpload Image and Table components [FRONT-2019]",
              origin: "github",
              description:
                '### What does it do? Why?\n\n- allow css props to be passed to `Image` component (using `styled()` wrapper from pandacss)\n- ensure `FileLoader` to have a 100% height instead of auto\n- provide an "all className" meta property for table rows (avoiding passing cell.className, header.className, footer.className for the same class)\n- update `Dialog` to use flex instead of grid -- this avoid a bug when a dialog does not have a description but keeps adding a gap between the title and description AND description and content\n\n### Scope\n\nreact-ui > styling\n',
              id: 2051,
            },
            {
              url: "",
              origin: "git",
              id: "9b7627a661ad6ea8fe4cdf70d4663ed173943625",
              title:
                "change: update styling in Dialog FileUpload Image and Table components [FRONT-2019] (#2051)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1942/migration-de-linput-sur-le-lmp",
            title: "Migration de l'Input sur le LMP",
            origin: "linear",
            description:
              "## Contexte\n\nIl faut remplacer sur le LMP l'ancien composant `<AdvancedInput />` par notre nouveau `<Input />` pandaArk.\n\n---\n\n## Informations complémentaires\n\n* [https://master.lmp.live.mobsuccess.com/](https://master.lcm.live.mobsuccess.com/)\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression",
            id: "FRONT-1942",
          },
          origin: "linear",
          timestamp: 1732099468000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2036",
              title:
                "refactor(lmp): replace advanced input with panda input [FRONT-1942]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n<img width="1111" alt="image" src="https://github.com/user-attachments/assets/9b65a990-d775-463e-a986-0d43439ac684">\r\n\r\n<img width="1111" alt="image" src="https://github.com/user-attachments/assets/8ee2e237-243e-4f54-9259-38b08934d435">',
              id: 2036,
            },
            {
              url: "",
              origin: "git",
              id: "4fa9b4f5050ec9ee172d22109fa33b8a95082cee",
              title:
                "refactor(lmp): replace advanced input with panda input [FRONT-1942] (#2036)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1992/corriger-lapparition-du-grey-screen-suite-a-la-creation-dune-agence",
            title:
              "Corriger l'apparition du grey screen suite à la création d’une agence",
            origin: "linear",
            description:
              "# **Contexte (parcours d’entrée)**\n\nActuellement, lors de l’ajout d’une nouvelle agence dans le Local Campaign Manager, un grey screen apparaît après la validation.\n\nDe plus, lorsque l’utilisateur tente de rouvrir l’agence précédemment créée, le même écran gris réapparaît systématiquement, empêchant l'accès ou la modification des informations de l’agence nouvellement ajoutée.\n\n[Enregistrement de l’écran 2024-11-18 à 15.18.05.mov](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/ad9cd470-4436-46bc-8c5f-ff4b2b8fe8d2/4dc79e51-1c58-48da-b86f-cf7cbf10d25b)\n\n---\n\n# **Comportement voulu**\n\nIl faudrait que, lors de l’ajout d’une nouvelle agence, le LCM doit permettre à l’utilisateur de poursuivre son parcours sans grey screen. La validation de l’ajout doit aboutir soit une redirection automatique vers la page suivante (->Annonceur). L’interface ne doit plus afficher de grey screen, que ce soit après la validation de l’ajout ou lors d’une tentative d’ouverture de l’agence nouvellement créée.\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. Si l’utilisateur ajoute une nouvelle agence, il doit être automatiquement redirigé vers la page suivante(->annonceur).\n2. Si l’utilisateur tente d’ouvrir l’agence nouvellement créée, il doit pouvoir y accéder sans rencontrer de gray screen.\n3. Si l’utilisateur consulte la liste des agences, les informations de l’agence récemment ajoutée doivent s’afficher correctement.\n\n---\n\n# Scénario de repro \n\n1. Connectez-vous à la plateforme LCM.\n2. Naviguez vers l’onglet permettant l’ajout d’une agence.\n3. Cliquez sur **“+ Ajouter une agence”**.\n4. Remplissez les champs obligatoires (nom, logo, sales associé, etc.).\n5. Validez l’ajout.\n6. Observez le grey screen après la validation.\n\n---\n\n# **Informations complémentaires**\n\nPNG Logo : \n\n![mobsuccess_logo.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/968ce8d9-fa12-42de-8e3d-1a6a7db80fe5/4d44006f-c48d-4cce-9b2d-9acb3d06aafd)\n\n---\n\n# Changelog\n\n🇫🇷  Correction du gray screen à la création d’une agence\n\n🇺🇸 Fixed the grey screen when creating en agency ",
            id: "FRONT-1992",
          },
          origin: "linear",
          timestamp: 1732024250000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2032",
              title: "fix: dynamic workspace emptysate [FRONT-1992]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- fix empty states in dynamic workspace provider (missing required icon)\r\n- filter empty agencies in account picker (newly returned by php)\r\n",
              id: 2032,
            },
            {
              url: "",
              origin: "git",
              id: "ec95054e5ff8479265d28e57dda4c16d47ed6b5c",
              title: "fix: dynamic workspace emptysate [FRONT-1992] (#2032)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1983/corriger-le-select-du-pourcentage-dun-item-de-kit-externe-sur-le",
            title:
              "Corriger le select du pourcentage d'un item de kit externe sur le backoffice LCO master",
            origin: "linear",
            description:
              "# **Contexte (parcours d’entrée)**\n\nActuellement sur master nous pouvons constater que le select de pourcentage d'une variation ne fonctionne plus. Nous sommes bloqué sur \"en €\"\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/5a5eea81-a108-4174-ad48-affbaa71f05b/28b27b3d-8034-4bb6-a6a8-aaff11fd9790)\n\n---\n\n# **Comportement voulu**\n\n*Pouvoir sélectionner le type en percent sur les items d'un kit externe*\n\n---\n\n# Scénario de repro \n\n1. *Se rendre sur ce kit :* [https://master.lco.live.mobsuccess.com/admin/external-kit/e1566c6c-c88a-4719-935b-19d28a67e03b?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae](https://master.lco.live.mobsuccess.com/admin/external-kit/e1566c6c-c88a-4719-935b-19d28a67e03b?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae)\n2. Constater que le choix de type percent n'est pas possible\n\n---\n\n# Changelog\n\n🇫🇷 Correction du select du pourcentage d'un item de kit externe sur le backoffice LCO master\n\n🇺🇸 Fix the variation type select on external kit",
            id: "FRONT-1983",
          },
          origin: "linear",
          timestamp: 1731942551000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2022",
              title: "fix: add portal to select [FRONT-1983]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nAdds Portal to select dropdown.\r\nThe dropdown was previously a child of the input and not displayed when overflowing.\r\nThis issue affected only select components that were descendent of an input, ie `InputAddons`\r\n\r\n<img width="595" alt="image" src="https://github.com/user-attachments/assets/c14b7798-f013-4913-8cdf-5a44e58e192b">\r\n\r\n### Test URL\r\n\r\nhttps://pr-2022.lco.live.mobsuccess.com/admin/external-kit/80eaeba4-4719-4690-9a79-bca9c8c06aff?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae',
              id: 2022,
            },
            {
              url: "",
              origin: "git",
              id: "699c591d53b452fd1e0f8b5e263f187ef3954298",
              title: "fix: add portal to select [FRONT-1983] (#2022)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1967/ajouter-le-workspace-provider-au-lcm",
            title: "Ajouter le workspace provider au lcm",
            origin: "linear",
            description: "#### Changelog\n\nAjout du workspace provider au lcm",
            id: "FRONT-1967",
          },
          origin: "linear",
          timestamp: 1731667040000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2002",
              title:
                "feat(worksapace): add dynamic workspace for lcm [FRONT-1967]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- add dynamic workspace provider (and rename the existing one to `static`)\n- add the new `dynamic` workspace provider to the lcm\n- fix it's tests\n",
              id: 2002,
            },
            {
              url: "",
              origin: "git",
              id: "0dd3ca72ce7f5da6aa650e5b41083da20406c6f8",
              title:
                "feat(worksapace): add dynamic workspace for lcm [FRONT-1967] (#2002)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1820/integrer-le-theme-leroy-merlin-sur-le-lco",
            title: "Intégrer le thème Leroy Merlin sur le LCO",
            origin: "linear",
            description:
              "# User Story\n\nEn tant qu'équipe conseil et partenariat\n\nJe souhaites faire une démo du LCO au couleur de Leroy merlin\n\nPour gagner un appel d'offre\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. Le thème est disponible pour le client Leroy merlin uniquement (client_id : 9a7f9b94-7211-4daa-98a7-6cf21cf54266)\n2. Le thème Leroy Merlin doit s'appliquer à l'ensemble du LCO: couleurs, typographies, icônes etc..\n3. Les couleurs doivent correspondre à la charte graphique de Leroy merlin\n4. Les éléments d'interface (boutons, barres de navigation, sections) doivent être adaptés au design Leroy Merlin\n5. L'intégration du thème correspond au maquettes figma\n\n---\n\n# **Comportement voulu**\n\nLe LCO doit afficher automatiquement le thème Leroy Merlin pour les utilisateurs identifiés comme clients Leroy merlin.\n\n---\n\n# **Informations complémentaires**\n\nPalette colors Leroy Merlin : \n\n[Primary Leroy Merlin - Local Campaign Order (Figma)](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12095-87475&t=dVj2A3FLf4XECYUY-4)\n\nFigma : [https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12046-70492&t=SIn5jwwUQUUdTsmX-4](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12046-70492&t=SIn5jwwUQUUdTsmX-4)\n\n---\n\n## Product Designer 🧑‍🎨 \n\n@rosanora @anne-sophie.doumenge \n\n---\n\n# Changelog\n\n🇫🇷  Intégration du theme Leroy Merlin sur le LCO\n\n🇺🇸 Integration of Leroy merlin theme on the LCO",
            id: "FRONT-1820",
          },
          origin: "linear",
          timestamp: 1731665548000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1993",
              title: "feat: add leroy merlin theme [FRONT-1820]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n<img width="1659" alt="image" src="https://github.com/user-attachments/assets/fd627eb2-dc12-4b40-a54c-ed17c198a474">',
              id: 1993,
            },
            {
              url: "",
              origin: "git",
              id: "1d393c4352f7952fa90d041aafa3812693bd227f",
              title: "feat: add leroy merlin theme [FRONT-1820] (#1993)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1598/rajouter-le-badge-de-coverage-dans-le-readmemd",
            title: "Rajouter le badge de coverage dans le readme.md",
            origin: "linear",
            description:
              "## Contexte\n\nLe coverage permet de savoir quel niveau de confiance nous avons sur le refactoring et la modification de code.\n\n---\n\n## **Description du Problème**\n\nRajouter un quick overview du niveau de coverage de chaque projets\n\n---\n\n## Informations complémentaires\n\n* Revoir les tests qui ne fonctionnent plus\n* [https://github.com/marketplace/actions/coverage-badge](https://github.com/marketplace/actions/coverage-badge)\n\n---\n\n## Critère d'acceptation\n\n* Avoir un badge de chaque projet avec le coverage de line",
            id: "FRONT-1598",
          },
          origin: "linear",
          timestamp: 1731582667000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1920",
              title: "feat(coverage): add badge on readme [FRONT-1598]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n- Use the test with coverage job on GA\r\n- Extract the coverage\r\n- Display a badge in the readme file\r\n\r\n### QA\r\n\r\n<img width="922" alt="Screenshot 2024-11-07 at 10 45 40" src="https://github.com/user-attachments/assets/fa7bb227-ce59-4a36-b1f0-d2929acbca37">\r\n',
              id: 1920,
            },
            {
              url: "",
              origin: "git",
              id: "1ce034ecbbf5cfc67cc85fb80b955d2f6f794aac",
              title: "feat(coverage): add badge on readme [FRONT-1598] (#1920)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1928/alert",
            title: "Alert",
            origin: "linear",
            description: "",
            id: "FRONT-1928",
          },
          origin: "linear",
          timestamp: 1731580746000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1987",
              title: "test: add visual tests for alert component [FRONT-1928]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- Add visual tests for Alert component\r\n\r\n### QA\r\n\r\nSee files diff\r\n",
              id: 1987,
            },
            {
              url: "",
              origin: "git",
              id: "17d8f1a55246d33a112aad036ee92f4319d287ea",
              title:
                "test: add visual tests for alert component [FRONT-1928] (#1987)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1929/integrer-le-workspace-context-dans-le-dashboard-farly-et-mettre-a-jour",
            title:
              "Intégrer le workspace context dans le dashboard farly et mettre à jour les endpoints d'agences/annonceur",
            origin: "linear",
            description:
              "#### Changelog\n\nIntégrer le workspace context dans le dashboard farly et mettre à jour les endpoints d'agences/annonceur",
            id: "FRONT-1929",
          },
          origin: "linear",
          timestamp: 1731517993000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1988",
              title:
                "change(workspace): update workspace api endpoint to use typed one [FRONT-1929]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- type correctly workspace api calls by using newly created endpoints\n- use workspace api in `dashboard-farly` project\n- remove `react-data-context` from `dashboard-farly` project\n",
              id: 1988,
            },
            {
              url: "",
              origin: "git",
              id: "8c326576060bde330e2b43c6210aaed779889385",
              title:
                "change(workspace): update workspace api endpoint to use typed one [FRONT-1929] (#1988)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1865/enlever-les-ts-nocheck-dans-geoplannerlocation",
            title: "Enlever les ts-nocheck dans Geoplanner/Location/",
            origin: "linear",
            description:
              "## Contexte\n\nDeux fichiers ont le typecheck désactivé, le ts-nocheck a été mis avant la création des react-client.\n\n---\n\n## Critère d'acceptation\n\n* Plus aucun ts-nocheck dans le composant\n* Pas de regression au niveau du comportement\n* Tests unitaires des fonctions logiques/métier",
            id: "FRONT-1865",
          },
          origin: "linear",
          timestamp: 1731490002000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1960",
              title: "refactor: remove ts-nocheck from Geoplanner [FRONT-1865]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nRemove ts-nochecks from Geoplanner\r\n - Add SVGElement as a type of anchor for Dropdown\r\n - Migrate Location AdvancedSelect to Select\r\n - Add generic type to Select value (defaults to string)\r\n - use `GeoplannerLocalisationResultAdapter["type"]` insteand of `GeoplannerLocalisationTypeEnum` type is a union, cf https://github.com/mobsuccess-devops/lcm-microservice/blob/2b8df97f52a84fdde388c479ca6b9b1d976a6721/chalicelib/models/geoplanner_localisation_model.py#L31)\r\n\r\n### QA\r\n\r\ntypecheck',
              id: 1960,
            },
            {
              url: "",
              origin: "git",
              id: "5c9dcfc3362f1f7a914e6425b5826b9d14155d68",
              title:
                "refactor: remove ts-nocheck from Geoplanner [FRONT-1865] (#1960)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1748/ajouter-les-alertes-sur-la-vue-mpc-pour-informer-lutilisateur-des",
            title:
              "Ajouter les alertes sur la vue MPC pour informer l’utilisateur des jours restants avant la date limite de configuration du PAC",
            origin: "linear",
            description:
              "# User Story\n\n*Actuellement sur la vue MPC du LCO, il n'y aucune alerte de disponible. \nEn revanche, on peut voir sur la page panier un compte à rebours indiquant le nombre de jours restants au user pour finaliser la configuration du PAC* ⬇️ : \n\n![Capture d’écran 2024-10-16 à 15.26.29.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/116212aa-b303-464a-95bc-2523ea10f1f5/3e464a55-8061-4386-82d8-93c9be4cd215)\n\n**En tant que :** *Utilisateur Client du LCO,* \n\n**Je souhaite :** être informé du nombre de jours restants avant l'expiration de mon PAC (à J-X, J-3, J-2, J-1 et le Jour J), sur la vue MPC\n\n**Pour que :** m'assurer que je ne rate pas l'opportunité de finaliser mon engagement avant la date limite.\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. L'utilisateur voit une pastille lui indiquant le nombre de jours restants pour configurer son PAC (lorsque nous sommes à J-4 ou plus).\n2. L'utilisateur voit une alerte à J-3, J-2, J-1 et le Jour J indiquant le nombre de jours restants pour configurer son PAC.\n3. Les alertes doivent être visibles sur la vue MPC du LCO.\n4. Chaque alerte peut être retirée manuellement par l'utilisateur.\n5. Le design des alertes doit être conforme aux maquettes en fonction des 5 cas présentés. \n6. Les alertes doivent apparaître automatiquement, sans action supplémentaire de l'utilisateur.\n7. Si l'utilisateur ferme l'alerte, puis quitte la vue MPC (ex. : en allant sur la page panier) et revient ensuite sur la vue MPC, l'alerte doit réapparaître automatiquement.\n8. Les alertes doivent disparaître après la finalisation de la configuration du PAC -> une fois la commande validée ou à la date d'expiration.\n\n---\n\n# **Comportement voulu**\n\nLes alertes doivent s'afficher sous forme de bannières dans la vue MPC à des moments spécifiques. \n\n1. Lorsque nous sommes à J-X, avec x >/ = à 4 -> la vue MPC doit afficher la pastille suivante ⬇️ : \n\n![Operations commerciales-done 3.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/fa0da861-5686-4e14-bcd3-2fe05b279a4f/2484aa15-5cb4-4bff-af04-fd28a37bddd8)\n\n2. Lorsque nous sommes à J-3, la vue MPC doit afficher l'alerte suivante ⬇️ : \n\n![Operations commerciales-done 4.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/53804a0b-9be1-4614-a302-7255dd37dc68/8675a120-eb55-4ee0-ad72-ed4b62c7db92)\n\n3. Lorsque nous sommes à J-2, la vue MPC doit afficher l'alerte suivante ⬇️ : \n\n![Operations commerciales-done 5.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/dc063275-23d5-4b04-aff7-040c37b5c5dc/47d4952d-d859-4af1-bd3f-77d74ebb544f)\n\n3. Lorsque nous sommes à J-1, la vue MPC doit afficher l'alerte suivante ⬇️ :\n\n![Operations commerciales-done 6.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/c249e85a-8f60-4932-a84e-8e693a102e3f/e398f34c-9788-4814-a982-19f65e270e8a)\n\n4. Lorsque nous sommes le jour J, la vue MPC doit afficher l'alerte suivante ⬇️ :\n\n![Operations commerciales-done 7.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/0fa0ee48-ebca-4b0d-bc73-e8cb3527efac/ef841b97-0820-4442-8fdd-5dcc4807325a)\n\n---\n\n# **Informations complémentaires**\n\n*Maquette Figma :* \n\n[Alerte configuration PAC - Local Campaign Order (Figma)](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=10168-146592&t=PdvOiAYYigq8dXiX-1)\n\n---\n\n## Product Designer 🧑‍🎨 \n\n@anne-sophie.doumenge @rosanora \n\n---\n\n# Changelog\n\n🇫🇷  Ajout d’alertes sur la vue PAC pour informer l’utilisateur des jours restants (J-X, J-3, J-2, J-1, Jour J) avant la date limite de configuration de son PAC\n\n🇺🇸 Adding alerts on the MPC view to notify the user of the remaining days (J-X, J-3, J-2, J-1, Day J) before the PAC configuration deadline.",
            id: "FRONT-1748",
          },
          origin: "linear",
          timestamp: 1731488282000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1978",
              title: "feat(lco): mpc date alert [FRONT-1748]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/88cc32e6-3ffd-468d-859e-cb837c1846d2">\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/47d12524-cbb2-4c98-9af8-eece923f4387">\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/c14ad6f6-8ff1-4ce4-b1bf-0d488ad9bb4b">\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/0290e437-b458-4a3c-90f6-6d079253f2eb">\r\n\r\n### Test URL\r\n\r\nhttps://pr-1978.lco.live.mobsuccess.com/mpc/028e3c20-49ad-434b-aebb-75751652cc36?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae',
              id: 1978,
            },
            {
              url: "",
              origin: "git",
              id: "456c31c93be7021310eae364269d20fc971475ea",
              title: "feat(lco): mpc date alert [FRONT-1748] (#1978)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1917/changer-le-composant-de-fileupload-pour-utiliser-une-composition",
            title:
              "Changer le composant de FileUpload pour utiliser une composition plutôt que des props",
            origin: "linear",
            description:
              "#### Changelog\n\nModification du composant de FileUpload pour utiliser une composition au lieu de props",
            id: "FRONT-1917",
          },
          origin: "linear",
          timestamp: 1731424850000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1980",
              title:
                "change(FileUpload): make component use composition api instead of props [FRONT-1917]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nmake `FileUpload` component use composition api instead of props\n",
              id: 1980,
            },
            {
              url: "",
              origin: "git",
              id: "ea057bfa1b0c715bbc5f1979c00413c2d1230384",
              title:
                "change(FileUpload): make component use composition api instead of props [FRONT-1917] (#1980)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1712/ajouter-la-donnee-de-ctr-dans-la-phrase-sur-la-page-campagnes",
            title:
              "Ajouter la donnée de CTR dans la phrase sur la page campagnes",
            origin: "linear",
            description:
              '# User Story\n\n*Actuellement sur le Dashboard, la donnée CTR (Click Through Rate) n\'est pas affiché au niveau de la page "Campagne".* \n\n**En tant que :** *Adops, Client*\n\n**Je souhaite :** Afficher la donnée CTR sur la page "Campagne" du Dashboard\n\n**Pour que :** Les utilisateurs puissent visualiser rapidement ce KPI sans avoir à passer par la vue "Rapports détaillés"\n\n![Capture d’écran 2024-09-20 à 17.43.34.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/b0f82c5b-15ba-4ebe-953d-5d039a8ebc48/1439e9a3-de6d-485e-835a-ba7de34e82a6)\n\n---\n\n# Critères d\'acceptations (entre 5 et 9) \n\n1. La donnée CTR est visible sur la page "Campagne" du Dashboard, dans la section des KPI clés.\n2. Le CTR est calculé de manière identique à la vue "Rapports détaillés".\n3. Le format d\'affichage du CTR correspond à celui utilisé dans les "Rapports détaillés" (valeur en pourcentage avec deux décimales).\n4. Les utilisateurs peuvent voir cette donnée sans avoir besoin d\'interagir avec d\'autres éléments de la page (visible par défaut).\n5. Si aucune donnée n’est disponible pour une campagne, ne pas afficher la donnée. Exemple : -> Si jamais 0% sur un levier alors on l\'affiche pas (Waze)\n6. La fonctionnalité est responsive, s’adaptant correctement aux différents formats d’écran (desktop et mobile).\n\n---\n\n# **Comportement voulu**\n\nAjouter la donnée de CTR dans l’onglet campagne du dashboard ⬇️ : \n\n![Campagne.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/437aa7de-5df1-452e-8034-445538ac9c46/20dafe0b-e91c-4613-af1b-adee2b3b667d)\n\n---\n\n# **Informations complémentaires**\n\n*URL Master Dashboard :* [https://master.dashboard.live.mobsuccess.com/campaign?client=intersport&id_account=130&id_id_app=SU5URVJTUE9SVCAtIEpPVVJTIFNBTlMgU0UgUFJJVkVSIC0gMjgvMTI&store_id=\\*](https://master.dashboard.live.mobsuccess.com/campaign?client=intersport&id_account=130&id_id_app=SU5URVJTUE9SVCAtIEpPVVJTIFNBTlMgU0UgUFJJVkVSIC0gMjgvMTI&store_id=\\*)\n\nLien du thread slack de la demande métier : [https://mobsuccess.slack.com/archives/C02FE624H3L/p1726133017050289](https://mobsuccess.slack.com/archives/C02FE624H3L/p1726133017050289)\n\nMaquette Figma : [https://www.figma.com/design/Y01Yb7m6At4StC0NEoqjMH/Dashboard?node-id=3873-46467&node-type=frame&t=JCOB5CKXfQUSyvXd-0](https://www.figma.com/design/Y01Yb7m6At4StC0NEoqjMH/Dashboard?node-id=3873-46467&node-type=frame&t=JCOB5CKXfQUSyvXd-0)\n\n---\n\n## Product Designer 🧑‍🎨 \n\n@anne-sophie.doumenge \n\n---\n\n# Changelog\n\n🇫🇷  Ajout de l\'affichage du KPI CTR sur la page "Campagne" du Dashboard\n\n🇺🇸 Added CTR metric display on the Campaign page of the Dashboard',
            id: "FRONT-1712",
          },
          origin: "linear",
          timestamp: 1731059138000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1963",
              title: "feat(campaigns): add ctr data [FRONT-1712]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nAdd a new card about CTR\r\nAlso rework the first card to use PandArk\r\n\r\n### Scope\r\n\r\nCampaign page > First block\r\n\r\n### QA\r\n\r\n![Screenshot 2024-11-07 at 12 12 09](https://github.com/user-attachments/assets/ef61e6bd-f6b0-446a-878c-9eeaf0ca42ea)\r\n\r\n### Test URL\r\n\r\nhttps://pr-1963.dashboard.live.mobsuccess.com/campaign?id_id_app=SU5URVJTUE9SVCAtIEpPVVJTIFNBTlMgU0UgUFJJVkVSIC0gMjgvMTI&client=intersport&id_account=130",
              id: 1963,
            },
            {
              url: "",
              origin: "git",
              id: "7c41a997653b410b218fdd43d215488a54ba4e90",
              title: "feat(campaigns): add ctr data [FRONT-1712] (#1963)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1892/corriger-les-imports-relatifs-des-packages",
            title: "Corriger les imports relatifs des packages",
            origin: "linear",
            description:
              "Dans nos webapps certaines fonctions ou composants sont importés via un chemin relatif vers le package.\ni\n\n```\nimport { replaceTextInBlob } from \"../../../../../../packages/react-shared/src/public/utils/replace-text-blob\";\n```\n\n​​Il faudrait corriger les chemins d'import, et mettre en place une règle eslint qui permet d'éviter ces erreurs",
            id: "FRONT-1892",
          },
          origin: "linear",
          timestamp: 1730997549000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1965",
              title: "refactor: fix import paths from packages [FRONT-1892]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nfix relative import paths to packages\r\nadd eslint rule",
              id: 1965,
            },
            {
              url: "",
              origin: "git",
              id: "ed07f19ebe8191fcd0b7f81871c7edb544b797a5",
              title:
                "refactor: fix import paths from packages [FRONT-1892] (#1965)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1738/integrer-la-page-facebook-dans-gafa-account-setup-de-la-toolbox",
            title:
              'Intégrer la page Facebook dans "GAFA account setup" de la Toolbox',
            origin: "linear",
            description:
              "# User Story\n\n*La page Facebook permettent* d’ajouter des comptes Facebook, de les synchroniser et de les lier à un annonceur.\n\n**En tant que : **Utilisateur de la Toolbox\n\n**Je souhaite :** Intégrer la page **Facebook** dans l'outil **GAFA Account Setup** pour gérer les comptes Facebook\n\n**Pour que :** Je puisse ajouter, synchroniser et lier des comptes Facebook à un annonceur de manière fluide, tout comme c'est possible avec les pages Google Ads.\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. La page **Facebook** doit être intégrée dans l'outil **GAFA Account Setup** de la Toolbox, de manière similaire à la gestion des comptes Google Ads.\n2. L'utilisateur doit pouvoir ajouter des comptes Facebook via un bouton **\"Ajouter un compte Facebook\"**.\n3. Une fonctionnalité de synchronisation doit être disponible pour mettre à jour les comptes Facebook connectés.\n4. L'utilisateur doit pouvoir lier chaque compte Facebook à un annonceur spécifique.\n\n---\n\n# Messages d'erreur à prévoir\n\n**Erreur d'ajout de compte** : \n\nSi l'ajout d'un compte échoue, un message d'erreur doit apparaître : *\"Échec de l'ajout du compte Facebook. Veuillez réessayer.\"*\n\n**Erreur de synchronisation** : \n\nEn cas de problème lors de la synchronisation des comptes Facebook, afficher : *\"Erreur lors de la synchronisation des comptes. Veuillez réessayer.\"*\n\n**Erreur de liaison à un annonceur** : \n\nSi un compte Facebook ne peut pas être lié à un annonceur, un message d'erreur doit indiquer : *\"Impossible de lier ce compte à l'annonceur. Veuillez vérifier les informations.\"*\n\n[Component toaster](https://www.figma.com/design/ty1e9XJAGtc0f9ooktXw9V/%5BDesign-system%5D-Components?node-id=2594-158078&t=YGmv5MDE9HbTvjR2-1) : \n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/d50d8a66-87a4-4a43-932a-74c8883996fb/d22f21c8-57ca-4fdb-8a17-692d06d5883e)\n\n---\n\n# **Comportement voulu**\n\nIl faudrait que la page **Facebook** soit intégrée dans l'outil **GAFA Account Setup** de la Toolbox. \n\n![0.0-D-Desktop-Data (5).png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/55a1e7e7-3e95-422c-b401-ae3c7a929b76/9ce371cd-9111-4576-9bff-355fcdb1b0c2)\n\nL'utilisateur doit pouvoir ajouter, synchroniser et lier les comptes Facebook à un annonceur facilement et sans erreurs.\n\nCette page est accessible depuis la Toolbox, par 1 points d’entrée :\n\n* Au clic sur l'outil \"GAFA account setup\" dans la sidebar puis au clic sur le cadre Facebook.\n\nPars ce point d'entrée, l'user accède directement au tableau \"compte Facebook\".\n\n**Ce tableau contient les colonnes :**\n\n* “Nom” : noms des comptes Facebook\n* “Annonceur” : Les annonceurs sont représentés sous forme de \"badges\" cliquables et qui dirigent vers les sous-annonceurs de l'annonceur principal.\n* “Facebook Account ID” : les identifiants client, c’est un numéro unique utilisé pour identifier un compte Facebook.\n* ”Facebook Page ID’s : les identifiants d’une page ID, c’est un numéro unique utilisé pour identifier une page ID.\n* “Synchronisation” : Représenter sous forme de “Tag” qui peut être soit \"oui\" soit \"non\", indique si la campagne est lancée ou non.\n* Icône Clef à molette : Setting de la ligne.\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/9484e50e-0489-409c-ba88-833ebf30b338/4a4393e3-2ce0-4fda-8548-911dbdd4fb32)\n\n**Filtre :**\n\nPossibilité de filtrer les annonceurs.\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/ca2c000d-5b56-444f-bb4b-4cb0b9ff2161/b0c72528-8d58-452f-9a18-46a2e5529643)\n\n**Ajouter un compte Facebook :**\n\nEn cliquant sur le bouton “Ajouter un compte”, une modale “Ajouter un compte Facebook” apparait contenant :\n\n* Synchronisation : Avec un switch “oui”, “non”.\n* Annonceur : Un input sélecteur, “sélectionnez un annonceur”.\n* Nom : Un input Nom de l’annonceur.\n* Facebook Account ID : Un input, Numéro client Facebook (sans les tirets).\n* Facebook Page ID’s : Un input permettant de renseigner les ID’s des pages Facebook Ces identifiants sont représentés sous forme de Tag, chaque Id’s doivent être séparé par une virgule, ce qui permet de détecter que l’ID est bon et de créer le tag. Possibilité de les supprimer individuellement grâce à une croix de suppression intégrée dans chaque tag.\n* Un Bouton “Réinitialiser” : il permet de réinitialiser les champs préalablement remplis.\n* Un bouton Annuler : Ce qui ferme la modale.\n* Un bouton Ajouter : Qui permet d’ajouter le nouveau compte à la liste.\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/728d3716-18e5-4a00-a72c-b55eb3b1016d/46d06755-a3fc-47fa-8572-19374bc240b3)\n\n**Editer :** \n\nPossibilité d'éditer un compte Facebook.\n\nEn cliquant sur l’icône ”Clef à molette”, une modale “Editer un compte Facebook” apparait. Elle reprend le même contenu de la modale \"**Ajouter un compte Facebook**\".\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/86656410-cfc0-4a89-b0e8-9887162a9ca4/c9d2481e-4a26-4796-86dc-460c9097ff9b)\n\n---\n\n# Changelog\n\n🇫🇷  Intégration de la page  Facebook dans \"GAFA account setup\" de la Toolbox.\n\n🇺🇸 Integration of the Facebook page into the 'GAFA Account Setup' section of the Toolbox",
            id: "FRONT-1738",
          },
          origin: "linear",
          timestamp: 1730994750000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1933",
              title:
                "feat(third-party): add third-party accounts pages [FRONT-1738]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- add facebook third party page\n",
              id: 1933,
            },
            {
              url: "",
              origin: "git",
              id: "614fa599456738b20d0e4dea0c7411c32659e519",
              title:
                "feat(third-party): add third-party accounts pages [FRONT-1738] (#1933)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1873/bump-les-dependances-dutilities",
            title: "Bump les dépendances d'utilities",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @faker-js/faker\n* @remix-run/router\n* assert\n* aws-amplify\n* aws-iot-device-sdk-v2\n* axios\n* axios-mock-adapter\n* browserify-zlib\n* buffer\n* case\n* commander\n* concurrently\n* crypto-browserify\n* crypto-js\n* dom-storage\n* events\n* exceljs\n* get-intrinsic\n* glob\n* history\n* http-proxy\n* https-browserify\n* javascript-natural-sort\n* jszip\n* jwt-decode\n* luxon\n* make-plural\n* mapbox-gl\n* markdown-to-jsx\n* mock-xmlhttprequest\n* number-abbreviate\n* nunjucks\n* pandadoc-editor\n* polished\n* regenerator-runtime\n* remark-gfm\n* stream-browserify\n* stream-http\n* url\n* url-loader\n* util\n* uuid\n* zod\n\n---\n\n## Critère d'acceptation\n\n* Bump toutes ces dépendances\n* Vérifier que tout fonctionne correctement",
            id: "FRONT-1873",
          },
          origin: "linear",
          timestamp: 1730986532000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1946",
              title: "chore: bump utilities dependencies [FRONT-1873]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nBump utilities dependencies\r\n\r\nMajor versions:\r\n- [x] mapbox-gl (backward-compatible, only changes for types)\r\n- [x] uuid (remove @types/uuid)\r\n- [x] jwt-decode (default import deprecated)\r\n- [x] glob (no changes for us)\r\n- [x] @faker-js/faker (no changes for us)\r\n- [x] remark-gfm (no changes for us)\r\n- [x] concurrently (removed)\r\n\r\nAlso fix eslint rule “member expression" because of get-intrinsic not handing many functions anymore\r\nAlso fix types in eslint plugin by removing `satisfies` because it is currently broken',
              id: 1946,
            },
            {
              url: "",
              origin: "git",
              id: "008ee43597d63dbcf180c44ff1b44012001fb657",
              title: "chore: bump utilities dependencies [FRONT-1873] (#1946)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1881/fix-de-la-couleur-des-placeholder-sur-master",
            title: "Fix de la couleur des placeholder sur master",
            origin: "linear",
            description:
              "![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/19f70fdb-420a-4a53-8ff6-426502e00e8d/fea86289-1b3f-417f-b26b-039fe162c026)\n\nLes placeholder de la plupart des input ne prennent plus la class `placeholder:c_#BCC1DE::placeholder`",
            id: "FRONT-1881",
          },
          origin: "linear",
          timestamp: 1730909301000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1958",
              title: "fix: placeholder color on inputs [FRONT-1881]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n- use token interface.300\r\n- change _placeholder shortcut in preset\r\n\r\n### QA\r\n\r\n<img width="1457" alt="Screenshot 2024-11-06 at 15 31 20" src="https://github.com/user-attachments/assets/512ee183-518f-4c78-a088-e103fabd823f">\r\n\r\n### URLs\r\n\r\nhttps://pr-1958.lcm.live.mobsuccess.com/DriveToStore/d144cca4-4636-11ed-a4b9-d8c497e7bcae/6ca8ff11-4df8-11ed-a4b9-d8c497e7bcae/1a83d10d-572c-46bf-b60d-61b5bc7562e1/campaign-setup?modalname=RTB&modaluuid=0206e7ed-1ada-4208-b8a0-e299d127b886&modaltab=4\r\n\r\n',
              id: 1958,
            },
            {
              url: "",
              origin: "git",
              id: "83bf7de9974f8d9cb2d57363c0b1bbbd6320263a",
              title: "fix: placeholder color on inputs [FRONT-1881] (#1958)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1884/creer-le-composant-circularprogress",
            title: "Créer le composant CircularProgress",
            origin: "linear",
            description:
              "#### Changelog\n\nAjout du composant CircularProgress pour afficher la progression des tâches sur l'interface utilisateur",
            id: "FRONT-1884",
          },
          origin: "linear",
          timestamp: 1730899908000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1957",
              title: "feat: add circular progress component [FRONT-1884]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- add circular progress component\n",
              id: 1957,
            },
            {
              url: "",
              origin: "git",
              id: "4899d842b83a945de9c316295f0d2ac0d2a4f357",
              title:
                "feat: add circular progress component [FRONT-1884] (#1957)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1846/fixer-la-selection-des-dates-lors-de-la-creation-dun-projet-lcm-master",
            title:
              "Fixer la selection des dates lors de la création d'un projet LCM MASTER",
            origin: "linear",
            description:
              "# **Contexte (parcours d’entrée)**\n\nSur LCM Master, lors de la création d'un projet, les dates ne sont plus selectionnables.\n\n![Screenshot 2024-10-31 at 14.05.34.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/4b5efdc3-56d1-4c82-bfab-c54e269caf74/b5ace6f7-bade-4be3-9e1a-8019e9a5c97b)\n\n[Screen Recording 2024-10-31 at 14.05.21.mov](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/629042bf-e29f-4072-b674-634184bd9df7/b602f388-2134-44df-8771-232971254999)\n\n---\n\n# **Comportement voulu**\n\n*L*es dates lors de la création d'un projet LCM MASTER doivent sélectionnable\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. L'utilisateur peut \"Ajouter\" un nouveau projet\n\n---\n\n# Scénario de repro \n\nAller sur[ LCM master](https://master.lcm.live.mobsuccess.com/DriveToStore/d144cca4-4636-11ed-a4b9-d8c497e7bcae/6ca8ff11-4df8-11ed-a4b9-d8c497e7bcae) et ajouter un projet.\n\n![Screenshot 2024-10-31 at 14.11.28.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/6250c6ef-c2f1-49cb-bb0b-95a4b5b7780e/c8c9de1d-f75c-4c14-8fea-c58c3ad1aa0f)\n\nPuis cliquer sur \"Selectionner des dates\"\n\n![Screenshot 2024-10-31 at 14.11.55.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/69a9e058-298d-4565-a529-1ef9ca9f9007/4c17ab60-a0b4-4ed8-8afa-0b9808c91e0b)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de la selection des dates lors de la création d'un projet LCM MASTER\n\n🇺🇸Correction of the selection of dates when creating an LCM MASTER project",
            id: "FRONT-1846",
          },
          origin: "linear",
          timestamp: 1730886504000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1956",
              title: "fix(dialog-project): date picker [FRONT-1846]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nfix a bug where date picker wouldn\'t appear when selected\r\n\r\n### QA\r\n\r\n<img width="1470" alt="Capture d’écran 2024-11-06 à 10 16 29" src="https://github.com/user-attachments/assets/252d3582-a503-49f8-9a65-ba55e9e80c80">\r\n\r\n### Scope\r\n\r\nlcm > dialog project > date picker\r\n\r\n### Test URL\r\n\r\nhttps://pr-1956.lcm.live.mobsuccess.com/DriveToStore/d144cca4-4636-11ed-a4b9-d8c497e7bcae/6ca8ff11-4df8-11ed-a4b9-d8c497e7bcae',
              id: 1956,
            },
            {
              url: "",
              origin: "git",
              id: "b4177e4553bcd8fa83d620954d4c1596a9a9edbb",
              title: "fix(dialog-project): date picker [FRONT-1846] (#1956)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1801/bump-tanstackreact-query",
            title: "Bump @tanstack/react-query",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @tanstack/react-query\n* @tanstack/react-query-devtools\n\nLiens utiles :\n\n* [https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-v5](https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-v5)\n* [https://github.com/TanStack/query/discussions/5279](https://github.com/TanStack/query/discussions/5279)\n\nDifférence entre isLoading et isPending :\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/3441615d-9f5c-4eda-9126-a07e0795b30c/3f00143d-2bfd-4344-8e31-10146c1f8d34)\n\n---\n\n## Critère d'acceptation\n\n* Bump toutes ces dépendances\n* Vérifier que tout fonctionne correctement",
            id: "FRONT-1801",
          },
          origin: "linear",
          timestamp: 1730882863000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1905",
              title: "chore: bump react query [FRONT-1801]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nBump @tanstack/react-query and adapt the breaking changes (api related changes)\r\nAlso bump in microservice-client: https://github.com/mobsuccess-devops/microservice-client/pull/1540",
              id: 1905,
            },
            {
              url: "",
              origin: "git",
              id: "44d0c6504b97dc122a462bd1dacd36eba724b0b2",
              title: "chore: bump react query [FRONT-1801] (#1905)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1778/corriger-lerreur-qui-bloque-lacces-a-la-connexion-sur-la-page",
            title:
              "Corriger l'erreur qui bloque l'accès à la connexion sur la page d'authentification des produits MS",
            origin: "linear",
            description:
              "# **Contexte** \n\nParfois lorsque le user tente de se connecter sur la page d'authentification des produits MS, une erreur est renvoyée (pour diverse raison) sur l'endpoint `login-auth` et bloque la connexion \n\n→ In fine le user reste bloqué sur la page d'authentification, et si il appuie à nouveau sur le bouton de connexion, l'endpoint n'est pas rappelé. \nDonc tant qu'il n'ajoute pas manuellement `?action=sign-out` en fin d'url, une boucle sans fin le renvoie sur la page d'authentification, l'empêchant ainsi d'accéder au produit (Cf screen record 👇🏻)\n\n> Hypothèse de Gilles : \"je pense que ça garde les infos de connexion dans le local storage\"\n\n---\n\n# **Comportement voulu**\n\n*Faire en sorte à ce que le user puisse se connecter sans être impacté par les erreurs renvoyés vers* l'endpoint `login-auth`  *et sans avoir besoin d'ajouter manuellement le paramètre* `?action=sign-out` *en fin d'url* \n\n---\n\n# Critères d'acceptations\n\n1. L'utilisateur, si il se connecte avec les bonnes valeurs d'email et mot de passe associées à son compte, doit pouvoir accéder directement au produit concerné et ne pas rester bloqué sur la page d'authentification\n2. Le reste du parcours actuel ne dois pas changer, par exemple si le user se connecte avec email et/ou login erroné, alors un message d'erreur s'affiche et il n'est pas renvoyé sur la page du produit mais reste bien sur la page d'authentification\n\n---\n\n# Scénario de repro \n\n1. *Aller sur* [https://dev.app.mobsuccess.com/auth](https://dev.app.mobsuccess.com/auth), ou sur n'importe quel produit MS et se déconnecter pour revenir sur la page d'authentification\n2. Puis se connecter/déconnecter jusqu'à reproduire l'erreur (random) qui bloque la connexion \n3. Tenter alors de se connecter à nouveau\n4. Constater qu'on est pas renvoyé vers la page de destination, mais qu'on reste bien bloqué sur la page d'authentification\n5. Ajouter manuellement le param `?action=sign-out` en fin d'url\n6. Et constater enfin qu'on accède à la page souhaitée, sans avoir modifié les valeurs de login associée au compte\n\n   [Enregistrement de l’écran 2024-10-23 à 18.41.06.mov](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/fc09f242-3bbe-4d71-9563-5fc316051d00/77de7c48-34e9-439f-9b37-5e8137a8eb21)\n\nN.B: je reproduis le bug de façon random et particulièrement sur Chrome \n\n⚠️ Par contre le soucis est systématique avec un utilisateur inactif ⚠️\n\n---\n\n# **Log**\n\n* Request URL: [https://dev.app.mobsuccess.com/webservices/rest/login-auth](https://dev.app.mobsuccess.com/webservices/rest/login-auth)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de l'erreur qui bloque l'accès à la connexion sur la page d'authentification des produits MS\n\n🇺🇸 Fix of an error blocking access to login on MS product authentication page",
            id: "FRONT-1778",
          },
          origin: "linear",
          timestamp: 1730824292000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1925",
              title:
                "fix(auth): handle error and sign out on login failure [FRONT-1778]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nsignout when the login-auth endpoint fails\n\n### Scope\n\nwebapps/auth\n",
              id: 1925,
            },
            {
              url: "",
              origin: "git",
              id: "b6f28f5218e71f8d15d5e682983fef513ec08fc6",
              title:
                "fix(auth): handle error and sign out on login failure [FRONT-1778] (#1925)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1837/ajouter-le-composant-tagsinput-dans-react-ui",
            title: "Ajouter le composant TagsInput dans react-ui",
            origin: "linear",
            description:
              "## Contexte\n\nAfin d'ajouter des éléments séparés dans une liste dans avoir d'overlap ou de doublons, nous avons besoin du composant TagsInput\n\n---\n\n## Critère d'acceptation\n\n* Le composant TagsInput est créé et exposé dans react-ui\n* Le composant a des tests unitaires\n* Le composant dispose d'une ou plusieurs stories\n* Le composant a un/des tests visuels\n* Le composant permet l'ajout de tag\n* Le composant permet d'enlever des Tags\n* Le composant permet de valider les tags avant de les enregistrer\n* Le composant permet de prévenir l'utilisateur lorsque le tag est invalid\n* Le composant est disponible en form field\n* ~~Le composant est disponible en singleline ET en multiline~~  on verra si necessaire",
            id: "FRONT-1837",
          },
          origin: "linear",
          timestamp: 1730798590000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1941",
              title: "feat: add TagsInput component [FRONT-1837]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- [x] Add `TagsInput` component to react-ui\r\n- [x] Add a story for `TagsInput` component\r\n- [x] Add a test for `TagsInput` component\r\n- [x] Add visual regression test for `TagsInput` component\r\n\r\n### Scope\r\n\r\ncomponents library > tags input\r\n\r\n### QA\r\n\r\n- open storybook\r\n- go to tags input story\r\n- add tags\r\n- remove tags\r\n- add tags with enter\r\n- add tags with comma\r\n- add tags with space\r\n\r\n### Test URL\r\n\r\nhttps://pr-1941.react-ui-storybook.live.mobsuccess.com/?path=/docs/pandaark-tagsinput--docs",
              id: 1941,
            },
            {
              url: "",
              origin: "git",
              id: "d916401a3cf9ca0af9e28539010b5dfdb9461577",
              title: "feat: add TagsInput component [FRONT-1837] (#1941)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1871/autoriser-les-render-props-en-tant-que-children-de-composants",
            title:
              "Autoriser les render props en tant que children de composants",
            origin: "linear",
            description:
              "#### Changelog\n\nAjout de la prise en charge des render props en tant que enfants de composants",
            id: "FRONT-1871",
          },
          origin: "linear",
          timestamp: 1730795429000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1945",
              title:
                "change(eslint): allow render props as children [FRONT-1871]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nallow render props as children (allow factories or ctx providers)\n",
              id: 1945,
            },
            {
              url: "",
              origin: "git",
              id: "636304c38c759f90000370bad2ff1896bd33a2bb",
              title:
                "change(eslint): allow render props as children [FRONT-1871] (#1945)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1866/corriger-le-render-infini-de-la-combobox",
            title: "Corriger le render infini de la combobox",
            origin: "linear",
            description:
              "#### Changelog\n\nSupprimer les decorators lors de la creation de la collection d'item d'un combobox",
            id: "FRONT-1866",
          },
          origin: "linear",
          timestamp: 1730738694000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1943",
              title:
                "fix(select): ensure no decorators within the combobox collection [FRONT-1866]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- remove decorators when creating combobox collection as they appear to cause an infinit render loop\n- make items collection common between single and multi select comboboxes\n\n### Scope\n\ncomponent system > select/combobox\n",
              id: 1943,
            },
            {
              url: "",
              origin: "git",
              id: "e62373f2bef475f9ec4974771fb5676331b3a462",
              title:
                "fix(select): ensure no decorators within the combobox collection [FRONT-1866] (#1943)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1807",
            title: "refactor: select select component [FRONT-1198]",
            origin: "github",
            description:
              '### What does it do? Why?\r\n\r\nUpdate select component to:\r\n - Clean code\r\n - Add tests\r\n - Add tags overflow\r\n - Split single and multiple\r\n While keeping the same API so that no migration is necessary\r\n \r\n<img width="593" alt="image" src="https://github.com/user-attachments/assets/f6af5454-e29b-429a-9fb7-575a55c89138">\r\n \r\n<img width="593" alt="image" src="https://github.com/user-attachments/assets/07ea6c6a-1e4c-4210-a21b-a4b3838ef667">',
            id: 1807,
          },
          origin: "github",
          timestamp: 1730714346000,
          references: [
            {
              url: "",
              origin: "git",
              id: "c89e7511914782cbf82f10e5a0556f3abc7758b4",
              title: "refactor: select select component [FRONT-1198] (#1807)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1849/corriger-endpoint-permet-de-remplacer-le-resultat-de-la-requete",
            title:
              "Corriger: endpoint permet de remplacer le résultat de la requête",
            origin: "linear",
            description:
              "#### Changelog\n\nCorrection de l'endpoint de remplacement des résultats de requête",
            id: "FRONT-1849",
          },
          origin: "linear",
          timestamp: 1730706827000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1939",
              title: "fix: endpoint overides query result [FRONT-1849]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nensure that endpoint overrides query returns a result as react-query expect a defined value (e.g. null) instead of undefined\n",
              id: 1939,
            },
            {
              url: "",
              origin: "git",
              id: "ca6eb9fb7005a2cd0b68dd08ced7d97af37f9233",
              title: "fix: endpoint overides query result [FRONT-1849] (#1939)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1757/bump-les-dependances-dui",
            title: "Bump les dépendances d'UI",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @ark-ui/anatomy\n* @ark-ui/react\n* @emoji-mart/data\n* @emoji-mart/react\n* @dnd-kit/core\n* @dnd-kit/modifiers\n* @dnd-kit/sortable\n* @dnd-kit/utilities\n* @lexical/react\n* @lexical/utils\n* @n8tb1t/use-scroll-position\n* @outdated-tanstack/react-table\n* @pandacss/dev\n* @tanstack/react-form\n* @tanstack/react-table\n* @tanstack/react-virtual\n* @tanstack/zod-form-adapter\n* @react-pdf/renderer\n* emoji-mart\n* lexical\n* recharts\n* react\n* react-colorful\n* react-device-detect\n* react-dom\n* react-horizontal-scrolling-menu\n* react-joyride\n* react-qr-code\n* react-resize-detector\n* react-router-dom\n\nEt mettre styled-components en version bloquée\n\n---\n\n## Critère d'acceptation\n\n* Bump toutes ces dépendances\n* Vérifier que tout fonctionne correctement",
            id: "FRONT-1757",
          },
          origin: "linear",
          timestamp: 1730373769000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1892",
              title: "chore: bump ui deps [FRONT-1757]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- Bump deps related to ui\r\n- Set styled-components version to under v6 because of type issues\r\n- Fix tests with pandacss classes\r\n- Fix forms with api changes\r\n- Change ColorPicker, DatePicker and TimePicker so they still work as before with their value/defaultValue as strings\r\n- Change Select because of an api change from ark\r\n- react-horizontal-scrolling-menu now has types",
              id: 1892,
            },
            {
              url: "",
              origin: "git",
              id: "8f7fec31c91dbf7d875d0b1c0339b2ca75c71b55",
              title: "chore: bump ui deps [FRONT-1757] (#1892)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1530/bump-les-dependances-en-rapport-avec-prettier",
            title: "Bump les dépendances en rapport avec Prettier",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @trivago/prettier-plugin-sort-imports\n* prettier\n\n## Critère d'acceptation\n\n* Bump ces dépendances\n* Formatter des fichiers si besoin",
            id: "FRONT-1530",
          },
          origin: "linear",
          timestamp: 1730302935000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1922",
              title: "chore: bump prettier [FRONT-1530]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nBump prettier and run it, it adds parenthesis around conditions in ternaries",
              id: 1922,
            },
            {
              url: "",
              origin: "git",
              id: "8127b4b90a94ba742a256c0abcc90fd67eee8a75",
              title: "chore: bump prettier [FRONT-1530] (#1922)",
              description: "",
            },
          ],
        },
      ],
    },
    {
      id: "agency",
      description: "Agency list",
      path: "./src/pages/[businessUnit]/index.tsx",
      updates: [
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2046/migrer-les-pages-inaccessibles-du-dashboard-farly-a-pandark",
            title:
              "Migrer les pages inaccessibles du dashboard-farly à Pandark",
            origin: "linear",
            description:
              "## Contexte\n\nCertaines pages du dashboard farly sont inaccessibles, mais il faudrait tout de même les migrer car elles seront sans doute un jour utilisées.\n\nPages :\n\n* /final-numbers\n* /invoices\n* /all-reports\n\nDiscussion slack :\n\n[Slack](https://mobsuccess.slack.com/archives/C04EBKSK0LA/p1732533517011609)",
            id: "FRONT-2046",
          },
          origin: "linear",
          timestamp: 1732702169000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2089",
              title:
                "refactor(blocked-routes): migrate to pandark [FRONT-2046]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nSome pages are not accessible but we still need to migrate them to pandark\r\n\r\n### Scope\r\n\r\n/final-numbers\r\n/invoices\r\n/all-reports\r\n\r\n### QA\r\n\r\n![image](https://github.com/user-attachments/assets/40501c53-fbb5-40b4-a70d-d8dd69d49313)\r\n![image](https://github.com/user-attachments/assets/3a6f0346-bc84-45ad-8c17-9631c536af39)\r\n![image](https://github.com/user-attachments/assets/3d78eb33-b5e1-49a8-877d-56325217ebdd)\r\n\r\n### Test URL\r\n\r\nhttp://localhost:3115/final-numbers?client=flutter&id_account=3239\r\nhttp://localhost:3115/invoices?client=flutter&id_account=3239\r\nhttp://localhost:3115/all-reports?client=flutter&id_account=3239\r\n\r\nNot possible on deployed envs, you need to checkout to the branch and:\r\n- in `/webapps/dashboard-farly/src/pages/_app.tsx`, comment lines 51 to 53\r\n- in `webapps/dashboard-farly/src/components/SidebarProvider/SidebarProvider.tsx`, comment lines 91 and 102",
              id: 2089,
            },
            {
              url: "",
              origin: "git",
              id: "b881c8a3c64a9ab704804ac9c4dbd494ffce3141",
              title:
                "refactor(blocked-routes): migrate to pandark [FRONT-2046] (#2089)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1964/migration-du-datepickersingleday-sur-le-lc0",
            title: "Migration du DatepickerSingleDay sur le LC0",
            origin: "linear",
            description:
              "## Contexte\n\nIl faut remplacer sur le LCO l'ancien composant `<DatePickerSingleDay />` par notre nouveau composant PandaArk `<DatePicker />`\n\n---\n\n## Informations complémentaires\n\n* [https://master.lco.live.mobsuccess.com/](https://master.lcm.live.mobsuccess.com/)\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression",
            id: "FRONT-1964",
          },
          origin: "linear",
          timestamp: 1732696835000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2088",
              title:
                "feat: migrate the datepicker onto lco [FRONT_1964] [FRONT-1964]",
              origin: "github",
              description:
                "### What does it do? Why?\r\nChange the datePickerSingleDay of lco/KitDatRange to the new datePicker (Panda)\r\n### Scope\r\nlco\r\n### QA\r\n\r\n### Test URL\r\nhttps://pr-2088.lco.live.mobsuccess.com/kit/19104c93-f839-4501-9c11-a1d5553d74df?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae",
              id: 2088,
            },
            {
              url: "",
              origin: "git",
              id: "b08fa79b728e5bcafa7fd4905da2ba7bb0f13344",
              title:
                "feat: migrate the datepicker onto lco [FRONT_1964] [FRONT-1964] (#2088)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2085/utiliser-les-imports-type-sur-les-webapps",
            title: "Utiliser les imports type sur les webapps",
            origin: "linear",
            description:
              "`biome lint --only=style/useImportType --write  ./webapps/lcm/src`",
            id: "FRONT-2085",
          },
          origin: "linear",
          timestamp: 1732638143000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2106",
              title:
                "refactor(packages,configs): use import types [FRONT-2085]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nUse import types in preparation for adding `verbatimModuleSyntax` in the tsconfig\r\nUsed `biome lint --only=style/useImportType --write  ./webapps/[webapp]/src`",
              id: 2106,
            },
            {
              url: "",
              origin: "git",
              id: "5e8884f1983f868f4644037fb05e57182d7c583c",
              title:
                "refactor(packages,configs): use import types [FRONT-2085] (#2106)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2086/utiliser-les-imports-type-sur-les-packages-et-configs",
            title: "Utiliser les imports type sur les packages et configs",
            origin: "linear",
            description:
              "`biome lint --only=style/useImportType --write  ./webapps/lcm/src`",
            id: "FRONT-2086",
          },
          origin: "linear",
          timestamp: 1732637287000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2105",
              title: "refactor(webapps): use import types [FRONT-2086]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nUse import types in preparation for adding `verbatimModuleSyntax` in the tsconfig\r\nUsed `biome lint --only=style/useImportType --write  ./webapps/[webapp]/src`",
              id: 2105,
            },
            {
              url: "",
              origin: "git",
              id: "69fb2483d8c4118d02c8e536de7b4505d0a4bf17",
              title: "refactor(webapps): use import types [FRONT-2086] (#2105)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2058/migrer-les-derniers-call-apis-du-lcm-vers-des-appel-react-client",
            title:
              "Migrer les derniers call apis du lcm vers des appel react-client",
            origin: "linear",
            description:
              "#### Changelog\n\nMigration des derniers appels APIs du LCM vers l'appel client React",
            id: "FRONT-2058",
          },
          origin: "linear",
          timestamp: 1732615734000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2091",
              title: "chore(rdc-migration): remove rdc references [FRONT-2058]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- remove rdc related code from lcm\r\n- migrate verify api call\r\n- migrate audiences retrieval (still direct call to platform but using axiosGet)\r\n- migrate facebook account listing\r\n",
              id: 2091,
            },
            {
              url: "",
              origin: "git",
              id: "35f9e6c1b931e3ff20d5666ee9118cededca0c87",
              title:
                "chore(rdc-migration): remove rdc references [FRONT-2058] (#2091)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2059/retirer-le-code-mort-de-react-ui",
            title: "Retirer le code mort de react-ui",
            origin: "linear",
            description:
              "#### Changelog\n\nSuppression des codes morts de react-ui",
            id: "FRONT-2059",
          },
          origin: "linear",
          timestamp: 1732554823000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2092",
              title:
                "chore(knip): cleanup unused exports react-ui [FRONT-2059]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nuse knip to remove unused `export` statements\ndetect unused code with eslint (exported code was ignore by eslint -- removing export statements allows eslint to detect unused code)\n",
              id: 2092,
            },
            {
              url: "",
              origin: "git",
              id: "8f39ac3b271ef2295d1bac4be40915b2ebb85c6b",
              title:
                "chore(knip): cleanup unused exports react-ui [FRONT-2059] (#2092)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2057/nettoyer-les-fonctions-exportations-types-inutilises-du-lcm-knip-tache",
            title:
              "Nettoyer les fonctions / exportations / types inutilisés du LCM (knip) - tâche interne",
            origin: "linear",
            description:
              "#### Changelog\n\nNettoyage des fonctions inutilisées du LCM (knip) effectué pour améliorer la performance du produit",
            id: "FRONT-2057",
          },
          origin: "linear",
          timestamp: 1732548370000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2090",
              title:
                "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nuse knip to remove unused `export` statements\ndetect unused code with eslint (exported code was ignore by eslint -- removing export statements allows eslint to detect unused code)\n",
              id: 2090,
            },
            {
              url: "",
              origin: "git",
              id: "84ca8bfba9e81dd4209edaa03e6f5d0952a5a489",
              title:
                "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057] (#2090)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2044/migrer-le-blockloader-du-lcm-auth",
            title: "Migrer le BlockLoader du LCM + Auth",
            origin: "linear",
            description:
              "## Contexte\n\nNous avons un nouveau loader: `Loader.Block`\n\n---\n\n## **Description du Problème**\n\nRetirer les anciennes utilisation du `BlockLoader`\n\n---\n\n## Informations complémentaires\n\n* faire que le LCM\n\n---",
            id: "FRONT-2044",
          },
          origin: "linear",
          timestamp: 1732547702000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2086",
              title: "refactor: use loader dot block [FRONT-2044]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n- Replace `BlockLoader` by `Loader.Block`\r\n  - LCM\r\n  - Auth\r\n\r\n### Score\r\n\r\nLCM & Auth\r\n\r\n### QA\r\n\r\nLCM\r\n\r\n<img width="1452" alt="lcm1" src="https://github.com/user-attachments/assets/afe130cc-c582-44a1-ad09-494b7962d812">\r\n<img width="1452" alt="lcm3" src="https://github.com/user-attachments/assets/8b8904cd-2dac-4378-945d-94e3a85ac843">\r\n\r\nAuth\r\n\r\n<img width="1452" alt="auth" src="https://github.com/user-attachments/assets/4eccdf09-41f4-42c2-86be-faac58b807ad">\r\n\r\n\r\n',
              id: 2086,
            },
            {
              url: "",
              origin: "git",
              id: "b84e63e8382283601c22f04decca3ebe3f5b87f7",
              title: "refactor: use loader dot block [FRONT-2044] (#2086)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2037/mettre-a-jour-lales-pages-dannonceur-sur-le-meme-format-que-les-pages",
            title:
              "Mettre à jour la/les pages d'annonceur sur le même format que les pages annonce",
            origin: "linear",
            description:
              "#### Changelog\n\nMise à jour du format des pages d'annonceur pour correspondre aux pages annonce",
            id: "FRONT-2037",
          },
          origin: "linear",
          timestamp: 1732536219000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2077",
              title: "change(migration-rdc): advertiser page [FRONT-2037]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- migrate advertiser table page\n  - add new table\n  - display more advanced informations\n- add /create page for advertisers (using the same form)\n- add /edit/:uui page for advertisers (using the same form)\n\n### Scope\n\nmigration lcm\n",
              id: 2077,
            },
            {
              url: "",
              origin: "git",
              id: "575b3e2f12f68e7d09bb5ba6ab1504436380e241",
              title:
                "change(migration-rdc): advertiser page [FRONT-2037] (#2077)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2034/retirer-les-layout-de-rui-qui-forward-panda",
            title: "Retirer les Layout de RUI qui forward Panda",
            origin: "linear",
            description:
              '## Contexte\n\nPanda est notre framework pour le design system\n\n---\n\n## **Description du Problème**\n\nPour ne pas nous coupler fortement avec PandaCSS, nous avions faire une facade pour "forwarder" les composants de Layout et garder leur "responsabilité" chez nous\n\nDans la pratique, nous utilisons directement les composant de PandaCSS sans passer par les notres.\n\n---\n\n## Critère d\'acceptation\n\n* retirer ces composants Layout',
            id: "FRONT-2034",
          },
          origin: "linear",
          timestamp: 1732279334000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2071",
              title:
                "refactor: remove forwarded layout components [FRONT-2034]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- Remove forwarded layout components\r\n- Update imports",
              id: 2071,
            },
            {
              url: "",
              origin: "git",
              id: "f8319ac227f737a8912c80a36b00d1e89b1c0d4c",
              title:
                "refactor: remove forwarded layout components [FRONT-2034] (#2071)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1906/migrer-le-nouveau-table-de-la-page-overview-du-dashboard-farly",
            title:
              "Migrer le nouveau Table de la page `Overview` du Dashboard-farly",
            origin: "linear",
            description:
              "## Contexte\n\nNous devons migrer le nouveau Table `Performances summary` sur la page  `Overview` du Dashboard-farly\n\n---\n\n## Informations complémentaires\n\n* [https://master.dashboard-farly.live.mobsuccess.com/overview?client=flutter&id_account=3239&ran\\[…\\]0Z&range_filterend=2024-10-01T22%3A00%3A00.000Z](https://master.dashboard-farly.live.mobsuccess.com/monetization?client=flutter&id_account=3239&range_filterstart=2024-09-30T22%3A00%3A00.000Z&range_filterend=2024-10-01T22%3A00%3A00.000Z)\n* \n\n  ![Capture d’écran 2024-11-08 à 16.24.54.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/59862a90-d6ed-44a0-8023-df785c70749e/1584febb-6296-4659-aae0-dab7bd2c14d2)\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression par rapport à l'ancien Table ",
            id: "FRONT-1906",
          },
          origin: "linear",
          timestamp: 1732271220000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2021",
              title: "refactor(overview): use pandark table [FRONT-1906]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nReplace old table with pandark table\r\n\r\n### Scope\r\n\r\nOverview\r\n\r\n### QA\r\n\r\n![Screenshot 2024-11-18 at 16 42 25](https://github.com/user-attachments/assets/640c479d-0029-4e12-8462-3fc30f694e49)\r\n\r\n### Test URL\r\n\r\nhttps://pr-2021.dashboard-farly.live.mobsuccess.com/overview?client=flutter&id_account=3239&range_filterstart=2024-07-31T22:00:00.000Z&range_filterend=2024-10-30T23:00:00.000Z",
              id: 2021,
            },
            {
              url: "",
              origin: "git",
              id: "4d071d877dd92ed44711bce44403268402684971",
              title:
                "refactor(overview): use pandark table [FRONT-1906] (#2021)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1946/migration-de-linput-sur-le-package-react-shared",
            title: "Migration de l'Input sur le package React-shared",
            origin: "linear",
            description:
              "## Contexte\n\nIl faut remplacer sur le package React-shared l'ancien composant `<AdvancedInput />` par notre nouveau `<Input />` pandaArk.\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression",
            id: "FRONT-1946",
          },
          origin: "linear",
          timestamp: 1732208956000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2055",
              title:
                "change: migrate AdvancedInput to panda input [FRONT-1946]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- migrate `<AdvancedInput />` to `<Input.Root />` in react-shared\r\n  - migrate `Login`\r\n  - migrate `ForgotPassword`\r\n  - migrate `ResetPassword`\r\n\r\n### Scope\r\n\r\nmigration > panda\r\n\r\n\r\n### Tests\r\n\r\n[Login](https://pr-2055.auth.live.mobsuccess.com/)\r\n\r\n![image](https://github.com/user-attachments/assets/e85defa4-4c06-4b5c-ad83-eb031ce4baf9)\r\n\r\n[Forgot Password](https://pr-2055.auth.live.mobsuccess.com/?action=forgot-password)\r\n\r\n![image](https://github.com/user-attachments/assets/825365fa-4056-463a-84e6-e056970f4b41)\r\n\r\n[Reset Password](https://pr-2055.auth.live.mobsuccess.com/?action=reset-password)\r\n\r\n![image](https://github.com/user-attachments/assets/03090473-da1e-480a-81a9-f85786e572ef)\r\n",
              id: 2055,
            },
            {
              url: "",
              origin: "git",
              id: "57330cd9cc9ae11fd7a3020e90e95eed1791c76b",
              title:
                "change: migrate AdvancedInput to panda input [FRONT-1946] (#2055)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1918/migrer-la-page-agence-vers-un-table-pandaark",
            title: "Migrer la page agence vers un table PandaArk",
            origin: "linear",
            description:
              "* Utiliser un Table dans la page de séléction d'Agence\n* Migrer les appels api vers des endpoints typés\n\n#### Changelog\n\nAjout des endpoints typés pour les pages d'agence  + Utiliser un Table dans la page de séléction d'Agence",
            id: "FRONT-1918",
          },
          origin: "linear",
          timestamp: 1732196340000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1981",
              title: "feat: use typed endpoint for agency pages [FRONT-1918]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- use typed endpoints from lcm-microservice to list agencies\n- use table to display agencies instead of custom list\n- use forms apis for creating and updating agencies\n\n### Scope\n\nagencies > list/create/update\n",
              id: 1981,
            },
            {
              url: "",
              origin: "git",
              id: "bbbae9ad3efd48b4268d96931c65c632d8764f3f",
              title:
                "feat: use typed endpoint for agency pages [FRONT-1918] (#1981)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2019/ameliorer-le-styling-de-dialog-fileupload-image-et-table-dans-react-ui",
            title:
              "Améliorer le styling de Dialog FileUpload Image et Table dans react-ui",
            origin: "linear",
            description:
              "#### Changelog\n\nAmélioration du styling de Dialog, FileUpload, Image et Table dans react-ui",
            id: "FRONT-2019",
          },
          origin: "linear",
          timestamp: 1732114253000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2051",
              title:
                "change: update styling in Dialog FileUpload Image and Table components [FRONT-2019]",
              origin: "github",
              description:
                '### What does it do? Why?\n\n- allow css props to be passed to `Image` component (using `styled()` wrapper from pandacss)\n- ensure `FileLoader` to have a 100% height instead of auto\n- provide an "all className" meta property for table rows (avoiding passing cell.className, header.className, footer.className for the same class)\n- update `Dialog` to use flex instead of grid -- this avoid a bug when a dialog does not have a description but keeps adding a gap between the title and description AND description and content\n\n### Scope\n\nreact-ui > styling\n',
              id: 2051,
            },
            {
              url: "",
              origin: "git",
              id: "9b7627a661ad6ea8fe4cdf70d4663ed173943625",
              title:
                "change: update styling in Dialog FileUpload Image and Table components [FRONT-2019] (#2051)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1942/migration-de-linput-sur-le-lmp",
            title: "Migration de l'Input sur le LMP",
            origin: "linear",
            description:
              "## Contexte\n\nIl faut remplacer sur le LMP l'ancien composant `<AdvancedInput />` par notre nouveau `<Input />` pandaArk.\n\n---\n\n## Informations complémentaires\n\n* [https://master.lmp.live.mobsuccess.com/](https://master.lcm.live.mobsuccess.com/)\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression",
            id: "FRONT-1942",
          },
          origin: "linear",
          timestamp: 1732099468000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2036",
              title:
                "refactor(lmp): replace advanced input with panda input [FRONT-1942]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n<img width="1111" alt="image" src="https://github.com/user-attachments/assets/9b65a990-d775-463e-a986-0d43439ac684">\r\n\r\n<img width="1111" alt="image" src="https://github.com/user-attachments/assets/8ee2e237-243e-4f54-9259-38b08934d435">',
              id: 2036,
            },
            {
              url: "",
              origin: "git",
              id: "4fa9b4f5050ec9ee172d22109fa33b8a95082cee",
              title:
                "refactor(lmp): replace advanced input with panda input [FRONT-1942] (#2036)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1992/corriger-lapparition-du-grey-screen-suite-a-la-creation-dune-agence",
            title:
              "Corriger l'apparition du grey screen suite à la création d’une agence",
            origin: "linear",
            description:
              "# **Contexte (parcours d’entrée)**\n\nActuellement, lors de l’ajout d’une nouvelle agence dans le Local Campaign Manager, un grey screen apparaît après la validation.\n\nDe plus, lorsque l’utilisateur tente de rouvrir l’agence précédemment créée, le même écran gris réapparaît systématiquement, empêchant l'accès ou la modification des informations de l’agence nouvellement ajoutée.\n\n[Enregistrement de l’écran 2024-11-18 à 15.18.05.mov](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/ad9cd470-4436-46bc-8c5f-ff4b2b8fe8d2/4dc79e51-1c58-48da-b86f-cf7cbf10d25b)\n\n---\n\n# **Comportement voulu**\n\nIl faudrait que, lors de l’ajout d’une nouvelle agence, le LCM doit permettre à l’utilisateur de poursuivre son parcours sans grey screen. La validation de l’ajout doit aboutir soit une redirection automatique vers la page suivante (->Annonceur). L’interface ne doit plus afficher de grey screen, que ce soit après la validation de l’ajout ou lors d’une tentative d’ouverture de l’agence nouvellement créée.\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. Si l’utilisateur ajoute une nouvelle agence, il doit être automatiquement redirigé vers la page suivante(->annonceur).\n2. Si l’utilisateur tente d’ouvrir l’agence nouvellement créée, il doit pouvoir y accéder sans rencontrer de gray screen.\n3. Si l’utilisateur consulte la liste des agences, les informations de l’agence récemment ajoutée doivent s’afficher correctement.\n\n---\n\n# Scénario de repro \n\n1. Connectez-vous à la plateforme LCM.\n2. Naviguez vers l’onglet permettant l’ajout d’une agence.\n3. Cliquez sur **“+ Ajouter une agence”**.\n4. Remplissez les champs obligatoires (nom, logo, sales associé, etc.).\n5. Validez l’ajout.\n6. Observez le grey screen après la validation.\n\n---\n\n# **Informations complémentaires**\n\nPNG Logo : \n\n![mobsuccess_logo.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/968ce8d9-fa12-42de-8e3d-1a6a7db80fe5/4d44006f-c48d-4cce-9b2d-9acb3d06aafd)\n\n---\n\n# Changelog\n\n🇫🇷  Correction du gray screen à la création d’une agence\n\n🇺🇸 Fixed the grey screen when creating en agency ",
            id: "FRONT-1992",
          },
          origin: "linear",
          timestamp: 1732024250000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2032",
              title: "fix: dynamic workspace emptysate [FRONT-1992]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- fix empty states in dynamic workspace provider (missing required icon)\r\n- filter empty agencies in account picker (newly returned by php)\r\n",
              id: 2032,
            },
            {
              url: "",
              origin: "git",
              id: "ec95054e5ff8479265d28e57dda4c16d47ed6b5c",
              title: "fix: dynamic workspace emptysate [FRONT-1992] (#2032)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1983/corriger-le-select-du-pourcentage-dun-item-de-kit-externe-sur-le",
            title:
              "Corriger le select du pourcentage d'un item de kit externe sur le backoffice LCO master",
            origin: "linear",
            description:
              "# **Contexte (parcours d’entrée)**\n\nActuellement sur master nous pouvons constater que le select de pourcentage d'une variation ne fonctionne plus. Nous sommes bloqué sur \"en €\"\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/5a5eea81-a108-4174-ad48-affbaa71f05b/28b27b3d-8034-4bb6-a6a8-aaff11fd9790)\n\n---\n\n# **Comportement voulu**\n\n*Pouvoir sélectionner le type en percent sur les items d'un kit externe*\n\n---\n\n# Scénario de repro \n\n1. *Se rendre sur ce kit :* [https://master.lco.live.mobsuccess.com/admin/external-kit/e1566c6c-c88a-4719-935b-19d28a67e03b?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae](https://master.lco.live.mobsuccess.com/admin/external-kit/e1566c6c-c88a-4719-935b-19d28a67e03b?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae)\n2. Constater que le choix de type percent n'est pas possible\n\n---\n\n# Changelog\n\n🇫🇷 Correction du select du pourcentage d'un item de kit externe sur le backoffice LCO master\n\n🇺🇸 Fix the variation type select on external kit",
            id: "FRONT-1983",
          },
          origin: "linear",
          timestamp: 1731942551000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2022",
              title: "fix: add portal to select [FRONT-1983]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nAdds Portal to select dropdown.\r\nThe dropdown was previously a child of the input and not displayed when overflowing.\r\nThis issue affected only select components that were descendent of an input, ie `InputAddons`\r\n\r\n<img width="595" alt="image" src="https://github.com/user-attachments/assets/c14b7798-f013-4913-8cdf-5a44e58e192b">\r\n\r\n### Test URL\r\n\r\nhttps://pr-2022.lco.live.mobsuccess.com/admin/external-kit/80eaeba4-4719-4690-9a79-bca9c8c06aff?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae',
              id: 2022,
            },
            {
              url: "",
              origin: "git",
              id: "699c591d53b452fd1e0f8b5e263f187ef3954298",
              title: "fix: add portal to select [FRONT-1983] (#2022)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1967/ajouter-le-workspace-provider-au-lcm",
            title: "Ajouter le workspace provider au lcm",
            origin: "linear",
            description: "#### Changelog\n\nAjout du workspace provider au lcm",
            id: "FRONT-1967",
          },
          origin: "linear",
          timestamp: 1731667040000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2002",
              title:
                "feat(worksapace): add dynamic workspace for lcm [FRONT-1967]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- add dynamic workspace provider (and rename the existing one to `static`)\n- add the new `dynamic` workspace provider to the lcm\n- fix it's tests\n",
              id: 2002,
            },
            {
              url: "",
              origin: "git",
              id: "0dd3ca72ce7f5da6aa650e5b41083da20406c6f8",
              title:
                "feat(worksapace): add dynamic workspace for lcm [FRONT-1967] (#2002)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1820/integrer-le-theme-leroy-merlin-sur-le-lco",
            title: "Intégrer le thème Leroy Merlin sur le LCO",
            origin: "linear",
            description:
              "# User Story\n\nEn tant qu'équipe conseil et partenariat\n\nJe souhaites faire une démo du LCO au couleur de Leroy merlin\n\nPour gagner un appel d'offre\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. Le thème est disponible pour le client Leroy merlin uniquement (client_id : 9a7f9b94-7211-4daa-98a7-6cf21cf54266)\n2. Le thème Leroy Merlin doit s'appliquer à l'ensemble du LCO: couleurs, typographies, icônes etc..\n3. Les couleurs doivent correspondre à la charte graphique de Leroy merlin\n4. Les éléments d'interface (boutons, barres de navigation, sections) doivent être adaptés au design Leroy Merlin\n5. L'intégration du thème correspond au maquettes figma\n\n---\n\n# **Comportement voulu**\n\nLe LCO doit afficher automatiquement le thème Leroy Merlin pour les utilisateurs identifiés comme clients Leroy merlin.\n\n---\n\n# **Informations complémentaires**\n\nPalette colors Leroy Merlin : \n\n[Primary Leroy Merlin - Local Campaign Order (Figma)](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12095-87475&t=dVj2A3FLf4XECYUY-4)\n\nFigma : [https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12046-70492&t=SIn5jwwUQUUdTsmX-4](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12046-70492&t=SIn5jwwUQUUdTsmX-4)\n\n---\n\n## Product Designer 🧑‍🎨 \n\n@rosanora @anne-sophie.doumenge \n\n---\n\n# Changelog\n\n🇫🇷  Intégration du theme Leroy Merlin sur le LCO\n\n🇺🇸 Integration of Leroy merlin theme on the LCO",
            id: "FRONT-1820",
          },
          origin: "linear",
          timestamp: 1731665548000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1993",
              title: "feat: add leroy merlin theme [FRONT-1820]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n<img width="1659" alt="image" src="https://github.com/user-attachments/assets/fd627eb2-dc12-4b40-a54c-ed17c198a474">',
              id: 1993,
            },
            {
              url: "",
              origin: "git",
              id: "1d393c4352f7952fa90d041aafa3812693bd227f",
              title: "feat: add leroy merlin theme [FRONT-1820] (#1993)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1928/alert",
            title: "Alert",
            origin: "linear",
            description: "",
            id: "FRONT-1928",
          },
          origin: "linear",
          timestamp: 1731580746000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1987",
              title: "test: add visual tests for alert component [FRONT-1928]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- Add visual tests for Alert component\r\n\r\n### QA\r\n\r\nSee files diff\r\n",
              id: 1987,
            },
            {
              url: "",
              origin: "git",
              id: "17d8f1a55246d33a112aad036ee92f4319d287ea",
              title:
                "test: add visual tests for alert component [FRONT-1928] (#1987)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1929/integrer-le-workspace-context-dans-le-dashboard-farly-et-mettre-a-jour",
            title:
              "Intégrer le workspace context dans le dashboard farly et mettre à jour les endpoints d'agences/annonceur",
            origin: "linear",
            description:
              "#### Changelog\n\nIntégrer le workspace context dans le dashboard farly et mettre à jour les endpoints d'agences/annonceur",
            id: "FRONT-1929",
          },
          origin: "linear",
          timestamp: 1731517993000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1988",
              title:
                "change(workspace): update workspace api endpoint to use typed one [FRONT-1929]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- type correctly workspace api calls by using newly created endpoints\n- use workspace api in `dashboard-farly` project\n- remove `react-data-context` from `dashboard-farly` project\n",
              id: 1988,
            },
            {
              url: "",
              origin: "git",
              id: "8c326576060bde330e2b43c6210aaed779889385",
              title:
                "change(workspace): update workspace api endpoint to use typed one [FRONT-1929] (#1988)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1865/enlever-les-ts-nocheck-dans-geoplannerlocation",
            title: "Enlever les ts-nocheck dans Geoplanner/Location/",
            origin: "linear",
            description:
              "## Contexte\n\nDeux fichiers ont le typecheck désactivé, le ts-nocheck a été mis avant la création des react-client.\n\n---\n\n## Critère d'acceptation\n\n* Plus aucun ts-nocheck dans le composant\n* Pas de regression au niveau du comportement\n* Tests unitaires des fonctions logiques/métier",
            id: "FRONT-1865",
          },
          origin: "linear",
          timestamp: 1731490002000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1960",
              title: "refactor: remove ts-nocheck from Geoplanner [FRONT-1865]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nRemove ts-nochecks from Geoplanner\r\n - Add SVGElement as a type of anchor for Dropdown\r\n - Migrate Location AdvancedSelect to Select\r\n - Add generic type to Select value (defaults to string)\r\n - use `GeoplannerLocalisationResultAdapter["type"]` insteand of `GeoplannerLocalisationTypeEnum` type is a union, cf https://github.com/mobsuccess-devops/lcm-microservice/blob/2b8df97f52a84fdde388c479ca6b9b1d976a6721/chalicelib/models/geoplanner_localisation_model.py#L31)\r\n\r\n### QA\r\n\r\ntypecheck',
              id: 1960,
            },
            {
              url: "",
              origin: "git",
              id: "5c9dcfc3362f1f7a914e6425b5826b9d14155d68",
              title:
                "refactor: remove ts-nocheck from Geoplanner [FRONT-1865] (#1960)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1748/ajouter-les-alertes-sur-la-vue-mpc-pour-informer-lutilisateur-des",
            title:
              "Ajouter les alertes sur la vue MPC pour informer l’utilisateur des jours restants avant la date limite de configuration du PAC",
            origin: "linear",
            description:
              "# User Story\n\n*Actuellement sur la vue MPC du LCO, il n'y aucune alerte de disponible. \nEn revanche, on peut voir sur la page panier un compte à rebours indiquant le nombre de jours restants au user pour finaliser la configuration du PAC* ⬇️ : \n\n![Capture d’écran 2024-10-16 à 15.26.29.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/116212aa-b303-464a-95bc-2523ea10f1f5/3e464a55-8061-4386-82d8-93c9be4cd215)\n\n**En tant que :** *Utilisateur Client du LCO,* \n\n**Je souhaite :** être informé du nombre de jours restants avant l'expiration de mon PAC (à J-X, J-3, J-2, J-1 et le Jour J), sur la vue MPC\n\n**Pour que :** m'assurer que je ne rate pas l'opportunité de finaliser mon engagement avant la date limite.\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. L'utilisateur voit une pastille lui indiquant le nombre de jours restants pour configurer son PAC (lorsque nous sommes à J-4 ou plus).\n2. L'utilisateur voit une alerte à J-3, J-2, J-1 et le Jour J indiquant le nombre de jours restants pour configurer son PAC.\n3. Les alertes doivent être visibles sur la vue MPC du LCO.\n4. Chaque alerte peut être retirée manuellement par l'utilisateur.\n5. Le design des alertes doit être conforme aux maquettes en fonction des 5 cas présentés. \n6. Les alertes doivent apparaître automatiquement, sans action supplémentaire de l'utilisateur.\n7. Si l'utilisateur ferme l'alerte, puis quitte la vue MPC (ex. : en allant sur la page panier) et revient ensuite sur la vue MPC, l'alerte doit réapparaître automatiquement.\n8. Les alertes doivent disparaître après la finalisation de la configuration du PAC -> une fois la commande validée ou à la date d'expiration.\n\n---\n\n# **Comportement voulu**\n\nLes alertes doivent s'afficher sous forme de bannières dans la vue MPC à des moments spécifiques. \n\n1. Lorsque nous sommes à J-X, avec x >/ = à 4 -> la vue MPC doit afficher la pastille suivante ⬇️ : \n\n![Operations commerciales-done 3.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/fa0da861-5686-4e14-bcd3-2fe05b279a4f/2484aa15-5cb4-4bff-af04-fd28a37bddd8)\n\n2. Lorsque nous sommes à J-3, la vue MPC doit afficher l'alerte suivante ⬇️ : \n\n![Operations commerciales-done 4.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/53804a0b-9be1-4614-a302-7255dd37dc68/8675a120-eb55-4ee0-ad72-ed4b62c7db92)\n\n3. Lorsque nous sommes à J-2, la vue MPC doit afficher l'alerte suivante ⬇️ : \n\n![Operations commerciales-done 5.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/dc063275-23d5-4b04-aff7-040c37b5c5dc/47d4952d-d859-4af1-bd3f-77d74ebb544f)\n\n3. Lorsque nous sommes à J-1, la vue MPC doit afficher l'alerte suivante ⬇️ :\n\n![Operations commerciales-done 6.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/c249e85a-8f60-4932-a84e-8e693a102e3f/e398f34c-9788-4814-a982-19f65e270e8a)\n\n4. Lorsque nous sommes le jour J, la vue MPC doit afficher l'alerte suivante ⬇️ :\n\n![Operations commerciales-done 7.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/0fa0ee48-ebca-4b0d-bc73-e8cb3527efac/ef841b97-0820-4442-8fdd-5dcc4807325a)\n\n---\n\n# **Informations complémentaires**\n\n*Maquette Figma :* \n\n[Alerte configuration PAC - Local Campaign Order (Figma)](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=10168-146592&t=PdvOiAYYigq8dXiX-1)\n\n---\n\n## Product Designer 🧑‍🎨 \n\n@anne-sophie.doumenge @rosanora \n\n---\n\n# Changelog\n\n🇫🇷  Ajout d’alertes sur la vue PAC pour informer l’utilisateur des jours restants (J-X, J-3, J-2, J-1, Jour J) avant la date limite de configuration de son PAC\n\n🇺🇸 Adding alerts on the MPC view to notify the user of the remaining days (J-X, J-3, J-2, J-1, Day J) before the PAC configuration deadline.",
            id: "FRONT-1748",
          },
          origin: "linear",
          timestamp: 1731488282000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1978",
              title: "feat(lco): mpc date alert [FRONT-1748]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/88cc32e6-3ffd-468d-859e-cb837c1846d2">\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/47d12524-cbb2-4c98-9af8-eece923f4387">\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/c14ad6f6-8ff1-4ce4-b1bf-0d488ad9bb4b">\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/0290e437-b458-4a3c-90f6-6d079253f2eb">\r\n\r\n### Test URL\r\n\r\nhttps://pr-1978.lco.live.mobsuccess.com/mpc/028e3c20-49ad-434b-aebb-75751652cc36?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae',
              id: 1978,
            },
            {
              url: "",
              origin: "git",
              id: "456c31c93be7021310eae364269d20fc971475ea",
              title: "feat(lco): mpc date alert [FRONT-1748] (#1978)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1917/changer-le-composant-de-fileupload-pour-utiliser-une-composition",
            title:
              "Changer le composant de FileUpload pour utiliser une composition plutôt que des props",
            origin: "linear",
            description:
              "#### Changelog\n\nModification du composant de FileUpload pour utiliser une composition au lieu de props",
            id: "FRONT-1917",
          },
          origin: "linear",
          timestamp: 1731424850000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1980",
              title:
                "change(FileUpload): make component use composition api instead of props [FRONT-1917]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nmake `FileUpload` component use composition api instead of props\n",
              id: 1980,
            },
            {
              url: "",
              origin: "git",
              id: "ea057bfa1b0c715bbc5f1979c00413c2d1230384",
              title:
                "change(FileUpload): make component use composition api instead of props [FRONT-1917] (#1980)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1712/ajouter-la-donnee-de-ctr-dans-la-phrase-sur-la-page-campagnes",
            title:
              "Ajouter la donnée de CTR dans la phrase sur la page campagnes",
            origin: "linear",
            description:
              '# User Story\n\n*Actuellement sur le Dashboard, la donnée CTR (Click Through Rate) n\'est pas affiché au niveau de la page "Campagne".* \n\n**En tant que :** *Adops, Client*\n\n**Je souhaite :** Afficher la donnée CTR sur la page "Campagne" du Dashboard\n\n**Pour que :** Les utilisateurs puissent visualiser rapidement ce KPI sans avoir à passer par la vue "Rapports détaillés"\n\n![Capture d’écran 2024-09-20 à 17.43.34.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/b0f82c5b-15ba-4ebe-953d-5d039a8ebc48/1439e9a3-de6d-485e-835a-ba7de34e82a6)\n\n---\n\n# Critères d\'acceptations (entre 5 et 9) \n\n1. La donnée CTR est visible sur la page "Campagne" du Dashboard, dans la section des KPI clés.\n2. Le CTR est calculé de manière identique à la vue "Rapports détaillés".\n3. Le format d\'affichage du CTR correspond à celui utilisé dans les "Rapports détaillés" (valeur en pourcentage avec deux décimales).\n4. Les utilisateurs peuvent voir cette donnée sans avoir besoin d\'interagir avec d\'autres éléments de la page (visible par défaut).\n5. Si aucune donnée n’est disponible pour une campagne, ne pas afficher la donnée. Exemple : -> Si jamais 0% sur un levier alors on l\'affiche pas (Waze)\n6. La fonctionnalité est responsive, s’adaptant correctement aux différents formats d’écran (desktop et mobile).\n\n---\n\n# **Comportement voulu**\n\nAjouter la donnée de CTR dans l’onglet campagne du dashboard ⬇️ : \n\n![Campagne.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/437aa7de-5df1-452e-8034-445538ac9c46/20dafe0b-e91c-4613-af1b-adee2b3b667d)\n\n---\n\n# **Informations complémentaires**\n\n*URL Master Dashboard :* [https://master.dashboard.live.mobsuccess.com/campaign?client=intersport&id_account=130&id_id_app=SU5URVJTUE9SVCAtIEpPVVJTIFNBTlMgU0UgUFJJVkVSIC0gMjgvMTI&store_id=\\*](https://master.dashboard.live.mobsuccess.com/campaign?client=intersport&id_account=130&id_id_app=SU5URVJTUE9SVCAtIEpPVVJTIFNBTlMgU0UgUFJJVkVSIC0gMjgvMTI&store_id=\\*)\n\nLien du thread slack de la demande métier : [https://mobsuccess.slack.com/archives/C02FE624H3L/p1726133017050289](https://mobsuccess.slack.com/archives/C02FE624H3L/p1726133017050289)\n\nMaquette Figma : [https://www.figma.com/design/Y01Yb7m6At4StC0NEoqjMH/Dashboard?node-id=3873-46467&node-type=frame&t=JCOB5CKXfQUSyvXd-0](https://www.figma.com/design/Y01Yb7m6At4StC0NEoqjMH/Dashboard?node-id=3873-46467&node-type=frame&t=JCOB5CKXfQUSyvXd-0)\n\n---\n\n## Product Designer 🧑‍🎨 \n\n@anne-sophie.doumenge \n\n---\n\n# Changelog\n\n🇫🇷  Ajout de l\'affichage du KPI CTR sur la page "Campagne" du Dashboard\n\n🇺🇸 Added CTR metric display on the Campaign page of the Dashboard',
            id: "FRONT-1712",
          },
          origin: "linear",
          timestamp: 1731059138000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1963",
              title: "feat(campaigns): add ctr data [FRONT-1712]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nAdd a new card about CTR\r\nAlso rework the first card to use PandArk\r\n\r\n### Scope\r\n\r\nCampaign page > First block\r\n\r\n### QA\r\n\r\n![Screenshot 2024-11-07 at 12 12 09](https://github.com/user-attachments/assets/ef61e6bd-f6b0-446a-878c-9eeaf0ca42ea)\r\n\r\n### Test URL\r\n\r\nhttps://pr-1963.dashboard.live.mobsuccess.com/campaign?id_id_app=SU5URVJTUE9SVCAtIEpPVVJTIFNBTlMgU0UgUFJJVkVSIC0gMjgvMTI&client=intersport&id_account=130",
              id: 1963,
            },
            {
              url: "",
              origin: "git",
              id: "7c41a997653b410b218fdd43d215488a54ba4e90",
              title: "feat(campaigns): add ctr data [FRONT-1712] (#1963)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1892/corriger-les-imports-relatifs-des-packages",
            title: "Corriger les imports relatifs des packages",
            origin: "linear",
            description:
              "Dans nos webapps certaines fonctions ou composants sont importés via un chemin relatif vers le package.\ni\n\n```\nimport { replaceTextInBlob } from \"../../../../../../packages/react-shared/src/public/utils/replace-text-blob\";\n```\n\n​​Il faudrait corriger les chemins d'import, et mettre en place une règle eslint qui permet d'éviter ces erreurs",
            id: "FRONT-1892",
          },
          origin: "linear",
          timestamp: 1730997549000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1965",
              title: "refactor: fix import paths from packages [FRONT-1892]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nfix relative import paths to packages\r\nadd eslint rule",
              id: 1965,
            },
            {
              url: "",
              origin: "git",
              id: "ed07f19ebe8191fcd0b7f81871c7edb544b797a5",
              title:
                "refactor: fix import paths from packages [FRONT-1892] (#1965)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1738/integrer-la-page-facebook-dans-gafa-account-setup-de-la-toolbox",
            title:
              'Intégrer la page Facebook dans "GAFA account setup" de la Toolbox',
            origin: "linear",
            description:
              "# User Story\n\n*La page Facebook permettent* d’ajouter des comptes Facebook, de les synchroniser et de les lier à un annonceur.\n\n**En tant que : **Utilisateur de la Toolbox\n\n**Je souhaite :** Intégrer la page **Facebook** dans l'outil **GAFA Account Setup** pour gérer les comptes Facebook\n\n**Pour que :** Je puisse ajouter, synchroniser et lier des comptes Facebook à un annonceur de manière fluide, tout comme c'est possible avec les pages Google Ads.\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. La page **Facebook** doit être intégrée dans l'outil **GAFA Account Setup** de la Toolbox, de manière similaire à la gestion des comptes Google Ads.\n2. L'utilisateur doit pouvoir ajouter des comptes Facebook via un bouton **\"Ajouter un compte Facebook\"**.\n3. Une fonctionnalité de synchronisation doit être disponible pour mettre à jour les comptes Facebook connectés.\n4. L'utilisateur doit pouvoir lier chaque compte Facebook à un annonceur spécifique.\n\n---\n\n# Messages d'erreur à prévoir\n\n**Erreur d'ajout de compte** : \n\nSi l'ajout d'un compte échoue, un message d'erreur doit apparaître : *\"Échec de l'ajout du compte Facebook. Veuillez réessayer.\"*\n\n**Erreur de synchronisation** : \n\nEn cas de problème lors de la synchronisation des comptes Facebook, afficher : *\"Erreur lors de la synchronisation des comptes. Veuillez réessayer.\"*\n\n**Erreur de liaison à un annonceur** : \n\nSi un compte Facebook ne peut pas être lié à un annonceur, un message d'erreur doit indiquer : *\"Impossible de lier ce compte à l'annonceur. Veuillez vérifier les informations.\"*\n\n[Component toaster](https://www.figma.com/design/ty1e9XJAGtc0f9ooktXw9V/%5BDesign-system%5D-Components?node-id=2594-158078&t=YGmv5MDE9HbTvjR2-1) : \n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/d50d8a66-87a4-4a43-932a-74c8883996fb/d22f21c8-57ca-4fdb-8a17-692d06d5883e)\n\n---\n\n# **Comportement voulu**\n\nIl faudrait que la page **Facebook** soit intégrée dans l'outil **GAFA Account Setup** de la Toolbox. \n\n![0.0-D-Desktop-Data (5).png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/55a1e7e7-3e95-422c-b401-ae3c7a929b76/9ce371cd-9111-4576-9bff-355fcdb1b0c2)\n\nL'utilisateur doit pouvoir ajouter, synchroniser et lier les comptes Facebook à un annonceur facilement et sans erreurs.\n\nCette page est accessible depuis la Toolbox, par 1 points d’entrée :\n\n* Au clic sur l'outil \"GAFA account setup\" dans la sidebar puis au clic sur le cadre Facebook.\n\nPars ce point d'entrée, l'user accède directement au tableau \"compte Facebook\".\n\n**Ce tableau contient les colonnes :**\n\n* “Nom” : noms des comptes Facebook\n* “Annonceur” : Les annonceurs sont représentés sous forme de \"badges\" cliquables et qui dirigent vers les sous-annonceurs de l'annonceur principal.\n* “Facebook Account ID” : les identifiants client, c’est un numéro unique utilisé pour identifier un compte Facebook.\n* ”Facebook Page ID’s : les identifiants d’une page ID, c’est un numéro unique utilisé pour identifier une page ID.\n* “Synchronisation” : Représenter sous forme de “Tag” qui peut être soit \"oui\" soit \"non\", indique si la campagne est lancée ou non.\n* Icône Clef à molette : Setting de la ligne.\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/9484e50e-0489-409c-ba88-833ebf30b338/4a4393e3-2ce0-4fda-8548-911dbdd4fb32)\n\n**Filtre :**\n\nPossibilité de filtrer les annonceurs.\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/ca2c000d-5b56-444f-bb4b-4cb0b9ff2161/b0c72528-8d58-452f-9a18-46a2e5529643)\n\n**Ajouter un compte Facebook :**\n\nEn cliquant sur le bouton “Ajouter un compte”, une modale “Ajouter un compte Facebook” apparait contenant :\n\n* Synchronisation : Avec un switch “oui”, “non”.\n* Annonceur : Un input sélecteur, “sélectionnez un annonceur”.\n* Nom : Un input Nom de l’annonceur.\n* Facebook Account ID : Un input, Numéro client Facebook (sans les tirets).\n* Facebook Page ID’s : Un input permettant de renseigner les ID’s des pages Facebook Ces identifiants sont représentés sous forme de Tag, chaque Id’s doivent être séparé par une virgule, ce qui permet de détecter que l’ID est bon et de créer le tag. Possibilité de les supprimer individuellement grâce à une croix de suppression intégrée dans chaque tag.\n* Un Bouton “Réinitialiser” : il permet de réinitialiser les champs préalablement remplis.\n* Un bouton Annuler : Ce qui ferme la modale.\n* Un bouton Ajouter : Qui permet d’ajouter le nouveau compte à la liste.\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/728d3716-18e5-4a00-a72c-b55eb3b1016d/46d06755-a3fc-47fa-8572-19374bc240b3)\n\n**Editer :** \n\nPossibilité d'éditer un compte Facebook.\n\nEn cliquant sur l’icône ”Clef à molette”, une modale “Editer un compte Facebook” apparait. Elle reprend le même contenu de la modale \"**Ajouter un compte Facebook**\".\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/86656410-cfc0-4a89-b0e8-9887162a9ca4/c9d2481e-4a26-4796-86dc-460c9097ff9b)\n\n---\n\n# Changelog\n\n🇫🇷  Intégration de la page  Facebook dans \"GAFA account setup\" de la Toolbox.\n\n🇺🇸 Integration of the Facebook page into the 'GAFA Account Setup' section of the Toolbox",
            id: "FRONT-1738",
          },
          origin: "linear",
          timestamp: 1730994750000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1933",
              title:
                "feat(third-party): add third-party accounts pages [FRONT-1738]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- add facebook third party page\n",
              id: 1933,
            },
            {
              url: "",
              origin: "git",
              id: "614fa599456738b20d0e4dea0c7411c32659e519",
              title:
                "feat(third-party): add third-party accounts pages [FRONT-1738] (#1933)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1873/bump-les-dependances-dutilities",
            title: "Bump les dépendances d'utilities",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @faker-js/faker\n* @remix-run/router\n* assert\n* aws-amplify\n* aws-iot-device-sdk-v2\n* axios\n* axios-mock-adapter\n* browserify-zlib\n* buffer\n* case\n* commander\n* concurrently\n* crypto-browserify\n* crypto-js\n* dom-storage\n* events\n* exceljs\n* get-intrinsic\n* glob\n* history\n* http-proxy\n* https-browserify\n* javascript-natural-sort\n* jszip\n* jwt-decode\n* luxon\n* make-plural\n* mapbox-gl\n* markdown-to-jsx\n* mock-xmlhttprequest\n* number-abbreviate\n* nunjucks\n* pandadoc-editor\n* polished\n* regenerator-runtime\n* remark-gfm\n* stream-browserify\n* stream-http\n* url\n* url-loader\n* util\n* uuid\n* zod\n\n---\n\n## Critère d'acceptation\n\n* Bump toutes ces dépendances\n* Vérifier que tout fonctionne correctement",
            id: "FRONT-1873",
          },
          origin: "linear",
          timestamp: 1730986532000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1946",
              title: "chore: bump utilities dependencies [FRONT-1873]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nBump utilities dependencies\r\n\r\nMajor versions:\r\n- [x] mapbox-gl (backward-compatible, only changes for types)\r\n- [x] uuid (remove @types/uuid)\r\n- [x] jwt-decode (default import deprecated)\r\n- [x] glob (no changes for us)\r\n- [x] @faker-js/faker (no changes for us)\r\n- [x] remark-gfm (no changes for us)\r\n- [x] concurrently (removed)\r\n\r\nAlso fix eslint rule “member expression" because of get-intrinsic not handing many functions anymore\r\nAlso fix types in eslint plugin by removing `satisfies` because it is currently broken',
              id: 1946,
            },
            {
              url: "",
              origin: "git",
              id: "008ee43597d63dbcf180c44ff1b44012001fb657",
              title: "chore: bump utilities dependencies [FRONT-1873] (#1946)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1881/fix-de-la-couleur-des-placeholder-sur-master",
            title: "Fix de la couleur des placeholder sur master",
            origin: "linear",
            description:
              "![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/19f70fdb-420a-4a53-8ff6-426502e00e8d/fea86289-1b3f-417f-b26b-039fe162c026)\n\nLes placeholder de la plupart des input ne prennent plus la class `placeholder:c_#BCC1DE::placeholder`",
            id: "FRONT-1881",
          },
          origin: "linear",
          timestamp: 1730909301000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1958",
              title: "fix: placeholder color on inputs [FRONT-1881]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n- use token interface.300\r\n- change _placeholder shortcut in preset\r\n\r\n### QA\r\n\r\n<img width="1457" alt="Screenshot 2024-11-06 at 15 31 20" src="https://github.com/user-attachments/assets/512ee183-518f-4c78-a088-e103fabd823f">\r\n\r\n### URLs\r\n\r\nhttps://pr-1958.lcm.live.mobsuccess.com/DriveToStore/d144cca4-4636-11ed-a4b9-d8c497e7bcae/6ca8ff11-4df8-11ed-a4b9-d8c497e7bcae/1a83d10d-572c-46bf-b60d-61b5bc7562e1/campaign-setup?modalname=RTB&modaluuid=0206e7ed-1ada-4208-b8a0-e299d127b886&modaltab=4\r\n\r\n',
              id: 1958,
            },
            {
              url: "",
              origin: "git",
              id: "83bf7de9974f8d9cb2d57363c0b1bbbd6320263a",
              title: "fix: placeholder color on inputs [FRONT-1881] (#1958)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1884/creer-le-composant-circularprogress",
            title: "Créer le composant CircularProgress",
            origin: "linear",
            description:
              "#### Changelog\n\nAjout du composant CircularProgress pour afficher la progression des tâches sur l'interface utilisateur",
            id: "FRONT-1884",
          },
          origin: "linear",
          timestamp: 1730899908000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1957",
              title: "feat: add circular progress component [FRONT-1884]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- add circular progress component\n",
              id: 1957,
            },
            {
              url: "",
              origin: "git",
              id: "4899d842b83a945de9c316295f0d2ac0d2a4f357",
              title:
                "feat: add circular progress component [FRONT-1884] (#1957)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1846/fixer-la-selection-des-dates-lors-de-la-creation-dun-projet-lcm-master",
            title:
              "Fixer la selection des dates lors de la création d'un projet LCM MASTER",
            origin: "linear",
            description:
              "# **Contexte (parcours d’entrée)**\n\nSur LCM Master, lors de la création d'un projet, les dates ne sont plus selectionnables.\n\n![Screenshot 2024-10-31 at 14.05.34.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/4b5efdc3-56d1-4c82-bfab-c54e269caf74/b5ace6f7-bade-4be3-9e1a-8019e9a5c97b)\n\n[Screen Recording 2024-10-31 at 14.05.21.mov](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/629042bf-e29f-4072-b674-634184bd9df7/b602f388-2134-44df-8771-232971254999)\n\n---\n\n# **Comportement voulu**\n\n*L*es dates lors de la création d'un projet LCM MASTER doivent sélectionnable\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. L'utilisateur peut \"Ajouter\" un nouveau projet\n\n---\n\n# Scénario de repro \n\nAller sur[ LCM master](https://master.lcm.live.mobsuccess.com/DriveToStore/d144cca4-4636-11ed-a4b9-d8c497e7bcae/6ca8ff11-4df8-11ed-a4b9-d8c497e7bcae) et ajouter un projet.\n\n![Screenshot 2024-10-31 at 14.11.28.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/6250c6ef-c2f1-49cb-bb0b-95a4b5b7780e/c8c9de1d-f75c-4c14-8fea-c58c3ad1aa0f)\n\nPuis cliquer sur \"Selectionner des dates\"\n\n![Screenshot 2024-10-31 at 14.11.55.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/69a9e058-298d-4565-a529-1ef9ca9f9007/4c17ab60-a0b4-4ed8-8afa-0b9808c91e0b)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de la selection des dates lors de la création d'un projet LCM MASTER\n\n🇺🇸Correction of the selection of dates when creating an LCM MASTER project",
            id: "FRONT-1846",
          },
          origin: "linear",
          timestamp: 1730886504000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1956",
              title: "fix(dialog-project): date picker [FRONT-1846]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nfix a bug where date picker wouldn\'t appear when selected\r\n\r\n### QA\r\n\r\n<img width="1470" alt="Capture d’écran 2024-11-06 à 10 16 29" src="https://github.com/user-attachments/assets/252d3582-a503-49f8-9a65-ba55e9e80c80">\r\n\r\n### Scope\r\n\r\nlcm > dialog project > date picker\r\n\r\n### Test URL\r\n\r\nhttps://pr-1956.lcm.live.mobsuccess.com/DriveToStore/d144cca4-4636-11ed-a4b9-d8c497e7bcae/6ca8ff11-4df8-11ed-a4b9-d8c497e7bcae',
              id: 1956,
            },
            {
              url: "",
              origin: "git",
              id: "b4177e4553bcd8fa83d620954d4c1596a9a9edbb",
              title: "fix(dialog-project): date picker [FRONT-1846] (#1956)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1801/bump-tanstackreact-query",
            title: "Bump @tanstack/react-query",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @tanstack/react-query\n* @tanstack/react-query-devtools\n\nLiens utiles :\n\n* [https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-v5](https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-v5)\n* [https://github.com/TanStack/query/discussions/5279](https://github.com/TanStack/query/discussions/5279)\n\nDifférence entre isLoading et isPending :\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/3441615d-9f5c-4eda-9126-a07e0795b30c/3f00143d-2bfd-4344-8e31-10146c1f8d34)\n\n---\n\n## Critère d'acceptation\n\n* Bump toutes ces dépendances\n* Vérifier que tout fonctionne correctement",
            id: "FRONT-1801",
          },
          origin: "linear",
          timestamp: 1730882863000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1905",
              title: "chore: bump react query [FRONT-1801]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nBump @tanstack/react-query and adapt the breaking changes (api related changes)\r\nAlso bump in microservice-client: https://github.com/mobsuccess-devops/microservice-client/pull/1540",
              id: 1905,
            },
            {
              url: "",
              origin: "git",
              id: "44d0c6504b97dc122a462bd1dacd36eba724b0b2",
              title: "chore: bump react query [FRONT-1801] (#1905)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1778/corriger-lerreur-qui-bloque-lacces-a-la-connexion-sur-la-page",
            title:
              "Corriger l'erreur qui bloque l'accès à la connexion sur la page d'authentification des produits MS",
            origin: "linear",
            description:
              "# **Contexte** \n\nParfois lorsque le user tente de se connecter sur la page d'authentification des produits MS, une erreur est renvoyée (pour diverse raison) sur l'endpoint `login-auth` et bloque la connexion \n\n→ In fine le user reste bloqué sur la page d'authentification, et si il appuie à nouveau sur le bouton de connexion, l'endpoint n'est pas rappelé. \nDonc tant qu'il n'ajoute pas manuellement `?action=sign-out` en fin d'url, une boucle sans fin le renvoie sur la page d'authentification, l'empêchant ainsi d'accéder au produit (Cf screen record 👇🏻)\n\n> Hypothèse de Gilles : \"je pense que ça garde les infos de connexion dans le local storage\"\n\n---\n\n# **Comportement voulu**\n\n*Faire en sorte à ce que le user puisse se connecter sans être impacté par les erreurs renvoyés vers* l'endpoint `login-auth`  *et sans avoir besoin d'ajouter manuellement le paramètre* `?action=sign-out` *en fin d'url* \n\n---\n\n# Critères d'acceptations\n\n1. L'utilisateur, si il se connecte avec les bonnes valeurs d'email et mot de passe associées à son compte, doit pouvoir accéder directement au produit concerné et ne pas rester bloqué sur la page d'authentification\n2. Le reste du parcours actuel ne dois pas changer, par exemple si le user se connecte avec email et/ou login erroné, alors un message d'erreur s'affiche et il n'est pas renvoyé sur la page du produit mais reste bien sur la page d'authentification\n\n---\n\n# Scénario de repro \n\n1. *Aller sur* [https://dev.app.mobsuccess.com/auth](https://dev.app.mobsuccess.com/auth), ou sur n'importe quel produit MS et se déconnecter pour revenir sur la page d'authentification\n2. Puis se connecter/déconnecter jusqu'à reproduire l'erreur (random) qui bloque la connexion \n3. Tenter alors de se connecter à nouveau\n4. Constater qu'on est pas renvoyé vers la page de destination, mais qu'on reste bien bloqué sur la page d'authentification\n5. Ajouter manuellement le param `?action=sign-out` en fin d'url\n6. Et constater enfin qu'on accède à la page souhaitée, sans avoir modifié les valeurs de login associée au compte\n\n   [Enregistrement de l’écran 2024-10-23 à 18.41.06.mov](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/fc09f242-3bbe-4d71-9563-5fc316051d00/77de7c48-34e9-439f-9b37-5e8137a8eb21)\n\nN.B: je reproduis le bug de façon random et particulièrement sur Chrome \n\n⚠️ Par contre le soucis est systématique avec un utilisateur inactif ⚠️\n\n---\n\n# **Log**\n\n* Request URL: [https://dev.app.mobsuccess.com/webservices/rest/login-auth](https://dev.app.mobsuccess.com/webservices/rest/login-auth)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de l'erreur qui bloque l'accès à la connexion sur la page d'authentification des produits MS\n\n🇺🇸 Fix of an error blocking access to login on MS product authentication page",
            id: "FRONT-1778",
          },
          origin: "linear",
          timestamp: 1730824292000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1925",
              title:
                "fix(auth): handle error and sign out on login failure [FRONT-1778]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nsignout when the login-auth endpoint fails\n\n### Scope\n\nwebapps/auth\n",
              id: 1925,
            },
            {
              url: "",
              origin: "git",
              id: "b6f28f5218e71f8d15d5e682983fef513ec08fc6",
              title:
                "fix(auth): handle error and sign out on login failure [FRONT-1778] (#1925)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1837/ajouter-le-composant-tagsinput-dans-react-ui",
            title: "Ajouter le composant TagsInput dans react-ui",
            origin: "linear",
            description:
              "## Contexte\n\nAfin d'ajouter des éléments séparés dans une liste dans avoir d'overlap ou de doublons, nous avons besoin du composant TagsInput\n\n---\n\n## Critère d'acceptation\n\n* Le composant TagsInput est créé et exposé dans react-ui\n* Le composant a des tests unitaires\n* Le composant dispose d'une ou plusieurs stories\n* Le composant a un/des tests visuels\n* Le composant permet l'ajout de tag\n* Le composant permet d'enlever des Tags\n* Le composant permet de valider les tags avant de les enregistrer\n* Le composant permet de prévenir l'utilisateur lorsque le tag est invalid\n* Le composant est disponible en form field\n* ~~Le composant est disponible en singleline ET en multiline~~  on verra si necessaire",
            id: "FRONT-1837",
          },
          origin: "linear",
          timestamp: 1730798590000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1941",
              title: "feat: add TagsInput component [FRONT-1837]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- [x] Add `TagsInput` component to react-ui\r\n- [x] Add a story for `TagsInput` component\r\n- [x] Add a test for `TagsInput` component\r\n- [x] Add visual regression test for `TagsInput` component\r\n\r\n### Scope\r\n\r\ncomponents library > tags input\r\n\r\n### QA\r\n\r\n- open storybook\r\n- go to tags input story\r\n- add tags\r\n- remove tags\r\n- add tags with enter\r\n- add tags with comma\r\n- add tags with space\r\n\r\n### Test URL\r\n\r\nhttps://pr-1941.react-ui-storybook.live.mobsuccess.com/?path=/docs/pandaark-tagsinput--docs",
              id: 1941,
            },
            {
              url: "",
              origin: "git",
              id: "d916401a3cf9ca0af9e28539010b5dfdb9461577",
              title: "feat: add TagsInput component [FRONT-1837] (#1941)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1871/autoriser-les-render-props-en-tant-que-children-de-composants",
            title:
              "Autoriser les render props en tant que children de composants",
            origin: "linear",
            description:
              "#### Changelog\n\nAjout de la prise en charge des render props en tant que enfants de composants",
            id: "FRONT-1871",
          },
          origin: "linear",
          timestamp: 1730795429000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1945",
              title:
                "change(eslint): allow render props as children [FRONT-1871]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nallow render props as children (allow factories or ctx providers)\n",
              id: 1945,
            },
            {
              url: "",
              origin: "git",
              id: "636304c38c759f90000370bad2ff1896bd33a2bb",
              title:
                "change(eslint): allow render props as children [FRONT-1871] (#1945)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1866/corriger-le-render-infini-de-la-combobox",
            title: "Corriger le render infini de la combobox",
            origin: "linear",
            description:
              "#### Changelog\n\nSupprimer les decorators lors de la creation de la collection d'item d'un combobox",
            id: "FRONT-1866",
          },
          origin: "linear",
          timestamp: 1730738694000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1943",
              title:
                "fix(select): ensure no decorators within the combobox collection [FRONT-1866]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- remove decorators when creating combobox collection as they appear to cause an infinit render loop\n- make items collection common between single and multi select comboboxes\n\n### Scope\n\ncomponent system > select/combobox\n",
              id: 1943,
            },
            {
              url: "",
              origin: "git",
              id: "e62373f2bef475f9ec4974771fb5676331b3a462",
              title:
                "fix(select): ensure no decorators within the combobox collection [FRONT-1866] (#1943)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1807",
            title: "refactor: select select component [FRONT-1198]",
            origin: "github",
            description:
              '### What does it do? Why?\r\n\r\nUpdate select component to:\r\n - Clean code\r\n - Add tests\r\n - Add tags overflow\r\n - Split single and multiple\r\n While keeping the same API so that no migration is necessary\r\n \r\n<img width="593" alt="image" src="https://github.com/user-attachments/assets/f6af5454-e29b-429a-9fb7-575a55c89138">\r\n \r\n<img width="593" alt="image" src="https://github.com/user-attachments/assets/07ea6c6a-1e4c-4210-a21b-a4b3838ef667">',
            id: 1807,
          },
          origin: "github",
          timestamp: 1730714346000,
          references: [
            {
              url: "",
              origin: "git",
              id: "c89e7511914782cbf82f10e5a0556f3abc7758b4",
              title: "refactor: select select component [FRONT-1198] (#1807)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1757/bump-les-dependances-dui",
            title: "Bump les dépendances d'UI",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @ark-ui/anatomy\n* @ark-ui/react\n* @emoji-mart/data\n* @emoji-mart/react\n* @dnd-kit/core\n* @dnd-kit/modifiers\n* @dnd-kit/sortable\n* @dnd-kit/utilities\n* @lexical/react\n* @lexical/utils\n* @n8tb1t/use-scroll-position\n* @outdated-tanstack/react-table\n* @pandacss/dev\n* @tanstack/react-form\n* @tanstack/react-table\n* @tanstack/react-virtual\n* @tanstack/zod-form-adapter\n* @react-pdf/renderer\n* emoji-mart\n* lexical\n* recharts\n* react\n* react-colorful\n* react-device-detect\n* react-dom\n* react-horizontal-scrolling-menu\n* react-joyride\n* react-qr-code\n* react-resize-detector\n* react-router-dom\n\nEt mettre styled-components en version bloquée\n\n---\n\n## Critère d'acceptation\n\n* Bump toutes ces dépendances\n* Vérifier que tout fonctionne correctement",
            id: "FRONT-1757",
          },
          origin: "linear",
          timestamp: 1730373769000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1892",
              title: "chore: bump ui deps [FRONT-1757]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- Bump deps related to ui\r\n- Set styled-components version to under v6 because of type issues\r\n- Fix tests with pandacss classes\r\n- Fix forms with api changes\r\n- Change ColorPicker, DatePicker and TimePicker so they still work as before with their value/defaultValue as strings\r\n- Change Select because of an api change from ark\r\n- react-horizontal-scrolling-menu now has types",
              id: 1892,
            },
            {
              url: "",
              origin: "git",
              id: "8f7fec31c91dbf7d875d0b1c0339b2ca75c71b55",
              title: "chore: bump ui deps [FRONT-1757] (#1892)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1530/bump-les-dependances-en-rapport-avec-prettier",
            title: "Bump les dépendances en rapport avec Prettier",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @trivago/prettier-plugin-sort-imports\n* prettier\n\n## Critère d'acceptation\n\n* Bump ces dépendances\n* Formatter des fichiers si besoin",
            id: "FRONT-1530",
          },
          origin: "linear",
          timestamp: 1730302935000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1922",
              title: "chore: bump prettier [FRONT-1530]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nBump prettier and run it, it adds parenthesis around conditions in ternaries",
              id: 1922,
            },
            {
              url: "",
              origin: "git",
              id: "8127b4b90a94ba742a256c0abcc90fd67eee8a75",
              title: "chore: bump prettier [FRONT-1530] (#1922)",
              description: "",
            },
          ],
        },
      ],
    },
    {
      id: "agency:create",
      description: "Agency creation form",
      path: "./src/pages/[businessUnit]/create.tsx",
      updates: [
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2046/migrer-les-pages-inaccessibles-du-dashboard-farly-a-pandark",
            title:
              "Migrer les pages inaccessibles du dashboard-farly à Pandark",
            origin: "linear",
            description:
              "## Contexte\n\nCertaines pages du dashboard farly sont inaccessibles, mais il faudrait tout de même les migrer car elles seront sans doute un jour utilisées.\n\nPages :\n\n* /final-numbers\n* /invoices\n* /all-reports\n\nDiscussion slack :\n\n[Slack](https://mobsuccess.slack.com/archives/C04EBKSK0LA/p1732533517011609)",
            id: "FRONT-2046",
          },
          origin: "linear",
          timestamp: 1732702169000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2089",
              title:
                "refactor(blocked-routes): migrate to pandark [FRONT-2046]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nSome pages are not accessible but we still need to migrate them to pandark\r\n\r\n### Scope\r\n\r\n/final-numbers\r\n/invoices\r\n/all-reports\r\n\r\n### QA\r\n\r\n![image](https://github.com/user-attachments/assets/40501c53-fbb5-40b4-a70d-d8dd69d49313)\r\n![image](https://github.com/user-attachments/assets/3a6f0346-bc84-45ad-8c17-9631c536af39)\r\n![image](https://github.com/user-attachments/assets/3d78eb33-b5e1-49a8-877d-56325217ebdd)\r\n\r\n### Test URL\r\n\r\nhttp://localhost:3115/final-numbers?client=flutter&id_account=3239\r\nhttp://localhost:3115/invoices?client=flutter&id_account=3239\r\nhttp://localhost:3115/all-reports?client=flutter&id_account=3239\r\n\r\nNot possible on deployed envs, you need to checkout to the branch and:\r\n- in `/webapps/dashboard-farly/src/pages/_app.tsx`, comment lines 51 to 53\r\n- in `webapps/dashboard-farly/src/components/SidebarProvider/SidebarProvider.tsx`, comment lines 91 and 102",
              id: 2089,
            },
            {
              url: "",
              origin: "git",
              id: "b881c8a3c64a9ab704804ac9c4dbd494ffce3141",
              title:
                "refactor(blocked-routes): migrate to pandark [FRONT-2046] (#2089)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1964/migration-du-datepickersingleday-sur-le-lc0",
            title: "Migration du DatepickerSingleDay sur le LC0",
            origin: "linear",
            description:
              "## Contexte\n\nIl faut remplacer sur le LCO l'ancien composant `<DatePickerSingleDay />` par notre nouveau composant PandaArk `<DatePicker />`\n\n---\n\n## Informations complémentaires\n\n* [https://master.lco.live.mobsuccess.com/](https://master.lcm.live.mobsuccess.com/)\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression",
            id: "FRONT-1964",
          },
          origin: "linear",
          timestamp: 1732696835000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2088",
              title:
                "feat: migrate the datepicker onto lco [FRONT_1964] [FRONT-1964]",
              origin: "github",
              description:
                "### What does it do? Why?\r\nChange the datePickerSingleDay of lco/KitDatRange to the new datePicker (Panda)\r\n### Scope\r\nlco\r\n### QA\r\n\r\n### Test URL\r\nhttps://pr-2088.lco.live.mobsuccess.com/kit/19104c93-f839-4501-9c11-a1d5553d74df?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae",
              id: 2088,
            },
            {
              url: "",
              origin: "git",
              id: "b08fa79b728e5bcafa7fd4905da2ba7bb0f13344",
              title:
                "feat: migrate the datepicker onto lco [FRONT_1964] [FRONT-1964] (#2088)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2085/utiliser-les-imports-type-sur-les-webapps",
            title: "Utiliser les imports type sur les webapps",
            origin: "linear",
            description:
              "`biome lint --only=style/useImportType --write  ./webapps/lcm/src`",
            id: "FRONT-2085",
          },
          origin: "linear",
          timestamp: 1732638143000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2106",
              title:
                "refactor(packages,configs): use import types [FRONT-2085]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nUse import types in preparation for adding `verbatimModuleSyntax` in the tsconfig\r\nUsed `biome lint --only=style/useImportType --write  ./webapps/[webapp]/src`",
              id: 2106,
            },
            {
              url: "",
              origin: "git",
              id: "5e8884f1983f868f4644037fb05e57182d7c583c",
              title:
                "refactor(packages,configs): use import types [FRONT-2085] (#2106)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2086/utiliser-les-imports-type-sur-les-packages-et-configs",
            title: "Utiliser les imports type sur les packages et configs",
            origin: "linear",
            description:
              "`biome lint --only=style/useImportType --write  ./webapps/lcm/src`",
            id: "FRONT-2086",
          },
          origin: "linear",
          timestamp: 1732637287000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2105",
              title: "refactor(webapps): use import types [FRONT-2086]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nUse import types in preparation for adding `verbatimModuleSyntax` in the tsconfig\r\nUsed `biome lint --only=style/useImportType --write  ./webapps/[webapp]/src`",
              id: 2105,
            },
            {
              url: "",
              origin: "git",
              id: "69fb2483d8c4118d02c8e536de7b4505d0a4bf17",
              title: "refactor(webapps): use import types [FRONT-2086] (#2105)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2058/migrer-les-derniers-call-apis-du-lcm-vers-des-appel-react-client",
            title:
              "Migrer les derniers call apis du lcm vers des appel react-client",
            origin: "linear",
            description:
              "#### Changelog\n\nMigration des derniers appels APIs du LCM vers l'appel client React",
            id: "FRONT-2058",
          },
          origin: "linear",
          timestamp: 1732615734000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2091",
              title: "chore(rdc-migration): remove rdc references [FRONT-2058]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- remove rdc related code from lcm\r\n- migrate verify api call\r\n- migrate audiences retrieval (still direct call to platform but using axiosGet)\r\n- migrate facebook account listing\r\n",
              id: 2091,
            },
            {
              url: "",
              origin: "git",
              id: "35f9e6c1b931e3ff20d5666ee9118cededca0c87",
              title:
                "chore(rdc-migration): remove rdc references [FRONT-2058] (#2091)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2059/retirer-le-code-mort-de-react-ui",
            title: "Retirer le code mort de react-ui",
            origin: "linear",
            description:
              "#### Changelog\n\nSuppression des codes morts de react-ui",
            id: "FRONT-2059",
          },
          origin: "linear",
          timestamp: 1732554823000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2092",
              title:
                "chore(knip): cleanup unused exports react-ui [FRONT-2059]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nuse knip to remove unused `export` statements\ndetect unused code with eslint (exported code was ignore by eslint -- removing export statements allows eslint to detect unused code)\n",
              id: 2092,
            },
            {
              url: "",
              origin: "git",
              id: "8f39ac3b271ef2295d1bac4be40915b2ebb85c6b",
              title:
                "chore(knip): cleanup unused exports react-ui [FRONT-2059] (#2092)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2057/nettoyer-les-fonctions-exportations-types-inutilises-du-lcm-knip-tache",
            title:
              "Nettoyer les fonctions / exportations / types inutilisés du LCM (knip) - tâche interne",
            origin: "linear",
            description:
              "#### Changelog\n\nNettoyage des fonctions inutilisées du LCM (knip) effectué pour améliorer la performance du produit",
            id: "FRONT-2057",
          },
          origin: "linear",
          timestamp: 1732548370000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2090",
              title:
                "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nuse knip to remove unused `export` statements\ndetect unused code with eslint (exported code was ignore by eslint -- removing export statements allows eslint to detect unused code)\n",
              id: 2090,
            },
            {
              url: "",
              origin: "git",
              id: "84ca8bfba9e81dd4209edaa03e6f5d0952a5a489",
              title:
                "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057] (#2090)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2044/migrer-le-blockloader-du-lcm-auth",
            title: "Migrer le BlockLoader du LCM + Auth",
            origin: "linear",
            description:
              "## Contexte\n\nNous avons un nouveau loader: `Loader.Block`\n\n---\n\n## **Description du Problème**\n\nRetirer les anciennes utilisation du `BlockLoader`\n\n---\n\n## Informations complémentaires\n\n* faire que le LCM\n\n---",
            id: "FRONT-2044",
          },
          origin: "linear",
          timestamp: 1732547702000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2086",
              title: "refactor: use loader dot block [FRONT-2044]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n- Replace `BlockLoader` by `Loader.Block`\r\n  - LCM\r\n  - Auth\r\n\r\n### Score\r\n\r\nLCM & Auth\r\n\r\n### QA\r\n\r\nLCM\r\n\r\n<img width="1452" alt="lcm1" src="https://github.com/user-attachments/assets/afe130cc-c582-44a1-ad09-494b7962d812">\r\n<img width="1452" alt="lcm3" src="https://github.com/user-attachments/assets/8b8904cd-2dac-4378-945d-94e3a85ac843">\r\n\r\nAuth\r\n\r\n<img width="1452" alt="auth" src="https://github.com/user-attachments/assets/4eccdf09-41f4-42c2-86be-faac58b807ad">\r\n\r\n\r\n',
              id: 2086,
            },
            {
              url: "",
              origin: "git",
              id: "b84e63e8382283601c22f04decca3ebe3f5b87f7",
              title: "refactor: use loader dot block [FRONT-2044] (#2086)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2037/mettre-a-jour-lales-pages-dannonceur-sur-le-meme-format-que-les-pages",
            title:
              "Mettre à jour la/les pages d'annonceur sur le même format que les pages annonce",
            origin: "linear",
            description:
              "#### Changelog\n\nMise à jour du format des pages d'annonceur pour correspondre aux pages annonce",
            id: "FRONT-2037",
          },
          origin: "linear",
          timestamp: 1732536219000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2077",
              title: "change(migration-rdc): advertiser page [FRONT-2037]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- migrate advertiser table page\n  - add new table\n  - display more advanced informations\n- add /create page for advertisers (using the same form)\n- add /edit/:uui page for advertisers (using the same form)\n\n### Scope\n\nmigration lcm\n",
              id: 2077,
            },
            {
              url: "",
              origin: "git",
              id: "575b3e2f12f68e7d09bb5ba6ab1504436380e241",
              title:
                "change(migration-rdc): advertiser page [FRONT-2037] (#2077)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2034/retirer-les-layout-de-rui-qui-forward-panda",
            title: "Retirer les Layout de RUI qui forward Panda",
            origin: "linear",
            description:
              '## Contexte\n\nPanda est notre framework pour le design system\n\n---\n\n## **Description du Problème**\n\nPour ne pas nous coupler fortement avec PandaCSS, nous avions faire une facade pour "forwarder" les composants de Layout et garder leur "responsabilité" chez nous\n\nDans la pratique, nous utilisons directement les composant de PandaCSS sans passer par les notres.\n\n---\n\n## Critère d\'acceptation\n\n* retirer ces composants Layout',
            id: "FRONT-2034",
          },
          origin: "linear",
          timestamp: 1732279334000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2071",
              title:
                "refactor: remove forwarded layout components [FRONT-2034]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- Remove forwarded layout components\r\n- Update imports",
              id: 2071,
            },
            {
              url: "",
              origin: "git",
              id: "f8319ac227f737a8912c80a36b00d1e89b1c0d4c",
              title:
                "refactor: remove forwarded layout components [FRONT-2034] (#2071)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1906/migrer-le-nouveau-table-de-la-page-overview-du-dashboard-farly",
            title:
              "Migrer le nouveau Table de la page `Overview` du Dashboard-farly",
            origin: "linear",
            description:
              "## Contexte\n\nNous devons migrer le nouveau Table `Performances summary` sur la page  `Overview` du Dashboard-farly\n\n---\n\n## Informations complémentaires\n\n* [https://master.dashboard-farly.live.mobsuccess.com/overview?client=flutter&id_account=3239&ran\\[…\\]0Z&range_filterend=2024-10-01T22%3A00%3A00.000Z](https://master.dashboard-farly.live.mobsuccess.com/monetization?client=flutter&id_account=3239&range_filterstart=2024-09-30T22%3A00%3A00.000Z&range_filterend=2024-10-01T22%3A00%3A00.000Z)\n* \n\n  ![Capture d’écran 2024-11-08 à 16.24.54.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/59862a90-d6ed-44a0-8023-df785c70749e/1584febb-6296-4659-aae0-dab7bd2c14d2)\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression par rapport à l'ancien Table ",
            id: "FRONT-1906",
          },
          origin: "linear",
          timestamp: 1732271220000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2021",
              title: "refactor(overview): use pandark table [FRONT-1906]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nReplace old table with pandark table\r\n\r\n### Scope\r\n\r\nOverview\r\n\r\n### QA\r\n\r\n![Screenshot 2024-11-18 at 16 42 25](https://github.com/user-attachments/assets/640c479d-0029-4e12-8462-3fc30f694e49)\r\n\r\n### Test URL\r\n\r\nhttps://pr-2021.dashboard-farly.live.mobsuccess.com/overview?client=flutter&id_account=3239&range_filterstart=2024-07-31T22:00:00.000Z&range_filterend=2024-10-30T23:00:00.000Z",
              id: 2021,
            },
            {
              url: "",
              origin: "git",
              id: "4d071d877dd92ed44711bce44403268402684971",
              title:
                "refactor(overview): use pandark table [FRONT-1906] (#2021)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1946/migration-de-linput-sur-le-package-react-shared",
            title: "Migration de l'Input sur le package React-shared",
            origin: "linear",
            description:
              "## Contexte\n\nIl faut remplacer sur le package React-shared l'ancien composant `<AdvancedInput />` par notre nouveau `<Input />` pandaArk.\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression",
            id: "FRONT-1946",
          },
          origin: "linear",
          timestamp: 1732208956000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2055",
              title:
                "change: migrate AdvancedInput to panda input [FRONT-1946]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- migrate `<AdvancedInput />` to `<Input.Root />` in react-shared\r\n  - migrate `Login`\r\n  - migrate `ForgotPassword`\r\n  - migrate `ResetPassword`\r\n\r\n### Scope\r\n\r\nmigration > panda\r\n\r\n\r\n### Tests\r\n\r\n[Login](https://pr-2055.auth.live.mobsuccess.com/)\r\n\r\n![image](https://github.com/user-attachments/assets/e85defa4-4c06-4b5c-ad83-eb031ce4baf9)\r\n\r\n[Forgot Password](https://pr-2055.auth.live.mobsuccess.com/?action=forgot-password)\r\n\r\n![image](https://github.com/user-attachments/assets/825365fa-4056-463a-84e6-e056970f4b41)\r\n\r\n[Reset Password](https://pr-2055.auth.live.mobsuccess.com/?action=reset-password)\r\n\r\n![image](https://github.com/user-attachments/assets/03090473-da1e-480a-81a9-f85786e572ef)\r\n",
              id: 2055,
            },
            {
              url: "",
              origin: "git",
              id: "57330cd9cc9ae11fd7a3020e90e95eed1791c76b",
              title:
                "change: migrate AdvancedInput to panda input [FRONT-1946] (#2055)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1918/migrer-la-page-agence-vers-un-table-pandaark",
            title: "Migrer la page agence vers un table PandaArk",
            origin: "linear",
            description:
              "* Utiliser un Table dans la page de séléction d'Agence\n* Migrer les appels api vers des endpoints typés\n\n#### Changelog\n\nAjout des endpoints typés pour les pages d'agence  + Utiliser un Table dans la page de séléction d'Agence",
            id: "FRONT-1918",
          },
          origin: "linear",
          timestamp: 1732196340000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1981",
              title: "feat: use typed endpoint for agency pages [FRONT-1918]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- use typed endpoints from lcm-microservice to list agencies\n- use table to display agencies instead of custom list\n- use forms apis for creating and updating agencies\n\n### Scope\n\nagencies > list/create/update\n",
              id: 1981,
            },
            {
              url: "",
              origin: "git",
              id: "bbbae9ad3efd48b4268d96931c65c632d8764f3f",
              title:
                "feat: use typed endpoint for agency pages [FRONT-1918] (#1981)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2019/ameliorer-le-styling-de-dialog-fileupload-image-et-table-dans-react-ui",
            title:
              "Améliorer le styling de Dialog FileUpload Image et Table dans react-ui",
            origin: "linear",
            description:
              "#### Changelog\n\nAmélioration du styling de Dialog, FileUpload, Image et Table dans react-ui",
            id: "FRONT-2019",
          },
          origin: "linear",
          timestamp: 1732114253000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2051",
              title:
                "change: update styling in Dialog FileUpload Image and Table components [FRONT-2019]",
              origin: "github",
              description:
                '### What does it do? Why?\n\n- allow css props to be passed to `Image` component (using `styled()` wrapper from pandacss)\n- ensure `FileLoader` to have a 100% height instead of auto\n- provide an "all className" meta property for table rows (avoiding passing cell.className, header.className, footer.className for the same class)\n- update `Dialog` to use flex instead of grid -- this avoid a bug when a dialog does not have a description but keeps adding a gap between the title and description AND description and content\n\n### Scope\n\nreact-ui > styling\n',
              id: 2051,
            },
            {
              url: "",
              origin: "git",
              id: "9b7627a661ad6ea8fe4cdf70d4663ed173943625",
              title:
                "change: update styling in Dialog FileUpload Image and Table components [FRONT-2019] (#2051)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1942/migration-de-linput-sur-le-lmp",
            title: "Migration de l'Input sur le LMP",
            origin: "linear",
            description:
              "## Contexte\n\nIl faut remplacer sur le LMP l'ancien composant `<AdvancedInput />` par notre nouveau `<Input />` pandaArk.\n\n---\n\n## Informations complémentaires\n\n* [https://master.lmp.live.mobsuccess.com/](https://master.lcm.live.mobsuccess.com/)\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression",
            id: "FRONT-1942",
          },
          origin: "linear",
          timestamp: 1732099468000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2036",
              title:
                "refactor(lmp): replace advanced input with panda input [FRONT-1942]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n<img width="1111" alt="image" src="https://github.com/user-attachments/assets/9b65a990-d775-463e-a986-0d43439ac684">\r\n\r\n<img width="1111" alt="image" src="https://github.com/user-attachments/assets/8ee2e237-243e-4f54-9259-38b08934d435">',
              id: 2036,
            },
            {
              url: "",
              origin: "git",
              id: "4fa9b4f5050ec9ee172d22109fa33b8a95082cee",
              title:
                "refactor(lmp): replace advanced input with panda input [FRONT-1942] (#2036)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1992/corriger-lapparition-du-grey-screen-suite-a-la-creation-dune-agence",
            title:
              "Corriger l'apparition du grey screen suite à la création d’une agence",
            origin: "linear",
            description:
              "# **Contexte (parcours d’entrée)**\n\nActuellement, lors de l’ajout d’une nouvelle agence dans le Local Campaign Manager, un grey screen apparaît après la validation.\n\nDe plus, lorsque l’utilisateur tente de rouvrir l’agence précédemment créée, le même écran gris réapparaît systématiquement, empêchant l'accès ou la modification des informations de l’agence nouvellement ajoutée.\n\n[Enregistrement de l’écran 2024-11-18 à 15.18.05.mov](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/ad9cd470-4436-46bc-8c5f-ff4b2b8fe8d2/4dc79e51-1c58-48da-b86f-cf7cbf10d25b)\n\n---\n\n# **Comportement voulu**\n\nIl faudrait que, lors de l’ajout d’une nouvelle agence, le LCM doit permettre à l’utilisateur de poursuivre son parcours sans grey screen. La validation de l’ajout doit aboutir soit une redirection automatique vers la page suivante (->Annonceur). L’interface ne doit plus afficher de grey screen, que ce soit après la validation de l’ajout ou lors d’une tentative d’ouverture de l’agence nouvellement créée.\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. Si l’utilisateur ajoute une nouvelle agence, il doit être automatiquement redirigé vers la page suivante(->annonceur).\n2. Si l’utilisateur tente d’ouvrir l’agence nouvellement créée, il doit pouvoir y accéder sans rencontrer de gray screen.\n3. Si l’utilisateur consulte la liste des agences, les informations de l’agence récemment ajoutée doivent s’afficher correctement.\n\n---\n\n# Scénario de repro \n\n1. Connectez-vous à la plateforme LCM.\n2. Naviguez vers l’onglet permettant l’ajout d’une agence.\n3. Cliquez sur **“+ Ajouter une agence”**.\n4. Remplissez les champs obligatoires (nom, logo, sales associé, etc.).\n5. Validez l’ajout.\n6. Observez le grey screen après la validation.\n\n---\n\n# **Informations complémentaires**\n\nPNG Logo : \n\n![mobsuccess_logo.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/968ce8d9-fa12-42de-8e3d-1a6a7db80fe5/4d44006f-c48d-4cce-9b2d-9acb3d06aafd)\n\n---\n\n# Changelog\n\n🇫🇷  Correction du gray screen à la création d’une agence\n\n🇺🇸 Fixed the grey screen when creating en agency ",
            id: "FRONT-1992",
          },
          origin: "linear",
          timestamp: 1732024250000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2032",
              title: "fix: dynamic workspace emptysate [FRONT-1992]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- fix empty states in dynamic workspace provider (missing required icon)\r\n- filter empty agencies in account picker (newly returned by php)\r\n",
              id: 2032,
            },
            {
              url: "",
              origin: "git",
              id: "ec95054e5ff8479265d28e57dda4c16d47ed6b5c",
              title: "fix: dynamic workspace emptysate [FRONT-1992] (#2032)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1983/corriger-le-select-du-pourcentage-dun-item-de-kit-externe-sur-le",
            title:
              "Corriger le select du pourcentage d'un item de kit externe sur le backoffice LCO master",
            origin: "linear",
            description:
              "# **Contexte (parcours d’entrée)**\n\nActuellement sur master nous pouvons constater que le select de pourcentage d'une variation ne fonctionne plus. Nous sommes bloqué sur \"en €\"\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/5a5eea81-a108-4174-ad48-affbaa71f05b/28b27b3d-8034-4bb6-a6a8-aaff11fd9790)\n\n---\n\n# **Comportement voulu**\n\n*Pouvoir sélectionner le type en percent sur les items d'un kit externe*\n\n---\n\n# Scénario de repro \n\n1. *Se rendre sur ce kit :* [https://master.lco.live.mobsuccess.com/admin/external-kit/e1566c6c-c88a-4719-935b-19d28a67e03b?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae](https://master.lco.live.mobsuccess.com/admin/external-kit/e1566c6c-c88a-4719-935b-19d28a67e03b?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae)\n2. Constater que le choix de type percent n'est pas possible\n\n---\n\n# Changelog\n\n🇫🇷 Correction du select du pourcentage d'un item de kit externe sur le backoffice LCO master\n\n🇺🇸 Fix the variation type select on external kit",
            id: "FRONT-1983",
          },
          origin: "linear",
          timestamp: 1731942551000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2022",
              title: "fix: add portal to select [FRONT-1983]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nAdds Portal to select dropdown.\r\nThe dropdown was previously a child of the input and not displayed when overflowing.\r\nThis issue affected only select components that were descendent of an input, ie `InputAddons`\r\n\r\n<img width="595" alt="image" src="https://github.com/user-attachments/assets/c14b7798-f013-4913-8cdf-5a44e58e192b">\r\n\r\n### Test URL\r\n\r\nhttps://pr-2022.lco.live.mobsuccess.com/admin/external-kit/80eaeba4-4719-4690-9a79-bca9c8c06aff?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae',
              id: 2022,
            },
            {
              url: "",
              origin: "git",
              id: "699c591d53b452fd1e0f8b5e263f187ef3954298",
              title: "fix: add portal to select [FRONT-1983] (#2022)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1967/ajouter-le-workspace-provider-au-lcm",
            title: "Ajouter le workspace provider au lcm",
            origin: "linear",
            description: "#### Changelog\n\nAjout du workspace provider au lcm",
            id: "FRONT-1967",
          },
          origin: "linear",
          timestamp: 1731667040000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2002",
              title:
                "feat(worksapace): add dynamic workspace for lcm [FRONT-1967]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- add dynamic workspace provider (and rename the existing one to `static`)\n- add the new `dynamic` workspace provider to the lcm\n- fix it's tests\n",
              id: 2002,
            },
            {
              url: "",
              origin: "git",
              id: "0dd3ca72ce7f5da6aa650e5b41083da20406c6f8",
              title:
                "feat(worksapace): add dynamic workspace for lcm [FRONT-1967] (#2002)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1820/integrer-le-theme-leroy-merlin-sur-le-lco",
            title: "Intégrer le thème Leroy Merlin sur le LCO",
            origin: "linear",
            description:
              "# User Story\n\nEn tant qu'équipe conseil et partenariat\n\nJe souhaites faire une démo du LCO au couleur de Leroy merlin\n\nPour gagner un appel d'offre\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. Le thème est disponible pour le client Leroy merlin uniquement (client_id : 9a7f9b94-7211-4daa-98a7-6cf21cf54266)\n2. Le thème Leroy Merlin doit s'appliquer à l'ensemble du LCO: couleurs, typographies, icônes etc..\n3. Les couleurs doivent correspondre à la charte graphique de Leroy merlin\n4. Les éléments d'interface (boutons, barres de navigation, sections) doivent être adaptés au design Leroy Merlin\n5. L'intégration du thème correspond au maquettes figma\n\n---\n\n# **Comportement voulu**\n\nLe LCO doit afficher automatiquement le thème Leroy Merlin pour les utilisateurs identifiés comme clients Leroy merlin.\n\n---\n\n# **Informations complémentaires**\n\nPalette colors Leroy Merlin : \n\n[Primary Leroy Merlin - Local Campaign Order (Figma)](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12095-87475&t=dVj2A3FLf4XECYUY-4)\n\nFigma : [https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12046-70492&t=SIn5jwwUQUUdTsmX-4](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12046-70492&t=SIn5jwwUQUUdTsmX-4)\n\n---\n\n## Product Designer 🧑‍🎨 \n\n@rosanora @anne-sophie.doumenge \n\n---\n\n# Changelog\n\n🇫🇷  Intégration du theme Leroy Merlin sur le LCO\n\n🇺🇸 Integration of Leroy merlin theme on the LCO",
            id: "FRONT-1820",
          },
          origin: "linear",
          timestamp: 1731665548000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1993",
              title: "feat: add leroy merlin theme [FRONT-1820]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n<img width="1659" alt="image" src="https://github.com/user-attachments/assets/fd627eb2-dc12-4b40-a54c-ed17c198a474">',
              id: 1993,
            },
            {
              url: "",
              origin: "git",
              id: "1d393c4352f7952fa90d041aafa3812693bd227f",
              title: "feat: add leroy merlin theme [FRONT-1820] (#1993)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1928/alert",
            title: "Alert",
            origin: "linear",
            description: "",
            id: "FRONT-1928",
          },
          origin: "linear",
          timestamp: 1731580746000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1987",
              title: "test: add visual tests for alert component [FRONT-1928]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- Add visual tests for Alert component\r\n\r\n### QA\r\n\r\nSee files diff\r\n",
              id: 1987,
            },
            {
              url: "",
              origin: "git",
              id: "17d8f1a55246d33a112aad036ee92f4319d287ea",
              title:
                "test: add visual tests for alert component [FRONT-1928] (#1987)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1930/migration-des-anciens-alert-ver-alertroot",
            title: "Migration des anciens Alert ver Alert.Root",
            origin: "linear",
            description:
              "## Contexte\n\nUniformisation des composants du design system\n\n---\n\n## **Description du Problème**\n\nNous avons des anciens et des nouveau composant Alert dans la codebase\n\n---\n\n---\n\n## Critère d'acceptation\n\n* ne plus avoir de references vers l'ancien Alert\n* supprimer l'ancien Alert",
            id: "FRONT-1930",
          },
          origin: "linear",
          timestamp: 1731575229000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1989",
              title: "feat: migrate old Alert component [FRONT-1930]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n- Suppression de `Alert` au profit de `Alert.Root`\r\n- Migration des utilisations de `Alert`\r\n\r\n### Scope\r\n\r\nLCM > Screenshots\r\n\r\n### QA\r\n\r\n|before|after|\r\n|-|-|\r\n|<img width="1719" alt="Screenshot 2024-11-13 at 22 54 36" src="https://github.com/user-attachments/assets/aac2c42d-aada-4029-905e-7f17c2814bd7">|<img width="1719" alt="Screenshot 2024-11-13 at 22 59 43" src="https://github.com/user-attachments/assets/b732cf80-10fe-45da-90c3-efbfc4c34894">|\r\n|<img width="1719" alt="Screenshot 2024-11-13 at 23 04 29" src="https://github.com/user-attachments/assets/0268174a-175b-4187-88ff-1c1b9ba0c5b2">|<img width="1719" alt="Screenshot 2024-11-13 at 23 05 29" src="https://github.com/user-attachments/assets/78031acd-82db-4473-b674-69ed1f640abe">|\r\n|<img width="1719" alt="Screenshot 2024-11-13 at 23 10 48" src="https://github.com/user-attachments/assets/64f7e8a7-ff5a-4fc9-920f-c73489ed6a9f">|<img width="1719" alt="Screenshot 2024-11-13 at 23 22 34" src="https://github.com/user-attachments/assets/bce55644-3644-4ef9-a40a-ef8e88a71c36">|\r\n|<img width="1719" alt="Screenshot 2024-11-14 at 05 43 18" src="https://github.com/user-attachments/assets/1af784f3-c8cd-4a24-804b-23e210e729c6">|<img width="1719" alt="Screenshot 2024-11-14 at 05 43 31" src="https://github.com/user-attachments/assets/949a66e1-4f66-432e-b6f7-98976a6c9706">|\r\n|<img width="1719" alt="Screenshot 2024-11-14 at 05 53 52" src="https://github.com/user-attachments/assets/a03b282a-ccba-4eac-b177-593f854d5a06">|<img width="1719" alt="Screenshot 2024-11-14 at 05 58 18" src="https://github.com/user-attachments/assets/21ef3100-a9ab-4189-9b4d-3b4da79c6664">|\r\n|<img width="1719" alt="Screenshot 2024-11-14 at 06 02 48" src="https://github.com/user-attachments/assets/d60d55c0-3e00-4124-b117-2a41614a5986">|<img width="1719" alt="Screenshot 2024-11-14 at 06 03 19" src="https://github.com/user-attachments/assets/567f099e-61ef-4b2d-8034-262400fc1216">|\r\n\r\n### URLs\r\n\r\n[lcm preview](https://pr-1989.lcm.live.mobsuccess.com/)',
              id: 1989,
            },
            {
              url: "",
              origin: "git",
              id: "006440d0267aad9170257658cb0129214fd14b6b",
              title: "feat: migrate old Alert component [FRONT-1930] (#1989)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1929/integrer-le-workspace-context-dans-le-dashboard-farly-et-mettre-a-jour",
            title:
              "Intégrer le workspace context dans le dashboard farly et mettre à jour les endpoints d'agences/annonceur",
            origin: "linear",
            description:
              "#### Changelog\n\nIntégrer le workspace context dans le dashboard farly et mettre à jour les endpoints d'agences/annonceur",
            id: "FRONT-1929",
          },
          origin: "linear",
          timestamp: 1731517993000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1988",
              title:
                "change(workspace): update workspace api endpoint to use typed one [FRONT-1929]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- type correctly workspace api calls by using newly created endpoints\n- use workspace api in `dashboard-farly` project\n- remove `react-data-context` from `dashboard-farly` project\n",
              id: 1988,
            },
            {
              url: "",
              origin: "git",
              id: "8c326576060bde330e2b43c6210aaed779889385",
              title:
                "change(workspace): update workspace api endpoint to use typed one [FRONT-1929] (#1988)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1865/enlever-les-ts-nocheck-dans-geoplannerlocation",
            title: "Enlever les ts-nocheck dans Geoplanner/Location/",
            origin: "linear",
            description:
              "## Contexte\n\nDeux fichiers ont le typecheck désactivé, le ts-nocheck a été mis avant la création des react-client.\n\n---\n\n## Critère d'acceptation\n\n* Plus aucun ts-nocheck dans le composant\n* Pas de regression au niveau du comportement\n* Tests unitaires des fonctions logiques/métier",
            id: "FRONT-1865",
          },
          origin: "linear",
          timestamp: 1731490002000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1960",
              title: "refactor: remove ts-nocheck from Geoplanner [FRONT-1865]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nRemove ts-nochecks from Geoplanner\r\n - Add SVGElement as a type of anchor for Dropdown\r\n - Migrate Location AdvancedSelect to Select\r\n - Add generic type to Select value (defaults to string)\r\n - use `GeoplannerLocalisationResultAdapter["type"]` insteand of `GeoplannerLocalisationTypeEnum` type is a union, cf https://github.com/mobsuccess-devops/lcm-microservice/blob/2b8df97f52a84fdde388c479ca6b9b1d976a6721/chalicelib/models/geoplanner_localisation_model.py#L31)\r\n\r\n### QA\r\n\r\ntypecheck',
              id: 1960,
            },
            {
              url: "",
              origin: "git",
              id: "5c9dcfc3362f1f7a914e6425b5826b9d14155d68",
              title:
                "refactor: remove ts-nocheck from Geoplanner [FRONT-1865] (#1960)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1748/ajouter-les-alertes-sur-la-vue-mpc-pour-informer-lutilisateur-des",
            title:
              "Ajouter les alertes sur la vue MPC pour informer l’utilisateur des jours restants avant la date limite de configuration du PAC",
            origin: "linear",
            description:
              "# User Story\n\n*Actuellement sur la vue MPC du LCO, il n'y aucune alerte de disponible. \nEn revanche, on peut voir sur la page panier un compte à rebours indiquant le nombre de jours restants au user pour finaliser la configuration du PAC* ⬇️ : \n\n![Capture d’écran 2024-10-16 à 15.26.29.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/116212aa-b303-464a-95bc-2523ea10f1f5/3e464a55-8061-4386-82d8-93c9be4cd215)\n\n**En tant que :** *Utilisateur Client du LCO,* \n\n**Je souhaite :** être informé du nombre de jours restants avant l'expiration de mon PAC (à J-X, J-3, J-2, J-1 et le Jour J), sur la vue MPC\n\n**Pour que :** m'assurer que je ne rate pas l'opportunité de finaliser mon engagement avant la date limite.\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. L'utilisateur voit une pastille lui indiquant le nombre de jours restants pour configurer son PAC (lorsque nous sommes à J-4 ou plus).\n2. L'utilisateur voit une alerte à J-3, J-2, J-1 et le Jour J indiquant le nombre de jours restants pour configurer son PAC.\n3. Les alertes doivent être visibles sur la vue MPC du LCO.\n4. Chaque alerte peut être retirée manuellement par l'utilisateur.\n5. Le design des alertes doit être conforme aux maquettes en fonction des 5 cas présentés. \n6. Les alertes doivent apparaître automatiquement, sans action supplémentaire de l'utilisateur.\n7. Si l'utilisateur ferme l'alerte, puis quitte la vue MPC (ex. : en allant sur la page panier) et revient ensuite sur la vue MPC, l'alerte doit réapparaître automatiquement.\n8. Les alertes doivent disparaître après la finalisation de la configuration du PAC -> une fois la commande validée ou à la date d'expiration.\n\n---\n\n# **Comportement voulu**\n\nLes alertes doivent s'afficher sous forme de bannières dans la vue MPC à des moments spécifiques. \n\n1. Lorsque nous sommes à J-X, avec x >/ = à 4 -> la vue MPC doit afficher la pastille suivante ⬇️ : \n\n![Operations commerciales-done 3.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/fa0da861-5686-4e14-bcd3-2fe05b279a4f/2484aa15-5cb4-4bff-af04-fd28a37bddd8)\n\n2. Lorsque nous sommes à J-3, la vue MPC doit afficher l'alerte suivante ⬇️ : \n\n![Operations commerciales-done 4.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/53804a0b-9be1-4614-a302-7255dd37dc68/8675a120-eb55-4ee0-ad72-ed4b62c7db92)\n\n3. Lorsque nous sommes à J-2, la vue MPC doit afficher l'alerte suivante ⬇️ : \n\n![Operations commerciales-done 5.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/dc063275-23d5-4b04-aff7-040c37b5c5dc/47d4952d-d859-4af1-bd3f-77d74ebb544f)\n\n3. Lorsque nous sommes à J-1, la vue MPC doit afficher l'alerte suivante ⬇️ :\n\n![Operations commerciales-done 6.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/c249e85a-8f60-4932-a84e-8e693a102e3f/e398f34c-9788-4814-a982-19f65e270e8a)\n\n4. Lorsque nous sommes le jour J, la vue MPC doit afficher l'alerte suivante ⬇️ :\n\n![Operations commerciales-done 7.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/0fa0ee48-ebca-4b0d-bc73-e8cb3527efac/ef841b97-0820-4442-8fdd-5dcc4807325a)\n\n---\n\n# **Informations complémentaires**\n\n*Maquette Figma :* \n\n[Alerte configuration PAC - Local Campaign Order (Figma)](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=10168-146592&t=PdvOiAYYigq8dXiX-1)\n\n---\n\n## Product Designer 🧑‍🎨 \n\n@anne-sophie.doumenge @rosanora \n\n---\n\n# Changelog\n\n🇫🇷  Ajout d’alertes sur la vue PAC pour informer l’utilisateur des jours restants (J-X, J-3, J-2, J-1, Jour J) avant la date limite de configuration de son PAC\n\n🇺🇸 Adding alerts on the MPC view to notify the user of the remaining days (J-X, J-3, J-2, J-1, Day J) before the PAC configuration deadline.",
            id: "FRONT-1748",
          },
          origin: "linear",
          timestamp: 1731488282000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1978",
              title: "feat(lco): mpc date alert [FRONT-1748]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/88cc32e6-3ffd-468d-859e-cb837c1846d2">\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/47d12524-cbb2-4c98-9af8-eece923f4387">\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/c14ad6f6-8ff1-4ce4-b1bf-0d488ad9bb4b">\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/0290e437-b458-4a3c-90f6-6d079253f2eb">\r\n\r\n### Test URL\r\n\r\nhttps://pr-1978.lco.live.mobsuccess.com/mpc/028e3c20-49ad-434b-aebb-75751652cc36?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae',
              id: 1978,
            },
            {
              url: "",
              origin: "git",
              id: "456c31c93be7021310eae364269d20fc971475ea",
              title: "feat(lco): mpc date alert [FRONT-1748] (#1978)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1917/changer-le-composant-de-fileupload-pour-utiliser-une-composition",
            title:
              "Changer le composant de FileUpload pour utiliser une composition plutôt que des props",
            origin: "linear",
            description:
              "#### Changelog\n\nModification du composant de FileUpload pour utiliser une composition au lieu de props",
            id: "FRONT-1917",
          },
          origin: "linear",
          timestamp: 1731424850000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1980",
              title:
                "change(FileUpload): make component use composition api instead of props [FRONT-1917]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nmake `FileUpload` component use composition api instead of props\n",
              id: 1980,
            },
            {
              url: "",
              origin: "git",
              id: "ea057bfa1b0c715bbc5f1979c00413c2d1230384",
              title:
                "change(FileUpload): make component use composition api instead of props [FRONT-1917] (#1980)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1712/ajouter-la-donnee-de-ctr-dans-la-phrase-sur-la-page-campagnes",
            title:
              "Ajouter la donnée de CTR dans la phrase sur la page campagnes",
            origin: "linear",
            description:
              '# User Story\n\n*Actuellement sur le Dashboard, la donnée CTR (Click Through Rate) n\'est pas affiché au niveau de la page "Campagne".* \n\n**En tant que :** *Adops, Client*\n\n**Je souhaite :** Afficher la donnée CTR sur la page "Campagne" du Dashboard\n\n**Pour que :** Les utilisateurs puissent visualiser rapidement ce KPI sans avoir à passer par la vue "Rapports détaillés"\n\n![Capture d’écran 2024-09-20 à 17.43.34.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/b0f82c5b-15ba-4ebe-953d-5d039a8ebc48/1439e9a3-de6d-485e-835a-ba7de34e82a6)\n\n---\n\n# Critères d\'acceptations (entre 5 et 9) \n\n1. La donnée CTR est visible sur la page "Campagne" du Dashboard, dans la section des KPI clés.\n2. Le CTR est calculé de manière identique à la vue "Rapports détaillés".\n3. Le format d\'affichage du CTR correspond à celui utilisé dans les "Rapports détaillés" (valeur en pourcentage avec deux décimales).\n4. Les utilisateurs peuvent voir cette donnée sans avoir besoin d\'interagir avec d\'autres éléments de la page (visible par défaut).\n5. Si aucune donnée n’est disponible pour une campagne, ne pas afficher la donnée. Exemple : -> Si jamais 0% sur un levier alors on l\'affiche pas (Waze)\n6. La fonctionnalité est responsive, s’adaptant correctement aux différents formats d’écran (desktop et mobile).\n\n---\n\n# **Comportement voulu**\n\nAjouter la donnée de CTR dans l’onglet campagne du dashboard ⬇️ : \n\n![Campagne.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/437aa7de-5df1-452e-8034-445538ac9c46/20dafe0b-e91c-4613-af1b-adee2b3b667d)\n\n---\n\n# **Informations complémentaires**\n\n*URL Master Dashboard :* [https://master.dashboard.live.mobsuccess.com/campaign?client=intersport&id_account=130&id_id_app=SU5URVJTUE9SVCAtIEpPVVJTIFNBTlMgU0UgUFJJVkVSIC0gMjgvMTI&store_id=\\*](https://master.dashboard.live.mobsuccess.com/campaign?client=intersport&id_account=130&id_id_app=SU5URVJTUE9SVCAtIEpPVVJTIFNBTlMgU0UgUFJJVkVSIC0gMjgvMTI&store_id=\\*)\n\nLien du thread slack de la demande métier : [https://mobsuccess.slack.com/archives/C02FE624H3L/p1726133017050289](https://mobsuccess.slack.com/archives/C02FE624H3L/p1726133017050289)\n\nMaquette Figma : [https://www.figma.com/design/Y01Yb7m6At4StC0NEoqjMH/Dashboard?node-id=3873-46467&node-type=frame&t=JCOB5CKXfQUSyvXd-0](https://www.figma.com/design/Y01Yb7m6At4StC0NEoqjMH/Dashboard?node-id=3873-46467&node-type=frame&t=JCOB5CKXfQUSyvXd-0)\n\n---\n\n## Product Designer 🧑‍🎨 \n\n@anne-sophie.doumenge \n\n---\n\n# Changelog\n\n🇫🇷  Ajout de l\'affichage du KPI CTR sur la page "Campagne" du Dashboard\n\n🇺🇸 Added CTR metric display on the Campaign page of the Dashboard',
            id: "FRONT-1712",
          },
          origin: "linear",
          timestamp: 1731059138000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1963",
              title: "feat(campaigns): add ctr data [FRONT-1712]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nAdd a new card about CTR\r\nAlso rework the first card to use PandArk\r\n\r\n### Scope\r\n\r\nCampaign page > First block\r\n\r\n### QA\r\n\r\n![Screenshot 2024-11-07 at 12 12 09](https://github.com/user-attachments/assets/ef61e6bd-f6b0-446a-878c-9eeaf0ca42ea)\r\n\r\n### Test URL\r\n\r\nhttps://pr-1963.dashboard.live.mobsuccess.com/campaign?id_id_app=SU5URVJTUE9SVCAtIEpPVVJTIFNBTlMgU0UgUFJJVkVSIC0gMjgvMTI&client=intersport&id_account=130",
              id: 1963,
            },
            {
              url: "",
              origin: "git",
              id: "7c41a997653b410b218fdd43d215488a54ba4e90",
              title: "feat(campaigns): add ctr data [FRONT-1712] (#1963)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1892/corriger-les-imports-relatifs-des-packages",
            title: "Corriger les imports relatifs des packages",
            origin: "linear",
            description:
              "Dans nos webapps certaines fonctions ou composants sont importés via un chemin relatif vers le package.\ni\n\n```\nimport { replaceTextInBlob } from \"../../../../../../packages/react-shared/src/public/utils/replace-text-blob\";\n```\n\n​​Il faudrait corriger les chemins d'import, et mettre en place une règle eslint qui permet d'éviter ces erreurs",
            id: "FRONT-1892",
          },
          origin: "linear",
          timestamp: 1730997549000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1965",
              title: "refactor: fix import paths from packages [FRONT-1892]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nfix relative import paths to packages\r\nadd eslint rule",
              id: 1965,
            },
            {
              url: "",
              origin: "git",
              id: "ed07f19ebe8191fcd0b7f81871c7edb544b797a5",
              title:
                "refactor: fix import paths from packages [FRONT-1892] (#1965)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1738/integrer-la-page-facebook-dans-gafa-account-setup-de-la-toolbox",
            title:
              'Intégrer la page Facebook dans "GAFA account setup" de la Toolbox',
            origin: "linear",
            description:
              "# User Story\n\n*La page Facebook permettent* d’ajouter des comptes Facebook, de les synchroniser et de les lier à un annonceur.\n\n**En tant que : **Utilisateur de la Toolbox\n\n**Je souhaite :** Intégrer la page **Facebook** dans l'outil **GAFA Account Setup** pour gérer les comptes Facebook\n\n**Pour que :** Je puisse ajouter, synchroniser et lier des comptes Facebook à un annonceur de manière fluide, tout comme c'est possible avec les pages Google Ads.\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. La page **Facebook** doit être intégrée dans l'outil **GAFA Account Setup** de la Toolbox, de manière similaire à la gestion des comptes Google Ads.\n2. L'utilisateur doit pouvoir ajouter des comptes Facebook via un bouton **\"Ajouter un compte Facebook\"**.\n3. Une fonctionnalité de synchronisation doit être disponible pour mettre à jour les comptes Facebook connectés.\n4. L'utilisateur doit pouvoir lier chaque compte Facebook à un annonceur spécifique.\n\n---\n\n# Messages d'erreur à prévoir\n\n**Erreur d'ajout de compte** : \n\nSi l'ajout d'un compte échoue, un message d'erreur doit apparaître : *\"Échec de l'ajout du compte Facebook. Veuillez réessayer.\"*\n\n**Erreur de synchronisation** : \n\nEn cas de problème lors de la synchronisation des comptes Facebook, afficher : *\"Erreur lors de la synchronisation des comptes. Veuillez réessayer.\"*\n\n**Erreur de liaison à un annonceur** : \n\nSi un compte Facebook ne peut pas être lié à un annonceur, un message d'erreur doit indiquer : *\"Impossible de lier ce compte à l'annonceur. Veuillez vérifier les informations.\"*\n\n[Component toaster](https://www.figma.com/design/ty1e9XJAGtc0f9ooktXw9V/%5BDesign-system%5D-Components?node-id=2594-158078&t=YGmv5MDE9HbTvjR2-1) : \n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/d50d8a66-87a4-4a43-932a-74c8883996fb/d22f21c8-57ca-4fdb-8a17-692d06d5883e)\n\n---\n\n# **Comportement voulu**\n\nIl faudrait que la page **Facebook** soit intégrée dans l'outil **GAFA Account Setup** de la Toolbox. \n\n![0.0-D-Desktop-Data (5).png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/55a1e7e7-3e95-422c-b401-ae3c7a929b76/9ce371cd-9111-4576-9bff-355fcdb1b0c2)\n\nL'utilisateur doit pouvoir ajouter, synchroniser et lier les comptes Facebook à un annonceur facilement et sans erreurs.\n\nCette page est accessible depuis la Toolbox, par 1 points d’entrée :\n\n* Au clic sur l'outil \"GAFA account setup\" dans la sidebar puis au clic sur le cadre Facebook.\n\nPars ce point d'entrée, l'user accède directement au tableau \"compte Facebook\".\n\n**Ce tableau contient les colonnes :**\n\n* “Nom” : noms des comptes Facebook\n* “Annonceur” : Les annonceurs sont représentés sous forme de \"badges\" cliquables et qui dirigent vers les sous-annonceurs de l'annonceur principal.\n* “Facebook Account ID” : les identifiants client, c’est un numéro unique utilisé pour identifier un compte Facebook.\n* ”Facebook Page ID’s : les identifiants d’une page ID, c’est un numéro unique utilisé pour identifier une page ID.\n* “Synchronisation” : Représenter sous forme de “Tag” qui peut être soit \"oui\" soit \"non\", indique si la campagne est lancée ou non.\n* Icône Clef à molette : Setting de la ligne.\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/9484e50e-0489-409c-ba88-833ebf30b338/4a4393e3-2ce0-4fda-8548-911dbdd4fb32)\n\n**Filtre :**\n\nPossibilité de filtrer les annonceurs.\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/ca2c000d-5b56-444f-bb4b-4cb0b9ff2161/b0c72528-8d58-452f-9a18-46a2e5529643)\n\n**Ajouter un compte Facebook :**\n\nEn cliquant sur le bouton “Ajouter un compte”, une modale “Ajouter un compte Facebook” apparait contenant :\n\n* Synchronisation : Avec un switch “oui”, “non”.\n* Annonceur : Un input sélecteur, “sélectionnez un annonceur”.\n* Nom : Un input Nom de l’annonceur.\n* Facebook Account ID : Un input, Numéro client Facebook (sans les tirets).\n* Facebook Page ID’s : Un input permettant de renseigner les ID’s des pages Facebook Ces identifiants sont représentés sous forme de Tag, chaque Id’s doivent être séparé par une virgule, ce qui permet de détecter que l’ID est bon et de créer le tag. Possibilité de les supprimer individuellement grâce à une croix de suppression intégrée dans chaque tag.\n* Un Bouton “Réinitialiser” : il permet de réinitialiser les champs préalablement remplis.\n* Un bouton Annuler : Ce qui ferme la modale.\n* Un bouton Ajouter : Qui permet d’ajouter le nouveau compte à la liste.\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/728d3716-18e5-4a00-a72c-b55eb3b1016d/46d06755-a3fc-47fa-8572-19374bc240b3)\n\n**Editer :** \n\nPossibilité d'éditer un compte Facebook.\n\nEn cliquant sur l’icône ”Clef à molette”, une modale “Editer un compte Facebook” apparait. Elle reprend le même contenu de la modale \"**Ajouter un compte Facebook**\".\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/86656410-cfc0-4a89-b0e8-9887162a9ca4/c9d2481e-4a26-4796-86dc-460c9097ff9b)\n\n---\n\n# Changelog\n\n🇫🇷  Intégration de la page  Facebook dans \"GAFA account setup\" de la Toolbox.\n\n🇺🇸 Integration of the Facebook page into the 'GAFA Account Setup' section of the Toolbox",
            id: "FRONT-1738",
          },
          origin: "linear",
          timestamp: 1730994750000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1933",
              title:
                "feat(third-party): add third-party accounts pages [FRONT-1738]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- add facebook third party page\n",
              id: 1933,
            },
            {
              url: "",
              origin: "git",
              id: "614fa599456738b20d0e4dea0c7411c32659e519",
              title:
                "feat(third-party): add third-party accounts pages [FRONT-1738] (#1933)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1873/bump-les-dependances-dutilities",
            title: "Bump les dépendances d'utilities",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @faker-js/faker\n* @remix-run/router\n* assert\n* aws-amplify\n* aws-iot-device-sdk-v2\n* axios\n* axios-mock-adapter\n* browserify-zlib\n* buffer\n* case\n* commander\n* concurrently\n* crypto-browserify\n* crypto-js\n* dom-storage\n* events\n* exceljs\n* get-intrinsic\n* glob\n* history\n* http-proxy\n* https-browserify\n* javascript-natural-sort\n* jszip\n* jwt-decode\n* luxon\n* make-plural\n* mapbox-gl\n* markdown-to-jsx\n* mock-xmlhttprequest\n* number-abbreviate\n* nunjucks\n* pandadoc-editor\n* polished\n* regenerator-runtime\n* remark-gfm\n* stream-browserify\n* stream-http\n* url\n* url-loader\n* util\n* uuid\n* zod\n\n---\n\n## Critère d'acceptation\n\n* Bump toutes ces dépendances\n* Vérifier que tout fonctionne correctement",
            id: "FRONT-1873",
          },
          origin: "linear",
          timestamp: 1730986532000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1946",
              title: "chore: bump utilities dependencies [FRONT-1873]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nBump utilities dependencies\r\n\r\nMajor versions:\r\n- [x] mapbox-gl (backward-compatible, only changes for types)\r\n- [x] uuid (remove @types/uuid)\r\n- [x] jwt-decode (default import deprecated)\r\n- [x] glob (no changes for us)\r\n- [x] @faker-js/faker (no changes for us)\r\n- [x] remark-gfm (no changes for us)\r\n- [x] concurrently (removed)\r\n\r\nAlso fix eslint rule “member expression" because of get-intrinsic not handing many functions anymore\r\nAlso fix types in eslint plugin by removing `satisfies` because it is currently broken',
              id: 1946,
            },
            {
              url: "",
              origin: "git",
              id: "008ee43597d63dbcf180c44ff1b44012001fb657",
              title: "chore: bump utilities dependencies [FRONT-1873] (#1946)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1881/fix-de-la-couleur-des-placeholder-sur-master",
            title: "Fix de la couleur des placeholder sur master",
            origin: "linear",
            description:
              "![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/19f70fdb-420a-4a53-8ff6-426502e00e8d/fea86289-1b3f-417f-b26b-039fe162c026)\n\nLes placeholder de la plupart des input ne prennent plus la class `placeholder:c_#BCC1DE::placeholder`",
            id: "FRONT-1881",
          },
          origin: "linear",
          timestamp: 1730909301000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1958",
              title: "fix: placeholder color on inputs [FRONT-1881]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n- use token interface.300\r\n- change _placeholder shortcut in preset\r\n\r\n### QA\r\n\r\n<img width="1457" alt="Screenshot 2024-11-06 at 15 31 20" src="https://github.com/user-attachments/assets/512ee183-518f-4c78-a088-e103fabd823f">\r\n\r\n### URLs\r\n\r\nhttps://pr-1958.lcm.live.mobsuccess.com/DriveToStore/d144cca4-4636-11ed-a4b9-d8c497e7bcae/6ca8ff11-4df8-11ed-a4b9-d8c497e7bcae/1a83d10d-572c-46bf-b60d-61b5bc7562e1/campaign-setup?modalname=RTB&modaluuid=0206e7ed-1ada-4208-b8a0-e299d127b886&modaltab=4\r\n\r\n',
              id: 1958,
            },
            {
              url: "",
              origin: "git",
              id: "83bf7de9974f8d9cb2d57363c0b1bbbd6320263a",
              title: "fix: placeholder color on inputs [FRONT-1881] (#1958)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1884/creer-le-composant-circularprogress",
            title: "Créer le composant CircularProgress",
            origin: "linear",
            description:
              "#### Changelog\n\nAjout du composant CircularProgress pour afficher la progression des tâches sur l'interface utilisateur",
            id: "FRONT-1884",
          },
          origin: "linear",
          timestamp: 1730899908000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1957",
              title: "feat: add circular progress component [FRONT-1884]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- add circular progress component\n",
              id: 1957,
            },
            {
              url: "",
              origin: "git",
              id: "4899d842b83a945de9c316295f0d2ac0d2a4f357",
              title:
                "feat: add circular progress component [FRONT-1884] (#1957)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1846/fixer-la-selection-des-dates-lors-de-la-creation-dun-projet-lcm-master",
            title:
              "Fixer la selection des dates lors de la création d'un projet LCM MASTER",
            origin: "linear",
            description:
              "# **Contexte (parcours d’entrée)**\n\nSur LCM Master, lors de la création d'un projet, les dates ne sont plus selectionnables.\n\n![Screenshot 2024-10-31 at 14.05.34.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/4b5efdc3-56d1-4c82-bfab-c54e269caf74/b5ace6f7-bade-4be3-9e1a-8019e9a5c97b)\n\n[Screen Recording 2024-10-31 at 14.05.21.mov](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/629042bf-e29f-4072-b674-634184bd9df7/b602f388-2134-44df-8771-232971254999)\n\n---\n\n# **Comportement voulu**\n\n*L*es dates lors de la création d'un projet LCM MASTER doivent sélectionnable\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. L'utilisateur peut \"Ajouter\" un nouveau projet\n\n---\n\n# Scénario de repro \n\nAller sur[ LCM master](https://master.lcm.live.mobsuccess.com/DriveToStore/d144cca4-4636-11ed-a4b9-d8c497e7bcae/6ca8ff11-4df8-11ed-a4b9-d8c497e7bcae) et ajouter un projet.\n\n![Screenshot 2024-10-31 at 14.11.28.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/6250c6ef-c2f1-49cb-bb0b-95a4b5b7780e/c8c9de1d-f75c-4c14-8fea-c58c3ad1aa0f)\n\nPuis cliquer sur \"Selectionner des dates\"\n\n![Screenshot 2024-10-31 at 14.11.55.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/69a9e058-298d-4565-a529-1ef9ca9f9007/4c17ab60-a0b4-4ed8-8afa-0b9808c91e0b)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de la selection des dates lors de la création d'un projet LCM MASTER\n\n🇺🇸Correction of the selection of dates when creating an LCM MASTER project",
            id: "FRONT-1846",
          },
          origin: "linear",
          timestamp: 1730886504000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1956",
              title: "fix(dialog-project): date picker [FRONT-1846]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nfix a bug where date picker wouldn\'t appear when selected\r\n\r\n### QA\r\n\r\n<img width="1470" alt="Capture d’écran 2024-11-06 à 10 16 29" src="https://github.com/user-attachments/assets/252d3582-a503-49f8-9a65-ba55e9e80c80">\r\n\r\n### Scope\r\n\r\nlcm > dialog project > date picker\r\n\r\n### Test URL\r\n\r\nhttps://pr-1956.lcm.live.mobsuccess.com/DriveToStore/d144cca4-4636-11ed-a4b9-d8c497e7bcae/6ca8ff11-4df8-11ed-a4b9-d8c497e7bcae',
              id: 1956,
            },
            {
              url: "",
              origin: "git",
              id: "b4177e4553bcd8fa83d620954d4c1596a9a9edbb",
              title: "fix(dialog-project): date picker [FRONT-1846] (#1956)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1801/bump-tanstackreact-query",
            title: "Bump @tanstack/react-query",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @tanstack/react-query\n* @tanstack/react-query-devtools\n\nLiens utiles :\n\n* [https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-v5](https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-v5)\n* [https://github.com/TanStack/query/discussions/5279](https://github.com/TanStack/query/discussions/5279)\n\nDifférence entre isLoading et isPending :\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/3441615d-9f5c-4eda-9126-a07e0795b30c/3f00143d-2bfd-4344-8e31-10146c1f8d34)\n\n---\n\n## Critère d'acceptation\n\n* Bump toutes ces dépendances\n* Vérifier que tout fonctionne correctement",
            id: "FRONT-1801",
          },
          origin: "linear",
          timestamp: 1730882863000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1905",
              title: "chore: bump react query [FRONT-1801]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nBump @tanstack/react-query and adapt the breaking changes (api related changes)\r\nAlso bump in microservice-client: https://github.com/mobsuccess-devops/microservice-client/pull/1540",
              id: 1905,
            },
            {
              url: "",
              origin: "git",
              id: "44d0c6504b97dc122a462bd1dacd36eba724b0b2",
              title: "chore: bump react query [FRONT-1801] (#1905)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1778/corriger-lerreur-qui-bloque-lacces-a-la-connexion-sur-la-page",
            title:
              "Corriger l'erreur qui bloque l'accès à la connexion sur la page d'authentification des produits MS",
            origin: "linear",
            description:
              "# **Contexte** \n\nParfois lorsque le user tente de se connecter sur la page d'authentification des produits MS, une erreur est renvoyée (pour diverse raison) sur l'endpoint `login-auth` et bloque la connexion \n\n→ In fine le user reste bloqué sur la page d'authentification, et si il appuie à nouveau sur le bouton de connexion, l'endpoint n'est pas rappelé. \nDonc tant qu'il n'ajoute pas manuellement `?action=sign-out` en fin d'url, une boucle sans fin le renvoie sur la page d'authentification, l'empêchant ainsi d'accéder au produit (Cf screen record 👇🏻)\n\n> Hypothèse de Gilles : \"je pense que ça garde les infos de connexion dans le local storage\"\n\n---\n\n# **Comportement voulu**\n\n*Faire en sorte à ce que le user puisse se connecter sans être impacté par les erreurs renvoyés vers* l'endpoint `login-auth`  *et sans avoir besoin d'ajouter manuellement le paramètre* `?action=sign-out` *en fin d'url* \n\n---\n\n# Critères d'acceptations\n\n1. L'utilisateur, si il se connecte avec les bonnes valeurs d'email et mot de passe associées à son compte, doit pouvoir accéder directement au produit concerné et ne pas rester bloqué sur la page d'authentification\n2. Le reste du parcours actuel ne dois pas changer, par exemple si le user se connecte avec email et/ou login erroné, alors un message d'erreur s'affiche et il n'est pas renvoyé sur la page du produit mais reste bien sur la page d'authentification\n\n---\n\n# Scénario de repro \n\n1. *Aller sur* [https://dev.app.mobsuccess.com/auth](https://dev.app.mobsuccess.com/auth), ou sur n'importe quel produit MS et se déconnecter pour revenir sur la page d'authentification\n2. Puis se connecter/déconnecter jusqu'à reproduire l'erreur (random) qui bloque la connexion \n3. Tenter alors de se connecter à nouveau\n4. Constater qu'on est pas renvoyé vers la page de destination, mais qu'on reste bien bloqué sur la page d'authentification\n5. Ajouter manuellement le param `?action=sign-out` en fin d'url\n6. Et constater enfin qu'on accède à la page souhaitée, sans avoir modifié les valeurs de login associée au compte\n\n   [Enregistrement de l’écran 2024-10-23 à 18.41.06.mov](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/fc09f242-3bbe-4d71-9563-5fc316051d00/77de7c48-34e9-439f-9b37-5e8137a8eb21)\n\nN.B: je reproduis le bug de façon random et particulièrement sur Chrome \n\n⚠️ Par contre le soucis est systématique avec un utilisateur inactif ⚠️\n\n---\n\n# **Log**\n\n* Request URL: [https://dev.app.mobsuccess.com/webservices/rest/login-auth](https://dev.app.mobsuccess.com/webservices/rest/login-auth)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de l'erreur qui bloque l'accès à la connexion sur la page d'authentification des produits MS\n\n🇺🇸 Fix of an error blocking access to login on MS product authentication page",
            id: "FRONT-1778",
          },
          origin: "linear",
          timestamp: 1730824292000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1925",
              title:
                "fix(auth): handle error and sign out on login failure [FRONT-1778]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nsignout when the login-auth endpoint fails\n\n### Scope\n\nwebapps/auth\n",
              id: 1925,
            },
            {
              url: "",
              origin: "git",
              id: "b6f28f5218e71f8d15d5e682983fef513ec08fc6",
              title:
                "fix(auth): handle error and sign out on login failure [FRONT-1778] (#1925)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1837/ajouter-le-composant-tagsinput-dans-react-ui",
            title: "Ajouter le composant TagsInput dans react-ui",
            origin: "linear",
            description:
              "## Contexte\n\nAfin d'ajouter des éléments séparés dans une liste dans avoir d'overlap ou de doublons, nous avons besoin du composant TagsInput\n\n---\n\n## Critère d'acceptation\n\n* Le composant TagsInput est créé et exposé dans react-ui\n* Le composant a des tests unitaires\n* Le composant dispose d'une ou plusieurs stories\n* Le composant a un/des tests visuels\n* Le composant permet l'ajout de tag\n* Le composant permet d'enlever des Tags\n* Le composant permet de valider les tags avant de les enregistrer\n* Le composant permet de prévenir l'utilisateur lorsque le tag est invalid\n* Le composant est disponible en form field\n* ~~Le composant est disponible en singleline ET en multiline~~  on verra si necessaire",
            id: "FRONT-1837",
          },
          origin: "linear",
          timestamp: 1730798590000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1941",
              title: "feat: add TagsInput component [FRONT-1837]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- [x] Add `TagsInput` component to react-ui\r\n- [x] Add a story for `TagsInput` component\r\n- [x] Add a test for `TagsInput` component\r\n- [x] Add visual regression test for `TagsInput` component\r\n\r\n### Scope\r\n\r\ncomponents library > tags input\r\n\r\n### QA\r\n\r\n- open storybook\r\n- go to tags input story\r\n- add tags\r\n- remove tags\r\n- add tags with enter\r\n- add tags with comma\r\n- add tags with space\r\n\r\n### Test URL\r\n\r\nhttps://pr-1941.react-ui-storybook.live.mobsuccess.com/?path=/docs/pandaark-tagsinput--docs",
              id: 1941,
            },
            {
              url: "",
              origin: "git",
              id: "d916401a3cf9ca0af9e28539010b5dfdb9461577",
              title: "feat: add TagsInput component [FRONT-1837] (#1941)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1871/autoriser-les-render-props-en-tant-que-children-de-composants",
            title:
              "Autoriser les render props en tant que children de composants",
            origin: "linear",
            description:
              "#### Changelog\n\nAjout de la prise en charge des render props en tant que enfants de composants",
            id: "FRONT-1871",
          },
          origin: "linear",
          timestamp: 1730795429000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1945",
              title:
                "change(eslint): allow render props as children [FRONT-1871]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nallow render props as children (allow factories or ctx providers)\n",
              id: 1945,
            },
            {
              url: "",
              origin: "git",
              id: "636304c38c759f90000370bad2ff1896bd33a2bb",
              title:
                "change(eslint): allow render props as children [FRONT-1871] (#1945)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1866/corriger-le-render-infini-de-la-combobox",
            title: "Corriger le render infini de la combobox",
            origin: "linear",
            description:
              "#### Changelog\n\nSupprimer les decorators lors de la creation de la collection d'item d'un combobox",
            id: "FRONT-1866",
          },
          origin: "linear",
          timestamp: 1730738694000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1943",
              title:
                "fix(select): ensure no decorators within the combobox collection [FRONT-1866]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- remove decorators when creating combobox collection as they appear to cause an infinit render loop\n- make items collection common between single and multi select comboboxes\n\n### Scope\n\ncomponent system > select/combobox\n",
              id: 1943,
            },
            {
              url: "",
              origin: "git",
              id: "e62373f2bef475f9ec4974771fb5676331b3a462",
              title:
                "fix(select): ensure no decorators within the combobox collection [FRONT-1866] (#1943)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1807",
            title: "refactor: select select component [FRONT-1198]",
            origin: "github",
            description:
              '### What does it do? Why?\r\n\r\nUpdate select component to:\r\n - Clean code\r\n - Add tests\r\n - Add tags overflow\r\n - Split single and multiple\r\n While keeping the same API so that no migration is necessary\r\n \r\n<img width="593" alt="image" src="https://github.com/user-attachments/assets/f6af5454-e29b-429a-9fb7-575a55c89138">\r\n \r\n<img width="593" alt="image" src="https://github.com/user-attachments/assets/07ea6c6a-1e4c-4210-a21b-a4b3838ef667">',
            id: 1807,
          },
          origin: "github",
          timestamp: 1730714346000,
          references: [
            {
              url: "",
              origin: "git",
              id: "c89e7511914782cbf82f10e5a0556f3abc7758b4",
              title: "refactor: select select component [FRONT-1198] (#1807)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1757/bump-les-dependances-dui",
            title: "Bump les dépendances d'UI",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @ark-ui/anatomy\n* @ark-ui/react\n* @emoji-mart/data\n* @emoji-mart/react\n* @dnd-kit/core\n* @dnd-kit/modifiers\n* @dnd-kit/sortable\n* @dnd-kit/utilities\n* @lexical/react\n* @lexical/utils\n* @n8tb1t/use-scroll-position\n* @outdated-tanstack/react-table\n* @pandacss/dev\n* @tanstack/react-form\n* @tanstack/react-table\n* @tanstack/react-virtual\n* @tanstack/zod-form-adapter\n* @react-pdf/renderer\n* emoji-mart\n* lexical\n* recharts\n* react\n* react-colorful\n* react-device-detect\n* react-dom\n* react-horizontal-scrolling-menu\n* react-joyride\n* react-qr-code\n* react-resize-detector\n* react-router-dom\n\nEt mettre styled-components en version bloquée\n\n---\n\n## Critère d'acceptation\n\n* Bump toutes ces dépendances\n* Vérifier que tout fonctionne correctement",
            id: "FRONT-1757",
          },
          origin: "linear",
          timestamp: 1730373769000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1892",
              title: "chore: bump ui deps [FRONT-1757]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- Bump deps related to ui\r\n- Set styled-components version to under v6 because of type issues\r\n- Fix tests with pandacss classes\r\n- Fix forms with api changes\r\n- Change ColorPicker, DatePicker and TimePicker so they still work as before with their value/defaultValue as strings\r\n- Change Select because of an api change from ark\r\n- react-horizontal-scrolling-menu now has types",
              id: 1892,
            },
            {
              url: "",
              origin: "git",
              id: "8f7fec31c91dbf7d875d0b1c0339b2ca75c71b55",
              title: "chore: bump ui deps [FRONT-1757] (#1892)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1530/bump-les-dependances-en-rapport-avec-prettier",
            title: "Bump les dépendances en rapport avec Prettier",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @trivago/prettier-plugin-sort-imports\n* prettier\n\n## Critère d'acceptation\n\n* Bump ces dépendances\n* Formatter des fichiers si besoin",
            id: "FRONT-1530",
          },
          origin: "linear",
          timestamp: 1730302935000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1922",
              title: "chore: bump prettier [FRONT-1530]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nBump prettier and run it, it adds parenthesis around conditions in ternaries",
              id: 1922,
            },
            {
              url: "",
              origin: "git",
              id: "8127b4b90a94ba742a256c0abcc90fd67eee8a75",
              title: "chore: bump prettier [FRONT-1530] (#1922)",
              description: "",
            },
          ],
        },
      ],
    },
    {
      id: "agency:edit",
      description: "Agency edition form",
      path: "./src/pages/[businessUnit]/edit.[agency].tsx",
      updates: [
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2046/migrer-les-pages-inaccessibles-du-dashboard-farly-a-pandark",
            title:
              "Migrer les pages inaccessibles du dashboard-farly à Pandark",
            origin: "linear",
            description:
              "## Contexte\n\nCertaines pages du dashboard farly sont inaccessibles, mais il faudrait tout de même les migrer car elles seront sans doute un jour utilisées.\n\nPages :\n\n* /final-numbers\n* /invoices\n* /all-reports\n\nDiscussion slack :\n\n[Slack](https://mobsuccess.slack.com/archives/C04EBKSK0LA/p1732533517011609)",
            id: "FRONT-2046",
          },
          origin: "linear",
          timestamp: 1732702169000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2089",
              title:
                "refactor(blocked-routes): migrate to pandark [FRONT-2046]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nSome pages are not accessible but we still need to migrate them to pandark\r\n\r\n### Scope\r\n\r\n/final-numbers\r\n/invoices\r\n/all-reports\r\n\r\n### QA\r\n\r\n![image](https://github.com/user-attachments/assets/40501c53-fbb5-40b4-a70d-d8dd69d49313)\r\n![image](https://github.com/user-attachments/assets/3a6f0346-bc84-45ad-8c17-9631c536af39)\r\n![image](https://github.com/user-attachments/assets/3d78eb33-b5e1-49a8-877d-56325217ebdd)\r\n\r\n### Test URL\r\n\r\nhttp://localhost:3115/final-numbers?client=flutter&id_account=3239\r\nhttp://localhost:3115/invoices?client=flutter&id_account=3239\r\nhttp://localhost:3115/all-reports?client=flutter&id_account=3239\r\n\r\nNot possible on deployed envs, you need to checkout to the branch and:\r\n- in `/webapps/dashboard-farly/src/pages/_app.tsx`, comment lines 51 to 53\r\n- in `webapps/dashboard-farly/src/components/SidebarProvider/SidebarProvider.tsx`, comment lines 91 and 102",
              id: 2089,
            },
            {
              url: "",
              origin: "git",
              id: "b881c8a3c64a9ab704804ac9c4dbd494ffce3141",
              title:
                "refactor(blocked-routes): migrate to pandark [FRONT-2046] (#2089)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1964/migration-du-datepickersingleday-sur-le-lc0",
            title: "Migration du DatepickerSingleDay sur le LC0",
            origin: "linear",
            description:
              "## Contexte\n\nIl faut remplacer sur le LCO l'ancien composant `<DatePickerSingleDay />` par notre nouveau composant PandaArk `<DatePicker />`\n\n---\n\n## Informations complémentaires\n\n* [https://master.lco.live.mobsuccess.com/](https://master.lcm.live.mobsuccess.com/)\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression",
            id: "FRONT-1964",
          },
          origin: "linear",
          timestamp: 1732696835000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2088",
              title:
                "feat: migrate the datepicker onto lco [FRONT_1964] [FRONT-1964]",
              origin: "github",
              description:
                "### What does it do? Why?\r\nChange the datePickerSingleDay of lco/KitDatRange to the new datePicker (Panda)\r\n### Scope\r\nlco\r\n### QA\r\n\r\n### Test URL\r\nhttps://pr-2088.lco.live.mobsuccess.com/kit/19104c93-f839-4501-9c11-a1d5553d74df?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae",
              id: 2088,
            },
            {
              url: "",
              origin: "git",
              id: "b08fa79b728e5bcafa7fd4905da2ba7bb0f13344",
              title:
                "feat: migrate the datepicker onto lco [FRONT_1964] [FRONT-1964] (#2088)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2085/utiliser-les-imports-type-sur-les-webapps",
            title: "Utiliser les imports type sur les webapps",
            origin: "linear",
            description:
              "`biome lint --only=style/useImportType --write  ./webapps/lcm/src`",
            id: "FRONT-2085",
          },
          origin: "linear",
          timestamp: 1732638143000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2106",
              title:
                "refactor(packages,configs): use import types [FRONT-2085]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nUse import types in preparation for adding `verbatimModuleSyntax` in the tsconfig\r\nUsed `biome lint --only=style/useImportType --write  ./webapps/[webapp]/src`",
              id: 2106,
            },
            {
              url: "",
              origin: "git",
              id: "5e8884f1983f868f4644037fb05e57182d7c583c",
              title:
                "refactor(packages,configs): use import types [FRONT-2085] (#2106)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2086/utiliser-les-imports-type-sur-les-packages-et-configs",
            title: "Utiliser les imports type sur les packages et configs",
            origin: "linear",
            description:
              "`biome lint --only=style/useImportType --write  ./webapps/lcm/src`",
            id: "FRONT-2086",
          },
          origin: "linear",
          timestamp: 1732637287000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2105",
              title: "refactor(webapps): use import types [FRONT-2086]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nUse import types in preparation for adding `verbatimModuleSyntax` in the tsconfig\r\nUsed `biome lint --only=style/useImportType --write  ./webapps/[webapp]/src`",
              id: 2105,
            },
            {
              url: "",
              origin: "git",
              id: "69fb2483d8c4118d02c8e536de7b4505d0a4bf17",
              title: "refactor(webapps): use import types [FRONT-2086] (#2105)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2058/migrer-les-derniers-call-apis-du-lcm-vers-des-appel-react-client",
            title:
              "Migrer les derniers call apis du lcm vers des appel react-client",
            origin: "linear",
            description:
              "#### Changelog\n\nMigration des derniers appels APIs du LCM vers l'appel client React",
            id: "FRONT-2058",
          },
          origin: "linear",
          timestamp: 1732615734000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2091",
              title: "chore(rdc-migration): remove rdc references [FRONT-2058]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- remove rdc related code from lcm\r\n- migrate verify api call\r\n- migrate audiences retrieval (still direct call to platform but using axiosGet)\r\n- migrate facebook account listing\r\n",
              id: 2091,
            },
            {
              url: "",
              origin: "git",
              id: "35f9e6c1b931e3ff20d5666ee9118cededca0c87",
              title:
                "chore(rdc-migration): remove rdc references [FRONT-2058] (#2091)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2059/retirer-le-code-mort-de-react-ui",
            title: "Retirer le code mort de react-ui",
            origin: "linear",
            description:
              "#### Changelog\n\nSuppression des codes morts de react-ui",
            id: "FRONT-2059",
          },
          origin: "linear",
          timestamp: 1732554823000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2092",
              title:
                "chore(knip): cleanup unused exports react-ui [FRONT-2059]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nuse knip to remove unused `export` statements\ndetect unused code with eslint (exported code was ignore by eslint -- removing export statements allows eslint to detect unused code)\n",
              id: 2092,
            },
            {
              url: "",
              origin: "git",
              id: "8f39ac3b271ef2295d1bac4be40915b2ebb85c6b",
              title:
                "chore(knip): cleanup unused exports react-ui [FRONT-2059] (#2092)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2057/nettoyer-les-fonctions-exportations-types-inutilises-du-lcm-knip-tache",
            title:
              "Nettoyer les fonctions / exportations / types inutilisés du LCM (knip) - tâche interne",
            origin: "linear",
            description:
              "#### Changelog\n\nNettoyage des fonctions inutilisées du LCM (knip) effectué pour améliorer la performance du produit",
            id: "FRONT-2057",
          },
          origin: "linear",
          timestamp: 1732548370000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2090",
              title:
                "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nuse knip to remove unused `export` statements\ndetect unused code with eslint (exported code was ignore by eslint -- removing export statements allows eslint to detect unused code)\n",
              id: 2090,
            },
            {
              url: "",
              origin: "git",
              id: "84ca8bfba9e81dd4209edaa03e6f5d0952a5a489",
              title:
                "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057] (#2090)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2044/migrer-le-blockloader-du-lcm-auth",
            title: "Migrer le BlockLoader du LCM + Auth",
            origin: "linear",
            description:
              "## Contexte\n\nNous avons un nouveau loader: `Loader.Block`\n\n---\n\n## **Description du Problème**\n\nRetirer les anciennes utilisation du `BlockLoader`\n\n---\n\n## Informations complémentaires\n\n* faire que le LCM\n\n---",
            id: "FRONT-2044",
          },
          origin: "linear",
          timestamp: 1732547702000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2086",
              title: "refactor: use loader dot block [FRONT-2044]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n- Replace `BlockLoader` by `Loader.Block`\r\n  - LCM\r\n  - Auth\r\n\r\n### Score\r\n\r\nLCM & Auth\r\n\r\n### QA\r\n\r\nLCM\r\n\r\n<img width="1452" alt="lcm1" src="https://github.com/user-attachments/assets/afe130cc-c582-44a1-ad09-494b7962d812">\r\n<img width="1452" alt="lcm3" src="https://github.com/user-attachments/assets/8b8904cd-2dac-4378-945d-94e3a85ac843">\r\n\r\nAuth\r\n\r\n<img width="1452" alt="auth" src="https://github.com/user-attachments/assets/4eccdf09-41f4-42c2-86be-faac58b807ad">\r\n\r\n\r\n',
              id: 2086,
            },
            {
              url: "",
              origin: "git",
              id: "b84e63e8382283601c22f04decca3ebe3f5b87f7",
              title: "refactor: use loader dot block [FRONT-2044] (#2086)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2037/mettre-a-jour-lales-pages-dannonceur-sur-le-meme-format-que-les-pages",
            title:
              "Mettre à jour la/les pages d'annonceur sur le même format que les pages annonce",
            origin: "linear",
            description:
              "#### Changelog\n\nMise à jour du format des pages d'annonceur pour correspondre aux pages annonce",
            id: "FRONT-2037",
          },
          origin: "linear",
          timestamp: 1732536219000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2077",
              title: "change(migration-rdc): advertiser page [FRONT-2037]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- migrate advertiser table page\n  - add new table\n  - display more advanced informations\n- add /create page for advertisers (using the same form)\n- add /edit/:uui page for advertisers (using the same form)\n\n### Scope\n\nmigration lcm\n",
              id: 2077,
            },
            {
              url: "",
              origin: "git",
              id: "575b3e2f12f68e7d09bb5ba6ab1504436380e241",
              title:
                "change(migration-rdc): advertiser page [FRONT-2037] (#2077)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2034/retirer-les-layout-de-rui-qui-forward-panda",
            title: "Retirer les Layout de RUI qui forward Panda",
            origin: "linear",
            description:
              '## Contexte\n\nPanda est notre framework pour le design system\n\n---\n\n## **Description du Problème**\n\nPour ne pas nous coupler fortement avec PandaCSS, nous avions faire une facade pour "forwarder" les composants de Layout et garder leur "responsabilité" chez nous\n\nDans la pratique, nous utilisons directement les composant de PandaCSS sans passer par les notres.\n\n---\n\n## Critère d\'acceptation\n\n* retirer ces composants Layout',
            id: "FRONT-2034",
          },
          origin: "linear",
          timestamp: 1732279334000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2071",
              title:
                "refactor: remove forwarded layout components [FRONT-2034]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- Remove forwarded layout components\r\n- Update imports",
              id: 2071,
            },
            {
              url: "",
              origin: "git",
              id: "f8319ac227f737a8912c80a36b00d1e89b1c0d4c",
              title:
                "refactor: remove forwarded layout components [FRONT-2034] (#2071)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1906/migrer-le-nouveau-table-de-la-page-overview-du-dashboard-farly",
            title:
              "Migrer le nouveau Table de la page `Overview` du Dashboard-farly",
            origin: "linear",
            description:
              "## Contexte\n\nNous devons migrer le nouveau Table `Performances summary` sur la page  `Overview` du Dashboard-farly\n\n---\n\n## Informations complémentaires\n\n* [https://master.dashboard-farly.live.mobsuccess.com/overview?client=flutter&id_account=3239&ran\\[…\\]0Z&range_filterend=2024-10-01T22%3A00%3A00.000Z](https://master.dashboard-farly.live.mobsuccess.com/monetization?client=flutter&id_account=3239&range_filterstart=2024-09-30T22%3A00%3A00.000Z&range_filterend=2024-10-01T22%3A00%3A00.000Z)\n* \n\n  ![Capture d’écran 2024-11-08 à 16.24.54.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/59862a90-d6ed-44a0-8023-df785c70749e/1584febb-6296-4659-aae0-dab7bd2c14d2)\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression par rapport à l'ancien Table ",
            id: "FRONT-1906",
          },
          origin: "linear",
          timestamp: 1732271220000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2021",
              title: "refactor(overview): use pandark table [FRONT-1906]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nReplace old table with pandark table\r\n\r\n### Scope\r\n\r\nOverview\r\n\r\n### QA\r\n\r\n![Screenshot 2024-11-18 at 16 42 25](https://github.com/user-attachments/assets/640c479d-0029-4e12-8462-3fc30f694e49)\r\n\r\n### Test URL\r\n\r\nhttps://pr-2021.dashboard-farly.live.mobsuccess.com/overview?client=flutter&id_account=3239&range_filterstart=2024-07-31T22:00:00.000Z&range_filterend=2024-10-30T23:00:00.000Z",
              id: 2021,
            },
            {
              url: "",
              origin: "git",
              id: "4d071d877dd92ed44711bce44403268402684971",
              title:
                "refactor(overview): use pandark table [FRONT-1906] (#2021)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1946/migration-de-linput-sur-le-package-react-shared",
            title: "Migration de l'Input sur le package React-shared",
            origin: "linear",
            description:
              "## Contexte\n\nIl faut remplacer sur le package React-shared l'ancien composant `<AdvancedInput />` par notre nouveau `<Input />` pandaArk.\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression",
            id: "FRONT-1946",
          },
          origin: "linear",
          timestamp: 1732208956000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2055",
              title:
                "change: migrate AdvancedInput to panda input [FRONT-1946]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- migrate `<AdvancedInput />` to `<Input.Root />` in react-shared\r\n  - migrate `Login`\r\n  - migrate `ForgotPassword`\r\n  - migrate `ResetPassword`\r\n\r\n### Scope\r\n\r\nmigration > panda\r\n\r\n\r\n### Tests\r\n\r\n[Login](https://pr-2055.auth.live.mobsuccess.com/)\r\n\r\n![image](https://github.com/user-attachments/assets/e85defa4-4c06-4b5c-ad83-eb031ce4baf9)\r\n\r\n[Forgot Password](https://pr-2055.auth.live.mobsuccess.com/?action=forgot-password)\r\n\r\n![image](https://github.com/user-attachments/assets/825365fa-4056-463a-84e6-e056970f4b41)\r\n\r\n[Reset Password](https://pr-2055.auth.live.mobsuccess.com/?action=reset-password)\r\n\r\n![image](https://github.com/user-attachments/assets/03090473-da1e-480a-81a9-f85786e572ef)\r\n",
              id: 2055,
            },
            {
              url: "",
              origin: "git",
              id: "57330cd9cc9ae11fd7a3020e90e95eed1791c76b",
              title:
                "change: migrate AdvancedInput to panda input [FRONT-1946] (#2055)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1918/migrer-la-page-agence-vers-un-table-pandaark",
            title: "Migrer la page agence vers un table PandaArk",
            origin: "linear",
            description:
              "* Utiliser un Table dans la page de séléction d'Agence\n* Migrer les appels api vers des endpoints typés\n\n#### Changelog\n\nAjout des endpoints typés pour les pages d'agence  + Utiliser un Table dans la page de séléction d'Agence",
            id: "FRONT-1918",
          },
          origin: "linear",
          timestamp: 1732196340000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1981",
              title: "feat: use typed endpoint for agency pages [FRONT-1918]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- use typed endpoints from lcm-microservice to list agencies\n- use table to display agencies instead of custom list\n- use forms apis for creating and updating agencies\n\n### Scope\n\nagencies > list/create/update\n",
              id: 1981,
            },
            {
              url: "",
              origin: "git",
              id: "bbbae9ad3efd48b4268d96931c65c632d8764f3f",
              title:
                "feat: use typed endpoint for agency pages [FRONT-1918] (#1981)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-2019/ameliorer-le-styling-de-dialog-fileupload-image-et-table-dans-react-ui",
            title:
              "Améliorer le styling de Dialog FileUpload Image et Table dans react-ui",
            origin: "linear",
            description:
              "#### Changelog\n\nAmélioration du styling de Dialog, FileUpload, Image et Table dans react-ui",
            id: "FRONT-2019",
          },
          origin: "linear",
          timestamp: 1732114253000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2051",
              title:
                "change: update styling in Dialog FileUpload Image and Table components [FRONT-2019]",
              origin: "github",
              description:
                '### What does it do? Why?\n\n- allow css props to be passed to `Image` component (using `styled()` wrapper from pandacss)\n- ensure `FileLoader` to have a 100% height instead of auto\n- provide an "all className" meta property for table rows (avoiding passing cell.className, header.className, footer.className for the same class)\n- update `Dialog` to use flex instead of grid -- this avoid a bug when a dialog does not have a description but keeps adding a gap between the title and description AND description and content\n\n### Scope\n\nreact-ui > styling\n',
              id: 2051,
            },
            {
              url: "",
              origin: "git",
              id: "9b7627a661ad6ea8fe4cdf70d4663ed173943625",
              title:
                "change: update styling in Dialog FileUpload Image and Table components [FRONT-2019] (#2051)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1942/migration-de-linput-sur-le-lmp",
            title: "Migration de l'Input sur le LMP",
            origin: "linear",
            description:
              "## Contexte\n\nIl faut remplacer sur le LMP l'ancien composant `<AdvancedInput />` par notre nouveau `<Input />` pandaArk.\n\n---\n\n## Informations complémentaires\n\n* [https://master.lmp.live.mobsuccess.com/](https://master.lcm.live.mobsuccess.com/)\n\n---\n\n## Critère d'acceptation\n\n* Ne pas avoir de régression",
            id: "FRONT-1942",
          },
          origin: "linear",
          timestamp: 1732099468000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2036",
              title:
                "refactor(lmp): replace advanced input with panda input [FRONT-1942]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n<img width="1111" alt="image" src="https://github.com/user-attachments/assets/9b65a990-d775-463e-a986-0d43439ac684">\r\n\r\n<img width="1111" alt="image" src="https://github.com/user-attachments/assets/8ee2e237-243e-4f54-9259-38b08934d435">',
              id: 2036,
            },
            {
              url: "",
              origin: "git",
              id: "4fa9b4f5050ec9ee172d22109fa33b8a95082cee",
              title:
                "refactor(lmp): replace advanced input with panda input [FRONT-1942] (#2036)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1992/corriger-lapparition-du-grey-screen-suite-a-la-creation-dune-agence",
            title:
              "Corriger l'apparition du grey screen suite à la création d’une agence",
            origin: "linear",
            description:
              "# **Contexte (parcours d’entrée)**\n\nActuellement, lors de l’ajout d’une nouvelle agence dans le Local Campaign Manager, un grey screen apparaît après la validation.\n\nDe plus, lorsque l’utilisateur tente de rouvrir l’agence précédemment créée, le même écran gris réapparaît systématiquement, empêchant l'accès ou la modification des informations de l’agence nouvellement ajoutée.\n\n[Enregistrement de l’écran 2024-11-18 à 15.18.05.mov](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/ad9cd470-4436-46bc-8c5f-ff4b2b8fe8d2/4dc79e51-1c58-48da-b86f-cf7cbf10d25b)\n\n---\n\n# **Comportement voulu**\n\nIl faudrait que, lors de l’ajout d’une nouvelle agence, le LCM doit permettre à l’utilisateur de poursuivre son parcours sans grey screen. La validation de l’ajout doit aboutir soit une redirection automatique vers la page suivante (->Annonceur). L’interface ne doit plus afficher de grey screen, que ce soit après la validation de l’ajout ou lors d’une tentative d’ouverture de l’agence nouvellement créée.\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. Si l’utilisateur ajoute une nouvelle agence, il doit être automatiquement redirigé vers la page suivante(->annonceur).\n2. Si l’utilisateur tente d’ouvrir l’agence nouvellement créée, il doit pouvoir y accéder sans rencontrer de gray screen.\n3. Si l’utilisateur consulte la liste des agences, les informations de l’agence récemment ajoutée doivent s’afficher correctement.\n\n---\n\n# Scénario de repro \n\n1. Connectez-vous à la plateforme LCM.\n2. Naviguez vers l’onglet permettant l’ajout d’une agence.\n3. Cliquez sur **“+ Ajouter une agence”**.\n4. Remplissez les champs obligatoires (nom, logo, sales associé, etc.).\n5. Validez l’ajout.\n6. Observez le grey screen après la validation.\n\n---\n\n# **Informations complémentaires**\n\nPNG Logo : \n\n![mobsuccess_logo.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/968ce8d9-fa12-42de-8e3d-1a6a7db80fe5/4d44006f-c48d-4cce-9b2d-9acb3d06aafd)\n\n---\n\n# Changelog\n\n🇫🇷  Correction du gray screen à la création d’une agence\n\n🇺🇸 Fixed the grey screen when creating en agency ",
            id: "FRONT-1992",
          },
          origin: "linear",
          timestamp: 1732024250000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2032",
              title: "fix: dynamic workspace emptysate [FRONT-1992]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- fix empty states in dynamic workspace provider (missing required icon)\r\n- filter empty agencies in account picker (newly returned by php)\r\n",
              id: 2032,
            },
            {
              url: "",
              origin: "git",
              id: "ec95054e5ff8479265d28e57dda4c16d47ed6b5c",
              title: "fix: dynamic workspace emptysate [FRONT-1992] (#2032)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1983/corriger-le-select-du-pourcentage-dun-item-de-kit-externe-sur-le",
            title:
              "Corriger le select du pourcentage d'un item de kit externe sur le backoffice LCO master",
            origin: "linear",
            description:
              "# **Contexte (parcours d’entrée)**\n\nActuellement sur master nous pouvons constater que le select de pourcentage d'une variation ne fonctionne plus. Nous sommes bloqué sur \"en €\"\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/5a5eea81-a108-4174-ad48-affbaa71f05b/28b27b3d-8034-4bb6-a6a8-aaff11fd9790)\n\n---\n\n# **Comportement voulu**\n\n*Pouvoir sélectionner le type en percent sur les items d'un kit externe*\n\n---\n\n# Scénario de repro \n\n1. *Se rendre sur ce kit :* [https://master.lco.live.mobsuccess.com/admin/external-kit/e1566c6c-c88a-4719-935b-19d28a67e03b?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae](https://master.lco.live.mobsuccess.com/admin/external-kit/e1566c6c-c88a-4719-935b-19d28a67e03b?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae)\n2. Constater que le choix de type percent n'est pas possible\n\n---\n\n# Changelog\n\n🇫🇷 Correction du select du pourcentage d'un item de kit externe sur le backoffice LCO master\n\n🇺🇸 Fix the variation type select on external kit",
            id: "FRONT-1983",
          },
          origin: "linear",
          timestamp: 1731942551000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2022",
              title: "fix: add portal to select [FRONT-1983]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nAdds Portal to select dropdown.\r\nThe dropdown was previously a child of the input and not displayed when overflowing.\r\nThis issue affected only select components that were descendent of an input, ie `InputAddons`\r\n\r\n<img width="595" alt="image" src="https://github.com/user-attachments/assets/c14b7798-f013-4913-8cdf-5a44e58e192b">\r\n\r\n### Test URL\r\n\r\nhttps://pr-2022.lco.live.mobsuccess.com/admin/external-kit/80eaeba4-4719-4690-9a79-bca9c8c06aff?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae',
              id: 2022,
            },
            {
              url: "",
              origin: "git",
              id: "699c591d53b452fd1e0f8b5e263f187ef3954298",
              title: "fix: add portal to select [FRONT-1983] (#2022)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1967/ajouter-le-workspace-provider-au-lcm",
            title: "Ajouter le workspace provider au lcm",
            origin: "linear",
            description: "#### Changelog\n\nAjout du workspace provider au lcm",
            id: "FRONT-1967",
          },
          origin: "linear",
          timestamp: 1731667040000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/2002",
              title:
                "feat(worksapace): add dynamic workspace for lcm [FRONT-1967]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- add dynamic workspace provider (and rename the existing one to `static`)\n- add the new `dynamic` workspace provider to the lcm\n- fix it's tests\n",
              id: 2002,
            },
            {
              url: "",
              origin: "git",
              id: "0dd3ca72ce7f5da6aa650e5b41083da20406c6f8",
              title:
                "feat(worksapace): add dynamic workspace for lcm [FRONT-1967] (#2002)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1820/integrer-le-theme-leroy-merlin-sur-le-lco",
            title: "Intégrer le thème Leroy Merlin sur le LCO",
            origin: "linear",
            description:
              "# User Story\n\nEn tant qu'équipe conseil et partenariat\n\nJe souhaites faire une démo du LCO au couleur de Leroy merlin\n\nPour gagner un appel d'offre\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. Le thème est disponible pour le client Leroy merlin uniquement (client_id : 9a7f9b94-7211-4daa-98a7-6cf21cf54266)\n2. Le thème Leroy Merlin doit s'appliquer à l'ensemble du LCO: couleurs, typographies, icônes etc..\n3. Les couleurs doivent correspondre à la charte graphique de Leroy merlin\n4. Les éléments d'interface (boutons, barres de navigation, sections) doivent être adaptés au design Leroy Merlin\n5. L'intégration du thème correspond au maquettes figma\n\n---\n\n# **Comportement voulu**\n\nLe LCO doit afficher automatiquement le thème Leroy Merlin pour les utilisateurs identifiés comme clients Leroy merlin.\n\n---\n\n# **Informations complémentaires**\n\nPalette colors Leroy Merlin : \n\n[Primary Leroy Merlin - Local Campaign Order (Figma)](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12095-87475&t=dVj2A3FLf4XECYUY-4)\n\nFigma : [https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12046-70492&t=SIn5jwwUQUUdTsmX-4](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=12046-70492&t=SIn5jwwUQUUdTsmX-4)\n\n---\n\n## Product Designer 🧑‍🎨 \n\n@rosanora @anne-sophie.doumenge \n\n---\n\n# Changelog\n\n🇫🇷  Intégration du theme Leroy Merlin sur le LCO\n\n🇺🇸 Integration of Leroy merlin theme on the LCO",
            id: "FRONT-1820",
          },
          origin: "linear",
          timestamp: 1731665548000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1993",
              title: "feat: add leroy merlin theme [FRONT-1820]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n<img width="1659" alt="image" src="https://github.com/user-attachments/assets/fd627eb2-dc12-4b40-a54c-ed17c198a474">',
              id: 1993,
            },
            {
              url: "",
              origin: "git",
              id: "1d393c4352f7952fa90d041aafa3812693bd227f",
              title: "feat: add leroy merlin theme [FRONT-1820] (#1993)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1928/alert",
            title: "Alert",
            origin: "linear",
            description: "",
            id: "FRONT-1928",
          },
          origin: "linear",
          timestamp: 1731580746000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1987",
              title: "test: add visual tests for alert component [FRONT-1928]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- Add visual tests for Alert component\r\n\r\n### QA\r\n\r\nSee files diff\r\n",
              id: 1987,
            },
            {
              url: "",
              origin: "git",
              id: "17d8f1a55246d33a112aad036ee92f4319d287ea",
              title:
                "test: add visual tests for alert component [FRONT-1928] (#1987)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1930/migration-des-anciens-alert-ver-alertroot",
            title: "Migration des anciens Alert ver Alert.Root",
            origin: "linear",
            description:
              "## Contexte\n\nUniformisation des composants du design system\n\n---\n\n## **Description du Problème**\n\nNous avons des anciens et des nouveau composant Alert dans la codebase\n\n---\n\n---\n\n## Critère d'acceptation\n\n* ne plus avoir de references vers l'ancien Alert\n* supprimer l'ancien Alert",
            id: "FRONT-1930",
          },
          origin: "linear",
          timestamp: 1731575229000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1989",
              title: "feat: migrate old Alert component [FRONT-1930]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n- Suppression de `Alert` au profit de `Alert.Root`\r\n- Migration des utilisations de `Alert`\r\n\r\n### Scope\r\n\r\nLCM > Screenshots\r\n\r\n### QA\r\n\r\n|before|after|\r\n|-|-|\r\n|<img width="1719" alt="Screenshot 2024-11-13 at 22 54 36" src="https://github.com/user-attachments/assets/aac2c42d-aada-4029-905e-7f17c2814bd7">|<img width="1719" alt="Screenshot 2024-11-13 at 22 59 43" src="https://github.com/user-attachments/assets/b732cf80-10fe-45da-90c3-efbfc4c34894">|\r\n|<img width="1719" alt="Screenshot 2024-11-13 at 23 04 29" src="https://github.com/user-attachments/assets/0268174a-175b-4187-88ff-1c1b9ba0c5b2">|<img width="1719" alt="Screenshot 2024-11-13 at 23 05 29" src="https://github.com/user-attachments/assets/78031acd-82db-4473-b674-69ed1f640abe">|\r\n|<img width="1719" alt="Screenshot 2024-11-13 at 23 10 48" src="https://github.com/user-attachments/assets/64f7e8a7-ff5a-4fc9-920f-c73489ed6a9f">|<img width="1719" alt="Screenshot 2024-11-13 at 23 22 34" src="https://github.com/user-attachments/assets/bce55644-3644-4ef9-a40a-ef8e88a71c36">|\r\n|<img width="1719" alt="Screenshot 2024-11-14 at 05 43 18" src="https://github.com/user-attachments/assets/1af784f3-c8cd-4a24-804b-23e210e729c6">|<img width="1719" alt="Screenshot 2024-11-14 at 05 43 31" src="https://github.com/user-attachments/assets/949a66e1-4f66-432e-b6f7-98976a6c9706">|\r\n|<img width="1719" alt="Screenshot 2024-11-14 at 05 53 52" src="https://github.com/user-attachments/assets/a03b282a-ccba-4eac-b177-593f854d5a06">|<img width="1719" alt="Screenshot 2024-11-14 at 05 58 18" src="https://github.com/user-attachments/assets/21ef3100-a9ab-4189-9b4d-3b4da79c6664">|\r\n|<img width="1719" alt="Screenshot 2024-11-14 at 06 02 48" src="https://github.com/user-attachments/assets/d60d55c0-3e00-4124-b117-2a41614a5986">|<img width="1719" alt="Screenshot 2024-11-14 at 06 03 19" src="https://github.com/user-attachments/assets/567f099e-61ef-4b2d-8034-262400fc1216">|\r\n\r\n### URLs\r\n\r\n[lcm preview](https://pr-1989.lcm.live.mobsuccess.com/)',
              id: 1989,
            },
            {
              url: "",
              origin: "git",
              id: "006440d0267aad9170257658cb0129214fd14b6b",
              title: "feat: migrate old Alert component [FRONT-1930] (#1989)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1929/integrer-le-workspace-context-dans-le-dashboard-farly-et-mettre-a-jour",
            title:
              "Intégrer le workspace context dans le dashboard farly et mettre à jour les endpoints d'agences/annonceur",
            origin: "linear",
            description:
              "#### Changelog\n\nIntégrer le workspace context dans le dashboard farly et mettre à jour les endpoints d'agences/annonceur",
            id: "FRONT-1929",
          },
          origin: "linear",
          timestamp: 1731517993000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1988",
              title:
                "change(workspace): update workspace api endpoint to use typed one [FRONT-1929]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- type correctly workspace api calls by using newly created endpoints\n- use workspace api in `dashboard-farly` project\n- remove `react-data-context` from `dashboard-farly` project\n",
              id: 1988,
            },
            {
              url: "",
              origin: "git",
              id: "8c326576060bde330e2b43c6210aaed779889385",
              title:
                "change(workspace): update workspace api endpoint to use typed one [FRONT-1929] (#1988)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1865/enlever-les-ts-nocheck-dans-geoplannerlocation",
            title: "Enlever les ts-nocheck dans Geoplanner/Location/",
            origin: "linear",
            description:
              "## Contexte\n\nDeux fichiers ont le typecheck désactivé, le ts-nocheck a été mis avant la création des react-client.\n\n---\n\n## Critère d'acceptation\n\n* Plus aucun ts-nocheck dans le composant\n* Pas de regression au niveau du comportement\n* Tests unitaires des fonctions logiques/métier",
            id: "FRONT-1865",
          },
          origin: "linear",
          timestamp: 1731490002000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1960",
              title: "refactor: remove ts-nocheck from Geoplanner [FRONT-1865]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nRemove ts-nochecks from Geoplanner\r\n - Add SVGElement as a type of anchor for Dropdown\r\n - Migrate Location AdvancedSelect to Select\r\n - Add generic type to Select value (defaults to string)\r\n - use `GeoplannerLocalisationResultAdapter["type"]` insteand of `GeoplannerLocalisationTypeEnum` type is a union, cf https://github.com/mobsuccess-devops/lcm-microservice/blob/2b8df97f52a84fdde388c479ca6b9b1d976a6721/chalicelib/models/geoplanner_localisation_model.py#L31)\r\n\r\n### QA\r\n\r\ntypecheck',
              id: 1960,
            },
            {
              url: "",
              origin: "git",
              id: "5c9dcfc3362f1f7a914e6425b5826b9d14155d68",
              title:
                "refactor: remove ts-nocheck from Geoplanner [FRONT-1865] (#1960)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1748/ajouter-les-alertes-sur-la-vue-mpc-pour-informer-lutilisateur-des",
            title:
              "Ajouter les alertes sur la vue MPC pour informer l’utilisateur des jours restants avant la date limite de configuration du PAC",
            origin: "linear",
            description:
              "# User Story\n\n*Actuellement sur la vue MPC du LCO, il n'y aucune alerte de disponible. \nEn revanche, on peut voir sur la page panier un compte à rebours indiquant le nombre de jours restants au user pour finaliser la configuration du PAC* ⬇️ : \n\n![Capture d’écran 2024-10-16 à 15.26.29.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/116212aa-b303-464a-95bc-2523ea10f1f5/3e464a55-8061-4386-82d8-93c9be4cd215)\n\n**En tant que :** *Utilisateur Client du LCO,* \n\n**Je souhaite :** être informé du nombre de jours restants avant l'expiration de mon PAC (à J-X, J-3, J-2, J-1 et le Jour J), sur la vue MPC\n\n**Pour que :** m'assurer que je ne rate pas l'opportunité de finaliser mon engagement avant la date limite.\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. L'utilisateur voit une pastille lui indiquant le nombre de jours restants pour configurer son PAC (lorsque nous sommes à J-4 ou plus).\n2. L'utilisateur voit une alerte à J-3, J-2, J-1 et le Jour J indiquant le nombre de jours restants pour configurer son PAC.\n3. Les alertes doivent être visibles sur la vue MPC du LCO.\n4. Chaque alerte peut être retirée manuellement par l'utilisateur.\n5. Le design des alertes doit être conforme aux maquettes en fonction des 5 cas présentés. \n6. Les alertes doivent apparaître automatiquement, sans action supplémentaire de l'utilisateur.\n7. Si l'utilisateur ferme l'alerte, puis quitte la vue MPC (ex. : en allant sur la page panier) et revient ensuite sur la vue MPC, l'alerte doit réapparaître automatiquement.\n8. Les alertes doivent disparaître après la finalisation de la configuration du PAC -> une fois la commande validée ou à la date d'expiration.\n\n---\n\n# **Comportement voulu**\n\nLes alertes doivent s'afficher sous forme de bannières dans la vue MPC à des moments spécifiques. \n\n1. Lorsque nous sommes à J-X, avec x >/ = à 4 -> la vue MPC doit afficher la pastille suivante ⬇️ : \n\n![Operations commerciales-done 3.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/fa0da861-5686-4e14-bcd3-2fe05b279a4f/2484aa15-5cb4-4bff-af04-fd28a37bddd8)\n\n2. Lorsque nous sommes à J-3, la vue MPC doit afficher l'alerte suivante ⬇️ : \n\n![Operations commerciales-done 4.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/53804a0b-9be1-4614-a302-7255dd37dc68/8675a120-eb55-4ee0-ad72-ed4b62c7db92)\n\n3. Lorsque nous sommes à J-2, la vue MPC doit afficher l'alerte suivante ⬇️ : \n\n![Operations commerciales-done 5.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/dc063275-23d5-4b04-aff7-040c37b5c5dc/47d4952d-d859-4af1-bd3f-77d74ebb544f)\n\n3. Lorsque nous sommes à J-1, la vue MPC doit afficher l'alerte suivante ⬇️ :\n\n![Operations commerciales-done 6.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/c249e85a-8f60-4932-a84e-8e693a102e3f/e398f34c-9788-4814-a982-19f65e270e8a)\n\n4. Lorsque nous sommes le jour J, la vue MPC doit afficher l'alerte suivante ⬇️ :\n\n![Operations commerciales-done 7.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/0fa0ee48-ebca-4b0d-bc73-e8cb3527efac/ef841b97-0820-4442-8fdd-5dcc4807325a)\n\n---\n\n# **Informations complémentaires**\n\n*Maquette Figma :* \n\n[Alerte configuration PAC - Local Campaign Order (Figma)](https://www.figma.com/design/yOXIbpXy5ol4uRkjwvgTmq/Local-Campaign-Order?node-id=10168-146592&t=PdvOiAYYigq8dXiX-1)\n\n---\n\n## Product Designer 🧑‍🎨 \n\n@anne-sophie.doumenge @rosanora \n\n---\n\n# Changelog\n\n🇫🇷  Ajout d’alertes sur la vue PAC pour informer l’utilisateur des jours restants (J-X, J-3, J-2, J-1, Jour J) avant la date limite de configuration de son PAC\n\n🇺🇸 Adding alerts on the MPC view to notify the user of the remaining days (J-X, J-3, J-2, J-1, Day J) before the PAC configuration deadline.",
            id: "FRONT-1748",
          },
          origin: "linear",
          timestamp: 1731488282000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1978",
              title: "feat(lco): mpc date alert [FRONT-1748]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/88cc32e6-3ffd-468d-859e-cb837c1846d2">\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/47d12524-cbb2-4c98-9af8-eece923f4387">\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/c14ad6f6-8ff1-4ce4-b1bf-0d488ad9bb4b">\r\n<img width="1080" alt="image" src="https://github.com/user-attachments/assets/0290e437-b458-4a3c-90f6-6d079253f2eb">\r\n\r\n### Test URL\r\n\r\nhttps://pr-1978.lco.live.mobsuccess.com/mpc/028e3c20-49ad-434b-aebb-75751652cc36?client_uuid=d144abb6-4636-11ed-a4b9-d8c497e7bcae&account_uuid=6ca569a1-4df8-11ed-a4b9-d8c497e7bcae',
              id: 1978,
            },
            {
              url: "",
              origin: "git",
              id: "456c31c93be7021310eae364269d20fc971475ea",
              title: "feat(lco): mpc date alert [FRONT-1748] (#1978)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1917/changer-le-composant-de-fileupload-pour-utiliser-une-composition",
            title:
              "Changer le composant de FileUpload pour utiliser une composition plutôt que des props",
            origin: "linear",
            description:
              "#### Changelog\n\nModification du composant de FileUpload pour utiliser une composition au lieu de props",
            id: "FRONT-1917",
          },
          origin: "linear",
          timestamp: 1731424850000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1980",
              title:
                "change(FileUpload): make component use composition api instead of props [FRONT-1917]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nmake `FileUpload` component use composition api instead of props\n",
              id: 1980,
            },
            {
              url: "",
              origin: "git",
              id: "ea057bfa1b0c715bbc5f1979c00413c2d1230384",
              title:
                "change(FileUpload): make component use composition api instead of props [FRONT-1917] (#1980)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1712/ajouter-la-donnee-de-ctr-dans-la-phrase-sur-la-page-campagnes",
            title:
              "Ajouter la donnée de CTR dans la phrase sur la page campagnes",
            origin: "linear",
            description:
              '# User Story\n\n*Actuellement sur le Dashboard, la donnée CTR (Click Through Rate) n\'est pas affiché au niveau de la page "Campagne".* \n\n**En tant que :** *Adops, Client*\n\n**Je souhaite :** Afficher la donnée CTR sur la page "Campagne" du Dashboard\n\n**Pour que :** Les utilisateurs puissent visualiser rapidement ce KPI sans avoir à passer par la vue "Rapports détaillés"\n\n![Capture d’écran 2024-09-20 à 17.43.34.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/b0f82c5b-15ba-4ebe-953d-5d039a8ebc48/1439e9a3-de6d-485e-835a-ba7de34e82a6)\n\n---\n\n# Critères d\'acceptations (entre 5 et 9) \n\n1. La donnée CTR est visible sur la page "Campagne" du Dashboard, dans la section des KPI clés.\n2. Le CTR est calculé de manière identique à la vue "Rapports détaillés".\n3. Le format d\'affichage du CTR correspond à celui utilisé dans les "Rapports détaillés" (valeur en pourcentage avec deux décimales).\n4. Les utilisateurs peuvent voir cette donnée sans avoir besoin d\'interagir avec d\'autres éléments de la page (visible par défaut).\n5. Si aucune donnée n’est disponible pour une campagne, ne pas afficher la donnée. Exemple : -> Si jamais 0% sur un levier alors on l\'affiche pas (Waze)\n6. La fonctionnalité est responsive, s’adaptant correctement aux différents formats d’écran (desktop et mobile).\n\n---\n\n# **Comportement voulu**\n\nAjouter la donnée de CTR dans l’onglet campagne du dashboard ⬇️ : \n\n![Campagne.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/437aa7de-5df1-452e-8034-445538ac9c46/20dafe0b-e91c-4613-af1b-adee2b3b667d)\n\n---\n\n# **Informations complémentaires**\n\n*URL Master Dashboard :* [https://master.dashboard.live.mobsuccess.com/campaign?client=intersport&id_account=130&id_id_app=SU5URVJTUE9SVCAtIEpPVVJTIFNBTlMgU0UgUFJJVkVSIC0gMjgvMTI&store_id=\\*](https://master.dashboard.live.mobsuccess.com/campaign?client=intersport&id_account=130&id_id_app=SU5URVJTUE9SVCAtIEpPVVJTIFNBTlMgU0UgUFJJVkVSIC0gMjgvMTI&store_id=\\*)\n\nLien du thread slack de la demande métier : [https://mobsuccess.slack.com/archives/C02FE624H3L/p1726133017050289](https://mobsuccess.slack.com/archives/C02FE624H3L/p1726133017050289)\n\nMaquette Figma : [https://www.figma.com/design/Y01Yb7m6At4StC0NEoqjMH/Dashboard?node-id=3873-46467&node-type=frame&t=JCOB5CKXfQUSyvXd-0](https://www.figma.com/design/Y01Yb7m6At4StC0NEoqjMH/Dashboard?node-id=3873-46467&node-type=frame&t=JCOB5CKXfQUSyvXd-0)\n\n---\n\n## Product Designer 🧑‍🎨 \n\n@anne-sophie.doumenge \n\n---\n\n# Changelog\n\n🇫🇷  Ajout de l\'affichage du KPI CTR sur la page "Campagne" du Dashboard\n\n🇺🇸 Added CTR metric display on the Campaign page of the Dashboard',
            id: "FRONT-1712",
          },
          origin: "linear",
          timestamp: 1731059138000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1963",
              title: "feat(campaigns): add ctr data [FRONT-1712]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nAdd a new card about CTR\r\nAlso rework the first card to use PandArk\r\n\r\n### Scope\r\n\r\nCampaign page > First block\r\n\r\n### QA\r\n\r\n![Screenshot 2024-11-07 at 12 12 09](https://github.com/user-attachments/assets/ef61e6bd-f6b0-446a-878c-9eeaf0ca42ea)\r\n\r\n### Test URL\r\n\r\nhttps://pr-1963.dashboard.live.mobsuccess.com/campaign?id_id_app=SU5URVJTUE9SVCAtIEpPVVJTIFNBTlMgU0UgUFJJVkVSIC0gMjgvMTI&client=intersport&id_account=130",
              id: 1963,
            },
            {
              url: "",
              origin: "git",
              id: "7c41a997653b410b218fdd43d215488a54ba4e90",
              title: "feat(campaigns): add ctr data [FRONT-1712] (#1963)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1892/corriger-les-imports-relatifs-des-packages",
            title: "Corriger les imports relatifs des packages",
            origin: "linear",
            description:
              "Dans nos webapps certaines fonctions ou composants sont importés via un chemin relatif vers le package.\ni\n\n```\nimport { replaceTextInBlob } from \"../../../../../../packages/react-shared/src/public/utils/replace-text-blob\";\n```\n\n​​Il faudrait corriger les chemins d'import, et mettre en place une règle eslint qui permet d'éviter ces erreurs",
            id: "FRONT-1892",
          },
          origin: "linear",
          timestamp: 1730997549000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1965",
              title: "refactor: fix import paths from packages [FRONT-1892]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nfix relative import paths to packages\r\nadd eslint rule",
              id: 1965,
            },
            {
              url: "",
              origin: "git",
              id: "ed07f19ebe8191fcd0b7f81871c7edb544b797a5",
              title:
                "refactor: fix import paths from packages [FRONT-1892] (#1965)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1738/integrer-la-page-facebook-dans-gafa-account-setup-de-la-toolbox",
            title:
              'Intégrer la page Facebook dans "GAFA account setup" de la Toolbox',
            origin: "linear",
            description:
              "# User Story\n\n*La page Facebook permettent* d’ajouter des comptes Facebook, de les synchroniser et de les lier à un annonceur.\n\n**En tant que : **Utilisateur de la Toolbox\n\n**Je souhaite :** Intégrer la page **Facebook** dans l'outil **GAFA Account Setup** pour gérer les comptes Facebook\n\n**Pour que :** Je puisse ajouter, synchroniser et lier des comptes Facebook à un annonceur de manière fluide, tout comme c'est possible avec les pages Google Ads.\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. La page **Facebook** doit être intégrée dans l'outil **GAFA Account Setup** de la Toolbox, de manière similaire à la gestion des comptes Google Ads.\n2. L'utilisateur doit pouvoir ajouter des comptes Facebook via un bouton **\"Ajouter un compte Facebook\"**.\n3. Une fonctionnalité de synchronisation doit être disponible pour mettre à jour les comptes Facebook connectés.\n4. L'utilisateur doit pouvoir lier chaque compte Facebook à un annonceur spécifique.\n\n---\n\n# Messages d'erreur à prévoir\n\n**Erreur d'ajout de compte** : \n\nSi l'ajout d'un compte échoue, un message d'erreur doit apparaître : *\"Échec de l'ajout du compte Facebook. Veuillez réessayer.\"*\n\n**Erreur de synchronisation** : \n\nEn cas de problème lors de la synchronisation des comptes Facebook, afficher : *\"Erreur lors de la synchronisation des comptes. Veuillez réessayer.\"*\n\n**Erreur de liaison à un annonceur** : \n\nSi un compte Facebook ne peut pas être lié à un annonceur, un message d'erreur doit indiquer : *\"Impossible de lier ce compte à l'annonceur. Veuillez vérifier les informations.\"*\n\n[Component toaster](https://www.figma.com/design/ty1e9XJAGtc0f9ooktXw9V/%5BDesign-system%5D-Components?node-id=2594-158078&t=YGmv5MDE9HbTvjR2-1) : \n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/d50d8a66-87a4-4a43-932a-74c8883996fb/d22f21c8-57ca-4fdb-8a17-692d06d5883e)\n\n---\n\n# **Comportement voulu**\n\nIl faudrait que la page **Facebook** soit intégrée dans l'outil **GAFA Account Setup** de la Toolbox. \n\n![0.0-D-Desktop-Data (5).png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/55a1e7e7-3e95-422c-b401-ae3c7a929b76/9ce371cd-9111-4576-9bff-355fcdb1b0c2)\n\nL'utilisateur doit pouvoir ajouter, synchroniser et lier les comptes Facebook à un annonceur facilement et sans erreurs.\n\nCette page est accessible depuis la Toolbox, par 1 points d’entrée :\n\n* Au clic sur l'outil \"GAFA account setup\" dans la sidebar puis au clic sur le cadre Facebook.\n\nPars ce point d'entrée, l'user accède directement au tableau \"compte Facebook\".\n\n**Ce tableau contient les colonnes :**\n\n* “Nom” : noms des comptes Facebook\n* “Annonceur” : Les annonceurs sont représentés sous forme de \"badges\" cliquables et qui dirigent vers les sous-annonceurs de l'annonceur principal.\n* “Facebook Account ID” : les identifiants client, c’est un numéro unique utilisé pour identifier un compte Facebook.\n* ”Facebook Page ID’s : les identifiants d’une page ID, c’est un numéro unique utilisé pour identifier une page ID.\n* “Synchronisation” : Représenter sous forme de “Tag” qui peut être soit \"oui\" soit \"non\", indique si la campagne est lancée ou non.\n* Icône Clef à molette : Setting de la ligne.\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/9484e50e-0489-409c-ba88-833ebf30b338/4a4393e3-2ce0-4fda-8548-911dbdd4fb32)\n\n**Filtre :**\n\nPossibilité de filtrer les annonceurs.\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/ca2c000d-5b56-444f-bb4b-4cb0b9ff2161/b0c72528-8d58-452f-9a18-46a2e5529643)\n\n**Ajouter un compte Facebook :**\n\nEn cliquant sur le bouton “Ajouter un compte”, une modale “Ajouter un compte Facebook” apparait contenant :\n\n* Synchronisation : Avec un switch “oui”, “non”.\n* Annonceur : Un input sélecteur, “sélectionnez un annonceur”.\n* Nom : Un input Nom de l’annonceur.\n* Facebook Account ID : Un input, Numéro client Facebook (sans les tirets).\n* Facebook Page ID’s : Un input permettant de renseigner les ID’s des pages Facebook Ces identifiants sont représentés sous forme de Tag, chaque Id’s doivent être séparé par une virgule, ce qui permet de détecter que l’ID est bon et de créer le tag. Possibilité de les supprimer individuellement grâce à une croix de suppression intégrée dans chaque tag.\n* Un Bouton “Réinitialiser” : il permet de réinitialiser les champs préalablement remplis.\n* Un bouton Annuler : Ce qui ferme la modale.\n* Un bouton Ajouter : Qui permet d’ajouter le nouveau compte à la liste.\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/728d3716-18e5-4a00-a72c-b55eb3b1016d/46d06755-a3fc-47fa-8572-19374bc240b3)\n\n**Editer :** \n\nPossibilité d'éditer un compte Facebook.\n\nEn cliquant sur l’icône ”Clef à molette”, une modale “Editer un compte Facebook” apparait. Elle reprend le même contenu de la modale \"**Ajouter un compte Facebook**\".\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/86656410-cfc0-4a89-b0e8-9887162a9ca4/c9d2481e-4a26-4796-86dc-460c9097ff9b)\n\n---\n\n# Changelog\n\n🇫🇷  Intégration de la page  Facebook dans \"GAFA account setup\" de la Toolbox.\n\n🇺🇸 Integration of the Facebook page into the 'GAFA Account Setup' section of the Toolbox",
            id: "FRONT-1738",
          },
          origin: "linear",
          timestamp: 1730994750000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1933",
              title:
                "feat(third-party): add third-party accounts pages [FRONT-1738]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- add facebook third party page\n",
              id: 1933,
            },
            {
              url: "",
              origin: "git",
              id: "614fa599456738b20d0e4dea0c7411c32659e519",
              title:
                "feat(third-party): add third-party accounts pages [FRONT-1738] (#1933)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1873/bump-les-dependances-dutilities",
            title: "Bump les dépendances d'utilities",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @faker-js/faker\n* @remix-run/router\n* assert\n* aws-amplify\n* aws-iot-device-sdk-v2\n* axios\n* axios-mock-adapter\n* browserify-zlib\n* buffer\n* case\n* commander\n* concurrently\n* crypto-browserify\n* crypto-js\n* dom-storage\n* events\n* exceljs\n* get-intrinsic\n* glob\n* history\n* http-proxy\n* https-browserify\n* javascript-natural-sort\n* jszip\n* jwt-decode\n* luxon\n* make-plural\n* mapbox-gl\n* markdown-to-jsx\n* mock-xmlhttprequest\n* number-abbreviate\n* nunjucks\n* pandadoc-editor\n* polished\n* regenerator-runtime\n* remark-gfm\n* stream-browserify\n* stream-http\n* url\n* url-loader\n* util\n* uuid\n* zod\n\n---\n\n## Critère d'acceptation\n\n* Bump toutes ces dépendances\n* Vérifier que tout fonctionne correctement",
            id: "FRONT-1873",
          },
          origin: "linear",
          timestamp: 1730986532000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1946",
              title: "chore: bump utilities dependencies [FRONT-1873]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nBump utilities dependencies\r\n\r\nMajor versions:\r\n- [x] mapbox-gl (backward-compatible, only changes for types)\r\n- [x] uuid (remove @types/uuid)\r\n- [x] jwt-decode (default import deprecated)\r\n- [x] glob (no changes for us)\r\n- [x] @faker-js/faker (no changes for us)\r\n- [x] remark-gfm (no changes for us)\r\n- [x] concurrently (removed)\r\n\r\nAlso fix eslint rule “member expression" because of get-intrinsic not handing many functions anymore\r\nAlso fix types in eslint plugin by removing `satisfies` because it is currently broken',
              id: 1946,
            },
            {
              url: "",
              origin: "git",
              id: "008ee43597d63dbcf180c44ff1b44012001fb657",
              title: "chore: bump utilities dependencies [FRONT-1873] (#1946)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1881/fix-de-la-couleur-des-placeholder-sur-master",
            title: "Fix de la couleur des placeholder sur master",
            origin: "linear",
            description:
              "![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/19f70fdb-420a-4a53-8ff6-426502e00e8d/fea86289-1b3f-417f-b26b-039fe162c026)\n\nLes placeholder de la plupart des input ne prennent plus la class `placeholder:c_#BCC1DE::placeholder`",
            id: "FRONT-1881",
          },
          origin: "linear",
          timestamp: 1730909301000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1958",
              title: "fix: placeholder color on inputs [FRONT-1881]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\n- use token interface.300\r\n- change _placeholder shortcut in preset\r\n\r\n### QA\r\n\r\n<img width="1457" alt="Screenshot 2024-11-06 at 15 31 20" src="https://github.com/user-attachments/assets/512ee183-518f-4c78-a088-e103fabd823f">\r\n\r\n### URLs\r\n\r\nhttps://pr-1958.lcm.live.mobsuccess.com/DriveToStore/d144cca4-4636-11ed-a4b9-d8c497e7bcae/6ca8ff11-4df8-11ed-a4b9-d8c497e7bcae/1a83d10d-572c-46bf-b60d-61b5bc7562e1/campaign-setup?modalname=RTB&modaluuid=0206e7ed-1ada-4208-b8a0-e299d127b886&modaltab=4\r\n\r\n',
              id: 1958,
            },
            {
              url: "",
              origin: "git",
              id: "83bf7de9974f8d9cb2d57363c0b1bbbd6320263a",
              title: "fix: placeholder color on inputs [FRONT-1881] (#1958)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1884/creer-le-composant-circularprogress",
            title: "Créer le composant CircularProgress",
            origin: "linear",
            description:
              "#### Changelog\n\nAjout du composant CircularProgress pour afficher la progression des tâches sur l'interface utilisateur",
            id: "FRONT-1884",
          },
          origin: "linear",
          timestamp: 1730899908000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1957",
              title: "feat: add circular progress component [FRONT-1884]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- add circular progress component\n",
              id: 1957,
            },
            {
              url: "",
              origin: "git",
              id: "4899d842b83a945de9c316295f0d2ac0d2a4f357",
              title:
                "feat: add circular progress component [FRONT-1884] (#1957)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1846/fixer-la-selection-des-dates-lors-de-la-creation-dun-projet-lcm-master",
            title:
              "Fixer la selection des dates lors de la création d'un projet LCM MASTER",
            origin: "linear",
            description:
              "# **Contexte (parcours d’entrée)**\n\nSur LCM Master, lors de la création d'un projet, les dates ne sont plus selectionnables.\n\n![Screenshot 2024-10-31 at 14.05.34.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/4b5efdc3-56d1-4c82-bfab-c54e269caf74/b5ace6f7-bade-4be3-9e1a-8019e9a5c97b)\n\n[Screen Recording 2024-10-31 at 14.05.21.mov](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/629042bf-e29f-4072-b674-634184bd9df7/b602f388-2134-44df-8771-232971254999)\n\n---\n\n# **Comportement voulu**\n\n*L*es dates lors de la création d'un projet LCM MASTER doivent sélectionnable\n\n---\n\n# Critères d'acceptations (entre 5 et 9) \n\n1. L'utilisateur peut \"Ajouter\" un nouveau projet\n\n---\n\n# Scénario de repro \n\nAller sur[ LCM master](https://master.lcm.live.mobsuccess.com/DriveToStore/d144cca4-4636-11ed-a4b9-d8c497e7bcae/6ca8ff11-4df8-11ed-a4b9-d8c497e7bcae) et ajouter un projet.\n\n![Screenshot 2024-10-31 at 14.11.28.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/6250c6ef-c2f1-49cb-bb0b-95a4b5b7780e/c8c9de1d-f75c-4c14-8fea-c58c3ad1aa0f)\n\nPuis cliquer sur \"Selectionner des dates\"\n\n![Screenshot 2024-10-31 at 14.11.55.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/69a9e058-298d-4565-a529-1ef9ca9f9007/4c17ab60-a0b4-4ed8-8afa-0b9808c91e0b)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de la selection des dates lors de la création d'un projet LCM MASTER\n\n🇺🇸Correction of the selection of dates when creating an LCM MASTER project",
            id: "FRONT-1846",
          },
          origin: "linear",
          timestamp: 1730886504000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1956",
              title: "fix(dialog-project): date picker [FRONT-1846]",
              origin: "github",
              description:
                '### What does it do? Why?\r\n\r\nfix a bug where date picker wouldn\'t appear when selected\r\n\r\n### QA\r\n\r\n<img width="1470" alt="Capture d’écran 2024-11-06 à 10 16 29" src="https://github.com/user-attachments/assets/252d3582-a503-49f8-9a65-ba55e9e80c80">\r\n\r\n### Scope\r\n\r\nlcm > dialog project > date picker\r\n\r\n### Test URL\r\n\r\nhttps://pr-1956.lcm.live.mobsuccess.com/DriveToStore/d144cca4-4636-11ed-a4b9-d8c497e7bcae/6ca8ff11-4df8-11ed-a4b9-d8c497e7bcae',
              id: 1956,
            },
            {
              url: "",
              origin: "git",
              id: "b4177e4553bcd8fa83d620954d4c1596a9a9edbb",
              title: "fix(dialog-project): date picker [FRONT-1846] (#1956)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1801/bump-tanstackreact-query",
            title: "Bump @tanstack/react-query",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @tanstack/react-query\n* @tanstack/react-query-devtools\n\nLiens utiles :\n\n* [https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-v5](https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-v5)\n* [https://github.com/TanStack/query/discussions/5279](https://github.com/TanStack/query/discussions/5279)\n\nDifférence entre isLoading et isPending :\n\n![image.png](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/3441615d-9f5c-4eda-9126-a07e0795b30c/3f00143d-2bfd-4344-8e31-10146c1f8d34)\n\n---\n\n## Critère d'acceptation\n\n* Bump toutes ces dépendances\n* Vérifier que tout fonctionne correctement",
            id: "FRONT-1801",
          },
          origin: "linear",
          timestamp: 1730882863000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1905",
              title: "chore: bump react query [FRONT-1801]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nBump @tanstack/react-query and adapt the breaking changes (api related changes)\r\nAlso bump in microservice-client: https://github.com/mobsuccess-devops/microservice-client/pull/1540",
              id: 1905,
            },
            {
              url: "",
              origin: "git",
              id: "44d0c6504b97dc122a462bd1dacd36eba724b0b2",
              title: "chore: bump react query [FRONT-1801] (#1905)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1778/corriger-lerreur-qui-bloque-lacces-a-la-connexion-sur-la-page",
            title:
              "Corriger l'erreur qui bloque l'accès à la connexion sur la page d'authentification des produits MS",
            origin: "linear",
            description:
              "# **Contexte** \n\nParfois lorsque le user tente de se connecter sur la page d'authentification des produits MS, une erreur est renvoyée (pour diverse raison) sur l'endpoint `login-auth` et bloque la connexion \n\n→ In fine le user reste bloqué sur la page d'authentification, et si il appuie à nouveau sur le bouton de connexion, l'endpoint n'est pas rappelé. \nDonc tant qu'il n'ajoute pas manuellement `?action=sign-out` en fin d'url, une boucle sans fin le renvoie sur la page d'authentification, l'empêchant ainsi d'accéder au produit (Cf screen record 👇🏻)\n\n> Hypothèse de Gilles : \"je pense que ça garde les infos de connexion dans le local storage\"\n\n---\n\n# **Comportement voulu**\n\n*Faire en sorte à ce que le user puisse se connecter sans être impacté par les erreurs renvoyés vers* l'endpoint `login-auth`  *et sans avoir besoin d'ajouter manuellement le paramètre* `?action=sign-out` *en fin d'url* \n\n---\n\n# Critères d'acceptations\n\n1. L'utilisateur, si il se connecte avec les bonnes valeurs d'email et mot de passe associées à son compte, doit pouvoir accéder directement au produit concerné et ne pas rester bloqué sur la page d'authentification\n2. Le reste du parcours actuel ne dois pas changer, par exemple si le user se connecte avec email et/ou login erroné, alors un message d'erreur s'affiche et il n'est pas renvoyé sur la page du produit mais reste bien sur la page d'authentification\n\n---\n\n# Scénario de repro \n\n1. *Aller sur* [https://dev.app.mobsuccess.com/auth](https://dev.app.mobsuccess.com/auth), ou sur n'importe quel produit MS et se déconnecter pour revenir sur la page d'authentification\n2. Puis se connecter/déconnecter jusqu'à reproduire l'erreur (random) qui bloque la connexion \n3. Tenter alors de se connecter à nouveau\n4. Constater qu'on est pas renvoyé vers la page de destination, mais qu'on reste bien bloqué sur la page d'authentification\n5. Ajouter manuellement le param `?action=sign-out` en fin d'url\n6. Et constater enfin qu'on accède à la page souhaitée, sans avoir modifié les valeurs de login associée au compte\n\n   [Enregistrement de l’écran 2024-10-23 à 18.41.06.mov](https://uploads.linear.app/57206a03-8e61-4d14-9c97-478d076f754a/fc09f242-3bbe-4d71-9563-5fc316051d00/77de7c48-34e9-439f-9b37-5e8137a8eb21)\n\nN.B: je reproduis le bug de façon random et particulièrement sur Chrome \n\n⚠️ Par contre le soucis est systématique avec un utilisateur inactif ⚠️\n\n---\n\n# **Log**\n\n* Request URL: [https://dev.app.mobsuccess.com/webservices/rest/login-auth](https://dev.app.mobsuccess.com/webservices/rest/login-auth)\n\n---\n\n# Changelog\n\n🇫🇷  Correction de l'erreur qui bloque l'accès à la connexion sur la page d'authentification des produits MS\n\n🇺🇸 Fix of an error blocking access to login on MS product authentication page",
            id: "FRONT-1778",
          },
          origin: "linear",
          timestamp: 1730824292000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1925",
              title:
                "fix(auth): handle error and sign out on login failure [FRONT-1778]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nsignout when the login-auth endpoint fails\n\n### Scope\n\nwebapps/auth\n",
              id: 1925,
            },
            {
              url: "",
              origin: "git",
              id: "b6f28f5218e71f8d15d5e682983fef513ec08fc6",
              title:
                "fix(auth): handle error and sign out on login failure [FRONT-1778] (#1925)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1837/ajouter-le-composant-tagsinput-dans-react-ui",
            title: "Ajouter le composant TagsInput dans react-ui",
            origin: "linear",
            description:
              "## Contexte\n\nAfin d'ajouter des éléments séparés dans une liste dans avoir d'overlap ou de doublons, nous avons besoin du composant TagsInput\n\n---\n\n## Critère d'acceptation\n\n* Le composant TagsInput est créé et exposé dans react-ui\n* Le composant a des tests unitaires\n* Le composant dispose d'une ou plusieurs stories\n* Le composant a un/des tests visuels\n* Le composant permet l'ajout de tag\n* Le composant permet d'enlever des Tags\n* Le composant permet de valider les tags avant de les enregistrer\n* Le composant permet de prévenir l'utilisateur lorsque le tag est invalid\n* Le composant est disponible en form field\n* ~~Le composant est disponible en singleline ET en multiline~~  on verra si necessaire",
            id: "FRONT-1837",
          },
          origin: "linear",
          timestamp: 1730798590000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1941",
              title: "feat: add TagsInput component [FRONT-1837]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- [x] Add `TagsInput` component to react-ui\r\n- [x] Add a story for `TagsInput` component\r\n- [x] Add a test for `TagsInput` component\r\n- [x] Add visual regression test for `TagsInput` component\r\n\r\n### Scope\r\n\r\ncomponents library > tags input\r\n\r\n### QA\r\n\r\n- open storybook\r\n- go to tags input story\r\n- add tags\r\n- remove tags\r\n- add tags with enter\r\n- add tags with comma\r\n- add tags with space\r\n\r\n### Test URL\r\n\r\nhttps://pr-1941.react-ui-storybook.live.mobsuccess.com/?path=/docs/pandaark-tagsinput--docs",
              id: 1941,
            },
            {
              url: "",
              origin: "git",
              id: "d916401a3cf9ca0af9e28539010b5dfdb9461577",
              title: "feat: add TagsInput component [FRONT-1837] (#1941)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1871/autoriser-les-render-props-en-tant-que-children-de-composants",
            title:
              "Autoriser les render props en tant que children de composants",
            origin: "linear",
            description:
              "#### Changelog\n\nAjout de la prise en charge des render props en tant que enfants de composants",
            id: "FRONT-1871",
          },
          origin: "linear",
          timestamp: 1730795429000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1945",
              title:
                "change(eslint): allow render props as children [FRONT-1871]",
              origin: "github",
              description:
                "### What does it do? Why?\n\nallow render props as children (allow factories or ctx providers)\n",
              id: 1945,
            },
            {
              url: "",
              origin: "git",
              id: "636304c38c759f90000370bad2ff1896bd33a2bb",
              title:
                "change(eslint): allow render props as children [FRONT-1871] (#1945)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1866/corriger-le-render-infini-de-la-combobox",
            title: "Corriger le render infini de la combobox",
            origin: "linear",
            description:
              "#### Changelog\n\nSupprimer les decorators lors de la creation de la collection d'item d'un combobox",
            id: "FRONT-1866",
          },
          origin: "linear",
          timestamp: 1730738694000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1943",
              title:
                "fix(select): ensure no decorators within the combobox collection [FRONT-1866]",
              origin: "github",
              description:
                "### What does it do? Why?\n\n- remove decorators when creating combobox collection as they appear to cause an infinit render loop\n- make items collection common between single and multi select comboboxes\n\n### Scope\n\ncomponent system > select/combobox\n",
              id: 1943,
            },
            {
              url: "",
              origin: "git",
              id: "e62373f2bef475f9ec4974771fb5676331b3a462",
              title:
                "fix(select): ensure no decorators within the combobox collection [FRONT-1866] (#1943)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1807",
            title: "refactor: select select component [FRONT-1198]",
            origin: "github",
            description:
              '### What does it do? Why?\r\n\r\nUpdate select component to:\r\n - Clean code\r\n - Add tests\r\n - Add tags overflow\r\n - Split single and multiple\r\n While keeping the same API so that no migration is necessary\r\n \r\n<img width="593" alt="image" src="https://github.com/user-attachments/assets/f6af5454-e29b-429a-9fb7-575a55c89138">\r\n \r\n<img width="593" alt="image" src="https://github.com/user-attachments/assets/07ea6c6a-1e4c-4210-a21b-a4b3838ef667">',
            id: 1807,
          },
          origin: "github",
          timestamp: 1730714346000,
          references: [
            {
              url: "",
              origin: "git",
              id: "c89e7511914782cbf82f10e5a0556f3abc7758b4",
              title: "refactor: select select component [FRONT-1198] (#1807)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1757/bump-les-dependances-dui",
            title: "Bump les dépendances d'UI",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @ark-ui/anatomy\n* @ark-ui/react\n* @emoji-mart/data\n* @emoji-mart/react\n* @dnd-kit/core\n* @dnd-kit/modifiers\n* @dnd-kit/sortable\n* @dnd-kit/utilities\n* @lexical/react\n* @lexical/utils\n* @n8tb1t/use-scroll-position\n* @outdated-tanstack/react-table\n* @pandacss/dev\n* @tanstack/react-form\n* @tanstack/react-table\n* @tanstack/react-virtual\n* @tanstack/zod-form-adapter\n* @react-pdf/renderer\n* emoji-mart\n* lexical\n* recharts\n* react\n* react-colorful\n* react-device-detect\n* react-dom\n* react-horizontal-scrolling-menu\n* react-joyride\n* react-qr-code\n* react-resize-detector\n* react-router-dom\n\nEt mettre styled-components en version bloquée\n\n---\n\n## Critère d'acceptation\n\n* Bump toutes ces dépendances\n* Vérifier que tout fonctionne correctement",
            id: "FRONT-1757",
          },
          origin: "linear",
          timestamp: 1730373769000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1892",
              title: "chore: bump ui deps [FRONT-1757]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\n- Bump deps related to ui\r\n- Set styled-components version to under v6 because of type issues\r\n- Fix tests with pandacss classes\r\n- Fix forms with api changes\r\n- Change ColorPicker, DatePicker and TimePicker so they still work as before with their value/defaultValue as strings\r\n- Change Select because of an api change from ark\r\n- react-horizontal-scrolling-menu now has types",
              id: 1892,
            },
            {
              url: "",
              origin: "git",
              id: "8f7fec31c91dbf7d875d0b1c0339b2ca75c71b55",
              title: "chore: bump ui deps [FRONT-1757] (#1892)",
              description: "",
            },
          ],
        },
        {
          main: {
            url: "https://linear.app/mobsuccessgroup/issue/FRONT-1530/bump-les-dependances-en-rapport-avec-prettier",
            title: "Bump les dépendances en rapport avec Prettier",
            origin: "linear",
            description:
              "## Contexte\n\nPour préparer l'intégration de Renovate, bump de toutes les dépendances du monorepo.\n\n---\n\n## Informations complémentaires\n\nDépendances à bump :\n\n* @trivago/prettier-plugin-sort-imports\n* prettier\n\n## Critère d'acceptation\n\n* Bump ces dépendances\n* Formatter des fichiers si besoin",
            id: "FRONT-1530",
          },
          origin: "linear",
          timestamp: 1730302935000,
          references: [
            {
              url: "https://github.com/mobsuccess-devops/mobsuccess-front/pull/1922",
              title: "chore: bump prettier [FRONT-1530]",
              origin: "github",
              description:
                "### What does it do? Why?\r\n\r\nBump prettier and run it, it adds parenthesis around conditions in ternaries",
              id: 1922,
            },
            {
              url: "",
              origin: "git",
              id: "8127b4b90a94ba742a256c0abcc90fd67eee8a75",
              title: "chore: bump prettier [FRONT-1530] (#1922)",
              description: "",
            },
          ],
        },
      ],
    },
  ],
  raw: [
    {
      id: "business-unit",
      path: "./src/pages/index.ts",
      description: "Business Unit",
      diff: [
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/business-units/BusinessUnits.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/Layout/Page/Page.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/index.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/Loader/Loader.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/router/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/NavigationCard/NavigationCard.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Body.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Muted.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/SubTitle.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Title.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Container/Container.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/location/useSearchParam.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/location/useSearchParams.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/references/useListeningRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/references/useLocationRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useNavigate.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useGetUrl.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useRenderUrlWithKeepParams.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useHref.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/router/createRouters.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/native-props.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/BlockLoader/BlockLoader.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/variants/useVariant.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Theme/theme.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Router/RouterBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Navigate/NavigateBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Link/LinkBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/types/OverloadTo.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/class/relative-url.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typography/Typography.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/BlockLoader/Block.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/BlockLoader/Inline.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/input.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Theme/components/input.ts",
      ],
      commits: [
        {
          hash: "5e8884f1983f868f4644037fb05e57182d7c583c",
          date: "2024-11-26T16:22:23+00:00",
          author: "Colin Lienard",
          message:
            "refactor(packages,configs): use import types [FRONT-2085] (#2106)",
        },
        {
          hash: "69fb2483d8c4118d02c8e536de7b4505d0a4bf17",
          date: "2024-11-26T16:08:07+00:00",
          author: "Colin Lienard",
          message: "refactor(webapps): use import types [FRONT-2086] (#2105)",
        },
        {
          hash: "8f39ac3b271ef2295d1bac4be40915b2ebb85c6b",
          date: "2024-11-25T17:13:43+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(knip): cleanup unused exports react-ui [FRONT-2059] (#2092)",
        },
        {
          hash: "84ca8bfba9e81dd4209edaa03e6f5d0952a5a489",
          date: "2024-11-25T15:26:10+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057] (#2090)",
        },
        {
          hash: "f8319ac227f737a8912c80a36b00d1e89b1c0d4c",
          date: "2024-11-22T12:42:14+00:00",
          author: "Vincent Barrault",
          message:
            "refactor: remove forwarded layout components [FRONT-2034] (#2071)",
        },
        {
          hash: "1d393c4352f7952fa90d041aafa3812693bd227f",
          date: "2024-11-15T10:12:28+00:00",
          author: "Cyril",
          message: "feat: add leroy merlin theme [FRONT-1820] (#1993)",
        },
        {
          hash: "ed07f19ebe8191fcd0b7f81871c7edb544b797a5",
          date: "2024-11-07T16:39:09+00:00",
          author: "Cyril",
          message:
            "refactor: fix import paths from packages [FRONT-1892] (#1965)",
        },
      ],
    },
    {
      id: "container",
      path: "./src/pages/_app.tsx",
      description: "App wrapper that provides global contexts",
      diff: [
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/core/index.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/AppContainer/AppContainer.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/router/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/features/workspace.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Workspace/WorkspaceContextProvider.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/core/accounts.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/core/agency.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/analytics/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/index.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/mqtt/concurrency-pub-sub.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogWrapper/DialogWrapper.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/Layout/HeaderWrapper/HeaderWrapper.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/Layout/Layout.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/ModalWrapper/ModalWrapper.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/MqttCredentials/MqttCredentials.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/SidebarProvider/SidebarProvider.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/AppContainer/Interceptors/Interceptors.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/AppContainer/Sentry/Sentry.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/AppContainer/TimezoneBlocker/TimezoneBlocker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/location/useSearchParam.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/location/useSearchParams.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/references/useListeningRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/references/useLocationRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useNavigate.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useGetUrl.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useRenderUrlWithKeepParams.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useHref.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/router/createRouters.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/services/user/navbar.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Workspace/DynamicWorkspaceContextProvider.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Workspace/StaticWorkspaceContextProvider.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/fetch/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/errors/UnsafeHookError.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/analytics/GTM.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/analytics/Hotjar.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Container/Container.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Theme/theme.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Theme/ThemeProvider.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Input/Input.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/Collapsible.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Alert/Alert.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Card/Card.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Input/InputField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Dialog.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/NumberInput/NumberInputField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/Select.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TextArea/TextArea.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TextArea/TextAreaField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Button/Button.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Label/Label.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Checkbox/CheckboxField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/RadioGroup/RadioGroup.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/DatePickerField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DateRangePicker/DateRangePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/DatePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tooltip/Tooltip.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Menu/Menu.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Table.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/createTable.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/FileUpload/FileUpload.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tabs/Tabs.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/ColorPicker/ColorPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/Modal.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Pagination/Pagination.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Loader/Loader.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/EmptyState/EmptyState.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TimePicker/TimePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TimePicker/TimePickerField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/StatusButton/StatusButton.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Carousel/Carousel.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TagsInput/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Image/Image.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/atoms/global-atoms.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/ProjectCampaign/DialogProject/DialogProject.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/TrackingManager/ModalTrackingCustom/UTMs/DialogDelete/DialogDelete.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/api/campaign.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/api/template.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogCarousel/DialogCarousel.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogImageVideoOnly/DialogImageVideoOnly.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogInstream/DialogInstream.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogMetaCustom/DialogMetaCustom.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogNative/DialogNative.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/TrackingManager/ModalTrackingCustom/ModalTrackingCustom.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/index.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/constants/useServicePages.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/axios/index.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/utils/axiosToast.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Router/RouterBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Navigate/NavigateBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Link/LinkBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/types/OverloadTo.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/class/relative-url.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Workspace/utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/auth/auth.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/fetch/query.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/fetch/error.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-network-interceptor/src/components/ErrorInterceptor/ErrorInterceptor.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/variants/useVariant.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/native-props.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/shared-styles/input.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/shared-styles/text-fields.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/AbstractInput/Decorators.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/CollapsibleContent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/CollapsibleTrigger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/collapsible.utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/decorators/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Content.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Description.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Title.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/Decorators.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectMultiple.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectSingle.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/MonthView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/YearView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DateRangePicker/DaysView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DateRangePicker/date-range-picker.utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/DayView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Toaster/Toaster.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/shared-styles/dropdown.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Menu/MenuItem.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Menu/MenuItemGroup.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/QuickAction.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableLayout.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/helpers.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tabs/TabContent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tabs/TabTrigger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalTrigger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Pagination/PageSizeSelector.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/CircularProgress.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/LinearProgress.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/ProgressValueText.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/HeaderAccountPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/HeaderBreadcrumbs.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/HeaderSteps.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TagsInput/TagsInput.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TagsInput/TagsInputField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-mqtt/src/types/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-mqtt/src/features/create-pub-sub.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/PlatformApi/PlatformApi.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/constants/instreamModal.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/constants/nativeModal.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/api/advertiser.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/api/agency.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/api/asset-manager.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/atoms/project-campaign.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/atoms/tracking-manager.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/hooks/modalQueryParams.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/utils/utils.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogCarousel/CarouselCreation/CarouselCreation.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/upload/assetManager.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogImageVideoOnly/ImageVideoOnly/ImageVideoOnly.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogInstream/Instream/Instream.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogMetaCustom/MetaCustom/MetaCustom.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogNative/NativeCreation/NativeCreation.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/api/tracking-manager.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/TrackingManager/ModalTrackingCustom/Body/Body.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/TrackingManager/ModalTrackingCustom/Footer/Footer.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/TrackingManager/ModalTrackingCustom/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/TrackingManager/ModalTrackingCustom/ScrollUp/ScrollUp.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/date.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/brands-icon.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/is-axios-error-code.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/form.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Sidebar/Sidebar.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/sidebar/use-sidebar-client-logo.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/AxiosContextProvider/AxiosContextProvider.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/services/user/use-users.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Body.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Muted.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/SubTitle.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Title.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/amplify-backend/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Theme/components/input.ts",
        "/Users/maastrich/mobsuccess/front/packages/icons/src/icons.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/DarkButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/LightButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/LinearButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/TransparentButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/new-select.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedInput/AdvancedInput.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/AdvancedSelect.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Checkbox/Checkbox.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DateAndTimePicker/DateAndTimePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/DatePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/DatePickerSingleDay.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Input/Input.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Label/Label.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/RadioButton/RadioButton.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/RadioButtonsGroup/RadioButtonsGroup.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Switch/Switch.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Textarea/Textarea.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/Field.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/FieldLayout.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/tanstack.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/decorators/Feedback.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/decorators/Tooltip.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectItemsDropdown.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/styles.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/tags.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/ViewControl.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Caption.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Filters.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Arranger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Paginator.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Virtualizer.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/HeaderContent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableFooter.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableHeader.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableRow.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Icon/Dot/Dot.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-mqtt/src/features/create-client.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-mqtt/src/features/credentials.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typography/Typography.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/utils/params.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/atoms/variations-atoms.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/hooks/useAtom.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/hooks/useSetAtom.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/hooks/useGetAtom.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Modal/Modal.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/api/merged-enums.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogCarousel/CarouselCreation/AssetSettings/AssetSettings.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogCarousel/CarouselCreation/CardParameters/CardParameters.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogCarousel/CarouselCreation/CarouselSetter/CarouselSetter.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogCarousel/CarouselCreation/Footer/Footer.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/upload/imageRules.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogImageVideoOnly/ImageVideoOnly/Footer/Footer.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogImageVideoOnly/ImageVideoOnly/ImageVideoInformations/ImageVideoInformations.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogImageVideoOnly/ImageVideoOnly/ImageVideoParameters/ImageVideoParameters.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogInstream/Instream/DragAndDropInstream/DragAndDropInstream.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogInstream/Instream/Footer/Footer.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogInstream/Instream/InputsInstream/InputsInstream.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/utils/variations.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogMetaCustom/MetaCustom/Footer/Footer.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogNative/NativeCreation/AssetsSettings/AssetsSettingsForm.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogNative/NativeCreation/Footer/Footer.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogNative/NativeCreation/NativeInformations/NativeInformations.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/TrackingManager/ModalTrackingCustom/UTMs/UTMs.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/sidebar.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Sidebar/Desktop/Desktop.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Sidebar/Mobile/Mobile.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/features/axios-instances/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/AuthProvider/AuthProvider.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/context/hooks.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useData.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useDataAutoRefresh.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useFetcher.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useQuery.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/utils/queryId.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/rest-api/rest-api.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/route/route.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/pending-data/withPendingData.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/crud-api/crud-api.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/expose-axios.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-network-interceptor/src/components/ErrorInterceptor/ErrorsList/ErrorsList.tsx",
        "/Users/maastrich/mobsuccess/front/packages/icons/src/icons/click-rate/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/react-tools/useSingleChildWithRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/react-tools/useComponentMountedRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/BaseButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/MultiSelectItems/MultiSelectItems.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/SelectOption/SelectOption.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/date-picker/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/CustomRanges/CustomRanges.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Month/Month.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/SelectedRange/SelectedRange.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/date-picker-single-day.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Month/Month.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/states-hooks.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/input.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/components/AtomStoreProvider/AtomStoreProviderBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Stepper/Stepper.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogCarousel/CarouselCreation/AssetSettings/Asset/Asset.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogCarousel/CarouselCreation/CardParameters/BodyCardParameters/BodyCardParameters.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogCarousel/CarouselCreation/CardParameters/HeaderCardParameters/HeaderCardParameters.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogImageVideoOnly/ImageVideoOnly/ImageVideoInformations/ImageVideoAssets/ImageVideoAssets.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogInstream/Instream/DragAndDropInstream/Asset/Asset.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogNative/NativeCreation/NativeInformations/NativeAssets/NativeAssets.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Separator/Separator.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Sidebar/Content/Content.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Sidebar/Footer/Footer.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Sidebar/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Sidebar/ServiceSelector/ServiceSelector.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Sidebar/Desktop/Drawer/Drawer.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Sidebar/Mobile/Drawer/Drawer.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/features/storage.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/fetchers/wrapFetcher.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/utils/errorHandling.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/components/DataContext/DataContextBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/components/DataSuspense/DataSuspenseBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/route/method.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-network-interceptor/src/components/ErrorInterceptor/ErrorsList/ErrorItem.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/AbstractInput/AbstractInput.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Badge/Badge.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Dropdown.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Actions/Actions.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Item/Item.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Group/Group.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Title/Title.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/MultiSelectItems/MultiSelectItem/MultiSelectItem.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/date-picker/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/CustomRanges/Range/Range.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Header/MonthPicker/MonthPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Month/CardDay/CardDay.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Header/MonthPicker/MonthPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Month/CardDay/CardDay.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Orderable/Orderable.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/atom-store/atomStore.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Stepper/Item/Item.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Stepper/Separator/Separator.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/DragAndDrop/DragAndDrop.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/AssetPreview/AssetPreview.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogAssetParameters/DialogAssetParameters.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogImageVideoOnly/ImageVideoOnly/ImageVideoInformations/ImageVideoAssets/Asset/Asset.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/DialogNative/NativeCreation/NativeInformations/NativeAssets/Asset/Asset.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Sidebar/Footer/Menu/Menu.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Sidebar/Header/Logo/Logo.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Sidebar/ServiceSelector/Menu/Menu.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/AuthAction/AuthAction.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/components/PendingDataProvider/PendingDataProviderBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Badge/Cross/Cross.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Badge/Dot.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/is-instance-of-components.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Actions/Action/Action.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/HOC/Portal/Portal.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Pagination/Pagination.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Tooltip/Tooltip.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Sidebar/SectionDivider/SectionDivider.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/concurrency.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/gateway-timeout.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/request-redirect.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/request-retry.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/ClickAwayListener/ClickAwayListener.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dialog/Dialog.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dialog/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dialog/Content/Content.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Tooltip/PopperWrapper/PopperWrapper.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/AuthCard/AuthCard.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ForgotPassword/ForgotPassword.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/Login.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ResetPassword/ResetPassword.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Signout/Signout.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Tooltip/Popper/Popper.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ForgotPassword/EmailSent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/PatSignIn/PatSignIn.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/features/password.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ResetPassword/PasswordTooltip.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Tooltip/Popper/Arrow/Arrow.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/GoogleSignIn/GoogleSignIn.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/PatSignIn/PatSignInEnv.tsx",
      ],
      commits: [
        {
          hash: "b881c8a3c64a9ab704804ac9c4dbd494ffce3141",
          date: "2024-11-27T10:09:29+00:00",
          author: "Colin Lienard",
          message:
            "refactor(blocked-routes): migrate to pandark [FRONT-2046] (#2089)",
        },
        {
          hash: "b08fa79b728e5bcafa7fd4905da2ba7bb0f13344",
          date: "2024-11-27T08:40:35+00:00",
          author: "Daouda",
          message:
            "feat: migrate the datepicker onto lco [FRONT_1964] [FRONT-1964] (#2088)",
        },
        {
          hash: "5e8884f1983f868f4644037fb05e57182d7c583c",
          date: "2024-11-26T16:22:23+00:00",
          author: "Colin Lienard",
          message:
            "refactor(packages,configs): use import types [FRONT-2085] (#2106)",
        },
        {
          hash: "69fb2483d8c4118d02c8e536de7b4505d0a4bf17",
          date: "2024-11-26T16:08:07+00:00",
          author: "Colin Lienard",
          message: "refactor(webapps): use import types [FRONT-2086] (#2105)",
        },
        {
          hash: "846c73184da9007db6cbd06a78727ea39b5e582a",
          date: "2024-11-26T14:41:29+00:00",
          author: "Daouda",
          message:
            "fix: Move GTM and Hotjar components to src/components and re-export from public [FRONT_1835] [FRONT-1835] (#1930)",
        },
        {
          hash: "35f9e6c1b931e3ff20d5666ee9118cededca0c87",
          date: "2024-11-26T10:08:54+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(rdc-migration): remove rdc references [FRONT-2058] (#2091)",
        },
        {
          hash: "8f39ac3b271ef2295d1bac4be40915b2ebb85c6b",
          date: "2024-11-25T17:13:43+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(knip): cleanup unused exports react-ui [FRONT-2059] (#2092)",
        },
        {
          hash: "84ca8bfba9e81dd4209edaa03e6f5d0952a5a489",
          date: "2024-11-25T15:26:10+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057] (#2090)",
        },
        {
          hash: "b84e63e8382283601c22f04decca3ebe3f5b87f7",
          date: "2024-11-25T15:15:02+00:00",
          author: "Vincent Barrault",
          message: "refactor: use loader dot block [FRONT-2044] (#2086)",
        },
        {
          hash: "575b3e2f12f68e7d09bb5ba6ab1504436380e241",
          date: "2024-11-25T12:03:39+00:00",
          author: "Mathis Pinsault",
          message:
            "change(migration-rdc): advertiser page [FRONT-2037] (#2077)",
        },
        {
          hash: "ee28e2768233b3be327885a11ddaa361c3e9f409",
          date: "2024-11-22T14:48:04+00:00",
          author: "Mathis Pinsault",
          message:
            "fix: workspace should not have been migrate in PlatformApi [FRONT-2035] (#2074)",
        },
        {
          hash: "e2e0ec414882b47ffc74ad00194b8ee40c38d937",
          date: "2024-11-22T14:29:08+00:00",
          author: "Mathis Pinsault",
          message: "change: uri params naming [FRONT-2030] (#2066)",
        },
        {
          hash: "f8319ac227f737a8912c80a36b00d1e89b1c0d4c",
          date: "2024-11-22T12:42:14+00:00",
          author: "Vincent Barrault",
          message:
            "refactor: remove forwarded layout components [FRONT-2034] (#2071)",
        },
        {
          hash: "4d071d877dd92ed44711bce44403268402684971",
          date: "2024-11-22T10:27:00+00:00",
          author: "Colin Lienard",
          message: "refactor(overview): use pandark table [FRONT-1906] (#2021)",
        },
        {
          hash: "57330cd9cc9ae11fd7a3020e90e95eed1791c76b",
          date: "2024-11-21T17:09:16+00:00",
          author: "Mathis Pinsault",
          message:
            "change: migrate AdvancedInput to panda input [FRONT-1946] (#2055)",
        },
        {
          hash: "bbbae9ad3efd48b4268d96931c65c632d8764f3f",
          date: "2024-11-21T13:39:00+00:00",
          author: "Mathis Pinsault",
          message:
            "feat: use typed endpoint for agency pages [FRONT-1918] (#1981)",
        },
        {
          hash: "8b555df4b507179bff4ea5a94259f5cf349e5baa",
          date: "2024-11-21T10:33:56+00:00",
          author: "Mathis Pinsault",
          message:
            "fix: add icon to empty state in StaticWorkspaceContextProvider [FRONT-2026] (#2059)",
        },
        {
          hash: "9b7627a661ad6ea8fe4cdf70d4663ed173943625",
          date: "2024-11-20T14:50:53+00:00",
          author: "Mathis Pinsault",
          message:
            "change: update styling in Dialog FileUpload Image and Table components [FRONT-2019] (#2051)",
        },
        {
          hash: "4fa9b4f5050ec9ee172d22109fa33b8a95082cee",
          date: "2024-11-20T10:44:28+00:00",
          author: "Cyril",
          message:
            "refactor(lmp): replace advanced input with panda input [FRONT-1942] (#2036)",
        },
        {
          hash: "ec95054e5ff8479265d28e57dda4c16d47ed6b5c",
          date: "2024-11-19T13:50:50+00:00",
          author: "Mathis Pinsault",
          message: "fix: dynamic workspace emptysate [FRONT-1992] (#2032)",
        },
        {
          hash: "699c591d53b452fd1e0f8b5e263f187ef3954298",
          date: "2024-11-18T15:09:11+00:00",
          author: "Cyril",
          message: "fix: add portal to select [FRONT-1983] (#2022)",
        },
        {
          hash: "0dd3ca72ce7f5da6aa650e5b41083da20406c6f8",
          date: "2024-11-15T10:37:20+00:00",
          author: "Mathis Pinsault",
          message:
            "feat(worksapace): add dynamic workspace for lcm [FRONT-1967] (#2002)",
        },
        {
          hash: "1d393c4352f7952fa90d041aafa3812693bd227f",
          date: "2024-11-15T10:12:28+00:00",
          author: "Cyril",
          message: "feat: add leroy merlin theme [FRONT-1820] (#1993)",
        },
        {
          hash: "1ce034ecbbf5cfc67cc85fb80b955d2f6f794aac",
          date: "2024-11-14T11:11:07+00:00",
          author: "Vincent Barrault",
          message: "feat(coverage): add badge on readme [FRONT-1598] (#1920)",
        },
        {
          hash: "17d8f1a55246d33a112aad036ee92f4319d287ea",
          date: "2024-11-14T10:39:06+00:00",
          author: "Vincent Barrault",
          message:
            "test: add visual tests for alert component [FRONT-1928] (#1987)",
        },
        {
          hash: "8c326576060bde330e2b43c6210aaed779889385",
          date: "2024-11-13T17:13:13+00:00",
          author: "Mathis Pinsault",
          message:
            "change(workspace): update workspace api endpoint to use typed one [FRONT-1929] (#1988)",
        },
        {
          hash: "5c9dcfc3362f1f7a914e6425b5826b9d14155d68",
          date: "2024-11-13T09:26:42+00:00",
          author: "Cyril",
          message:
            "refactor: remove ts-nocheck from Geoplanner [FRONT-1865] (#1960)",
        },
        {
          hash: "456c31c93be7021310eae364269d20fc971475ea",
          date: "2024-11-13T08:58:02+00:00",
          author: "Cyril",
          message: "feat(lco): mpc date alert [FRONT-1748] (#1978)",
        },
        {
          hash: "ea057bfa1b0c715bbc5f1979c00413c2d1230384",
          date: "2024-11-12T15:20:50+00:00",
          author: "Mathis Pinsault",
          message:
            "change(FileUpload): make component use composition api instead of props [FRONT-1917] (#1980)",
        },
        {
          hash: "7c41a997653b410b218fdd43d215488a54ba4e90",
          date: "2024-11-08T09:45:38+00:00",
          author: "Colin Lienard",
          message: "feat(campaigns): add ctr data [FRONT-1712] (#1963)",
        },
        {
          hash: "ed07f19ebe8191fcd0b7f81871c7edb544b797a5",
          date: "2024-11-07T16:39:09+00:00",
          author: "Cyril",
          message:
            "refactor: fix import paths from packages [FRONT-1892] (#1965)",
        },
        {
          hash: "614fa599456738b20d0e4dea0c7411c32659e519",
          date: "2024-11-07T15:52:30+00:00",
          author: "Mathis Pinsault",
          message:
            "feat(third-party): add third-party accounts pages [FRONT-1738] (#1933)",
        },
        {
          hash: "008ee43597d63dbcf180c44ff1b44012001fb657",
          date: "2024-11-07T13:35:32+00:00",
          author: "Colin Lienard",
          message: "chore: bump utilities dependencies [FRONT-1873] (#1946)",
        },
        {
          hash: "83bf7de9974f8d9cb2d57363c0b1bbbd6320263a",
          date: "2024-11-06T16:08:21+00:00",
          author: "Vincent Barrault",
          message: "fix: placeholder color on inputs [FRONT-1881] (#1958)",
        },
        {
          hash: "4899d842b83a945de9c316295f0d2ac0d2a4f357",
          date: "2024-11-06T13:31:48+00:00",
          author: "Mathis Pinsault",
          message: "feat: add circular progress component [FRONT-1884] (#1957)",
        },
        {
          hash: "b4177e4553bcd8fa83d620954d4c1596a9a9edbb",
          date: "2024-11-06T09:48:24+00:00",
          author: "Aurelien-DRUON",
          message: "fix(dialog-project): date picker [FRONT-1846] (#1956)",
        },
        {
          hash: "44d0c6504b97dc122a462bd1dacd36eba724b0b2",
          date: "2024-11-06T08:47:43+00:00",
          author: "Colin Lienard",
          message: "chore: bump react query [FRONT-1801] (#1905)",
        },
        {
          hash: "b6f28f5218e71f8d15d5e682983fef513ec08fc6",
          date: "2024-11-05T16:31:32+00:00",
          author: "Mathis Pinsault",
          message:
            "fix(auth): handle error and sign out on login failure [FRONT-1778] (#1925)",
        },
        {
          hash: "d916401a3cf9ca0af9e28539010b5dfdb9461577",
          date: "2024-11-05T09:23:10+00:00",
          author: "Mathis Pinsault",
          message: "feat: add TagsInput component [FRONT-1837] (#1941)",
        },
        {
          hash: "636304c38c759f90000370bad2ff1896bd33a2bb",
          date: "2024-11-05T08:30:29+00:00",
          author: "Mathis Pinsault",
          message:
            "change(eslint): allow render props as children [FRONT-1871] (#1945)",
        },
        {
          hash: "e62373f2bef475f9ec4974771fb5676331b3a462",
          date: "2024-11-04T16:44:54+00:00",
          author: "Mathis Pinsault",
          message:
            "fix(select): ensure no decorators within the combobox collection [FRONT-1866] (#1943)",
        },
        {
          hash: "c89e7511914782cbf82f10e5a0556f3abc7758b4",
          date: "2024-11-04T09:59:06+00:00",
          author: "Cyril",
          message: "refactor: select select component [FRONT-1198] (#1807)",
        },
        {
          hash: "ca6eb9fb7005a2cd0b68dd08ced7d97af37f9233",
          date: "2024-11-04T07:53:47+00:00",
          author: "Mathis Pinsault",
          message: "fix: endpoint overides query result [FRONT-1849] (#1939)",
        },
        {
          hash: "8f7fec31c91dbf7d875d0b1c0339b2ca75c71b55",
          date: "2024-10-31T11:22:49+00:00",
          author: "Colin Lienard",
          message: "chore: bump ui deps [FRONT-1757] (#1892)",
        },
        {
          hash: "8127b4b90a94ba742a256c0abcc90fd67eee8a75",
          date: "2024-10-30T15:42:15+00:00",
          author: "Colin Lienard",
          message: "chore: bump prettier [FRONT-1530] (#1922)",
        },
      ],
    },
    {
      id: "agency",
      path: "./src/pages/[businessUnit]/index.tsx",
      description: "Agency list",
      diff: [
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/index.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/api/agency.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/Layout/Page/Page.tsx",
        "/Users/maastrich/mobsuccess/front/packages/icons/src/icons.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/router/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/services/user/use-users.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/services/user/navbar.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/ActionBar/ActionBar.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Input/Input.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/Collapsible.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Alert/Alert.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Card/Card.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Input/InputField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Dialog.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/NumberInput/NumberInputField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/Select.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TextArea/TextArea.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TextArea/TextAreaField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Button/Button.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Label/Label.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Checkbox/CheckboxField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/RadioGroup/RadioGroup.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/DatePickerField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DateRangePicker/DateRangePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/DatePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tooltip/Tooltip.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Menu/Menu.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Table.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/createTable.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/FileUpload/FileUpload.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tabs/Tabs.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/ColorPicker/ColorPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/Modal.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Pagination/Pagination.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Loader/Loader.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/EmptyState/EmptyState.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TimePicker/TimePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TimePicker/TimePickerField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/StatusButton/StatusButton.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Carousel/Carousel.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TagsInput/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Image/Image.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/utils/params.ts",
        "/Users/maastrich/mobsuccess/front/packages/icons/src/icons/click-rate/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/location/useSearchParam.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/location/useSearchParams.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/references/useListeningRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/references/useLocationRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useNavigate.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useGetUrl.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useRenderUrlWithKeepParams.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useHref.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/router/createRouters.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/fetch/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/shared-styles/input.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/shared-styles/text-fields.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/AbstractInput/Decorators.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/CollapsibleContent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/CollapsibleTrigger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/collapsible.utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/decorators/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Content.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Description.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Title.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/Decorators.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectMultiple.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectSingle.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/native-props.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/MonthView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/YearView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DateRangePicker/DaysView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DateRangePicker/date-range-picker.utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/DayView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Toaster/Toaster.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/shared-styles/dropdown.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Menu/MenuItem.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Menu/MenuItemGroup.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/QuickAction.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableLayout.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/helpers.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tabs/TabContent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tabs/TabTrigger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalTrigger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Pagination/PageSizeSelector.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/CircularProgress.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/LinearProgress.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/ProgressValueText.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/HeaderAccountPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/HeaderBreadcrumbs.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/HeaderSteps.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TagsInput/TagsInput.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TagsInput/TagsInputField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Container/Container.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Router/RouterBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Navigate/NavigateBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Link/LinkBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/types/OverloadTo.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/class/relative-url.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/auth/auth.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/fetch/query.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/fetch/error.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/DarkButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/LightButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/LinearButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/TransparentButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/new-select.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedInput/AdvancedInput.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/AdvancedSelect.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Checkbox/Checkbox.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DateAndTimePicker/DateAndTimePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/DatePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/DatePickerSingleDay.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Input/Input.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Label/Label.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/RadioButton/RadioButton.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/RadioButtonsGroup/RadioButtonsGroup.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Switch/Switch.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Textarea/Textarea.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/Field.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/FieldLayout.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/tanstack.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/decorators/Feedback.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/decorators/Tooltip.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectItemsDropdown.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/styles.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/tags.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Body.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Muted.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/SubTitle.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Title.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/ViewControl.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Caption.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Filters.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Arranger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Paginator.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Virtualizer.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/HeaderContent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableFooter.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableHeader.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableRow.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Icon/Dot/Dot.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/variants/useVariant.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Theme/theme.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/amplify-backend/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/react-tools/useSingleChildWithRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/react-tools/useComponentMountedRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/BaseButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/MultiSelectItems/MultiSelectItems.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/SelectOption/SelectOption.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/date-picker/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/CustomRanges/CustomRanges.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Month/Month.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/SelectedRange/SelectedRange.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/date-picker-single-day.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Month/Month.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/states-hooks.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/AuthProvider/AuthProvider.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/context/hooks.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useData.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useDataAutoRefresh.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useFetcher.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useQuery.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/utils/queryId.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/rest-api/rest-api.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/route/route.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/pending-data/withPendingData.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/crud-api/crud-api.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/expose-axios.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/AbstractInput/AbstractInput.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typography/Typography.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Badge/Badge.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Dropdown.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Actions/Actions.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Item/Item.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Group/Group.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Title/Title.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/MultiSelectItems/MultiSelectItem/MultiSelectItem.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/date-picker/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/CustomRanges/Range/Range.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Header/MonthPicker/MonthPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Month/CardDay/CardDay.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Header/MonthPicker/MonthPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Month/CardDay/CardDay.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Orderable/Orderable.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Theme/components/input.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/features/storage.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/fetchers/wrapFetcher.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/utils/errorHandling.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/components/DataContext/DataContextBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/components/DataSuspense/DataSuspenseBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/route/method.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/input.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Badge/Cross/Cross.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Badge/Dot.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/is-instance-of-components.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Actions/Action/Action.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/AuthAction/AuthAction.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/hooks/useAtom.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/hooks/useSetAtom.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/hooks/useGetAtom.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/components/PendingDataProvider/PendingDataProviderBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/ClickAwayListener/ClickAwayListener.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Separator/Separator.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/components/AtomStoreProvider/AtomStoreProviderBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/concurrency.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/gateway-timeout.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/request-redirect.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/request-retry.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/AuthCard/AuthCard.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ForgotPassword/ForgotPassword.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/Login.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ResetPassword/ResetPassword.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Signout/Signout.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/atom-store/atomStore.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ForgotPassword/EmailSent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/PatSignIn/PatSignIn.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/features/password.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ResetPassword/PasswordTooltip.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/GoogleSignIn/GoogleSignIn.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/PatSignIn/PatSignInEnv.tsx",
      ],
      commits: [
        {
          hash: "b881c8a3c64a9ab704804ac9c4dbd494ffce3141",
          date: "2024-11-27T10:09:29+00:00",
          author: "Colin Lienard",
          message:
            "refactor(blocked-routes): migrate to pandark [FRONT-2046] (#2089)",
        },
        {
          hash: "b08fa79b728e5bcafa7fd4905da2ba7bb0f13344",
          date: "2024-11-27T08:40:35+00:00",
          author: "Daouda",
          message:
            "feat: migrate the datepicker onto lco [FRONT_1964] [FRONT-1964] (#2088)",
        },
        {
          hash: "5e8884f1983f868f4644037fb05e57182d7c583c",
          date: "2024-11-26T16:22:23+00:00",
          author: "Colin Lienard",
          message:
            "refactor(packages,configs): use import types [FRONT-2085] (#2106)",
        },
        {
          hash: "69fb2483d8c4118d02c8e536de7b4505d0a4bf17",
          date: "2024-11-26T16:08:07+00:00",
          author: "Colin Lienard",
          message: "refactor(webapps): use import types [FRONT-2086] (#2105)",
        },
        {
          hash: "35f9e6c1b931e3ff20d5666ee9118cededca0c87",
          date: "2024-11-26T10:08:54+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(rdc-migration): remove rdc references [FRONT-2058] (#2091)",
        },
        {
          hash: "8f39ac3b271ef2295d1bac4be40915b2ebb85c6b",
          date: "2024-11-25T17:13:43+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(knip): cleanup unused exports react-ui [FRONT-2059] (#2092)",
        },
        {
          hash: "84ca8bfba9e81dd4209edaa03e6f5d0952a5a489",
          date: "2024-11-25T15:26:10+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057] (#2090)",
        },
        {
          hash: "b84e63e8382283601c22f04decca3ebe3f5b87f7",
          date: "2024-11-25T15:15:02+00:00",
          author: "Vincent Barrault",
          message: "refactor: use loader dot block [FRONT-2044] (#2086)",
        },
        {
          hash: "575b3e2f12f68e7d09bb5ba6ab1504436380e241",
          date: "2024-11-25T12:03:39+00:00",
          author: "Mathis Pinsault",
          message:
            "change(migration-rdc): advertiser page [FRONT-2037] (#2077)",
        },
        {
          hash: "f8319ac227f737a8912c80a36b00d1e89b1c0d4c",
          date: "2024-11-22T12:42:14+00:00",
          author: "Vincent Barrault",
          message:
            "refactor: remove forwarded layout components [FRONT-2034] (#2071)",
        },
        {
          hash: "4d071d877dd92ed44711bce44403268402684971",
          date: "2024-11-22T10:27:00+00:00",
          author: "Colin Lienard",
          message: "refactor(overview): use pandark table [FRONT-1906] (#2021)",
        },
        {
          hash: "57330cd9cc9ae11fd7a3020e90e95eed1791c76b",
          date: "2024-11-21T17:09:16+00:00",
          author: "Mathis Pinsault",
          message:
            "change: migrate AdvancedInput to panda input [FRONT-1946] (#2055)",
        },
        {
          hash: "bbbae9ad3efd48b4268d96931c65c632d8764f3f",
          date: "2024-11-21T13:39:00+00:00",
          author: "Mathis Pinsault",
          message:
            "feat: use typed endpoint for agency pages [FRONT-1918] (#1981)",
        },
        {
          hash: "9b7627a661ad6ea8fe4cdf70d4663ed173943625",
          date: "2024-11-20T14:50:53+00:00",
          author: "Mathis Pinsault",
          message:
            "change: update styling in Dialog FileUpload Image and Table components [FRONT-2019] (#2051)",
        },
        {
          hash: "4fa9b4f5050ec9ee172d22109fa33b8a95082cee",
          date: "2024-11-20T10:44:28+00:00",
          author: "Cyril",
          message:
            "refactor(lmp): replace advanced input with panda input [FRONT-1942] (#2036)",
        },
        {
          hash: "ec95054e5ff8479265d28e57dda4c16d47ed6b5c",
          date: "2024-11-19T13:50:50+00:00",
          author: "Mathis Pinsault",
          message: "fix: dynamic workspace emptysate [FRONT-1992] (#2032)",
        },
        {
          hash: "699c591d53b452fd1e0f8b5e263f187ef3954298",
          date: "2024-11-18T15:09:11+00:00",
          author: "Cyril",
          message: "fix: add portal to select [FRONT-1983] (#2022)",
        },
        {
          hash: "0dd3ca72ce7f5da6aa650e5b41083da20406c6f8",
          date: "2024-11-15T10:37:20+00:00",
          author: "Mathis Pinsault",
          message:
            "feat(worksapace): add dynamic workspace for lcm [FRONT-1967] (#2002)",
        },
        {
          hash: "1d393c4352f7952fa90d041aafa3812693bd227f",
          date: "2024-11-15T10:12:28+00:00",
          author: "Cyril",
          message: "feat: add leroy merlin theme [FRONT-1820] (#1993)",
        },
        {
          hash: "17d8f1a55246d33a112aad036ee92f4319d287ea",
          date: "2024-11-14T10:39:06+00:00",
          author: "Vincent Barrault",
          message:
            "test: add visual tests for alert component [FRONT-1928] (#1987)",
        },
        {
          hash: "8c326576060bde330e2b43c6210aaed779889385",
          date: "2024-11-13T17:13:13+00:00",
          author: "Mathis Pinsault",
          message:
            "change(workspace): update workspace api endpoint to use typed one [FRONT-1929] (#1988)",
        },
        {
          hash: "5c9dcfc3362f1f7a914e6425b5826b9d14155d68",
          date: "2024-11-13T09:26:42+00:00",
          author: "Cyril",
          message:
            "refactor: remove ts-nocheck from Geoplanner [FRONT-1865] (#1960)",
        },
        {
          hash: "456c31c93be7021310eae364269d20fc971475ea",
          date: "2024-11-13T08:58:02+00:00",
          author: "Cyril",
          message: "feat(lco): mpc date alert [FRONT-1748] (#1978)",
        },
        {
          hash: "ea057bfa1b0c715bbc5f1979c00413c2d1230384",
          date: "2024-11-12T15:20:50+00:00",
          author: "Mathis Pinsault",
          message:
            "change(FileUpload): make component use composition api instead of props [FRONT-1917] (#1980)",
        },
        {
          hash: "7c41a997653b410b218fdd43d215488a54ba4e90",
          date: "2024-11-08T09:45:38+00:00",
          author: "Colin Lienard",
          message: "feat(campaigns): add ctr data [FRONT-1712] (#1963)",
        },
        {
          hash: "ed07f19ebe8191fcd0b7f81871c7edb544b797a5",
          date: "2024-11-07T16:39:09+00:00",
          author: "Cyril",
          message:
            "refactor: fix import paths from packages [FRONT-1892] (#1965)",
        },
        {
          hash: "614fa599456738b20d0e4dea0c7411c32659e519",
          date: "2024-11-07T15:52:30+00:00",
          author: "Mathis Pinsault",
          message:
            "feat(third-party): add third-party accounts pages [FRONT-1738] (#1933)",
        },
        {
          hash: "008ee43597d63dbcf180c44ff1b44012001fb657",
          date: "2024-11-07T13:35:32+00:00",
          author: "Colin Lienard",
          message: "chore: bump utilities dependencies [FRONT-1873] (#1946)",
        },
        {
          hash: "83bf7de9974f8d9cb2d57363c0b1bbbd6320263a",
          date: "2024-11-06T16:08:21+00:00",
          author: "Vincent Barrault",
          message: "fix: placeholder color on inputs [FRONT-1881] (#1958)",
        },
        {
          hash: "4899d842b83a945de9c316295f0d2ac0d2a4f357",
          date: "2024-11-06T13:31:48+00:00",
          author: "Mathis Pinsault",
          message: "feat: add circular progress component [FRONT-1884] (#1957)",
        },
        {
          hash: "b4177e4553bcd8fa83d620954d4c1596a9a9edbb",
          date: "2024-11-06T09:48:24+00:00",
          author: "Aurelien-DRUON",
          message: "fix(dialog-project): date picker [FRONT-1846] (#1956)",
        },
        {
          hash: "44d0c6504b97dc122a462bd1dacd36eba724b0b2",
          date: "2024-11-06T08:47:43+00:00",
          author: "Colin Lienard",
          message: "chore: bump react query [FRONT-1801] (#1905)",
        },
        {
          hash: "b6f28f5218e71f8d15d5e682983fef513ec08fc6",
          date: "2024-11-05T16:31:32+00:00",
          author: "Mathis Pinsault",
          message:
            "fix(auth): handle error and sign out on login failure [FRONT-1778] (#1925)",
        },
        {
          hash: "d916401a3cf9ca0af9e28539010b5dfdb9461577",
          date: "2024-11-05T09:23:10+00:00",
          author: "Mathis Pinsault",
          message: "feat: add TagsInput component [FRONT-1837] (#1941)",
        },
        {
          hash: "636304c38c759f90000370bad2ff1896bd33a2bb",
          date: "2024-11-05T08:30:29+00:00",
          author: "Mathis Pinsault",
          message:
            "change(eslint): allow render props as children [FRONT-1871] (#1945)",
        },
        {
          hash: "e62373f2bef475f9ec4974771fb5676331b3a462",
          date: "2024-11-04T16:44:54+00:00",
          author: "Mathis Pinsault",
          message:
            "fix(select): ensure no decorators within the combobox collection [FRONT-1866] (#1943)",
        },
        {
          hash: "c89e7511914782cbf82f10e5a0556f3abc7758b4",
          date: "2024-11-04T09:59:06+00:00",
          author: "Cyril",
          message: "refactor: select select component [FRONT-1198] (#1807)",
        },
        {
          hash: "8f7fec31c91dbf7d875d0b1c0339b2ca75c71b55",
          date: "2024-10-31T11:22:49+00:00",
          author: "Colin Lienard",
          message: "chore: bump ui deps [FRONT-1757] (#1892)",
        },
        {
          hash: "8127b4b90a94ba742a256c0abcc90fd67eee8a75",
          date: "2024-10-30T15:42:15+00:00",
          author: "Colin Lienard",
          message: "chore: bump prettier [FRONT-1530] (#1922)",
        },
      ],
    },
    {
      id: "agency:create",
      path: "./src/pages/[businessUnit]/create.tsx",
      description: "Agency creation form",
      diff: [
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/index.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/AgencyForm/AgencyForm.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/api/agency.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/utils/params.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/router/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Input/Input.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/Collapsible.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Alert/Alert.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Card/Card.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Input/InputField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Dialog.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/NumberInput/NumberInputField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/Select.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TextArea/TextArea.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TextArea/TextAreaField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Button/Button.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Label/Label.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Checkbox/CheckboxField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/RadioGroup/RadioGroup.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/DatePickerField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DateRangePicker/DateRangePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/DatePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tooltip/Tooltip.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Menu/Menu.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Table.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/createTable.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/FileUpload/FileUpload.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tabs/Tabs.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/ColorPicker/ColorPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/Modal.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Pagination/Pagination.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Loader/Loader.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/EmptyState/EmptyState.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TimePicker/TimePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TimePicker/TimePickerField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/StatusButton/StatusButton.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Carousel/Carousel.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TagsInput/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Image/Image.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/LogoDropField/LogoDropField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/location/useSearchParam.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/location/useSearchParams.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/references/useListeningRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/references/useLocationRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useNavigate.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useGetUrl.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useRenderUrlWithKeepParams.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useHref.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/router/createRouters.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/shared-styles/input.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/shared-styles/text-fields.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/AbstractInput/Decorators.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/CollapsibleContent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/CollapsibleTrigger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/collapsible.utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/decorators/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Content.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Description.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Title.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/Decorators.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectMultiple.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectSingle.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/native-props.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/MonthView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/YearView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DateRangePicker/DaysView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DateRangePicker/date-range-picker.utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/DayView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Toaster/Toaster.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/shared-styles/dropdown.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Menu/MenuItem.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Menu/MenuItemGroup.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/QuickAction.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableLayout.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/helpers.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tabs/TabContent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tabs/TabTrigger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalTrigger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Pagination/PageSizeSelector.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/CircularProgress.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/LinearProgress.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/ProgressValueText.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/HeaderAccountPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/HeaderBreadcrumbs.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/HeaderSteps.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TagsInput/TagsInput.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TagsInput/TagsInputField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/services/user/use-users.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/services/user/navbar.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/zod/file.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/new-select.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedInput/AdvancedInput.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/AdvancedSelect.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Checkbox/Checkbox.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DateAndTimePicker/DateAndTimePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/DatePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/DatePickerSingleDay.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Input/Input.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Label/Label.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/RadioButton/RadioButton.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/RadioButtonsGroup/RadioButtonsGroup.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Switch/Switch.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Textarea/Textarea.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/Field.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/FieldLayout.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/tanstack.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Body.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Muted.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/SubTitle.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Title.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Router/RouterBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Navigate/NavigateBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Link/LinkBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/types/OverloadTo.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/class/relative-url.ts",
        "/Users/maastrich/mobsuccess/front/packages/icons/src/icons.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/DarkButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/LightButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/LinearButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/TransparentButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/decorators/Feedback.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/decorators/Tooltip.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectItemsDropdown.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/styles.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/tags.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/ViewControl.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Caption.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Filters.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Arranger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Paginator.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Virtualizer.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/HeaderContent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableFooter.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableHeader.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableRow.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Icon/Dot/Dot.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/fetch/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/MultiSelectItems/MultiSelectItems.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/SelectOption/SelectOption.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/date-picker/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/CustomRanges/CustomRanges.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Month/Month.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/SelectedRange/SelectedRange.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/date-picker-single-day.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Month/Month.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/date.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/brands-icon.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/is-axios-error-code.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/form.ts",
        "/Users/maastrich/mobsuccess/front/packages/icons/src/icons/click-rate/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/react-tools/useSingleChildWithRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/react-tools/useComponentMountedRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/BaseButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/states-hooks.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/auth/auth.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/fetch/query.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/fetch/error.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/AbstractInput/AbstractInput.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Container/Container.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typography/Typography.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Badge/Badge.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Dropdown.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Actions/Actions.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Item/Item.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Group/Group.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Title/Title.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/MultiSelectItems/MultiSelectItem/MultiSelectItem.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/date-picker/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/CustomRanges/Range/Range.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Header/MonthPicker/MonthPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Month/CardDay/CardDay.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Header/MonthPicker/MonthPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Month/CardDay/CardDay.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Theme/theme.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Orderable/Orderable.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/amplify-backend/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/variants/useVariant.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/input.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Badge/Cross/Cross.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Badge/Dot.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/is-instance-of-components.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Actions/Action/Action.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/AuthProvider/AuthProvider.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/context/hooks.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useData.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useDataAutoRefresh.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useFetcher.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useQuery.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/utils/queryId.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/rest-api/rest-api.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/route/route.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/pending-data/withPendingData.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/crud-api/crud-api.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/expose-axios.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/ClickAwayListener/ClickAwayListener.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Separator/Separator.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Theme/components/input.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/features/storage.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/fetchers/wrapFetcher.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/utils/errorHandling.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/components/DataContext/DataContextBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/components/DataSuspense/DataSuspenseBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/route/method.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/AuthAction/AuthAction.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/hooks/useAtom.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/hooks/useSetAtom.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/hooks/useGetAtom.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/components/PendingDataProvider/PendingDataProviderBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/components/AtomStoreProvider/AtomStoreProviderBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/concurrency.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/gateway-timeout.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/request-redirect.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/request-retry.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/AuthCard/AuthCard.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ForgotPassword/ForgotPassword.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/Login.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ResetPassword/ResetPassword.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Signout/Signout.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/atom-store/atomStore.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ForgotPassword/EmailSent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/PatSignIn/PatSignIn.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/features/password.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ResetPassword/PasswordTooltip.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/GoogleSignIn/GoogleSignIn.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/PatSignIn/PatSignInEnv.tsx",
      ],
      commits: [
        {
          hash: "b881c8a3c64a9ab704804ac9c4dbd494ffce3141",
          date: "2024-11-27T10:09:29+00:00",
          author: "Colin Lienard",
          message:
            "refactor(blocked-routes): migrate to pandark [FRONT-2046] (#2089)",
        },
        {
          hash: "b08fa79b728e5bcafa7fd4905da2ba7bb0f13344",
          date: "2024-11-27T08:40:35+00:00",
          author: "Daouda",
          message:
            "feat: migrate the datepicker onto lco [FRONT_1964] [FRONT-1964] (#2088)",
        },
        {
          hash: "5e8884f1983f868f4644037fb05e57182d7c583c",
          date: "2024-11-26T16:22:23+00:00",
          author: "Colin Lienard",
          message:
            "refactor(packages,configs): use import types [FRONT-2085] (#2106)",
        },
        {
          hash: "69fb2483d8c4118d02c8e536de7b4505d0a4bf17",
          date: "2024-11-26T16:08:07+00:00",
          author: "Colin Lienard",
          message: "refactor(webapps): use import types [FRONT-2086] (#2105)",
        },
        {
          hash: "35f9e6c1b931e3ff20d5666ee9118cededca0c87",
          date: "2024-11-26T10:08:54+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(rdc-migration): remove rdc references [FRONT-2058] (#2091)",
        },
        {
          hash: "8f39ac3b271ef2295d1bac4be40915b2ebb85c6b",
          date: "2024-11-25T17:13:43+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(knip): cleanup unused exports react-ui [FRONT-2059] (#2092)",
        },
        {
          hash: "84ca8bfba9e81dd4209edaa03e6f5d0952a5a489",
          date: "2024-11-25T15:26:10+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057] (#2090)",
        },
        {
          hash: "b84e63e8382283601c22f04decca3ebe3f5b87f7",
          date: "2024-11-25T15:15:02+00:00",
          author: "Vincent Barrault",
          message: "refactor: use loader dot block [FRONT-2044] (#2086)",
        },
        {
          hash: "575b3e2f12f68e7d09bb5ba6ab1504436380e241",
          date: "2024-11-25T12:03:39+00:00",
          author: "Mathis Pinsault",
          message:
            "change(migration-rdc): advertiser page [FRONT-2037] (#2077)",
        },
        {
          hash: "f8319ac227f737a8912c80a36b00d1e89b1c0d4c",
          date: "2024-11-22T12:42:14+00:00",
          author: "Vincent Barrault",
          message:
            "refactor: remove forwarded layout components [FRONT-2034] (#2071)",
        },
        {
          hash: "4d071d877dd92ed44711bce44403268402684971",
          date: "2024-11-22T10:27:00+00:00",
          author: "Colin Lienard",
          message: "refactor(overview): use pandark table [FRONT-1906] (#2021)",
        },
        {
          hash: "57330cd9cc9ae11fd7a3020e90e95eed1791c76b",
          date: "2024-11-21T17:09:16+00:00",
          author: "Mathis Pinsault",
          message:
            "change: migrate AdvancedInput to panda input [FRONT-1946] (#2055)",
        },
        {
          hash: "bbbae9ad3efd48b4268d96931c65c632d8764f3f",
          date: "2024-11-21T13:39:00+00:00",
          author: "Mathis Pinsault",
          message:
            "feat: use typed endpoint for agency pages [FRONT-1918] (#1981)",
        },
        {
          hash: "9b7627a661ad6ea8fe4cdf70d4663ed173943625",
          date: "2024-11-20T14:50:53+00:00",
          author: "Mathis Pinsault",
          message:
            "change: update styling in Dialog FileUpload Image and Table components [FRONT-2019] (#2051)",
        },
        {
          hash: "4fa9b4f5050ec9ee172d22109fa33b8a95082cee",
          date: "2024-11-20T10:44:28+00:00",
          author: "Cyril",
          message:
            "refactor(lmp): replace advanced input with panda input [FRONT-1942] (#2036)",
        },
        {
          hash: "ec95054e5ff8479265d28e57dda4c16d47ed6b5c",
          date: "2024-11-19T13:50:50+00:00",
          author: "Mathis Pinsault",
          message: "fix: dynamic workspace emptysate [FRONT-1992] (#2032)",
        },
        {
          hash: "699c591d53b452fd1e0f8b5e263f187ef3954298",
          date: "2024-11-18T15:09:11+00:00",
          author: "Cyril",
          message: "fix: add portal to select [FRONT-1983] (#2022)",
        },
        {
          hash: "0dd3ca72ce7f5da6aa650e5b41083da20406c6f8",
          date: "2024-11-15T10:37:20+00:00",
          author: "Mathis Pinsault",
          message:
            "feat(worksapace): add dynamic workspace for lcm [FRONT-1967] (#2002)",
        },
        {
          hash: "1d393c4352f7952fa90d041aafa3812693bd227f",
          date: "2024-11-15T10:12:28+00:00",
          author: "Cyril",
          message: "feat: add leroy merlin theme [FRONT-1820] (#1993)",
        },
        {
          hash: "17d8f1a55246d33a112aad036ee92f4319d287ea",
          date: "2024-11-14T10:39:06+00:00",
          author: "Vincent Barrault",
          message:
            "test: add visual tests for alert component [FRONT-1928] (#1987)",
        },
        {
          hash: "006440d0267aad9170257658cb0129214fd14b6b",
          date: "2024-11-14T09:07:09+00:00",
          author: "Vincent Barrault",
          message: "feat: migrate old Alert component [FRONT-1930] (#1989)",
        },
        {
          hash: "8c326576060bde330e2b43c6210aaed779889385",
          date: "2024-11-13T17:13:13+00:00",
          author: "Mathis Pinsault",
          message:
            "change(workspace): update workspace api endpoint to use typed one [FRONT-1929] (#1988)",
        },
        {
          hash: "5c9dcfc3362f1f7a914e6425b5826b9d14155d68",
          date: "2024-11-13T09:26:42+00:00",
          author: "Cyril",
          message:
            "refactor: remove ts-nocheck from Geoplanner [FRONT-1865] (#1960)",
        },
        {
          hash: "456c31c93be7021310eae364269d20fc971475ea",
          date: "2024-11-13T08:58:02+00:00",
          author: "Cyril",
          message: "feat(lco): mpc date alert [FRONT-1748] (#1978)",
        },
        {
          hash: "ea057bfa1b0c715bbc5f1979c00413c2d1230384",
          date: "2024-11-12T15:20:50+00:00",
          author: "Mathis Pinsault",
          message:
            "change(FileUpload): make component use composition api instead of props [FRONT-1917] (#1980)",
        },
        {
          hash: "7c41a997653b410b218fdd43d215488a54ba4e90",
          date: "2024-11-08T09:45:38+00:00",
          author: "Colin Lienard",
          message: "feat(campaigns): add ctr data [FRONT-1712] (#1963)",
        },
        {
          hash: "ed07f19ebe8191fcd0b7f81871c7edb544b797a5",
          date: "2024-11-07T16:39:09+00:00",
          author: "Cyril",
          message:
            "refactor: fix import paths from packages [FRONT-1892] (#1965)",
        },
        {
          hash: "614fa599456738b20d0e4dea0c7411c32659e519",
          date: "2024-11-07T15:52:30+00:00",
          author: "Mathis Pinsault",
          message:
            "feat(third-party): add third-party accounts pages [FRONT-1738] (#1933)",
        },
        {
          hash: "008ee43597d63dbcf180c44ff1b44012001fb657",
          date: "2024-11-07T13:35:32+00:00",
          author: "Colin Lienard",
          message: "chore: bump utilities dependencies [FRONT-1873] (#1946)",
        },
        {
          hash: "83bf7de9974f8d9cb2d57363c0b1bbbd6320263a",
          date: "2024-11-06T16:08:21+00:00",
          author: "Vincent Barrault",
          message: "fix: placeholder color on inputs [FRONT-1881] (#1958)",
        },
        {
          hash: "4899d842b83a945de9c316295f0d2ac0d2a4f357",
          date: "2024-11-06T13:31:48+00:00",
          author: "Mathis Pinsault",
          message: "feat: add circular progress component [FRONT-1884] (#1957)",
        },
        {
          hash: "b4177e4553bcd8fa83d620954d4c1596a9a9edbb",
          date: "2024-11-06T09:48:24+00:00",
          author: "Aurelien-DRUON",
          message: "fix(dialog-project): date picker [FRONT-1846] (#1956)",
        },
        {
          hash: "44d0c6504b97dc122a462bd1dacd36eba724b0b2",
          date: "2024-11-06T08:47:43+00:00",
          author: "Colin Lienard",
          message: "chore: bump react query [FRONT-1801] (#1905)",
        },
        {
          hash: "b6f28f5218e71f8d15d5e682983fef513ec08fc6",
          date: "2024-11-05T16:31:32+00:00",
          author: "Mathis Pinsault",
          message:
            "fix(auth): handle error and sign out on login failure [FRONT-1778] (#1925)",
        },
        {
          hash: "d916401a3cf9ca0af9e28539010b5dfdb9461577",
          date: "2024-11-05T09:23:10+00:00",
          author: "Mathis Pinsault",
          message: "feat: add TagsInput component [FRONT-1837] (#1941)",
        },
        {
          hash: "636304c38c759f90000370bad2ff1896bd33a2bb",
          date: "2024-11-05T08:30:29+00:00",
          author: "Mathis Pinsault",
          message:
            "change(eslint): allow render props as children [FRONT-1871] (#1945)",
        },
        {
          hash: "e62373f2bef475f9ec4974771fb5676331b3a462",
          date: "2024-11-04T16:44:54+00:00",
          author: "Mathis Pinsault",
          message:
            "fix(select): ensure no decorators within the combobox collection [FRONT-1866] (#1943)",
        },
        {
          hash: "c89e7511914782cbf82f10e5a0556f3abc7758b4",
          date: "2024-11-04T09:59:06+00:00",
          author: "Cyril",
          message: "refactor: select select component [FRONT-1198] (#1807)",
        },
        {
          hash: "8f7fec31c91dbf7d875d0b1c0339b2ca75c71b55",
          date: "2024-10-31T11:22:49+00:00",
          author: "Colin Lienard",
          message: "chore: bump ui deps [FRONT-1757] (#1892)",
        },
        {
          hash: "8127b4b90a94ba742a256c0abcc90fd67eee8a75",
          date: "2024-10-30T15:42:15+00:00",
          author: "Colin Lienard",
          message: "chore: bump prettier [FRONT-1530] (#1922)",
        },
      ],
    },
    {
      id: "agency:edit",
      path: "./src/pages/[businessUnit]/edit.[agency].tsx",
      description: "Agency edition form",
      diff: [
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/index.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/AgencyForm/AgencyForm.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/api/agency.ts",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/features/utils/params.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/router/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Input/Input.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/Collapsible.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Alert/Alert.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Card/Card.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Input/InputField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Dialog.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/NumberInput/NumberInputField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/Select.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TextArea/TextArea.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TextArea/TextAreaField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Button/Button.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Label/Label.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Checkbox/CheckboxField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/RadioGroup/RadioGroup.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/DatePickerField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DateRangePicker/DateRangePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/DatePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tooltip/Tooltip.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Menu/Menu.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Table.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/createTable.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/FileUpload/FileUpload.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tabs/Tabs.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/ColorPicker/ColorPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/Modal.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Pagination/Pagination.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Loader/Loader.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/EmptyState/EmptyState.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TimePicker/TimePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TimePicker/TimePickerField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/StatusButton/StatusButton.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Carousel/Carousel.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TagsInput/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Image/Image.tsx",
        "/Users/maastrich/mobsuccess/front/webapps/lcm/src/components/LogoDropField/LogoDropField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/location/useSearchParam.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/location/useSearchParams.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/references/useListeningRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/references/useLocationRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useNavigate.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useGetUrl.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useRenderUrlWithKeepParams.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/navigation/useHref.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/router/createRouters.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/shared-styles/input.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/shared-styles/text-fields.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/AbstractInput/Decorators.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/CollapsibleContent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/CollapsibleTrigger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Collapsible/collapsible.utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/decorators/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Content.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Description.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Dialog/Title.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/Decorators.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectMultiple.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectSingle.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/native-props.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/MonthView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/YearView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DateRangePicker/DaysView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DateRangePicker/date-range-picker.utils.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/DayView.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Toaster/Toaster.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/shared-styles/dropdown.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Menu/MenuItem.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Menu/MenuItemGroup.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/QuickAction.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableLayout.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/helpers.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tabs/TabContent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Tabs/TabTrigger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Modal/ModalTrigger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Pagination/PageSizeSelector.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/CircularProgress.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/LinearProgress.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Progress/ProgressValueText.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/HeaderAccountPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/HeaderBreadcrumbs.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Header/HeaderSteps.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TagsInput/TagsInput.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/TagsInput/TagsInputField.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/services/user/use-users.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/services/user/navbar.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/zod/file.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/new-select.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedInput/AdvancedInput.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/AdvancedSelect.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Checkbox/Checkbox.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DateAndTimePicker/DateAndTimePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/DatePicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/DatePickerSingleDay.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Input/Input.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Label/Label.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/RadioButton/RadioButton.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/RadioButtonsGroup/RadioButtonsGroup.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Switch/Switch.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Textarea/Textarea.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/Field.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/FieldLayout.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/tanstack.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Body.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Muted.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/SubTitle.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typo/Title.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Router/RouterBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Navigate/NavigateBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/components/Link/LinkBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/types/OverloadTo.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-router/src/features/class/relative-url.ts",
        "/Users/maastrich/mobsuccess/front/packages/icons/src/icons.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/DarkButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/LightButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/LinearButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/TransparentButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/decorators/Feedback.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/Field/decorators/Tooltip.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/SelectItemsDropdown.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/styles.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Select/tags.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/DatePicker/ViewControl.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Caption.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Filters.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Arranger.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Paginator.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/Virtualizer.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/Decorators/HeaderContent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableFooter.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableHeader.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/_PandaArk/Table/TableRow.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Icon/Dot/Dot.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/fetch/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/MultiSelectItems/MultiSelectItems.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/SelectOption/SelectOption.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/date-picker/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/CustomRanges/CustomRanges.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Month/Month.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/SelectedRange/SelectedRange.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/date-picker-single-day.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Header/Header.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Month/Month.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/date.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/brands-icon.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/is-axios-error-code.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/utils/form.ts",
        "/Users/maastrich/mobsuccess/front/packages/icons/src/icons/click-rate/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/react-tools/useSingleChildWithRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/react-tools/useComponentMountedRef.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Button/BaseButton.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/states-hooks.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/auth/auth.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/fetch/query.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/fetch/error.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/AbstractInput/AbstractInput.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Container/Container.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Typography/Typography.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Badge/Badge.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Dropdown.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Actions/Actions.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Item/Item.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Group/Group.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Title/Title.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/AdvancedSelect/MultiSelectItems/MultiSelectItem/MultiSelectItem.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/date-picker/context.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/CustomRanges/Range/Range.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Header/MonthPicker/MonthPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePicker/Month/CardDay/CardDay.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Header/MonthPicker/MonthPicker.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Form/DatePickerSingleDay/Month/CardDay/CardDay.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Theme/theme.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Orderable/Orderable.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/public/amplify-backend/index.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/variants/useVariant.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/types/input.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Badge/Cross/Cross.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Badge/Dot.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/features/utils/is-instance-of-components.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Dropdown/Actions/Action/Action.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/AuthProvider/AuthProvider.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/context/hooks.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useData.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useDataAutoRefresh.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useFetcher.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/data-hooks/useQuery.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/utils/queryId.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/rest-api/rest-api.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/route/route.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/pending-data/withPendingData.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/crud-api/crud-api.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/expose-axios.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/ClickAwayListener/ClickAwayListener.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Separator/Separator.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-ui/src/components/Theme/components/input.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/features/storage.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/fetchers/wrapFetcher.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/utils/errorHandling.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/components/DataContext/DataContextBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/components/DataSuspense/DataSuspenseBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/route/method.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/AuthAction/AuthAction.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/hooks/useAtom.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/hooks/useSetAtom.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/hooks/useGetAtom.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/components/PendingDataProvider/PendingDataProviderBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/components/AtomStoreProvider/AtomStoreProviderBase.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/concurrency.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/gateway-timeout.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/request-redirect.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-data-context/src/features/interceptors/request-retry.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/AuthCard/AuthCard.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ForgotPassword/ForgotPassword.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/Login.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ResetPassword/ResetPassword.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Signout/Signout.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-atom/src/features/atom-store/atomStore.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ForgotPassword/EmailSent.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/PatSignIn/PatSignIn.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/features/password.ts",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/ResetPassword/PasswordTooltip.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/GoogleSignIn/GoogleSignIn.tsx",
        "/Users/maastrich/mobsuccess/front/packages/react-shared/src/components/Auth/Login/PatSignIn/PatSignInEnv.tsx",
      ],
      commits: [
        {
          hash: "b881c8a3c64a9ab704804ac9c4dbd494ffce3141",
          date: "2024-11-27T10:09:29+00:00",
          author: "Colin Lienard",
          message:
            "refactor(blocked-routes): migrate to pandark [FRONT-2046] (#2089)",
        },
        {
          hash: "b08fa79b728e5bcafa7fd4905da2ba7bb0f13344",
          date: "2024-11-27T08:40:35+00:00",
          author: "Daouda",
          message:
            "feat: migrate the datepicker onto lco [FRONT_1964] [FRONT-1964] (#2088)",
        },
        {
          hash: "5e8884f1983f868f4644037fb05e57182d7c583c",
          date: "2024-11-26T16:22:23+00:00",
          author: "Colin Lienard",
          message:
            "refactor(packages,configs): use import types [FRONT-2085] (#2106)",
        },
        {
          hash: "69fb2483d8c4118d02c8e536de7b4505d0a4bf17",
          date: "2024-11-26T16:08:07+00:00",
          author: "Colin Lienard",
          message: "refactor(webapps): use import types [FRONT-2086] (#2105)",
        },
        {
          hash: "35f9e6c1b931e3ff20d5666ee9118cededca0c87",
          date: "2024-11-26T10:08:54+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(rdc-migration): remove rdc references [FRONT-2058] (#2091)",
        },
        {
          hash: "8f39ac3b271ef2295d1bac4be40915b2ebb85c6b",
          date: "2024-11-25T17:13:43+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(knip): cleanup unused exports react-ui [FRONT-2059] (#2092)",
        },
        {
          hash: "84ca8bfba9e81dd4209edaa03e6f5d0952a5a489",
          date: "2024-11-25T15:26:10+00:00",
          author: "Mathis Pinsault",
          message:
            "chore(knip): cleanup lcm unused function / exports / types [FRONT-2057] (#2090)",
        },
        {
          hash: "b84e63e8382283601c22f04decca3ebe3f5b87f7",
          date: "2024-11-25T15:15:02+00:00",
          author: "Vincent Barrault",
          message: "refactor: use loader dot block [FRONT-2044] (#2086)",
        },
        {
          hash: "575b3e2f12f68e7d09bb5ba6ab1504436380e241",
          date: "2024-11-25T12:03:39+00:00",
          author: "Mathis Pinsault",
          message:
            "change(migration-rdc): advertiser page [FRONT-2037] (#2077)",
        },
        {
          hash: "f8319ac227f737a8912c80a36b00d1e89b1c0d4c",
          date: "2024-11-22T12:42:14+00:00",
          author: "Vincent Barrault",
          message:
            "refactor: remove forwarded layout components [FRONT-2034] (#2071)",
        },
        {
          hash: "4d071d877dd92ed44711bce44403268402684971",
          date: "2024-11-22T10:27:00+00:00",
          author: "Colin Lienard",
          message: "refactor(overview): use pandark table [FRONT-1906] (#2021)",
        },
        {
          hash: "57330cd9cc9ae11fd7a3020e90e95eed1791c76b",
          date: "2024-11-21T17:09:16+00:00",
          author: "Mathis Pinsault",
          message:
            "change: migrate AdvancedInput to panda input [FRONT-1946] (#2055)",
        },
        {
          hash: "bbbae9ad3efd48b4268d96931c65c632d8764f3f",
          date: "2024-11-21T13:39:00+00:00",
          author: "Mathis Pinsault",
          message:
            "feat: use typed endpoint for agency pages [FRONT-1918] (#1981)",
        },
        {
          hash: "9b7627a661ad6ea8fe4cdf70d4663ed173943625",
          date: "2024-11-20T14:50:53+00:00",
          author: "Mathis Pinsault",
          message:
            "change: update styling in Dialog FileUpload Image and Table components [FRONT-2019] (#2051)",
        },
        {
          hash: "4fa9b4f5050ec9ee172d22109fa33b8a95082cee",
          date: "2024-11-20T10:44:28+00:00",
          author: "Cyril",
          message:
            "refactor(lmp): replace advanced input with panda input [FRONT-1942] (#2036)",
        },
        {
          hash: "ec95054e5ff8479265d28e57dda4c16d47ed6b5c",
          date: "2024-11-19T13:50:50+00:00",
          author: "Mathis Pinsault",
          message: "fix: dynamic workspace emptysate [FRONT-1992] (#2032)",
        },
        {
          hash: "699c591d53b452fd1e0f8b5e263f187ef3954298",
          date: "2024-11-18T15:09:11+00:00",
          author: "Cyril",
          message: "fix: add portal to select [FRONT-1983] (#2022)",
        },
        {
          hash: "0dd3ca72ce7f5da6aa650e5b41083da20406c6f8",
          date: "2024-11-15T10:37:20+00:00",
          author: "Mathis Pinsault",
          message:
            "feat(worksapace): add dynamic workspace for lcm [FRONT-1967] (#2002)",
        },
        {
          hash: "1d393c4352f7952fa90d041aafa3812693bd227f",
          date: "2024-11-15T10:12:28+00:00",
          author: "Cyril",
          message: "feat: add leroy merlin theme [FRONT-1820] (#1993)",
        },
        {
          hash: "17d8f1a55246d33a112aad036ee92f4319d287ea",
          date: "2024-11-14T10:39:06+00:00",
          author: "Vincent Barrault",
          message:
            "test: add visual tests for alert component [FRONT-1928] (#1987)",
        },
        {
          hash: "006440d0267aad9170257658cb0129214fd14b6b",
          date: "2024-11-14T09:07:09+00:00",
          author: "Vincent Barrault",
          message: "feat: migrate old Alert component [FRONT-1930] (#1989)",
        },
        {
          hash: "8c326576060bde330e2b43c6210aaed779889385",
          date: "2024-11-13T17:13:13+00:00",
          author: "Mathis Pinsault",
          message:
            "change(workspace): update workspace api endpoint to use typed one [FRONT-1929] (#1988)",
        },
        {
          hash: "5c9dcfc3362f1f7a914e6425b5826b9d14155d68",
          date: "2024-11-13T09:26:42+00:00",
          author: "Cyril",
          message:
            "refactor: remove ts-nocheck from Geoplanner [FRONT-1865] (#1960)",
        },
        {
          hash: "456c31c93be7021310eae364269d20fc971475ea",
          date: "2024-11-13T08:58:02+00:00",
          author: "Cyril",
          message: "feat(lco): mpc date alert [FRONT-1748] (#1978)",
        },
        {
          hash: "ea057bfa1b0c715bbc5f1979c00413c2d1230384",
          date: "2024-11-12T15:20:50+00:00",
          author: "Mathis Pinsault",
          message:
            "change(FileUpload): make component use composition api instead of props [FRONT-1917] (#1980)",
        },
        {
          hash: "7c41a997653b410b218fdd43d215488a54ba4e90",
          date: "2024-11-08T09:45:38+00:00",
          author: "Colin Lienard",
          message: "feat(campaigns): add ctr data [FRONT-1712] (#1963)",
        },
        {
          hash: "ed07f19ebe8191fcd0b7f81871c7edb544b797a5",
          date: "2024-11-07T16:39:09+00:00",
          author: "Cyril",
          message:
            "refactor: fix import paths from packages [FRONT-1892] (#1965)",
        },
        {
          hash: "614fa599456738b20d0e4dea0c7411c32659e519",
          date: "2024-11-07T15:52:30+00:00",
          author: "Mathis Pinsault",
          message:
            "feat(third-party): add third-party accounts pages [FRONT-1738] (#1933)",
        },
        {
          hash: "008ee43597d63dbcf180c44ff1b44012001fb657",
          date: "2024-11-07T13:35:32+00:00",
          author: "Colin Lienard",
          message: "chore: bump utilities dependencies [FRONT-1873] (#1946)",
        },
        {
          hash: "83bf7de9974f8d9cb2d57363c0b1bbbd6320263a",
          date: "2024-11-06T16:08:21+00:00",
          author: "Vincent Barrault",
          message: "fix: placeholder color on inputs [FRONT-1881] (#1958)",
        },
        {
          hash: "4899d842b83a945de9c316295f0d2ac0d2a4f357",
          date: "2024-11-06T13:31:48+00:00",
          author: "Mathis Pinsault",
          message: "feat: add circular progress component [FRONT-1884] (#1957)",
        },
        {
          hash: "b4177e4553bcd8fa83d620954d4c1596a9a9edbb",
          date: "2024-11-06T09:48:24+00:00",
          author: "Aurelien-DRUON",
          message: "fix(dialog-project): date picker [FRONT-1846] (#1956)",
        },
        {
          hash: "44d0c6504b97dc122a462bd1dacd36eba724b0b2",
          date: "2024-11-06T08:47:43+00:00",
          author: "Colin Lienard",
          message: "chore: bump react query [FRONT-1801] (#1905)",
        },
        {
          hash: "b6f28f5218e71f8d15d5e682983fef513ec08fc6",
          date: "2024-11-05T16:31:32+00:00",
          author: "Mathis Pinsault",
          message:
            "fix(auth): handle error and sign out on login failure [FRONT-1778] (#1925)",
        },
        {
          hash: "d916401a3cf9ca0af9e28539010b5dfdb9461577",
          date: "2024-11-05T09:23:10+00:00",
          author: "Mathis Pinsault",
          message: "feat: add TagsInput component [FRONT-1837] (#1941)",
        },
        {
          hash: "636304c38c759f90000370bad2ff1896bd33a2bb",
          date: "2024-11-05T08:30:29+00:00",
          author: "Mathis Pinsault",
          message:
            "change(eslint): allow render props as children [FRONT-1871] (#1945)",
        },
        {
          hash: "e62373f2bef475f9ec4974771fb5676331b3a462",
          date: "2024-11-04T16:44:54+00:00",
          author: "Mathis Pinsault",
          message:
            "fix(select): ensure no decorators within the combobox collection [FRONT-1866] (#1943)",
        },
        {
          hash: "c89e7511914782cbf82f10e5a0556f3abc7758b4",
          date: "2024-11-04T09:59:06+00:00",
          author: "Cyril",
          message: "refactor: select select component [FRONT-1198] (#1807)",
        },
        {
          hash: "8f7fec31c91dbf7d875d0b1c0339b2ca75c71b55",
          date: "2024-10-31T11:22:49+00:00",
          author: "Colin Lienard",
          message: "chore: bump ui deps [FRONT-1757] (#1892)",
        },
        {
          hash: "8127b4b90a94ba742a256c0abcc90fd67eee8a75",
          date: "2024-10-30T15:42:15+00:00",
          author: "Colin Lienard",
          message: "chore: bump prettier [FRONT-1530] (#1922)",
        },
      ],
    },
  ],
};
