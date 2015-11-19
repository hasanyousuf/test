var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1705, height: 962};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Diasend E2E headless tests', function(test) {
   casper.start('https://se-devtest.diasend.com/diasend/');
   casper.waitForSelector("a:nth-child(2) img",
       function success() {
           test.assertExists("a:nth-child(2) img");
           this.click("a:nth-child(2) img");
       },
       function fail() {
           test.assertExists("a:nth-child(2) img");
   });
   casper.waitForSelector("form input[name='user']",
       function success() {
           test.assertExists("form input[name='user']");
           this.click("form input[name='user']");
       },
       function fail() {
           test.assertExists("form input[name='user']");
   });
   casper.waitForSelector("input[name='user']",
       function success() {
           this.sendKeys("input[name='user']", "se-staff-hn");
       },
       function fail() {
           test.assertExists("input[name='user']");
   });
   casper.waitForSelector("form input[name='passwd']",
       function success() {
           test.assertExists("form input[name='passwd']");
           this.click("form input[name='passwd']");
       },
       function fail() {
           test.assertExists("form input[name='passwd']");
   });
   casper.waitForSelector("input[name='passwd']",
       function success() {
           this.sendKeys("input[name='passwd']", "diatest13");
       },
       function fail() {
           test.assertExists("input[name='passwd']");
   });

   casper.waitForSelector("form input[type=submit][value='Log in']",
       function success() {
           test.assertExists("form input[type=submit][value='Log in']");
           this.click("form input[type=submit][value='Log in']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Log in']");
   });




   /* submit form */
   casper.waitForSelector(x("//a[normalize-space(text())='Patients']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Patients']"));
           this.click(x("//a[normalize-space(text())='Patients']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Patients']"));
   });
casper.then(function(){
this.capture("screen.png");

});
   casper.waitForSelector("select",
       function success() {
           test.assertExists("select");
           this.click("select");
       },
       function fail() {
           test.assertExists("select");
   });

   casper.run(function() {test.done();});
});
