var DemoGenerator = {
  generateWithConfig : function(config){
      var data = {}
      diseases = []
      for (key in config){
        var disease = this.generateDisease(config[key])
        diseases.push(disease)
      }
      return diseases
  },

  generateType : function(threshold){
    if (typeof threshold == "undefined"){
      threshold = 0.5
    }
    var rand = Math.random()
    if (rand > threshold){
      return "REPORTED"
    }else{
      return "CONFIRMED"
    }
  },

  generateDisease : function(_disease_config){
    this_disease = {
      type: "FeatureCollection",
      features: []
    }
    var numPoints= _disease_config.numPoints;
    for (var i=0; i < numPoints; i++){
      var point = this.generateRandomPoint(_disease_config.center, _disease_config.radius)
      var date  = this.randomDate(_disease_config.minDate, _disease_config.maxDate)
      var type = this.generateType()
      console.log(type)
      var gj = {
        type: "Feature",
        geometry: point,
        properties: {
          color: _disease_config.color,
          disease: _disease_config.disease,
          date: date,
          label: _disease_config.label,
          type: type,
          key: _disease_config.key
        }
      }
      this_disease.features.push(gj)
    }
    return this_disease
  },

  randomDate : function(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
},


   generateRandomPoint : function(center, radius){
    var y0 = center.latitude;
    var x0 = center.longitude;
    var rd = radius / 111300;

    var u = Math.random();
    var v = Math.random();

    var w = rd * Math.sqrt(u);
    var t = 2 * Math.PI * v;
    var x = w * Math.cos(t);
    var y = w * Math.sin(t);

    return {
      type: "Point",
      coordinates: [
        x+x0,
        y+y0
      ]
    };
  }

}
