To see a live instance of the website, go to www.sikh-student-association.herokuapp.com http://sikh-student-association.herokuapp.com/

This is a web application for the Sikh Student Association at San Jose State University. It uses <b>BootStrap</b> for the front end and <b>Angular.js and Wow.js</b> for some JavaScript related operations. All the Javascripts like <b>Angular.js, Jquery and Wow.js </b> are a part of this repository. There is no need to download and place them inside the project folder separately.


Make sure you have node.js and express installed on your machine before you try to run the project locally. 

To install node.js and npm, follow steps from https://nodejs.org/en/download/package-manager/ according to the platform you intend to use. 

Git clone this repository and then navigate to the project folder (SSA). Go to the folder name 'bin' and edit the file 'www'.

Change the port <b>'3000'</b> inside "var port = normalizePort(process.env.PORT || '<b>3000</b>');" to '<b>80</b>'. Save the file and then navigate to the root folder (SSA) where you will find the file <b> package.json</b>. 
Run the command <b>'sudo npm install'</b>.

Now the project is ready to run and you can run the server by using the command: <b>npm start</b>



