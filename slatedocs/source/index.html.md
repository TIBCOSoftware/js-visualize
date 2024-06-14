---
title: API Documentation

includes:
- license

search: true
---

<div class="main-header">
  Welcome to the <b>Visualize.js</b> Live Sample Guide
</div>

Introduction
============

Visualize.js is a JavaScript API framework used to embed JasperReport Server reports & visualizations inside web applications.
It comes bundled with the commercial editions of TIBCO JasperReports® Server, specifically Jaspersoft AWS, Enterprise or
Professional (and as an add-on with Jaspersoft Reporting).

<a href="https://github.com/CONTENT-URL/js-visualize" target="_blank">
  <img style="position: absolute; top: 0; right: 0; border: 0;" 
    src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" 
    alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png">
</a> 

> In this guide you will find a full listing of Visualize.js API code samples.

> For greater detail also view the full [Visualize.js API reference guide].

[Download Jaspersoft >][Download JRS]

Installing Jaspersoft
----------------------

*Note: All fiddles in this guide are live (referring [https://mobiledemo.jaspersoft.com/jasperserver-pro/][MobileDemo JRS Instance] JasperReports Server instance) and available to view before install*

* Download the commercial edition of [JasperReport Server]
* Use our [quick start guide] for installation and configuration

Getting Started
---------------

**Live Fiddles**

View and reuse the live Visualize.js API samples in this guide and(or) reference to your own [installation]

> To use your own install change the following HTML in the fiddles...

 ``` html
 <script src="https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js"></script>
 ```

> and reference the location of your JasperReport Server installation...

  ``` html
 <script src="[myserver]/jasperserver-pro/client/visualize.js"></script>
 ```

**Video Tutorials**

* Need a jump start? Watch our [API video tutorials] for more information on Visualize.js and embedding inside your application.

**Via GitHub**

* Fork this Visualize.js API [sample set and guide] for your own use
* Download our [sample application] on GitHub featuring Visualize.js

[Visualize.js API reference guide]: https://community.jaspersoft.com/documentation/v790/tibco-jasperreports-server-visualizejs-guide
[JasperReport Server]: https://www.jaspersoft.com/download
[installation]: https://www.jaspersoft.com/download
[quick start guide]: https://www.jaspersoft.com/jaspersoft-quick-start-guide
[API video tutorials]: https://community.jaspersoft.com/wiki/visualizejs-tutorials
[sample set and guide]: https://github.com/CONTENT-URL/JS-visualize
[sample application]: https://github.com/TIBCOSoftware/JS-FDSample

[Download JRS]: https://www.jaspersoft.com/download
[MobileDemo JRS Instance]: https://mobiledemo.jaspersoft.com/jasperserver-pro/


Ad Hoc View Samples
=======

### Basic Embed

Check out the basic example of displaying Ad Hoc View based on table: <b>[code sample][table adhoc]</b>

And the similar code which displays Ad Hoc View based on chart: <b>[code sample][chart adhoc]</b>
<br/>Also, in this example you can see how we specify the container in a different way: v("#container").adhocView(...);

If you want to display several Ad Hoc View resources on the same page it's possible to call v() function as
many times as you need: <b>[code sample][multiple adhoc-views]</b>

In case you need to refresh Ad Hoc View to display fresh data you may use next sample: <b>[code sample][refresh adhoc]</b>

To remove Ad Hoc View if you don't need it anymore you may use .destroy() method: <b>[code sample][remove adhoc]</b>

There are two callbacks 'success' and 'error' which can be called if Ad Hoc View was rendered successfully or with an error: <b>[code sample][adhoc callbacks]</b>

[table adhoc]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/ahv-basic/table-adhoc/
[chart adhoc]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/ahv-basic/chart-adhoc/
[multiple adhoc-views]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/ahv-basic/multiple-views/
[refresh adhoc]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-basic/refresh/
[remove adhoc]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-basic/remove/
[adhoc callbacks]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-basic/callbacks/

### Visualization Type

In case you need to control visualization type (Table, Crosstab, Charts) you may pass the type as shown in the next example: <b>[code sample][Set canvas type]</b>.

By reading metadata from Ad Hoc View we can see what visualization types are available for this Ad Hoc View resource. Also, in this sample you can see how to change visualization type after the Ad Hoc View has been rendered: <b>[code sample][dynamically from a list]</b>

And in case you don't need to change visualization type you may hide the selector with CSS: <b>[code sample][hidden vis type selector]</b>.

[Set canvas type]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/ahv-canvas/vis-type/
[dynamically from a list]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-canvas/dynamic-vis-type-selector/
[hidden vis type selector]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-canvas/hidden-vis-selector/

### Input Controls

Code sample where we pass one input parameter to Ad Hoc View: <b>[code sample][ahv parameter passing]</b>.

Sample with static select options used to change input parameters to control Ad Hoc View: <b>[code sample][ahv basic drop-down]</b>.

In next example we do the similar control of Ad Hoc View Sample but with the help of dynamically formed select using data from Input Control component: <b>[code sample][Dynamic input control values]</b>

[ahv basic drop-down]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-input/basic-drop/
[ahv parameter passing]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-input/pass-param/
[Dynamic input control values]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-input/dynamic-values/

### Hyperlinks

In some cases you would like to do some actions when user clicks on Ad Hoc View Table and Crosstab's cells or numbers, or react to
click on chart element, like bar, like, point, etc. This can be achieved by the help of Hyperlinks, the mechanism which
allows you to get your code executed on these events.

Consider the simple example where we define click event listener to the table cells and display some
information brought by Visualize.js: <b>[code sample][hyperlink click event]</b>

As you might see this is very close to native event listener, but we provide some extra data within second argument.

Here you may see almost the same sample but we are displaying field and measure names in separate areas: <b>[code sample][fields and measures]</b>

The next sample shows how you can drill down the cells once you clicked them. Also, in this sample we don't use .destroy() method
before rendering new Ad Hoc View because it checks for existing resource automatically and removes it. <b>[code sample][Drill down on selection]</b>

In this sample we are ding almost the same drill down, but instead of replacing existing Ad Hoc View we are launching a new one: <b>[code sample][new view]</b>

In case you need to change in any way the cells of Ad Hoc View Table or Crosstab you might need to use 'beforeRender' hook
available as a part of Hyperlinks. This hook allows you to get cells with their data and DOM elements, and do whatever you want.
In the next sample we are customizing cell nodes with some styling: <b>[code sample][before render]</b>
<br/>
Just as a note: you can do the same with common CSS styling, more samples on which you may find below.

[hyperlink click event]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-hyperlink/click-event/
[fields and measures]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-hyperlink/fields-measures/
[Drill down on selection]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-hyperlink/drill-down/
[new view]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-hyperlink/new-view/
[before render]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-hyperlink/before-render/

### Custom Visualization

Try it:

<b>[Data rendered on page]</b>, <b>[with D3 gauges]</b>

Render just the Ad Hoc View data on the page or pass to a custom visualization library such as D3.

Try it:

<b>[Loading of data]</b>, <b>[through return values]</b>

Navigate the internal data API and return values to update and return the number of columns and rows.

[Data rendered on page]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-custom/data-rendered/
[with D3 gauges]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-custom/d3-gauge/
[Loading of data]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-custom/loading-data/
[through return values]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-custom/return-values/

### UI Controls

Try it:

<b>[Table row selection]</b>, <b>[column selection with highlight]</b>

Select all values on a table row/column using CSS styles to highlight.

Try it:

<b>[Resize Ad Hoc View]</b>

Ad Hoc Views are web responsive and the container size can be changed as needed.

[Table row selection]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-control/row-selection/
[column selection with highlight]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-control/col-selection/
[Resize Ad Hoc View]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-control/resize-view/

### Authentication

Token based authentication and initialization of the visualize.js library with a list of Ad Hoc Views: <b>[sample code][token authentication]</b>

Also, check out next page to find more information: [JRS - Authentication Cookbook][Cookbook]

>*Note: Proper authentication needs to be set up with the JasperReport Server and SSO before using token based authentication. View the [Cookbook] for details on configuring authentication correctly.*

[token authentication]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/ahv-auth/token/
[Cookbook]: https://community.jaspersoft.com/documentation/jasperreports-server-authentication-cookbook/introduction

### CSS Styling

You can customize the look of the Ad Hoc View with CSS as much as you want, here are some examples:

<b>[Table customization][table with CSS]</b>

<b>[Crosstab customization][crosstab with CSS]</b>

[table with CSS]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/ahv-custom/table-css/
[crosstab with CSS]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/ahv-custom/crosstab-css/

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

<b>[Parameter passing][report parameter passing]</b>, <b>[basic drop-down][report basic drop-down]</b>, <b>[render values]</b>

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

<b>[Basic drill-down]</b>, <b>[open report in new page]</b>

Select a report hyperlink to open a new "drill-down" report with selected parameter.

Try it:

<b>[Parameter passing on selection]</b>, <b>[parameter in a new page]</b>

Select from a chart series to pass a paramater into a secondary report. In addition pass this same paramater into a new page/tab.

### Events

Try it:

<b>[Page totals]</b>, <b>[report status]</b>

Listen through events for a change in the page totals and report completed status.

### UI Controls

Try it:

<b>[Table column sorting order]</b>, <b>[table column conditional formatting]</b>

Dynamically control UI elements for table columns.

Try it:

<b>[Crosstab column sorting order]</b>, <b>[crosstab row sorting order]</b>

Dynamically control UI elements for Crosstabs.

### Export

Try it:

<b>[Export formats]</b>, <b>[auto export]</b>

Custom export options with various formats.

Try it:

<b>[Export CSV and render]</b>, <b>[export JSON and render]</b>

Export data from a report and render with a custom visualization.

### Save

Try it:

<b>[Save/Save As UI]</b>

Custom UI with ability to overwrite reports with location, label and description.

### Authentication

Try it:

<b>[Basic login/logout]</b>

Simple plain text authentication with demonstration of destroying session with reports.

Try it:

<b>[Secure token authentication][report secure token authentication]</b>

Token based authentication and initialization of the visualize.js library with a list of reports.

[JRS - Authentication Cookbook >][Cookbook]

>*Note: Proper authentication needs to be set up with the JasperReport Server and SSO before using token based authentication. View the [Authentication Cookbook] for details on configuring authentication correctly.*

Try it:

<b>[Login/logout with hooks]</b>

Authenticate and destroy the session with the method of your choice through the hooks that are made available through Visualize.js.

Try it:

<b>[Login/logout UI]</b>

A sample UI providing users full authentication options to the JasperReport Server.

[Simple report rendering]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/report-embed/report-render/
[from a list]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-embed/report-list/
[Load multiple reports]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-embed/common-config/

[Next/previous]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-pagination/next-previous/
[enter range]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-pagination/page-range/
[pagination events]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-pagination/page-event/

[Anchors]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-pagination/page-anchor/
[range with anchor]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-pagination/range-anchor/
[anchor and page search]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-pagination/navigating-report/

[report parameter passing]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-input/param-pass/
[report basic drop-down]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-input/drop-down/
[render values]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-input/render-values/
[Dynamic resource types]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-input/render-types/

[Basic drill-down]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-hyperlink/report-link/
[open report in new page]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-hyperlink/report-link-new-page/
[Parameter passing on selection]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/report-hyperlink/parameter-passing/
[parameter in a new page]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/report-hyperlink/parameter-passing-new-page/

[Page totals]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-events/page-totals/
[report status]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-events/report-status/

[Table column sorting order]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-ui/table-column-sorting/
[table column conditional formatting]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-ui/table-column-formatting/

[Crosstab column sorting order]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-ui/crosstab-column-sorting/
[crosstab row sorting order]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-ui/crosstab-row-sorting/

[Export formats]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-export/export-formats/
[auto export]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-export/auto-export/
[Export CSV and render]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-export/csv-export-d3/
[export JSON and render]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-export/json-export-d3/

[Save/Save As UI]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-save/save-as/

[Basic Login/Logout]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-auth/report-login/
[report secure token authentication]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-auth/token-auth/
[Login/logout with hooks]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-auth/login-hook/

[Login/logout UI]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/report-auth/auth-ui/

[Authentication Cookbook]: https://community.jaspersoft.com/documentation/jasperreports-server-authentication-cookbook/introduction
[Cookbook]: https://community.jaspersoft.com/documentation/jasperreports-server-authentication-cookbook/introduction


Dashboard Samples
=================

### Basic Embed

Try it:

<b>[Dashboard render with input control]</b>

Initialization of the visualize.js library with simple rendering of a dashboard (with an embedded input control and hyperlinks) using plain text authentication.

>With this example you can easily change the resource to embed a different dashboard from the JasperReport Server.

>For example:

``` javascript
        resource: "/public/Samples/Dashboards/4._New_Dashboard"
``` 

### Authentication

Try it:

<b>[Dashboard login/logout]</b>

Simple authentication with demonstration of destroying session with dashboards.

[JRS - Authentication Cookbook >][Cookbook]

>*Note: Proper authentication needs to be set up with the JasperReport Server and SSO before using token based authentication. View the [Authentication Cookbook] for details on configuring authentication correctly.*

### Custom Input Controls

Try it:

<b>[Dashboard parameter passing]</b>

Various inputs for passing paramaters into a dashboard.

Try it:

<b>[Undo/redo parameter events]</b>

Control the dashboard navigation with undo/redo events.

### Hyperlinks

Try it:

<b>[Dashboard hyperlink]</b>

Passing hyperlinks from one dashboard to open and control a secondary report.


[Dashboard render with input control]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/dashboard-embed/dash-embed/

[Dashboard Login/Logout]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/dashboard-auth/dash-auth/

[Dashboard parameter passing]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/dashboard-input/dash-param/
[Undo/redo parameter events]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/dashboard-input/undo-redo/

[Dashboard hyperlink]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/dashboard-hyperlink/dash-link/

[Authentication Cookbook]: https://community.jaspersoft.com/documentation/jasperreports-server-authentication-cookbook/introduction
[Cookbook]: https://community.jaspersoft.com/documentation/jasperreports-server-authentication-cookbook/introduction


Input Control Samples
=================

### Get Input Control Data

Try it:

<b>[Custom drop down]</b>, <b>[show inside table]</b>

These examples show accessing data directly from a JRS Input Control.

>The following samples embed JRS Input Controls and/or their data. These first two are the exception in that they only pass data into the application.

### Bind to Report

Try it:

<b>[Embed report and input control]</b>

Simple embedding of a report and it's associated input control.


### View Control Types

Try it:

<b>[Render input controls (all types)]</b>, <b>[default values]</b>, <b>[with cascade][view with cascade]</b>, <b>[cascade with multi and single selects]</b>

View all JRS input controls, with default values and cascades.


### Reset

Try it:

<b>[Reset input controls]</b>

Change back to originally selected input control values.


### Events

Try it:

<b>[Listen for changes]</b>, <b>[with cascade][events with cascade]</b>

Provide events to listen to input control changes, updating the application as needed.


Try it:

<b>[Bind cascade with report]</b>

Listen to changes with cascade input controls.


Try it:

<b>[Validation]</b>

Validation result in change event.


### CSS Overrides
>This is a sample set of JRS class names for CSS overrides. After embedding, additional class names can be discovered by inspecting the elements on a page.
Try it:

<b>[Specific CSS overrides]</b>, <b>[all types]</b>

Example CSS overrides with JRS input controls.

[Custom drop down]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/inputControl-data/custom-dropdown/
[show inside table]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/inputControl-data/inside-table/

[Embed report and input control]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/inputControl-report/bind-with-report/

[Render input controls (all types)]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/inputControl-view/render-all-types/
[default values]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/inputControl-view/default-values/
[view with cascade]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/inputControl-view/cascade/
[cascade with multi and single selects]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/inputControl-view/cascade-multi-single/

[Reset input controls]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/inputControl-reset/reset-controls/

[Listen for changes]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/inputControl-events/control-changes/
[events with cascade]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/inputControl-events/cascade/
[Bind cascade with report]: https://jsfiddle.net/gh/get/jQuery/3.4.1/CONTENT-URL/JS-visualize/tree/master/inputControl-events/cascade-report/
[Validation]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/inputControl-events/validation/

[Specific CSS overrides]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/inputControl-css/specific-overrides/
[all types]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/inputControl-css/all-types/


Repository Samples
=================

### Get Repository List

Try it:

<b>[Repository list by resource type]</b>

This example shows List as per the resource type.

### Sorting

Try it:

<b>[Sorting list]</b>

Sorting resource list by column name.


### Limit and Offset

Try it:

<b>[List by limit and offset]</b>

View repository list as per limit and offset.


[Repository list by resource type]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/repository-type/repository-list-by-type
[Sorting list]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/repository-sort/sorting-list
[List by limit and offset]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/repository-filter/limit-offset



### Repository Search

Try it:

<b>[Repository Search by Access Type]</b>

Filters the result as per the selected Access type.

[Repository search by access type]: https://jsfiddle.net/gh/get/library/pure/CONTENT-URL/JS-visualize/tree/master/repository-search/search-by-access-type