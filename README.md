# Todo w/ MERN
## 9/26/2018
### [David Eliason](http://www.davethemaker.com)

## What

First, created mongodb connection using local mongodb instance, populating document via mongo. Results served via express as RESTful API.
![RESTful JSON](./expressAPI.png)

Then, created mongodb connection using mlab and then rendered the collection's documents via template engine ejs.

![mlab ejs](./mlab_ejs_engine.png)

Next up was creation of form for document values and calling the POST method via route
![form for POSTed data](./input-form-POST.png)
which is then served by Express acting as API:
![updated JSON per API route](./result-of-POSTed-form-data.png)

