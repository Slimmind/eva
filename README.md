###octoKIT
***

1. *go to your dev-path:*

    ```
    cd /var/www
    ```
  
2. *create project-path by newsite.sh:*

    ```
    sh newsite.sh yourProjectName
    ```

3. *go to your project-path:*

    ```
    cd yourProjectName
    ```

4. *initialize git in your project-path:*

    ```
    git init
    ```

5. *connect to your projectRepository:*

    ```
    git remote add origin yourProjectRepository
    ```

6. *switch to needed git branch:*

    ```
    git checkout -b slice
    ```
7. *download octoKIT and move it to your projectPath:*

    ```
    https://github.com/Slimmind/octoKIT/archive/slice.zip
    ```
    
8. *if you use NodeVersionManager, choose needed node version:*

    ```
    nvm use [node-version-number]
    ```

9. *if you use legacy node version (0.12), run node-modules installation by command:*

    ```
    sudo npm install
    ```
  
10. *if you use nodeversion >=4 and you have YARN, run node-modules installation by command:*

    ```
    yarn install
    ```

11. *find startPage variable in your gulpfile.js and replace it equal ot yourProjectName:*

    ```javascript
    var startPage = 'yourProjectName.lo/menu.html';
    ```

12. *run gulp for development by command:*

    ```
    gulp
    ```
13. *run gulp for production (with minification of images, CSS and JS files) by command:*
  
    ```
    gulp prod
    ```
