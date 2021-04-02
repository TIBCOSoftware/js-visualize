# Visualize.js samples

Welcome to the **visualize.js** samples developer documentation.

>This document describes how to update **visualize.js** live samples documentation.
>If you want to see visualize.js live samples itself - visit [online documentation][online documentation] page

##### Table of Contents
- [Project structure](#project-structure)  
- [Folders structure](#folders-structure)
- [JSFiddle samples](#jsfiddle-samples)
    - [Add new jsfiddle sample](#add-new-jsfiddle-sample)
- [Slatedocs](#Slatedocs)
    - [Slatetdocs folder structure](#slatetdocs-folder-structure)
    - [Build docs](#build-docs)
    - [Start dev server](#start-dev-server)
    - [Update slatedocs template to the latest version](#update-slatedocs-template-to-the-latest-version)
- [Github pages](#github-pages)
- [Github actions](#github-actions)
- [How to update documentation](#how-to-update-documentation)
  - [How to reset your fork to mirror original repo](#how-to-reset-your-fork-to-mirror-original-repo)
- [License](#license)  

## Project structure
Visualize.js documentation project consists of 3 parts:
- **jsfiddle examples** - this is basically set of folders with jsfiddle examples. 
  We are using [jsfiddle github integration][jsfiddle github integration]
  to show jsfiddle examples from our github repo. So if new sample should be added - read [add new jsfiddle sample](#add-new-jsfiddle-sample) section
- **slatedocs** - [visualize.js docs page][online documentation] 
  is written using [slatedocs/slate][slatedocs] template. So if visualize document itself
  should be updated - read [this](#slatedocs) section
- **github pages** - final result of the documentation made public using [github pages][github pages],
    namely `gh-pages` branch is used to show public documentation site

## Folders structure
This github project has the following structure:
```
|-<ahv-*> - ad hoc view samples
|-<dashboard-*> - dashboard samples
|-<inputControl-*> - input control samples
|-<report-*> - report samples
|-JasperServerResources - JasperReports Server export catalog with resources necessary to run these samples
|-resources - JasperReports Server export catalog with resources necessary to run these samples
|-slatedocs - documentation build system
```
## JSFiddle samples
JSFiddle is basically a folder which has the following structure:
```
|-demo.css
|-demo.html
|-demo.js
|-demo.details
```
Content of `demo.{css,html,js}` files will be visible in the appropriate window of the jsfiddle live example.
Read [jsfiddle integration][jsfiddle github integration] for more details

### Add new jsfiddle sample
- add a subfolder under necessary samples group (`adhoc view`, `dashboard`, `inputControl`, `report` etc. 
  see [Folders structure](#folders-structure))
- add `demo.*` files with actual sample content to this folder
- integrate this sample into the documentation itself: see [How to update documentation](#how-to-update-documentation)

## Slatedocs
[slatedocs][slatedocs] is used to generate [online documentation][online documentation].
All files related to `slatedocs` are placed under `slatedocs` folder.

### Slatetdocs folder structure
```
|-lib
|-source
|  |-fonts
|  |-images
|  |-includes
|  |-javascripts
|  |-layout
|  |-stylesheets
|  |-index.html.md
|-*.*
```

`index.html.md` - this is the actual file which should be modified in order to update documentation.
In most cases you do not have to change any other files in the `slatedocs` folder

### Build docs
The simplest way to build documentation is to use `docker`:
- install [docker][docker]
- execute 
  ```shell
    cd ./slatedocs
    docker run --rm --name slate -v $(pwd)/build:/srv/slate/build -v $(pwd)/source:/srv/slate/source slatedocs/slate
  ```
  Build result will be generated to `slatedocs/build` folder.
- Now open this file `slatedocs/build/index.html` - you should see your documentation 

For using Slate in native OS run next command in `slatedocs` folder:
  ```shell
    bundle exec middleman build
  ```

For other ways to build documentation - see slate [getting started][slatedocs getting started] docs

### Start dev server
The simplest way to build documentation is to use `docker`:
- install [docker][docker]
- execute
  ```shell
    cd ./slatedocs
    docker run --rm --name slate -p 4567:4567 -v $(pwd)/source:/srv/slate/source slatedocs/slate serve
  ```
- Now open [http://127.0.0.1:4567](http://127.0.0.1:4567) - you should see documentation in your browser
- Every time you will do changes in the `slatedocs/sources` folder - changes will be available in the browser after 
  page refresh

For using Slate in native OS run next command in `slatedocs` folder:
  ```shell
    bundle exec middleman server
  ```
after that on the console you would see the URL to running server.

For other ways to run standalone server - see slate [getting started][slatedocs getting started] docs

### Update slatedocs template to the latest version
Template is slightly changed but generally it should be easy to update slate template to the latest version
if necessary. To update template:
- clone original [slatedocs repo][slatedocs]
- copy all files and folders from the cloned repo except `.github` and `source/index.html.md` to `slatedocs` 
  folder and replace files if they exists
- copy `.github` folder from the cloned repo to the root `.github` folder and replace files if they exists.
- use some git diff tool to inspect difference and merge changes.

## Github pages
[Github pages][github pages] used to make documentation site available online.
To update documentation fork this repo and set up github pages to be served from a `gh-pages` branch:
- In the forked project go to the settings tab and scroll down to the `Github Pages` section.
- Then select `gh-pages` branch as a source and click `save`
- After this your site should be available at this url: `https://<username>.github.io/js-visualize/`

## Github actions
[Github actions][github actions] are used to automatically build and deploy the public site.
Two actions: `Build` and `Deploy` are created:
- `Build` action runs on push/pull request to any branch and makes sure that documentation
  build process executed successfully
- `Deploy` action runs on push to the `master` branch.
   It executes documentation build process and then 
   it executes push of the `slatedocs/buld` folder to the `gh-pages` branch which
   updates the public documentation if [Github pages](#github-pages) has been set up.

## How to update documentation
- Fork this repo
- Set up [Github pages](#github-pages) for your fork  
- If you already forked the repo earlier - [reset](#how-to-reset-your-fork-to-mirror-original-repo) 
  your fork's `master` branch to mirror the original repo's `master` branch  
- Make necessary changes to the `slatedocs/source/index.html.md` file in your fork
- If new jsfiddle sample should be added or updated - [do necessary changes](#add-new-jsfiddle-sample) as well
- Test changes by [running build](#build-docs) or by using [dev server](#start-dev-server)
- Once changes are completed - push them to github (forked repo)
- Wait until github actions will be completed - visit `https://github.com/<username>/js-visualize/actions` to see all actions
- Test your documentation changes on the public site: `https://<username>.github.io/js-visualize/`
- Create PR from the forked `master` branch to the original visualize docs repo's `master` branch.
- Create PR from the forked `gh-pages` branch to the original visualize docs repo's `gh-pages` branch.
  (this step could be omitted once github actions will work for the original visualize docs repo)

### How to reset your fork to mirror original repo
- checkout `master` branch
- add new git remote to your fork to reference the original repo (if not done yet):
  ```shell
  git remote add vizdocs git@github.com:TIBCOSoftware/js-visualize.git  
  ```
- fetch changes from the original repo:
  ```shell
  git fetch vizdocs master
  ```
- hard reset your branch to the `master` branch of the original repo:
  ```shell
  git reset --hard vizdocs/master
  ```
- after this it might be necessary to do a force push `master` branch of your fork:
  ```shell
  git push origin master --force
  ```
  
[online documentation]: https://tibcosoftware.github.io/js-visualize/
[jsfiddle github integration]: https://docs.jsfiddle.net/github-integration/untitled-1
[slatedocs]: https://github.com/slatedocs/slate
[slatedocs getting started]: https://github.com/slatedocs/slate/wiki#getting-started
[github pages]: https://pages.github.com/
[github actions]: https://docs.github.com/en/actions
[docker]: https://www.docker.com/

## License

Copyright © 2018 TIBCO Software Inc. All Rights Reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of TIBCO Software Inc.  nor the names of any contributors may  be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT OWNER AND CONTRIBUTORS  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

