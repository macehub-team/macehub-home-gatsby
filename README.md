<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Macehub Official Website
</h1>

_Macehub is a technical community at Mar Athanasius College of Engineering, Kothamangalam.  [Official Website](https://www.macehub.in/)._

This is a javascript project made using gatsby powered by React JS. Uses YAML files as data source.


## 🚀 How to Run Locally

1.  **Clone the repository.**

    Install git and run the command

    ```shell
    # clone the repository
    git clone https://github.com/macehub-team/macehub-home-gatsby.git
    # open the directory
    cd macehub-home-gatsby/

    ```
1.  **Install Libraries.**

    Make sure you installed npm and enironment variables are set.

    ```shell
    npm install
    ```

1.  **Run the proeject and start editing.**

    Start the project in developemnt mode.

    ```shell
    gatsby develop
    ```
    
    Your site is now running at `http://localhost:8000`!

    Open your IDE and start editing the source files in `src/`. Save your changes and the browser will update in real time!

1.  **Building and Deploying.**

    When the editing are complete and ready to deploy, build the project using the command
    
    ```shell
    gatsby build
    ```

    and deploy the sites by transfering the required files from `public/`

## Maintenance Guide

A quick look at the top level files and directories inside `src/`.

    .
    ├── content/
    ├── pages/
    └── scss/


1.  **Updating Opportunities of Mace** : The data are sourced from `src/content/opportunities_of_mace.yml`. Edit and save files inorder to modify the content to the public.

2.  **Modifiying Appearance** : CSS files are complied using SASS compiler from the source `src/scss/macehub.scss` and it's sub sources. Inorder to change the appearances, modify the react script at  `src/pages/`

3.  **Creating New Pages** : Use gatsby api **`createPages`** or add react components to `src/pages/`. For additional information https://www.gatsbyjs.com/docs/creating-and-modifying-pages/