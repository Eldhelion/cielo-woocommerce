(function ( $ ) {
	'use strict';

	$( function () {
		/**
		 * Switch the options based on environment.
		 *
		 * @param {string} type
		 */
		function switchIntegration( type ) {
			var fields = $( '#mainform .form-table:eq(0) tr:eq(7)' +
				',#mainform .form-table:eq(0) tr:eq(8)' +
				',#mainform .form-table:eq(0) tr:eq(9)' +
				',#mainform .form-table:eq(0) tr:eq(10)' +
				',#mainform .form-table:eq(0) tr:eq(11)' +
				',#mainform .form-table:eq(0) tr:eq(12)' +
				',#mainform .form-table:eq(0) tr:eq(13)' +
				',#mainform .form-table:eq(0) tr:eq(14)' +
				',#mainform .form-table:eq(0) tr:eq(15)' +
				',#mainform .form-table:eq(1)' +
				',#mainform .form-table:eq(2)' +
				',h4'
			);

			if ( 'buypage' === type ) {
				fields.show();
			} else {
				fields.hide();
			}
		}

		switchIntegration( $( '#woocommerce_cielo_integration' ).val() );

		$( '#woocommerce_cielo_integration' ).on( 'change', function () {
			switchIntegration( $( this ).val() );
		});


		/**
		 * Switch the options based on environment.
		 *
		 * @param {string} type
		 */
		function switchEnvironment( type ) {
			var fields = $( '#mainform .form-table:eq(0) tr:eq(5), #mainform .form-table:eq(0) tr:eq(6)' );

			if ( 'test' === type ) {
				fields.hide();
			} else {
				fields.show();
			}
		}

		switchEnvironment( $( '#woocommerce_cielo_environment' ).val() );

		$( '#woocommerce_cielo_environment' ).on( 'change', function () {
			switchEnvironment( $( this ).val() );
		});

		/**
		 * Switch the options based on the selected methods.
		 *
		 * @param {array} methods
		 */
		function switchMethods( methods ) {
			var fields = $( '#mainform .form-table:eq(0) tr:eq(8), #mainform .form-table:eq(0) tr:eq(9)' );

			if ( -1 < $.inArray( 'visa', methods ) || -1 < $.inArray( 'mastercard', methods ) ) {
				fields.show();
			} else {
				fields.hide();
			}
		}

		switchMethods( $( '#woocommerce_cielo_methods' ).val() );

		$( '#woocommerce_cielo_methods' ).on( 'change', function () {
			switchMethods( $( this ).val() );
		});

		/**
		 * Switch the options based on the selected debit methods.
		 *
		 * @param {array} debit_methods
		 */
		function switchDebitMethods( debit_methods ) {
			var fields  = $( '#mainform .form-table:eq(0) tr:eq(12)' ),
				methods = $( '#woocommerce_cielo_methods' ).val();

			if ( 'none' !== debit_methods && ( -1 < $.inArray( 'visa', methods ) || -1 < $.inArray( 'mastercard', methods ) ) ) {
				fields.show();
			} else {
				fields.hide();
			}
		}

		switchDebitMethods( $( '#woocommerce_cielo_debit_methods' ).val() );

		$( '#woocommerce_cielo_debit_methods' ).on( 'change', function () {
			switchDebitMethods( $( this ).val() );
		});
	});

}( jQuery ));
