export default {
  async fetch(request, env, ctx) {
    const cf = request.cf;
    return Response.json({
      "ip": request.headers.get('CF-Connecting-IP'),
      "asn": `AS${cf["asn"]} (${cf["asOrganization"]})`,
      "country": cf['country'],
      "latitude": cf['latitude'],
      "longitude": cf['longitude'],
      "timezone": cf['timezone'],
      "city": cf['city'],
      "region": cf['region'],
      "postcode": cf['postalCode']
    });
  },
};
