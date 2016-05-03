Visualize.js
============

Visualize.js is a JavaScript API framework used to embed JasperReport Server reports & visualizations inside web applications.
It comes bundled with the commercial editions of TIBCO JasperReports® Server, specifically Jaspersoft AWS, Enterprise or
Professional (and as an add-on with Jaspersoft Reporting).

> In this guide you will find a full listing of Visualize.js API code samples.

> For greater detail also view the full [Visualize.js API reference guide].

[Download Jaspersoft >][Download JRS]

Installing Jaspersoft
---------------------
 
 *Note: All fiddles in this guide are live and available to view before install*
 
 * Download the commercial edition of [JasperReport Server]
 * Use our [quick start guide] for installation and configuration

Getting Started
---------------
 
 ### Live Fiddles
 
 View and reuse the live Visualize.js API samples in this guide and(or) reference to your own [installation]
 
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
 * Download our [sample application] on GitHub featuring Visualize.js

[Visualize.js API reference guide]: http://community.jaspersoft.com/documentation/tibco-jasperreports-server-visualizejs-guide/v62/api-reference-visualizejs
[JasperReport Server]: http://jaspersoft.com/download
[installation]: http://jaspersoft.com/download
[quick start guide]: http://jaspersoft.com/jaspersoft-quick-start-guide
[API video tutorials]: http://community.jaspersoft.com/wiki/visualizejs-tutorials
[sample set and guide]: https://github.com/TIBCOSoftware/JS-visualize
[sample application]: https://github.com/TIBCOSoftware/JS-FDSample

[Download JRS]: http://jaspersoft.com/download


Report Samples
=======

### Basic Embed

Try it:

<b>[Simple report rendering], [from a list]</b>

Initialization of the visualize.js library with simple rendering of an HTML report using plain text authentication. See full authentication samples in this guide for securing data and reports with the JasperReports Server and Visualize.js.

>You can easily change the resource to embed a different report from the JasperReport Server.

>For example:

``` javascript
        resource: "/public/Samples/Reports/SalesByMonthReport"
``` 

Try it:

<b>[Load multiple reports]</b>

Use a common configuration to load multiple reports.

### Pagination

Try it:

<b>[Next/previous]</b>, <b>[enter range]</b>, <b>[pagination events]</b>

Provide control for report pagination with either individual selectors or a directly inputed range. Also, see pagination with events for full control of inputs.

Try it:

<b>[Anchors]</b>, <b>[range with anchor]</b>, <b>[anchor and page search]</b>

Provide the ability to move quickly through reports with direct page anchors. Also see an anchor with a range of rendered pages and an example of searching both an anchor and page/range with an event to callout the current selection.

### Custom Input Controls

Try it:

<b>[Paramater passing]</b>, <b>[basic drop-down]</b>, <b>[render values]</b>

Pass a simple set of hard-coded parameters to control report output. This can be expanded with custom inputs controls such as a drop-down. In addition, input control values can be rendered directly from the JasperReport Server.

>Try: A hard coded or dynamic variable...

``` javascript
      inputSelection = "Non-Consumable"
``` 

>for parameter control...

``` javascript
      "ProductFamily": ["Food", inputSelection]
```

Try it:

<b>[Dynamic resource types]</b>

Discover reporting resources available and formats from the JasperReport Server for use with input controls.

### Hyperlinks

Try it:

<b>[Basic drill-down]</b>

Simple parameter passing from one report to another.

### Events

Try it:

<b>[Page totals]</b>, <b>[report status]</b>

Listen through events for a change in the page totals and report completed status.


### Authentication

Try it:

<b>[Basic login/logout]</b>

Simple plain text authentication with demonstration of destroying session with reports.

Try it:

<b>[Secure token authentication]</b>

Token based authentication and initialization of the visualize.js library with a list of reports. 

[JRS - Authentication Cookbook >][Cookbook]

>*Note: Proper authentication needs to be set up with the JasperReport Server and SSO before using token based authentication. View the [Authentication Cookbook] for details on configuring authentication correctly.*

Try it:

<b>[Login/logout with hooks]</b>

Authenticate and destroy the session with the method of your choice through the hooks that are made available through Visualize.js.

Try it:

<b>[Login/logout UI]</b>

A sample UI providing users full authentication options to the JasperReport Server.

[Simple report rendering]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/report-embed/
[from a list]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/report-list/
[Load multiple reports]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/common-config/

[Next/previous]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/next-previous/
[enter range]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/page-range/
[pagination events]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/page-event/

[Anchors]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/page-anchor/
[range with anchor]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/range-anchor/
[anchor and page search]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/navigating-report/

[Paramater passing]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/param-pass/
[basic drop-down]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/drop-down/
[render values]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/render-values/
[Dynamic resource types]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/render-types/

[Basic drill-down]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/report-hyperlink/

[Page totals]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/page-totals/
[report status]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/report-status/
[pagination control]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/page-event/

[Basic Login/Logout]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/report-auth/
[Secure token authentication]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/token-auth/

[Login/logout with hooks]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/login-hook/

[Login/logout UI]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/auth-ui/

[Authentication Cookbook]: http://community.jaspersoft.com/documentation/jasperreports-server-authentication-cookbook/introduction
[Cookbook]: http://community.jaspersoft.com/documentation/jasperreports-server-authentication-cookbook/introduction


Dashboard Samples
=================

### Basic Embed

Try it:

<b>[Simple dashboard render]</b>

Initialization of the visualize.js library with simple rendering of a dashboard using plain text authentication.

>You can easily change the resource to embed a different dashboard from the JasperReport Server.

>For example:

``` javascript
        resource: "/public/Samples/Dashboards/1._Supermart_Dashboard"
``` 

### Authentication

Try it:

<b>[Dashboard login/logout]</b>

Simple authentication with demonstration of destroying session with dashboards.

[JRS - Authentication Cookbook >][Cookbook]

>*Note: Proper authentication needs to be set up with the JasperReport Server and SSO before using token based authentication. View the [Authentication Cookbook] for details on configuring authentication correctly.*

### Custom Input Controls

Try it:

<b>[Paramater passing]</b>

Various inputs for passing paramaters into a dashboard.


[Simple dashboard render]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/dash-embed/

[Dashboard Login/Logout]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/dash-auth/

[Paramater passing]: http://jsfiddle.net/gh/get/mootools/1.2/TIBCOSoftware/JS-visualize/tree/master/dash-param/

[Authentication Cookbook]: http://community.jaspersoft.com/documentation/jasperreports-server-authentication-cookbook/introduction
[Cookbook]: http://community.jaspersoft.com/documentation/jasperreports-server-authentication-cookbook/introduction


License
=================

Copyright © 2016 TIBCO Software Inc. All Rights Reserved. 

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
