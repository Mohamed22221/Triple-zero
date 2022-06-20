import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const LocationSearchInput = ({ values, setValues }) => {

  const [address, setSddress] = useState('')

  const handleChange = addressVal => {
    setSddress(addressVal);
  };

  // console.log("results", results[0].formatted_address);

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        setSddress(results[0].formatted_address);
        // setValues({ ...values, address: address })
        console.log('values', values);
        return getLatLng(results[0])
      })
      .then(latLng => {
        console.log('Success', latLng)

        setValues({ ...values, lon: latLng.lng, lat: latLng.lat, address })
      })
      .catch(error => console.error('Error', error));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          {/* <div className='col-lg-6'>
              <div className="mb-3">
                <label htmlFor="address" className="form-label"> العنوان<span>*</span> </label>
                <input type="text" className="form-control" id="address" placeholder="اكتب  العنوان" value={values.address} required onChange={(e) => setValues({ ...values, address: e.target.value })} />
              </div>
            </div> */}
          <label htmlFor="address" className="form-label"> العنوان<span>*</span> </label>
          <input value={values.address}
            {...getInputProps({
              placeholder: 'اكتب  العنوان ...',
              className: 'location-search-input form-control',
              id: 'address',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div key={suggestion.description}
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}



export default LocationSearchInput

