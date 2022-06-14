(function($) {
  var $button,
    $icon,
    $lat,
    $lng,
    $map,
    $mapDetails,
    $pac,
    $timezone,
    $zoom,
    map,
    mapIsVisible = false,
    marker,
    settings = {
      markerOptions: {
        draggable: true
      },
      mapOptions: {
        streetViewControl: false,
        scrollwheel: false,
        scaleControl: false,
        panControl: false,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL
        },
        zoom: 11,
        styles: [{
          featureType: "poi",
          elementType: "labels",
          stylers: [{
            visibility: "off"
          }]
        }]
      }
    },

    initGeoComplete = function() {
      $pac.geocomplete({
        markerOptions: settings.markerOptions,
        map: $map,
        mapOptions: settings.mapOptions,
        details: $mapDetails,
        detailsAttribute: "data-geo",
        types: ['geocode', 'establishment']
      });

      $pac.attr('default-placeholder', $pac.attr('placeholder'));

      map = $pac.geocomplete('map');
      marker = $pac.geocomplete('marker');
    },

    initEvents = function() {
      $pac.on('input', function(event) {
        updatePacButtonState(false);
      });
      $button.on('click', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if ('' !== $pac.val()) {
          $pac.val('');
          updatePacButtonState(false);
        } else {
          updatePacButtonState(true);
          findCurrentAddress();
        }
      });

      google.maps.event.addDomListener(window, 'resize', function() {
        if (marker.getVisible()) {
          refreshMap();
        }
      });

      google.maps.event.addListener(map, 'idle', function() {
        // Only update zoom if map is visible
        if (!mapIsVisible) {
          return;
        }
        if (parseInt(map.getZoom(), 10) !== parseInt($zoom.val(), 10)) {
          $zoom.val(map.getZoom());
        }
      });

      $pac.bind('geocode:dragged', function(event, result) {
        $lat.val(result.lat());
        $lng.val(result.lng());
        map.setCenter(result);
      });

      $pac.bind("geocode:result", function(event, result) {
        showMap();
        $zoom.val(map.getZoom());
        updateStreetAddressTwo(result);
        updateTimezone();
      });

      $('input[data-geo=lat],input[data-geo=lng],input[data-geo=zoom]').on('change', function() {
        updateMap();
      });
    },

    updateTimezone = function() {
      $.ajax({
        url: "https://maps.googleapis.com/maps/api/timezone/json?location=" + $lat.val() + "," + $lng.val() + "&timestamp=" + (Math.round((new Date().getTime()) / 1000)).toString() + "&sensor=false"
      }).done(function(response) {
        if (response.timeZoneId != null) {
          $timezone.val(response.timeZoneId);
        }
      });
    },

    updatePacButtonState = function(loading) {
      if (loading) {
        $button.attr('data-original-title', $button.attr('data-title-loading'));
        $icon
          .removeClass('fa-location-arrow')
          .addClass('fa-spinner fa-spin')
          .prop('disabled', true);
        $pac.attr('placeholder', 'Loading...');
        $pac.prop('disabled', true);
        $pac.val('');
        return;
      }

      $pac.attr('placeholder', $pac.attr('default-placeholder'));
      $pac.prop('disabled', false);
      $icon.prop('disabled', false);

      if ('' !== $pac.val()) {
        $button.attr('data-original-title', $button.attr('data-title-clear'));
        $icon
          .removeClass('fa-location-arrow fa-spinner fa-spin')
          .addClass('fa-times');
      } else {
        $button.attr('data-original-title', $button.attr('data-title-geolocate'));
        $icon
          .removeClass('fa-times fa-spinner fa-spin')
          .addClass('fa-location-arrow');
      }
    },

    showMap = function() {
      if (mapIsVisible) {
        return;
      }

      $map
        .fadeTo(0, 0)
        .css({
          display: "block"
        });
      refreshMap();
      $map.fadeTo('slow', 1);
      mapIsVisible = true;
    },

    hideMap = function() {
      if (!mapIsVisible) {
        return;
      }

      $map.hide().fadeTo(0, 0).css({
        display: "none"
      });
      mapIsVisible = false;
    },

    updateMap = function() {
      if (
        '' !== $lat.val() &&
        '' !== $lng.val() &&
        '' !== $zoom.val()) {
        var center = new google.maps.LatLng(parseFloat($lat.val()), parseFloat($lng.val()));
        map.setCenter(center);
        marker.setPosition(center);
        map.setZoom(parseInt($zoom.val(), 10));
        showMap();
      } else {
        hideMap();
      }
    },

    refreshMap = function() {
      google.maps.event.trigger(map, 'resize');
      map.setCenter(marker.getPosition());
    },

    updateStreetAddressTwo = function(result) {
      var data = [],
        resultStr = '';

      $.each(result.address_components, function(index, object) {
        var name = object.types[0];

        $.each(object.types, function(index, name) {
          data[name] = object.long_name;
          data[name + "_short"] = object.short_name;
        });
      });

      if (data['premise']) {
        resultStr += ' BLDG ' + data['premise'];
      }
      if (data['floor']) {
        resultStr += ' FL ' + data['floor'];
      }
      if (data['subpremise']) {
        resultStr += ' STE ' + data['subpremise'];
      }

      $('input[data-geo=street_address_2]').val(resultStr.trim());
    },

    findCurrentAddress = function() {
      if (!navigator.geolocation) {
        return;
      }

      updatePacButtonState(true);

      navigator.geolocation.getCurrentPosition(function(pos) {

        var geocoder = new google.maps.Geocoder(),
          latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        geocoder.geocode({
          'latLng': latlng
        }, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              $pac.val(results[0].formatted_address);

              // Remove the viewport data as this doesn't match somehow
              delete results[0]['geometry']['viewport'];
              $pac.geocomplete('update', results[0]);
            }
          }
          updatePacButtonState(false);
        });
      }, function(err) {
        updatePacButtonState(false);
        var $alert = $('<div class="alert alert-warning" role="alert">').text(err.message);
        $mapDetails.prepend($alert);
        setTimeout(function() {
          $alert.fadeOut('fast', function() {
            $alert.remove();
          });
        }, 2000)
      }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    },

    init = function() {
      $button = $("#geolocateButton");
      $icon = $button.find('i');
      $lat = $('#latText');
      $lng = $('#lngText');
      $map = $('#map');
      $mapDetails = $('#mapDetails');
      $pac = $('#fulladdressText');
      $timezone = $('#timezoneText');
      $zoom = $('#zoomText');

      initGeoComplete();
      updateMap();
      initEvents();
    };

  $(function() {
    init();
  });

})(jQuery); // Self executing annonimous function

(function($) {

  console.log('kljdfkdlfdfkldfkldfjkldfjkl');

  // $(function() {
  //   $('[data-toggle="tooltip"]').tooltip()
  // })

})(jQuery); // Self executing annonimous function