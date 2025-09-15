# How to run program

## Download 

1. **Bun**
```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```
2. **MariaDB**<br>
[MariaDB Download](https://mariadb.org/download/?t=mariadb&p=mariadb&r=12.0.2&os=windows&cpu=x86_64&pkg=msi&mirror=xtom_talˇ)

3. Set up system enviorment variables
 1. go to the folder where you installed MariaDB (hint: Program files)
 2. find MariaDB and go to the /bin folder
 3. copy the directory and open system enviorment variables on windows
 4. click enviorment variables
 5. in 'system variables' table, find PATH and click on it then click edit
 6. click new and add the folder path
 7. click ok and close tabs
 8. open terminal and run 'mysql --version' 
 9. if it doesn't show an error, you've downloaded MariaDB successfully.

## Running program

1. install dependencies: ```bun install```
2. make sure MariaDB is a running service. 
  2.1 Win + R, type: "services.msc"
  2.2 search for MariaDB or whatever else you named it (if you did).
  2.3 check its status has to be running "running" else, right click -> properties -> start

