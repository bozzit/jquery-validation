$.validator.addMethod( "maxChecked", function( value, element, params ) {
                var elementName = jQuery( element ).attr( "name" );
                var len = jQuery( "[name='" + elementName + "']:checked" ).length;
                return this.optional( element ) || len <= params && len > 0;
        }, $.validator.format( "Please only check {0} values or less." ) );

$.validator.addMethod( "maxSelected", function( value, element, params ) {
                var len = value.length;
                return this.optional( element ) || len <= params;
        }, $.validator.format( "Please only select {0} values or less." ) );
