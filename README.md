# Grafana HarperDB Datasource
    Harperdb datasource plugin for Grafana, implemented by React.js
## Install This Plugin
```sh
grafana-cli --pluginUrl https://github.com/nuenook/grafana-harperdb/archive/master.zip plugins install grafana-harperdb-datasource
```

## How to use
1. Click add datasource
2. Select `HarperDB` plugin
3. On settings 
   - Input `URL` with harperdb host

   - select `Access` with browser for now

   - Turn on `Basic Auth` and input username/password of HarperDB

    ![image](./setting-example.png)
4. On Dashboard, we can use sql query from HarperDB and select two fields
        
    `time` is timestamp type only

    `metric` is number type

    Example: 
    ```sql
    SELECT sell_time, sum(price) FROM dev.sell_dog GROUP BY sell_time
    ```
    ![image](./dashboard-example.png)

## Development with Docker
1. `npm install`

2. `npm run dev`

3. Execute 
`./docker.sh` for starting this plugin in Docker Container

4. Open Grafana on http://localhost:3333 
 with `username: admin
 ` and 
 `password: admin`

## Install Plugins via MacOS
1. run grafana cli
```
    grafana-cli --pluginUrl https://github.com/nuenook/grafana-harperdb/archive/master.zip plugins install grafana-harperdb-datasource
``` 
plugin stored in /usr/local/var/lib/grafana/plugins

2. restart grafana service
```
brew services restart grafana
```