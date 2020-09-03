
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
       
      //  var x = `<iframe src="http://200.40.137.109/call" width="100%" height="100%" style="border:1px solid black;"></iframe>`;

    var iframe = document.createElement('iframe');
    iframe.style.height = "100%";
    iframe.style.width = "100%";
    iframe.src = "http://200.40.137.109/call";
    document.body.appendChild(iframe);

    }

};

app.initialize();