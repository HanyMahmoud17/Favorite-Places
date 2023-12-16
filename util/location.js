// you had to change this api for your one
// const GOOGLE_API_KEY = 'AIzaSyCTCDNDtYPCpAD0FaKgHgdzCjMN1QUHnt4';
const GOOGLE_API_KEY = 'AIzaSyBOyPcGk7AnNzpj0EdfCgRBX2TItmvLHtU';

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

// to get address fro lat and lng coordinates
export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch address!');
  }

  const data = await response.json();
  // this from documentations
  const address = data.results[0].formatted_address;
  return address;
}