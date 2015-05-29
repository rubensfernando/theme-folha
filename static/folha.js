(function() {

  // Folha Theme
  // -------------

  dw.theme.register('folha', {

    colors: {
      // primary colors
      palette: ["#F7941E", "#CC6B45", "#9E0621", "#C5448D", "#006F9A", "#551F7A", "#034EA2", "#66952E", "#B7C726", "#926F00", "#E8B909", "#E09D67", "#DDC7AA", "#00B6BE", "#008577"],
      // secondary colors, used in custom color dialog
      // this should contain colors that might be useful
      //secondary: ["#000000", '#777777', '#cccccc', '#ffd500', '#6FAA12'],
      context: '#aaa',
      axis: '#000',
      positive: '#f7931d',
      negative: '#9d0520',
      background: '#ffffff'
    },

    lineChart: {
      fillOpacity: 0.2,
      min: 0
    },

    vpadding: 0,

    frame: false,

    verticalGrid: false,

    columnChart: {
      darkenStroke: 5
    },
    padding: {
      left: 0,
      right: 0,
      bottom: 10,
      top: 10
    }

  });

}).call(this);
