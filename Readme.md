Visualize.js
============

Visualize.js is a JavaScript API framework used to embed JasperReport Server reports & visualizations inside web applications.
It comes bundled with the commercial editions of TIBCO JasperReports® Server, specifically Jaspersoft AWS, Enterprise or
Professional (and as an add-on with Jaspersoft Reporting).

 * See what's new with Visualize.js in v7 with our full [video tutorial series!]

> In this guide you will find a full listing of Visualize.js API code samples.

> For greater detail also view the full [Visualize.js API reference guide].

[Download Jaspersoft >][Download JRS]

Installing Jaspersoft
----------------------
 
 * Download the commercial edition of [JasperReport Server]
 * Use our [quick start guide] for installation and configuration

Getting Started
---------------
 
 ### Fiddles
 
 > Follow these steps to run the samples
 
 - Install Jaspersoft locally onto your system.
 
 - Download this github repo onto your local web server.
 
 - Import the jrs-export.zip file from the resources folder onto the JasperReport Server (admin > server settings > import).
 
 - Run index.html from the pages folder to navigate and view the Visualize.js API code samples.
 
 - Note: You'll want to be sure the fiddle you are running point to the location you have JRS installed for Visualize.js. 
	This is usually on localhost:8080 - "http://localhost:8080/jasperserver-pro/client/visualize.js"
	
 
 View and reuse the Visualize.js API samples in this guide and(or) reference to your own [installation]
 
 To use your own install change the following HTML in the fiddles... 
 
 ``` html
 <script src="http://visualizejsdemo.jaspersoft.com/jasperserver-pro/client/visualize.js"></script>
 ```
 
 and reference the location of your JasperReport Server installation...
 
  ``` html
 <script src="[myserver]/jasperserver-pro/client/visualize.js"></script>
 ```
 
 ### Video Tutorials
 
 * Need a jump start? Watch our [API video tutorials] for more information on Visualize.js and embedding inside your application.
 
 ### Via GitHub
 
 * Fork this Visualize.js API [sample set and guide] for your own use

[Visualize.js API reference guide]: https://community.jaspersoft.com/documentation/tibco-jasperreports-server-visualizejs-guide/v62/api-reference-visualizejs
[JasperReport Server]: https://jaspersoft.com/download
[installation]: https://jaspersoft.com/download
[quick start guide]: https://jaspersoft.com/jaspersoft-quick-start-guide
[API video tutorials]: https://community.jaspersoft.com/wiki/visualizejs-tutorials
[video tutorial series!]: https://www.youtube.com/watch?v=hELgK1RG01M&list=PL5NudtWaQ9l4wsnGx0GFyOsvztFBJp1_S

[Download JRS]: https://jaspersoft.com/download


License
=================

Copyright © 2017 TIBCO Software Inc. All Rights Reserved. 

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of TIBCO Software Inc.  nor the names of any contributors may  be used to endorse or promote products derived from this software without specific prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT OWNER AND CONTRIBUTORS  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


THIRD PARTY NOTICES

*jQuery 1.11.3

Copyright jQuery Foundation and other contributors, https://jquery.org/

This software consists of voluntary contributions made by many
individuals. For exact contribution history, see the revision history
available at https://github.com/jquery/jquery

The following license applies to all parts of this software except as
documented below:

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

All files located in the node_modules and external directories are
externally maintained libraries used by this software which have their
own licenses; we recommend you read them, as their terms may differ from
the terms above.
