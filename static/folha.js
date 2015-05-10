(function(){

    // Folha Theme
    // -------------

    dw.theme.register('folha', {

        colors: {
            // primary colors
            palette: ["#f7931d", "#cb6a44","#9d0520", "#2ca02c", "#d62728", "#9467bd"],
            // secondary colors, used in custom color dialog
            // this should contain colors that might be useful
            secondary: ["#000000", '#777777', '#cccccc', '#ffd500', '#6FAA12'],
            context: '#aaa',
            axis: '#000000',
            positive: '#1f77b4',
            negative: '#d62728',
            background: '#ffffff'
        },

        lineChart: {
            fillOpacity: 0.2
        },

        vpadding: 10,

        frame: false,

        verticalGrid: false,

        columnChart: {
            darkenStroke: 5
        }

    });

}).call(this);
