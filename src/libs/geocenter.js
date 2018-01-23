module.exports = (points) => {
  points = points || []
  let {latitude, longitude} = points.reduce((agg, item) => {
    agg.latitude += item.latitude
    agg.longitude += item.longitude
    return agg
  }, {latitude: 0, longitude: 0 })
  if (latitude && latitude !== 0 && longitude && longitude !== 0) {
    // TODO: it may be ugly for react app to do that.
    return [latitude / points.length, longitude / points.length]
  }
  // error, go to Paris !
  return [48.866667, 2.333333]
}
